import React, { useRef } from "react";
import { X } from "lucide-react";

export default function ZoomImage({ src, alt, caption, className, ...imgProps }) {
  const dialog = useRef(null);

  const open = () => dialog.current?.showModal();
  const close = () => dialog.current?.close();

  return (
    <>
      <button
        type="button"
        className={`zoom ${className || ""}`}
        onClick={open}
        aria-label={`Enlarge: ${alt}`}
      >
        <img src={src} alt={alt} {...imgProps} />
      </button>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={caption || alt}
        onClick={(e) => e.target === dialog.current && close()}
      >
        <figure className="lightbox__figure">
          <img src={src} alt={alt} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
        <button type="button" className="lightbox__close btn btn--light btn--sm" onClick={close}>
          <X size={14} aria-hidden="true" />
          Close
        </button>
      </dialog>
    </>
  );
}
