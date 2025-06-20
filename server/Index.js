import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace with your Gmail App Password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kechesarthak412@gmail.com",
    pass: "yper yzth szwz chno", // ✅ Gmail App Password
  },
});

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "kechesarthak412@gmail.com", // Your own receiving email
    subject: `Portfolio Contact: ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending:", err);
      return res.status(500).send("Failed to send message.");
    }
    res.status(200).send("Message sent successfully!");
  });
});

app.listen(5000, () => console.log("✅ SMTP Server running on http://localhost:5000"));
