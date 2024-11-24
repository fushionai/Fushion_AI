import { mailOptions, transporter } from "@/config/nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const Contact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ error: "No data provided" });
    } else if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.message ||
      !data.company
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Send email
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "New Contact Form Submission",
        text: "this is a test string",
        html: `<div> 
        <h1>New Contact Form Submission</h1>
        <p>First name: ${data.firstName}</p>
        <p>Last name: ${data.lastName}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone || "N/A"}</p>
        <p>Company: ${data.company}</p>
        <p>Message: ${data.message}</p>  
        </div>`,
      });
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to send email" });
    }
  }
};

export default Contact;
