import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import validator from "validator";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  const data = await request.json();

  try {
    const isMail = validator.isEmail(data.data.email);
    const isPhone = validator.isMobilePhone(data.data.phone);

    if (isMail && isPhone) {
      const msg = validator.escape(data.data.message);
      const name = validator.escape(data.data.name);

      const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "Portfolio Contact",
        html: `Name : ${name}<br/>Email: ${data.data.email}<br/>Phone: ${data.data.phone}<br/>message: ${msg}`,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json({ message: "done!" });
    }
  } catch (err) {
    console.log(err);
  }
}
