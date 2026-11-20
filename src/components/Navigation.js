import React from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "What I do" },
  { href: "#work", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <header className="nav">
      <nav className="nav__inner container" aria-label="Main">
        <a className="wordmark" href="#top" aria-label="Andrej Velkov, back to top">
          AV
        </a>
        <ul className="nav__links">
          {links.map(({ href, label }) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
          <li>
            <a className="nav__gh" href="https://github.com/andrejj31" target="_blank" rel="noopener noreferrer">
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
