import pool from "@/config/db";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

const Signin = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await pool.query(
      "INSERT INTO users ( email, password) VALUES ($1, $2) RETURNING *",
      [req.body.email, hashedPassword]
    );
    res.json({ users: newUser.rows[0] });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default Signin;
