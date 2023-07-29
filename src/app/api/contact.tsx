async function handler(req: any, res: any) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    secure: true,
  });
  const { name, email, subject, message } = req.body;

  const mailData = {
    from: email,
    to: "gumilangtamasakti@gmail.com",
    subject: "Message from me",
    html: `
    <div><strong>Name:</strong> ${name}</div>
    <br/>
    <div><strong>From:</strong> ${email}</div>
    <br/>
    <div><strong>Subject:</strong> ${subject}</div>
    <br/>
    <div><strong>Message:</strong> ${message}</div>
    <br/>
    `,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err: string, info: string) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  res.status(200).json({ status: "ok" });
}

export default handler;
