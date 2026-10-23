import React from "react";

export default function Card({ image, title, desc }) {
  return (
    <article className="skills__card">
      <div className="skills__card-icon" aria-hidden="true">
        {image}
      </div>

      <h5>{title}</h5>
      <p>{desc}</p>
    </article>
  );
}