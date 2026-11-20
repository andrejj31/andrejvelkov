import React from "react";

const skills = [
  { area: "Frontend", tools: "React, Next.js, JavaScript" },
  { area: "Backend", tools: "Spring Boot, Node.js" },
  { area: "Databases", tools: "PostgreSQL, MongoDB" },
  { area: "Tools", tools: "Docker, CI/CD" },
];

export default function AboutMe() {
  return (
    <div className="about">
      <div className="about__left">
        <p className="about__statement">
          Driven by full-stack development and a love for basketball.
        </p>
      </div>

      <div className="about__right">
        <p>
          I take a project the whole way: the design, the frontend, the API and
          the database, and the admin tools that let the client manage it
          without me. I work mostly with JavaScript, React and Spring Boot, and
          also use Node.js, MongoDB and CI/CD workflows.
        </p>
        <p>
          Away from the screen I play basketball. It taught me teamwork,
          discipline and perseverance, and I bring the same habits to my work.
        </p>
      </div>
      <dl className="skills" aria-label="Skills">
        {skills.map(({ area, tools }) => (
          <div key={area}>
            <dt>{area}</dt>
            <dd>{tools}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
