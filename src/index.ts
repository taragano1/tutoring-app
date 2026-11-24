import 'dotenv/config';
import express from 'express';
import { prisma } from './prisma';
import { authRouter } from './routes/auth';

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/subjects', async (_req, res) => {
  const subjects = await prisma.subject.findMany();
  res.json(subjects);
});

app.post('/subjects', async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: 'name is required' });
    return;
  }
  const subject = await prisma.subject.create({ data: { name } });
  res.status(201).json(subject);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});