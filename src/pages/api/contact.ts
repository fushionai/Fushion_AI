import pool from "@/config/db";
import { mailOptions, transporter } from "@/config/nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const Contact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;

    // Check if data is provided
    if (!data) {
      return res.status(400).json({ error: "No data provided" });
    }

    try {
      // Send email asynchronously
      const sendEmailPromise = transporter.sendMail({
        ...mailOptions,
        subject: "New Contact Form Submission",
        text: "this is a test string",
        html: `<div> 
          <h1>New Contact Form Submission</h1>
          <p>First name: ${data?.firstName}</p>
          <p>Last name: ${data?.lastName}</p>
          <p>Email: ${data?.email}</p>
          <p>Phone: ${data?.phone || "N/A"}</p>
          <p>Company: ${data?.company}</p>
          <p>Message: ${data?.message}</p>  
        </div>`,
      });

      // Store message in database (avoid connect() every time)
      const query = `
        INSERT INTO messages 
        (first_name, last_name, email, phone, company, message, created_at, updated_at) 
        VALUES ($1, $2, $3, $4, $5, $6, CURRENT_DATE, CURRENT_DATE)
      `;
      const values = [
        data.firstName,
        data?.lastName,
        data?.email,
        data?.phone,
        data?.company,
        data?.message,
      ];

      // Fire-and-forget pattern for DB insertion
      pool.query(query, values).catch((err) => {
        console.error("Failed to store message in database:", err);
      });

      // Wait for the email to be sent
      await sendEmailPromise.catch((err) => {
        console.error("Failed to send email:", err);
        return res.status(500).json({ error: "Failed to process request" });
      });

      return res
        .status(200)
        .json({ message: "Contact form submitted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to process request" });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
};

export default Contact;
