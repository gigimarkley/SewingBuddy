import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();
const PORT = 8080;

// Enable CORS so React can call backend
app.use(cors());
app.use(express.json());

// Example API route
app.get('/api/message', (req: Request, res: Response) => {
  res.json({ message: 'Hello from TS backend!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));