const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.RATE_LIMIT, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

const app = express();
const port = 3000;

app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded form data
app.use(limiter);

app.get("/", (req, res) => {
  res.send(
    "Jaden's wonderful API. If you're here, you're definitely a little weird but I appreciate the spirit!",
  );
});

app.post("/forms/contact", (req, res) => {
  console.log(`New message received from ${req.ip} at ${new Date()}`);
  console.log(req.body);
  const token = req.body["cf-turnstile-response"];

  if (!token) {
    console.log("No token provided");
    return res
      .status(400)
      .send(
        "Please verify you're not a robot. <button onclick='window.history.back()'>Go back</button>",
      );
  }

  const params = new URLSearchParams();
  params.append("secret", process.env.TURNSTILE_SECRET_KEY);
  params.append("response", token);

  fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log("Verified");
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_SERVER,
          port: process.env.SMTP_PORT,
          secure: false, // upgrade later with STARTTLS
          auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
          },
        });
        const mailOptions = {
          from: process.env.SMTP_EMAIL,
          to: process.env.RECEIVER_EMAIL,
          subject: `[Form Submission] from ${req.body.name} - ${req.body.email}`,
          text: req.body.message,
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            res.redirect(req.headers.referer);
          } else {
            console.log("Email sent: " + info.response);
            res.redirect(req.headers.referer + "?message-sent=true");
          }
        });
      } else {
        console.error("Verification errors:", data["error-codes"]);
        return res.status(400).send("Verification failed. Please try again.");
      }
    });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
