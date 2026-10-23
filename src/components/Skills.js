import React from "react";
import { PanelsTopLeft, Code2, Server, Database } from "lucide-react";
import Card from "./Card";

export default function Skills() {
  return (
    <div className="skills">
      <h3 className="title">What I do? 🤔</h3>

      <div className="skills__cards">
        <Card
          image={<PanelsTopLeft size={40} />}
          title="COMPLETE WEB SOLUTIONS"
          desc="I build complete web applications, from frontend interfaces to backend systems and database integration, using modern technologies."
        />

        <Card
          image={<Code2 size={40} />}
          title="FRONTEND DEVELOPMENT"
          desc="I create clean, user-friendly interfaces that look great and work smoothly across different devices."
        />

        <Card
          image={<Server size={40} />}
          title="BACKEND DEVELOPMENT"
          desc="I develop server-side applications, build APIs, and connect applications with databases."
        />

        <Card
          image={<Database size={40} />}
          title="DATABASES"
          desc="I work with PostgreSQL and MongoDB to store, organize, and manage application data."
        />
      </div>
    </div>
  );
}