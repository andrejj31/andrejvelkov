import React from "react";
import { EMAIL } from "./CopyEmail";

export default function About() {
  return (
    <div className="hero">
      <div className="hero__text reveal">
        <h1>
          Hi, I’m Andrej.
          <br />I build web apps and the APIs behind them.
        </h1>
        <p className="hero__lead">
          Full-stack developer working with React and Next.js on the frontend,
          and Spring Boot and Node.js on the backend.
        </p>
        <div className="hero__actions">
          <a className="btn btn--dark" href="#work">
            See my projects
          </a>
          <a className="btn btn--light" href={`mailto:${EMAIL}`}>
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero__person reveal reveal--late">
        <span className="hero__photo-wrap">
          <img
            className="hero__photo"
            src={`${process.env.PUBLIC_URL}/andrej.jpg`}
            alt="Andrej Velkov"
            width="1066"
            height="1600"
          />
        </span>
      </div>
    </div>
  );
}
