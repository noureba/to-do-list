import "dotenv/config";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.STMP_HOST,
  port: process.env.STMP_PORT,
  secure: false,
  auth: {
    user: process.env.STMP_USER,
    pass: process.env.STMP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default transport;
