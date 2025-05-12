import { Router, Request, Response } from "express";
import { pool } from "../database";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT name FROM teams");
    res.json(result.rows);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB 구단 불러오기 오류" });
  }
})

export { router };