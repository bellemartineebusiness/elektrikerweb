"use client";

import Link from "next/link";
import { useCookieContext } from "./CookieConsent";

export default function Footer() {
  const { openCookieModal } = useCookieContext();

  return (
    <footer id="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="ElSäker AB – startsida">
              <div className="logo-icon" aria-hidden="true">E</div>
              El<span>Säker</span> AB
            </Link>
            <p>
              Auktoriserade elektriker i Stockholmsregionen sedan 2009. Vi utför
              alla typer av elinstallationer med hög kvalitet och till
              transparenta priser.
            </p>
            <div className="footer-certifications">
              <span className="cert-badge">Auktoriserad</span>
              <span className="cert-badge">Installatörsföretagen</span>
              <span className="cert-badge">ROT-avdrag</span>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Tjänster</h4>
            <ul>
              <li><a href="#tjanster">Elinstallationer</a></li>
              <li><a href="#tjanster">Laddbox för elbil</a></li>
              <li><a href="#tjanster">Felsökning</a></li>
              <li><a href="#tjanster">Solceller</a></li>
              <li><a href="#tjanster">Elcentral</a></li>
              <li><a href="#tjanster">Jour &amp; akut</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Företaget</h4>
            <ul>
              <li><a href="#varfor-oss">Om oss</a></li>
              <li><a href="#recensioner">Recensioner</a></li>
              <li>
                <Link href="/integritetspolicy">Integritetspolicy</Link>
              </li>
              <li>
                <button
                  onClick={openCookieModal}
                  className="footer-cookie-btn"
                  aria-label="Hantera cookie-inställningar"
                >
                  Hantera cookies
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Kontakt</h4>
            <div className="footer-contact-item">
              <span className="fc-icon" aria-hidden="true">&#9658;</span>
              Exempelgatan 12
              <br />
              111 22 Stockholm
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon" aria-hidden="true">&#9658;</span>
              <a href="tel:+46701234567">070-123 45 67</a>
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon" aria-hidden="true">&#9658;</span>
              <a href="mailto:info@elsaker-demo.se">info@elsaker-demo.se</a>
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon" aria-hidden="true">&#9658;</span>
              Jour dygnet runt
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2025 ElSäker AB · Org.nr 556900-1234 · Alla rättigheter
            förbehålles
          </span>
          <div className="footer-bottom-links">
            <Link href="/integritetspolicy">Integritetspolicy</Link>
            <button
              onClick={openCookieModal}
              className="footer-cookie-btn"
              aria-label="Hantera cookie-inställningar"
            >
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
