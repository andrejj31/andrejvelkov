import React from "react";

export default function PortfolioItem({
  name,
  solution,
  description,
  image,
  link,
}) {
  return (
    <div className="portfolio__item">
      <a
        href={link || undefined}
        target={link ? "_blank" : undefined}
        rel={link ? "noopener noreferrer" : undefined}
        onClick={!link ? (e) => e.preventDefault() : undefined}
        style={{
          display: "block",
          width: "50rem",
          flexShrink: 0,
          cursor: link ? "pointer" : "default",
        }}
      >
        <img src={image} alt={name} />
      </a>

      <div className="portfolio__item-typography">
        <h5>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          ) : (
            name
          )}
        </h5>

        <span>{solution}</span>

        <p>{description}</p>
      </div>
    </div>
  );
}