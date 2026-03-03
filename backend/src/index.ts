import express from 'express';

const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend running 🚀' });
});

app.get("/api/health", (req, res) => {
  res.json({ message: "Backend running 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
