import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Andrej Velkov</p>
      <ul>
        <li>
          <a href="#top">Back to top</a>
        </li>
        <li>
          <a href="https://github.com/andrejj31" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
