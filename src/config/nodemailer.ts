import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  host: "smtp.strato.de",
  service: "smtp-ox.front.d0m.de",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
