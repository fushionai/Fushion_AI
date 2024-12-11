import { transporter } from "@/config/nodemailer";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
const KEY = process.env.JWT_CHANGE_PASSWORD_SECRET as string;
const senderEmail = process.env.EMAIL;
const url = process.env.CHANGE_PASSWORD_URL;

const ForgetPassword = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req?.body;
    const token = jwt.sign({ email: data }, KEY, {
      expiresIn: "1h",
    });

    const sendEmailPromise = transporter.sendMail({
      from: senderEmail,
      to: data,
      subject: "Change password request!",
      text: "this is a test string",
      html: `<div>
              <h1>change password request</h1>
               <p>please use the link below to change your password</p>
              <p> <a href="${url}/${token}">Click here</a></p>
            </div>`,
    });

    await sendEmailPromise.catch((err) => {
      console.error("Failed to send email:", err);
      return res.status(500).json({ error: "Failed to process request" });
    });

    return res
      .status(200)
      .json({ message: "Request sent successfully please check your email" });
  }
  return res.status(400).json({ message: "something went wrong" });
};

export default ForgetPassword;
