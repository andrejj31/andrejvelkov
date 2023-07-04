import React from "react";

export default function Button({ message }) {
  return (
    <button className="btn" onClick={(e) => e.preventDefault()}>
      {message}
    </button>
  );
}
