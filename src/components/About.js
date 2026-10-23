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
          I'm Andrej Velkov, a passionate full stack web developer and a Computer Engineering student at FINKI, currently finishing my degree. I'm interested in technology and enjoy learning new things and exploring different areas of software development. As a full stack web developer, I have experience with both frontend and backend development. I work with JavaScript and Java, and have experience using technologies and frameworks such as React, Next.js, Node.js, and Spring Boot, as well as databases like PostgreSQL and MongoDB. I enjoy building modern, user-friendly websites and web applications and finding practical solutions to different problems. Outside of programming, I'm a big basketball fan. I enjoy playing basketball because it challenges me both physically and mentally. It has also taught me the importance of teamwork, discipline, and perseverance, qualities that I try to apply in my everyday life.
        </p>
      </div>
    </div>
  );
}
