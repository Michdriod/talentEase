"use client";

import { useState } from "react";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfoCard } from "@/components/ContactInfoCard";


export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-navy md:text-4xl lg:text-5xl">Contact Us</h1>
          <p className="mt-6 text-sm leading-relaxed text-navy/60 sm:text-base md:text-lg">
            Tell us about your HR needs, and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {submitted ? (
            <div className="mx-auto max-w-lg rounded-2xl border border-green/20 bg-green/5 p-8 text-center md:p-12">
              <p className="text-lg font-semibold text-green md:text-xl">
                Thank you! We&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:gap-12 md:grid-cols-2">
              <Suspense fallback={<div className="text-navy/40">Loading form...</div>}>
                <ContactForm onSuccess={() => setSubmitted(true)} />
              </Suspense>
              <div>
                <ContactInfoCard />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d3.4!3d6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzAnMDAuMCJOIDPCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
              title="Office Location"
              allowFullScreen
              loading="lazy"
              className="h-full w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
