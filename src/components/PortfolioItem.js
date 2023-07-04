import React from "react";

export default function PortfolioItem({ name, solution, description, image }) {
  return (
    <div className="portfolio__item">
      <img src={image} alt="" />
      <div className="portfolio__item-typography">
        <h5>{name}</h5>
        <span>{solution}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
