import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import pool from "@/config/db";
import bcrypt from "bcrypt";

const KEY = process.env.JWT_SECRET as string;

const Login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ error: "No data provided" });
    }

    // Check email
    const users = await pool.query("SELECT * FROM users WHERE email = $1", [
      data?.email,
    ]);
    if (users.rows.length === 0)
      return res.status(401).json({ error: "Email is incorrect" });

    // Check password
    const validPassword = await bcrypt.compare(
      data?.password,
      users.rows[0].password
    );
    if (!validPassword)
      return res.status(401).json({ error: "Invalid password" });

    // Generate token
    if (!KEY) {
      return res.status(500).json({ error: "JWT_SECRET is not defined" });
    }

    const token = jwt.sign({ email: users.rows[0].email }, KEY, {
      expiresIn: "1h",
    });
    return res.status(200).json({ token });
  }
  return res.status(405).json({ error: "Method Not Allowed" });
};

export default Login;
