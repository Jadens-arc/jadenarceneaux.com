"use server";

import Mailgun from "mailgun.js";
import FormDataNode from "form-data";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const token = String(formData.get("cf-turnstile-response") ?? "");
  if (!token) {
    return { status: "error", message: "Please complete the CAPTCHA." };
  }

  const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY!,
      response: token,
    }),
  });
  const verifyData = await verifyRes.json();
  if (!verifyData.success) {
    return { status: "error", message: "CAPTCHA verification failed. Please try again." };
  }

  if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN || !process.env.RECEIVER_EMAIL) {
    throw new Error("Missing Mailgun environment variables");
  }

  const mg = new Mailgun(FormDataNode).client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });

  await mg.messages.create(process.env.MAILGUN_DOMAIN, {
    from: `${name} <mailgun@${process.env.MAILGUN_DOMAIN}>`,
    to: process.env.RECEIVER_EMAIL,
    "h:Reply-To": `${name} <${email}>`,
    subject: `Contact form: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return { status: "success" };
}
