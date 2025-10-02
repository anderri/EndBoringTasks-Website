"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok"); form.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-avant font-bold text-4xl">Contact</h1>
      <p className="mt-2 text-neutral-700">Tell us what you want to automate.</p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4">
        <input name="name" placeholder="Name" className="rounded-lg border px-3 py-2" required />
        <input name="email" type="email" placeholder="Email" className="rounded-lg border px-3 py-2" required />
        <input name="company" placeholder="Company" className="rounded-lg border px-3 py-2" />
        <input name="role" placeholder="Role" className="rounded-lg border px-3 py-2" />
        <input name="phone" placeholder="Phone (optional)" className="rounded-lg border px-3 py-2" />
        <select name="reason" className="rounded-lg border px-3 py-2">
          <option>General inquiry</option>
          <option>Sales & CRM Automations</option>
          <option>Back-Office Integrations</option>
          <option>User Provisioning & SSO</option>
          <option>Data Pipelines & Reports</option>
        </select>
        <textarea name="message" placeholder="How can we help?" className="rounded-lg border px-3 py-2 h-32" required />
        <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />
        <button className="rounded-xl bg-brand-blue px-5 py-3 text-white font-medium hover:brightness-105">Send</button>
        {status === "ok" && <p className="text-green-600">Thanks! We’ll get back to you soon.</p>}
        {status === "err" && <p className="text-red-600">Something went wrong. Please email us directly.</p>}
      </form>
    </main>
  );
}
