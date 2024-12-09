import pool from "@/config/db";
import { NextApiRequest, NextApiResponse } from "next";

const contactMessages = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const messages = await pool.query("SELECT * FROM messages");
    res.json({ messages: messages.rows });
  }

  return res.status(405).json({ error: "Method Not Allowed" });
};

export default contactMessages;
