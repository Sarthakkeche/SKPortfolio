import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();

// Allow both localhost (for development) and Vercel frontend
const allowedOrigins = [
  "http://localhost:5174", // Local React dev server
  "https://sk-portfolio-rho.vercel.app", // Deployed frontend on Vercel
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed for this origin: " + origin));
      }
    },
    methods: ["GET", "POST", "OPTIONS"], // ✅ Allow preflight
    credentials: true,
  })
);

// Parse JSON
app.use(bodyParser.json());

// Gmail SMTP Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kechesarthak412@gmail.com",
    pass: "yper yzth szwz chno", // ✅ App Password
  },
});

// Test route for GET
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// POST route for sending email
app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "kechesarthak412@gmail.com",
    subject: `Portfolio Contact: ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("❌ Error sending:", err);
      return res.status(500).send("Failed to send message.");
    }
    res.status(200).send("✅ Message sent successfully!");
  });
});

// Dynamic PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ SMTP Server running on http://localhost:${PORT}`)
);
