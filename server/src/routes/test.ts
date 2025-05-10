import { Router } from "express";
import { pool } from "../database";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB 연결 오류" });
  }
});

export { router };