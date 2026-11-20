import React from "react";
import { PanelsTopLeft, LayoutDashboard, Server, Smartphone } from "lucide-react";

const services = [
  {
    icon: PanelsTopLeft,
    title: "Websites & landing pages",
    desc: "Fast, responsive sites that explain the product and work on every device.",
    seen: [{ label: "Loyo", href: "#loyo" }, { label: "Danai Farm", href: "#danai-farm" }],
  },
  {
    icon: LayoutDashboard,
    title: "Admin panels & CRMs",
    desc: "Tools that let a business manage orders, products and content without code.",
    seen: [{ label: "Danai Farm", href: "#danai-farm" }, { label: "BIOOIL", href: "#biooil" }],
  },
  {
    icon: Smartphone,
    title: "Web apps",
    desc: "Interactive apps customers use on any device, built with React and Next.js.",
    seen: [{ label: "Loyo", href: "#loyo" }],
  },
  {
    icon: Server,
    title: "APIs & databases",
    desc: "Secure backends in Spring Boot or Node.js on PostgreSQL or MongoDB.",
    seen: [{ label: "Loyo", href: "#loyo" }, { label: "BIOOIL", href: "#biooil" }],
  },
];

export default function Services() {
  return (
    <ul className="services">
      {services.map(({ icon: Icon, title, desc, seen }) => (
        <li key={title} className="bracket bracket--live service">
          <span className="service__icon" aria-hidden="true">
            <Icon size={20} strokeWidth={1.75} />
          </span>
          <div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p className="services__seen">
              See it in{" "}
              {seen.map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && " and "}
                  <a href={s.href}>{s.label}</a>
                </React.Fragment>
              ))}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
