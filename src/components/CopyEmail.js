import React, { useState } from "react";

export const EMAIL = "velkovandrej819@gmail.com";

export default function CopyEmail({ className, label = "Copy email", icon = null, ariaLabel }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <>
      <button type="button" className={className} onClick={copy} aria-label={ariaLabel}>
        {icon}
        {copied ? "Copied" : label}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </>
  );
}
