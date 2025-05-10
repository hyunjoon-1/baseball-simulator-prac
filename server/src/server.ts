import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { router as testRouter } from './routes/test';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/test", testRouter);

app.listen(PORT, () => {
  console.log(`서버실행중... http://localhost:${PORT}`);
});