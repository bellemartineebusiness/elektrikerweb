"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  gdprConsent: boolean;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  gdprConsent: false,
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState<boolean>(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="contact-heading">
            Kontakta <span className="highlight">oss</span>
          </h2>
          <p className="section-subtitle">
            Fyll i formuläret eller ring oss direkt – vi återkommer inom en
            timme på vardagar.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact info */}
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">ADR</div>
              <div>
                <div className="contact-item-label">Adress</div>
                <div className="contact-item-value">
                  Exempelgatan 12, 111 22 Stockholm
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">TEL</div>
              <div>
                <div className="contact-item-label">Telefon</div>
                <div className="contact-item-value">
                  <a href="tel:+46701234567">070-123 45 67</a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">EML</div>
              <div>
                <div className="contact-item-label">E-post</div>
                <div className="contact-item-value">
                  <a href="mailto:info@elsaker-demo.se">
                    info@elsaker-demo.se
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">TID</div>
              <div>
                <div className="contact-item-label">Öppettider</div>
                <div className="contact-item-value">
                  Mån–Fre: 07:00–18:00
                  <br />
                  Lör: 08:00–14:00
                  <br />
                  <strong>Jour: dygnet runt</strong>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">ORG</div>
              <div>
                <div className="contact-item-label">Företagsinformation</div>
                <div className="contact-item-value">
                  ElSäker AB
                  <br />
                  Org.nr: 556900-1234
                  <br />
                  Momsreg: SE556900123401
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form">
            <h3 className="form-title">Skicka en förfrågan</h3>

            <div className="gdpr-strip" role="note">
              Dina uppgifter behandlas enligt GDPR. Läs vår{" "}
              <Link href="/integritetspolicy">integritetspolicy</Link>.
            </div>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Kontaktformulär"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Namn *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Anna Andersson"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefon *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="070-000 00 00"
                      required
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-postadress *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="din@epost.se"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Typ av tjänst</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">– Välj tjänst –</option>
                    <option value="installation">Elinstallation</option>
                    <option value="laddbox">Laddbox för elbil</option>
                    <option value="felsökning">Felsökning</option>
                    <option value="solceller">Solceller</option>
                    <option value="central">Elcentral</option>
                    <option value="jour">Jour / akut</option>
                    <option value="övrigt">Övrigt</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Meddelande *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Berätta kort om ditt ärende, adress och önskad tid..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      fontWeight: 400,
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      name="gdprConsent"
                      required
                      checked={formData.gdprConsent}
                      onChange={handleChange}
                      style={{ marginTop: "3px", flexShrink: 0, width: "auto" }}
                    />
                    <span style={{ fontSize: "0.85rem" }}>
                      Jag godkänner att ElSäker AB behandlar mina
                      personuppgifter för att kunna besvara min förfrågan, i
                      enlighet med{" "}
                      <Link
                        href="/integritetspolicy"
                        style={{ color: "var(--mid)" }}
                      >
                        integritetspolicyn
                      </Link>
                      . *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Skicka förfrågan
                </button>
              </form>
            ) : (
              <div className="form-success" aria-live="polite">
                <div className="success-icon" aria-hidden="true">
                  &#10003;
                </div>
                <h3>Tack för din förfrågan!</h3>
                <p>
                  Vi återkommer till dig inom en timme på vardagar. Vid akuta
                  ärenden, ring oss direkt på{" "}
                  <a href="tel:+46701234567">070-123 45 67</a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
