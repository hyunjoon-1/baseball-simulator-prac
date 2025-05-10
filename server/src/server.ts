import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`서버실행중... http://localhost:${PORT}`);
});