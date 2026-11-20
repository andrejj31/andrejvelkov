import React from "react";
import { ArrowUpRight } from "lucide-react";
import ZoomImage from "./ZoomImage";

export default function PortfolioItem({ name, role, status, summary, image, link, linkLabel }) {
  return (
    <article className="outline project" id={name.toLowerCase().replace(/\s+/g, "-")}>
      <div className="project__head">
        <h3 className="project__name project__name--sm">{name}</h3>
        <span className="project__status">
          <span
            className={`status__dot ${status === "Live" ? "status__dot--live" : "status__dot--neutral"}`}
            aria-hidden="true"
          />
          {status}
        </span>
      </div>
      <div className="project__media">
        <ZoomImage src={image} alt={`Screens from the ${name} website`} caption={name} width="1000" height="750" loading="lazy" />
      </div>
      <p className="project__role">{role}</p>
      <p className="project__summary">{summary}</p>
      {link && (
        <a className="round-link" href={link} target="_blank" rel="noopener noreferrer">
          <span className="round-link__icon" aria-hidden="true">
            <ArrowUpRight size={15} />
          </span>
          {linkLabel}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </article>
  );
}
