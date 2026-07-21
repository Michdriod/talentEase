"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { Button } from "./Button";

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || undefined;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!site.web3formsKey) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Inquiry from ${formData.get("name")}`
      )}&body=${encodeURIComponent(String(formData.get("message") || ""))}`;
      return;
    }

    formData.append("access_key", site.web3formsKey);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Inquiry from ${formData.get("name")}`
      )}&body=${encodeURIComponent(String(formData.get("message") || ""))}`;
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green/20 bg-green/5 p-8 text-center">
        <p className="text-lg font-semibold text-green">
          Thank you! We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden>
        <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy">
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm text-navy outline-none focus:border-green focus:ring-1 focus:ring-green"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-navy">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm text-navy outline-none focus:border-green focus:ring-1 focus:ring-green"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-navy">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm text-navy outline-none focus:border-green focus:ring-1 focus:ring-green"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-navy">
            Company
          </label>
          <input
            id="company"
            name="company"
            className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm text-navy outline-none focus:border-green focus:ring-1 focus:ring-green"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-navy">
          Service of interest
        </label>
        <select
          id="service"
          name="service"
          defaultValue={preselectedService || ""}
          className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm text-navy outline-none focus:border-green focus:ring-1 focus:ring-green"
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm text-navy outline-none focus:border-green focus:ring-1 focus:ring-green"
        />
      </div>

      <Button type="submit">Send Message</Button>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try emailing us directly at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
        </p>
      )}
    </form>
  );
}
