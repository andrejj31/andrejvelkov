import React from "react";

export default function About() {
  return (
    <div className="about">
      <div className="about__base">
        <img src={`${process.env.PUBLIC_URL}/andrej.jpg`} alt="Andrej" />
        <span>Hi🖐. I’m Andrej, full-stack web developer</span>
      </div>
      <div className="about__description">
        <h3 className="title">Who I am?🤔</h3>
        <p>
          I'm Andrej Velkov, a passionate full stack web developer and dedicated computer engineering student at FINKI. I am deeply fascinated by the world of technology and enjoy exploring its vast possibilities. As a full stack web developer, I possess a wide range of skills and expertise in both front-end and back-end development. I am proficient in languages such as JavaScript and Java, and have experience working with popular frameworks and libraries like React, Next.js, Node.js, and Spring Boot, as well as databases such as PostgreSQL and MongoDB. I also have experience with containerization using Docker and working with CI/CD tools and workflows. My goal is to create intuitive, user-friendly, and visually appealing websites and web applications that leave a lasting impression on users. Apart from my technical pursuits, I am an avid basketball enthusiast. I find joy and inspiration on the basketball court, where I can challenge myself physically and mentally. Basketball has taught me the importance of teamwork, discipline, and perseverance, which I apply to my personal and professional life.
        </p>
      </div>
    </div>
  );
}
