import React from "react";
import { Mail } from "lucide-react";
import CopyEmail, { EMAIL } from "./CopyEmail";

export default function Contact() {
  return (
    <div className="outline contact">
      <div>
        <p className="contact__title">Let’s work together.</p>
        <a className="contact__email" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </div>
      <div className="contact__actions">
        <a className="btn btn--dark" href={`mailto:${EMAIL}`}>
          <Mail size={16} aria-hidden="true" />
          Email me
        </a>
        <CopyEmail className="btn btn--light" label="Copy email" />
      </div>
    </div>
  );
}
