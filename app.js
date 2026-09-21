import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Bidma Contruction running successfully" });
});

export default app;
