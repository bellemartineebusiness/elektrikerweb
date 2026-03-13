"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  function toggleMobileNav(): void {
    setMobileNavOpen((prev) => !prev);
  }

  function closeMobileNav(): void {
    setMobileNavOpen(false);
  }

  // Close mobile nav on resize to desktop
  useEffect(() => {
    function handleResize(): void {
      if (window.innerWidth > 768) {
        setMobileNavOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header id="header" role="banner">
      <div className="container">
        <nav className="navbar" aria-label="Huvudnavigation">
          <Link href="/" className="logo" aria-label="ElSäker AB – startsida">
            <div className="logo-icon" aria-hidden="true">E</div>
            El<span>Säker</span> AB
          </Link>

          {/* Desktop navigation */}
          <ul className="nav-links" role="list">
            <li><a href="#tjanster">Tjänster</a></li>
            <li><a href="#varfor-oss">Om oss</a></li>
            <li><a href="#recensioner">Recensioner</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
            <li><a href="#kontakt" className="nav-cta">Begär offert</a></li>
          </ul>

          {/* Hamburger (mobile) */}
          <button
            className={`hamburger${mobileNavOpen ? " open" : ""}`}
            id="hamburger"
            aria-label={mobileNavOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav"
            onClick={toggleMobileNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {/* Mobile navigation */}
        <nav
          id="mobile-nav"
          className={`mobile-nav${mobileNavOpen ? " open" : ""}`}
          aria-label="Mobilnavigation"
        >
          <a href="#tjanster" onClick={closeMobileNav}>Tjänster</a>
          <a href="#varfor-oss" onClick={closeMobileNav}>Om oss</a>
          <a href="#recensioner" onClick={closeMobileNav}>Recensioner</a>
          <a href="#kontakt" onClick={closeMobileNav}>Kontakt</a>
          <a href="#kontakt" onClick={closeMobileNav}>Begär offert</a>
        </nav>
      </div>
    </header>
  );
}
