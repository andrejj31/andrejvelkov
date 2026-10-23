import React from "react";
import Card from "./Card";

export default function Skills() {
  return (
    <div className="skills">
      <h3 className="title">What I do?🤔</h3>
      <div className="skills__cards">
        <Card
          image={`${process.env.PUBLIC_URL}/design.svg`}
          title="UI/UX DESIGN"
          desc="Craft captivating UI/UX designs for enhanced user experiences. I create visually appealing interfaces that impress and engage your users."
        ></Card>
        <Card
          image={`${process.env.PUBLIC_URL}/dev.svg`}
          title="DEVELOPMENT"
          desc="ransform your ideas into functional websites or applications with our top-notch development services."
        ></Card>
        <Card
          image={`${process.env.PUBLIC_URL}/seo.svg`}
          title="SEO"
          desc="Boost your online visibility and outrank the competition with our comprehensive SEO strategies."
        ></Card>
        <Card
          image={`${process.env.PUBLIC_URL}/maintenance.svg`}
          title="MAINTENANCE"
          desc="I proactively monitor, update, and troubleshoot your site, providing peace of mind and uninterrupted functionality"
        ></Card>
      </div>
    </div>
  );
}
