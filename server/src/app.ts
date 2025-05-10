import express from 'express';
import cors from 'cors';
import { router as testRouter } from './routes/test';


const app = express();

app.use(cors());
app.use(express.json());
app.use("/test", testRouter);

export default app;