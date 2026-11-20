import React from "react";
import PortfolioItem from "./PortfolioItem";
import ZoomImage from "./ZoomImage";

const img = (path) => `${process.env.PUBLIC_URL}/${path}`;

function Loyo() {
  return (
    <article className="outline project project--featured" id="loyo" aria-labelledby="loyo-title">
      <div className="project__head">
        <h3 className="project__name" id="loyo-title">Loyo</h3>
        <span className="project__status">
          <span className="status__dot" aria-hidden="true" />
          In development
        </span>
      </div>
      <p className="project__summary">
        A digital loyalty platform for local businesses. Instead of a plastic
        card for every café and bakery, customers collect points everywhere with
        one personal code, and each business runs its program from its own CRM.
      </p>

      <div className="screens">
        <figure className="screen screen--landing">
          <ZoomImage src={img("loyo/landing.jpg")} alt="Loyo landing page hero over a map of Skopje" caption="Loyo: Landing page" loading="lazy" />
          <figcaption>Landing page</figcaption>
        </figure>
        <figure className="screen screen--wallet">
          <ZoomImage src={img("loyo/home.jpg")} alt="Loyo customer app home page with nearby cafés and bakeries" caption="Loyo: Customer app" loading="lazy" />
          <figcaption>Customer app</figcaption>
        </figure>
        <figure className="screen screen--crm">
          <ZoomImage src={img("loyo/business.jpg")} alt="Loyo CRM business profile for a café, with cover photo, description and gallery" caption="Loyo: Business profile in the CRM" loading="lazy" />
          <figcaption>Business profile in the CRM</figcaption>
        </figure>
        <figure className="screen screen--code">
          <ZoomImage src={img("loyo/code.jpg")} alt="Loyo customer app showing the personal QR code" caption="Loyo: Personal code" loading="lazy" />
          <figcaption>Personal code</figcaption>
        </figure>
      </div>

      <dl className="facts">
        <div>
          <dt>Role</dt>
          <dd>Landing page, CRM, customer app and API</dd>
        </div>
        <div>
          <dt>Built</dt>
          <dd>
            Landing page with a map of Skopje. CRM with a cashier QR scanner,
            rewards and staff. Customer app with a personal QR code. Spring Boot API with JWT auth,
            refresh-token rotation and integration tests.
          </dd>
        </div>
        <div>
          <dt>Stack</dt>
          <dd>Next.js, React, Spring Boot, PostgreSQL, Docker</dd>
        </div>
      </dl>
    </article>
  );
}

const projects = [
  {
    name: "Danai Farm",
    image: img("danai.jpg"),
    role: "Complete web solution",
    status: "Live",
    summary:
      "This was a challenging project that involved designing and developing the entire website, including creating the content and structuring the layout. The website was built to support two languages and features product sorting by categories and subcategories. I was responsible for defining the overall architecture and implementation strategy for both the API and the frontend. A key focus was creating a user-friendly content management system that allows the client to manage and update website content independently, without requiring any coding knowledge.",
    link: "https://danaifarm.com.mk",
    linkLabel: "Visit danaifarm.com.mk",
  },
  {
    name: "BIOOIL",
    image: img("biooil.jpg"),
    role: "Complete web solution",
    status: "Client project",
    summary:
      "I worked on an interesting full-stack project that required significant time and effort, but was also a very enjoyable experience. My responsibilities included developing both the server-side and client-side of the application. It is a web application that allows users to place orders, which are then processed by the administrator. The administrator has full control over the website's content through a dedicated administrative panel.",
  },
];

export default function Portfolio() {
  return (
    <>
      <Loyo />
      <div className="projects">
        {projects.map((p) => (
          <PortfolioItem key={p.name} {...p} />
        ))}
      </div>
    </>
  );
}
