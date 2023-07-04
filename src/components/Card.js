import React from "react";

export default function Card({ image, title, desc }) {
  return (
    <article className="skills__card">
      <img src={image} alt="" />
      <h5>{title}</h5>
      <p>{desc}</p>
    </article>
  );
}
