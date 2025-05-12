import express from 'express';
import cors from 'cors';
import session from 'express-session';
import { router as loginRouter} from './routes/login';
import { router as teamsRouter } from './routes/teams';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, // 쿠키/세션 전송 허용하는 옵션
}));
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || 'default_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
  }
   
}))

app.use("/login", loginRouter);
app.use("/teams", teamsRouter);

export default app;