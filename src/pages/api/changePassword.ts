import pool from "@/config/db";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
const KEY = process.env.JWT_CHANGE_PASSWORD_SECRET as string;
import bcrypt from "bcrypt";

const changePassword = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PUT") {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: "Token is required" });
    }

    try {
      // Verify and decode the token
      const decoded = jwt.verify(token as string, KEY) as { email: string };

      // Check if the email exists in your database
      const query = `
      SELECT * 
      FROM users 
      WHERE email = $1;
    `;

      console.log("decoded email", decoded);
      const user = await pool.query(query, [decoded?.email]).catch((err) => {
        console.error("Failed to store message in database:", err);
      });
      if (!user?.rows[0]) {
        return res.status(404).json({ error: "User not found" });
      } else {
        // update the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const query = `
        UPDATE users 
        SET password = $1 
        where email = $2;`;
        const values = [hashedPassword, decoded?.email];
        await pool.query(query, values).catch((err) => {
          console.error("Failed to store message in database:", err);
        });
        return res
          .status(200)
          .json({ message: "Password changed successfully" });
      }
    } catch (err) {
      console.error("Token verification failed:", err);
      return res.status(401).json({ error: "Invalid or expired token" });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
};

export default changePassword;
