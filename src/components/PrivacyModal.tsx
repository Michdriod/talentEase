"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface PrivacyModalProps {
  formUrl: string;
}

export function PrivacyModal({ formUrl }: PrivacyModalProps) {
  const [open, setOpen] = useState(false);

  const handleAccept = () => {
    window.open(formUrl, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
      >
        Apply Now
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-navy/40 transition-colors hover:text-navy"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h3 className="pr-8 text-lg font-bold text-navy">Privacy Notice</h3>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-navy/70">
              <p>
                The personal information you provide will be used solely for the purpose of
                processing your enquiry or application and communicating with you.
              </p>
              <p>
                We process your data in accordance with applicable data protection laws and
                will not share it with unauthorised third parties.
              </p>
              <p>
                By submitting this form, you acknowledge that you have read and understood
                this Privacy Notice.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-navy/10 px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-light"
              >
                Cancel
              </button>
              <button
                onClick={handleAccept}
                className="rounded-lg bg-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
              >
                Accept &amp; Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
