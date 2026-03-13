"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll(): void {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      id="back-to-top"
      className={visible ? "visible" : undefined}
      onClick={scrollToTop}
      aria-label="Gå till toppen av sidan"
      title="Tillbaka till toppen"
    >
      ▲
    </button>
  );
}
