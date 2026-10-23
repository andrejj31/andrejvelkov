import React from "react";
import PortfolioItem from "./PortfolioItem";
import Button from "./Button";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio__group">
          <PortfolioItem
            image={`${process.env.PUBLIC_URL}/biooil.jpg`}
            name="BIOOIL"
            solution="Complete web solution"
            description="I worked on an interesting full-stack project that required significant time and effort, but was also a very enjoyable experience. My responsibilities included developing both the server-side and client-side of the application. It is a web application that allows users to place orders, which are then processed by the administrator. The administrator has full control over the website's content through a dedicated administrative panel."
          ></PortfolioItem>
          <PortfolioItem
            image={`${process.env.PUBLIC_URL}/danai.jpg`} name="DANAI FARM"
            solution="Complete web solution"
            description="This was a challenging project that involved designing and developing the entire website, including creating the content and structuring the layout. The website was built to support two languages and features product sorting by categories and subcategories. I was responsible for defining the overall architecture and implementation strategy for both the API and the frontend. A key focus was creating a user-friendly content management system that allows the client to manage and update website content independently, without requiring any coding knowledge."
          ></PortfolioItem>
        </div>
      </div>
    </div>
  );
}
