import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('서버실행중!');
});

app.listen(PORT, () => {
  console.log(`서버실행중... http://localhost:${PORT}`);
});