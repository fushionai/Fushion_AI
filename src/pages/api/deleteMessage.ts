import pool from "@/config/db";
import { NextApiRequest, NextApiResponse } from "next";

const DeleteMessage = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("req.body", req.body);
  try {
    await pool.query("DELETE FROM messages WHERE id = $1;", [req.body.id]);
    res.status(200).json({ message: "message successfully deleted" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default DeleteMessage;
