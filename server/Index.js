import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://sk-portfolio-rho.vercel.app"
];
app.use(cors({
  origin: "*", // allow any frontend
  methods: ["GET", "POST"],
  credentials: true
}));

// ✅ Handle preflight OPTIONS requests
app.options("*", cors());

// Parse JSON
app.use(bodyParser.json());

// Test GET route
app.get("/", (req, res) => {
  res.send("✅ Backend is live!");
});

// Send email route
app.post("/send", (req, res) => {
  res.send("✅ Backend is live!");
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,      // ✅ Environment variable for your Gmail
        pass: process.env.EMAIL_PASS,    // Gmail App Password
    },
  });

  const mailOptions = {
    from: email,
    to: "kechesarthak412@gmail.com",
    subject: `Portfolio Contact: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("❌ Error sending mail:", err);
      return res.status(500).send("Failed to send message.");
    }
    res.status(200).send("✅ Message sent successfully!");
  });
});

// Dynamic PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is in use, trying a new one...`);
    app.listen(0, () =>
      console.log(`✅ Server started on a free port automatically`)
    );
  }
});