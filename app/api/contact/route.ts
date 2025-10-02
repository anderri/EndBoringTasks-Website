import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false }, { status: 400 });

  // Honeypot: if exists, treat as spam
  if (body.company_website) return NextResponse.json({ ok: true });

  // 1) Forward JSON to WEBHOOK_URL (Make.com/n8n) if provided
  const webhook = process.env.WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    } catch (e) { /* ignore */ }
  }

  // 2) Send email copy (optional)
  const to = process.env.CONTACT_TO_EMAIL;
  const smtp = process.env.SMTP_URL; // e.g. smtp://user:pass@smtp.server:587
  if (to && smtp) {
    const transporter = nodemailer.createTransport(smtp);
    await transporter.sendMail({
      to,
      from: to,
      subject: `New inquiry from ${body.name || "Website"}`,
      text: JSON.stringify(body, null, 2)
    }).catch(() => {});
  }

  return NextResponse.json({ ok: true });
}
