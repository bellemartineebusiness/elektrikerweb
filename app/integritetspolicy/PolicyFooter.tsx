"use client";

import Link from "next/link";
import { useCookieContext } from "../components/CookieConsent";

export default function PolicyFooter() {
  const { openCookieModal } = useCookieContext();

  return (
    <footer id="footer" role="contentinfo">
      <div className="container">
        <div className="footer-bottom">
          <span>© 2025 ElSäker AB · Org.nr 556900-1234</span>
          <div className="footer-bottom-links">
            <Link href="/integritetspolicy">Integritetspolicy</Link>
            <button
              onClick={openCookieModal}
              className="footer-cookie-btn"
              aria-label="Hantera cookie-inställningar"
            >
              Hantera cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
