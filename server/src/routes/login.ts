import { Router, Request, Response } from "express";
import { pool } from "../database";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { id, password } = req.body;

  try {
    const result = await pool.query(
      //* DB에서 사용자 정보 조회 */
      "SELECT * FROM users WHERE user_id = $1 AND password = $2",
      [id, password]
    );

    // * 사용자 정보가 존재하는 경우 세션에 저장 */
    if (result.rows.length > 0) {
      const user_id = result.rows[0].user_id;
      req.session.user = { user_id };

      res.status(200).json({
        message: "로그인 성공",
        user: { user_id }
      });
    } else {
      res.status(401).json({ message: "로그인 실패" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB 연결 오류" });
  }
});

export { router };