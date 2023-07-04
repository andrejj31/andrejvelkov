import React from "react";
import Button from "../components/Button";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <form action="" className="contact__content">
          <div className="contact__typography">
            <h5>Send me a message</h5>
            <p>I'll strive to provide the quickest possible response🚀</p>
          </div>
          <div className="contact__group">
            <div className="contact__field">
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" placeholder="Name Surname" />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea name="message" rows="10" placeholder="Your message" />
            </div>
          </div>
          <Button message="Send"></Button>
        </form>
      </div>
    </section>
  );
}
