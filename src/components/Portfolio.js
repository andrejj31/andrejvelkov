import React from "react";
import PortfolioItem from "./PortfolioItem";
import Button from "./Button";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio__group">
          <PortfolioItem
            image="./biooil.jpg"
            name="BIOOIL"
            solution="Complete web solution"
            description="I worked on an interesting full-stack project that took me a lot of time but I enjoyed it. My job was to develop both, the API and the client side of the project. It is a web application through which users can make orders, which will later be processed by the administrator. The administrator has full control over the content of the site through a specially designed administrative panel."
          ></PortfolioItem>
          <PortfolioItem
            image="./danai.jpg"
            name="DANAI FARM"
            solution="Complete web solution"
            description="This was quite a demanding project, even though it didn't seem like it at first. My task was to create the design and code it, as well as to come up with the complete content and layout of the site. Also, the website should have the ability to support two languages, as well as the ability to sort by categories and subcategories. It was up to me to determine the exemplary architecture and strategy for implementing the API as well as the front-end. The most significant focus was placed on the ability of the client to manage and modify the content according to his requirements without having any coding knowledge."
          ></PortfolioItem>
        </div>
        <Button message="View more"></Button>
      </div>
    </div>
  );
}
