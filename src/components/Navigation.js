import React from "react";

export default function Navigation() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__contact">
        <li>
          <a href="mailto:velkovandrej819@gmail.com">
            <img src="./mail.svg" alt="" />
            <span className="main-nav__link">velkovandrej819@gmail.com</span>
          </a>
        </li>
      </ul>
      <ul className="main-nav__menu">
        <li className="main-nav__link">
          <a href="#about">About</a>
        </li>
        <li className="main-nav__link">
          <a href="#skills">Skills</a>
        </li>
        <li className="main-nav__link">
          <a href="#projects">Projects</a>
        </li>
        <li className="main-nav__link">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
