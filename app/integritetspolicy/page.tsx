import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import BackToTop from "../components/BackToTop";
import { CookieConsentProvider } from "../components/CookieConsent";
import PolicyFooter from "./PolicyFooter";

export const metadata: Metadata = {
  title: "Integritetspolicy & GDPR – ElSäker AB",
  description:
    "Integritetspolicy och GDPR-information för ElSäker AB. Läs om hur vi hanterar dina personuppgifter i enlighet med GDPR.",
  robots: "index, follow",
};

export default function IntegritetspolicyPage() {
  return (
    <CookieConsentProvider>
      <Header />

      <main id="main-content" style={{ paddingTop: "70px" }}>
        <div className="policy-content">
          {/* Breadcrumb */}
          <nav
            aria-label="Brödsmula"
            style={{
              marginBottom: "1.5rem",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}
          >
            <Link href="/" style={{ color: "var(--mid)" }}>
              Startsida
            </Link>
            <span aria-hidden="true"> › </span>
            <span>Integritetspolicy</span>
          </nav>

          <h1>Integritetspolicy</h1>
          <div className="policy-meta">
            <p>
              <strong>ElSäker AB</strong> · Org.nr 556900-1234 · Exempelgatan
              12, 111 22 Stockholm
            </p>
            <p>
              Senast uppdaterad:{" "}
              <time dateTime="2025-01-01">1 januari 2025</time> · Version 2.0
            </p>
          </div>

          {/* 1. Inledning */}
          <section className="policy-section" aria-labelledby="section-intro">
            <h2 id="section-intro">1. Inledning</h2>
            <p>
              ElSäker AB (&quot;vi&quot;, &quot;oss&quot;, &quot;bolaget&quot;) värnar om din
              personliga integritet. Denna integritetspolicy förklarar hur vi
              samlar in, använder, lagrar och skyddar dina personuppgifter i
              enlighet med{" "}
              <strong>
                Europaparlamentets och rådets förordning (EU) 2016/679
              </strong>{" "}
              (allmän dataskyddsförordning, GDPR) samt svensk
              dataskyddslagstiftning.
            </p>
            <p>
              Genom att använda vår webbplats eller anlita våra tjänster
              bekräftar du att du har läst och förstått denna policy. Om du har
              frågor är du välkommen att kontakta oss (se avsnitt 12).
            </p>
          </section>

          {/* 2. Personuppgiftsansvarig */}
          <section
            className="policy-section"
            aria-labelledby="section-controller"
          >
            <h2 id="section-controller">2. Personuppgiftsansvarig</h2>
            <p>
              Personuppgiftsansvarig för behandlingen av dina uppgifter är:
            </p>
            <ul>
              <li>
                <strong>Företag:</strong> ElSäker AB
              </li>
              <li>
                <strong>Org.nr:</strong> 556900-1234
              </li>
              <li>
                <strong>Adress:</strong> Exempelgatan 12, 111 22 Stockholm
              </li>
              <li>
                <strong>E-post:</strong>{" "}
                <a href="mailto:gdpr@elsaker-demo.se">gdpr@elsaker-demo.se</a>
              </li>
              <li>
                <strong>Telefon:</strong>{" "}
                <a href="tel:+46701234567">070-123 45 67</a>
              </li>
            </ul>
          </section>

          {/* 3. Vilka uppgifter */}
          <section className="policy-section" aria-labelledby="section-data">
            <h2 id="section-data">3. Vilka personuppgifter samlar vi in?</h2>
            <p>Vi samlar in följande kategorier av personuppgifter:</p>

            <h3
              style={{
                fontSize: "1rem",
                margin: "1rem 0 0.5rem",
                color: "var(--dark)",
              }}
            >
              3.1 Uppgifter du lämnar till oss
            </h3>
            <ul>
              <li>
                Namn, e-postadress och telefonnummer (via kontaktformulär)
              </li>
              <li>Adress och fastighetsbeteckning (vid offert eller avtal)</li>
              <li>Betalningsinformation (vid fakturering)</li>
              <li>Kommunikationshistorik (e-post, SMS, telefonsamtal)</li>
            </ul>

            <h3
              style={{
                fontSize: "1rem",
                margin: "1rem 0 0.5rem",
                color: "var(--dark)",
              }}
            >
              3.2 Uppgifter vi samlar in automatiskt
            </h3>
            <ul>
              <li>IP-adress och ungefärlig plats</li>
              <li>Webbläsartyp och enhetsinformation</li>
              <li>
                Besökta sidor, klick och tid på sidan (via cookies – se avsnitt
                9)
              </li>
              <li>Referenskälla (hur du hittade vår webbplats)</li>
            </ul>
          </section>

          {/* 4. Ändamål */}
          <section
            className="policy-section"
            aria-labelledby="section-purpose"
          >
            <h2 id="section-purpose">4. Ändamål och rättslig grund</h2>

            <table
              className="policy-table"
              aria-label="Ändamål och rättslig grund för behandling"
            >
              <thead>
                <tr>
                  <th>Ändamål</th>
                  <th>Rättslig grund (GDPR art.)</th>
                  <th>Lagringstid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Besvara kontaktförfrågan</td>
                  <td>Berättigat intresse (art. 6.1 f)</td>
                  <td>12 månader</td>
                </tr>
                <tr>
                  <td>Ingå och fullgöra avtal</td>
                  <td>Avtalets fullgörande (art. 6.1 b)</td>
                  <td>Avtalstiden + 3 år</td>
                </tr>
                <tr>
                  <td>Bokföring och fakturering</td>
                  <td>Rättslig förpliktelse (art. 6.1 c)</td>
                  <td>7 år (bokföringslagen)</td>
                </tr>
                <tr>
                  <td>Skicka nyhetsbrev</td>
                  <td>Samtycke (art. 6.1 a)</td>
                  <td>Tills samtycket återkallas</td>
                </tr>
                <tr>
                  <td>Webbplatsanalys (Google Analytics)</td>
                  <td>Samtycke (art. 6.1 a)</td>
                  <td>26 månader (anonymiserad)</td>
                </tr>
                <tr>
                  <td>Marknadsföring (remarketing)</td>
                  <td>Samtycke (art. 6.1 a)</td>
                  <td>Tills samtycket återkallas</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 5. Delning */}
          <section
            className="policy-section"
            aria-labelledby="section-sharing"
          >
            <h2 id="section-sharing">5. Delning med tredje part</h2>
            <p>
              Vi lämnar aldrig ut dina personuppgifter för tredje parts egna
              marknadsföringsändamål. Vi kan dock dela uppgifter med:
            </p>
            <ul>
              <li>
                <strong>IT-leverantörer</strong> (e-post, CRM, webbhotell) –
                som personuppgiftsbiträden med giltigt biträdesavtal
              </li>
              <li>
                <strong>Google LLC</strong> – Google Analytics och Google Ads
                (vid samtycke; dataöverföring till USA sker under
                Standardavtalsklausuler)
              </li>
              <li>
                <strong>Bokföringssystem</strong> – för fakturering och
                redovisning
              </li>
              <li>
                <strong>Myndigheter</strong> – om vi är skyldiga enligt lag
              </li>
            </ul>
            <p>
              Alla personuppgiftsbiträden är avtalsenligt bundna att behandla
              dina uppgifter strikt enligt våra instruktioner och enbart för
              angivna ändamål.
            </p>
          </section>

          {/* 6. Tredjeland */}
          <section
            className="policy-section"
            aria-labelledby="section-transfer"
          >
            <h2 id="section-transfer">6. Överföring till tredjeland</h2>
            <p>
              Vissa tjänster (bl.a. Google Analytics) innebär att uppgifter
              överförs till USA. Sådana överföringar sker med stöd av{" "}
              <strong>EU-kommissionens standardavtalsklausuler (SCC)</strong>{" "}
              och, i tillämpliga fall, EU–U.S. Data Privacy Framework. Vi
              säkerställer alltid en adekvat skyddsnivå innan överföring sker.
            </p>
          </section>

          {/* 7. Rättigheter */}
          <section
            className="policy-section"
            aria-labelledby="section-rights"
          >
            <h2 id="section-rights">7. Dina rättigheter (GDPR kap. III)</h2>
            <p>Du har rätt att:</p>
            <ul>
              <li>
                <strong>Få tillgång</strong> till dina personuppgifter (art.
                15)
              </li>
              <li>
                <strong>Rätta</strong> felaktiga eller ofullständiga uppgifter
                (art. 16)
              </li>
              <li>
                <strong>Radera</strong> (&quot;rätten att bli bortglömd&quot;) dina
                uppgifter (art. 17)
              </li>
              <li>
                <strong>Begränsa</strong> behandlingen (art. 18)
              </li>
              <li>
                <strong>Dataportabilitet</strong> – få dina uppgifter i
                maskinläsbart format (art. 20)
              </li>
              <li>
                <strong>Invända</strong> mot behandling baserad på berättigat
                intresse (art. 21)
              </li>
              <li>
                <strong>Återkalla samtycke</strong> när som helst utan att det
                påverkar behandling som skett dessförinnan (art. 7.3)
              </li>
              <li>
                <strong>Klaga</strong> till Integritetsskyddsmyndigheten (IMY),{" "}
                <a
                  href="https://www.imy.se"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.imy.se
                </a>
              </li>
            </ul>
            <p>
              För att utöva dina rättigheter, kontakta oss på{" "}
              <a href="mailto:gdpr@elsaker-demo.se">gdpr@elsaker-demo.se</a>.
              Vi svarar inom 30 dagar.
            </p>
          </section>

          {/* 8. Lagring */}
          <section
            className="policy-section"
            aria-labelledby="section-retention"
          >
            <h2 id="section-retention">8. Lagring och radering</h2>
            <p>
              Vi lagrar dina uppgifter så länge det är nödvändigt för det
              angivna ändamålet eller så länge lagen kräver (t.ex. 7 år för
              bokföringsunderlag). När lagringstiden löpt ut raderas eller
              anonymiseras uppgifterna.
            </p>
            <p>
              Uppgifter som behandlas baserat på samtycke raderas omedelbart
              om samtycket återkallas, förutsatt att inga andra rättsliga
              grunder kvarstår.
            </p>
          </section>

          {/* 9. Cookies */}
          <section
            className="policy-section"
            aria-labelledby="section-cookies"
          >
            <h2 id="section-cookies">9. Cookies och spårningstekniker</h2>
            <p>
              Vår webbplats använder cookies – små textfiler som lagras i din
              webbläsare. Nedan beskrivs de cookies vi använder:
            </p>

            <table className="policy-table" aria-label="Cookieförteckning">
              <thead>
                <tr>
                  <th>Cookie-namn</th>
                  <th>Typ</th>
                  <th>Syfte</th>
                  <th>Livslängd</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>elsaker_cookie_consent</code>
                  </td>
                  <td>Nödvändig</td>
                  <td>Sparar dina cookie-val</td>
                  <td>12 månader</td>
                </tr>
                <tr>
                  <td>
                    <code>_ga</code>
                  </td>
                  <td>Analytisk</td>
                  <td>Google Analytics – unikt besökar-ID</td>
                  <td>2 år</td>
                </tr>
                <tr>
                  <td>
                    <code>_ga_XXXXXXXX</code>
                  </td>
                  <td>Analytisk</td>
                  <td>Google Analytics – sessionsdata</td>
                  <td>2 år</td>
                </tr>
                <tr>
                  <td>
                    <code>_gcl_au</code>
                  </td>
                  <td>Marknadsföring</td>
                  <td>Google Ads – konverteringsspårning</td>
                  <td>90 dagar</td>
                </tr>
                <tr>
                  <td>
                    <code>_fbp</code>
                  </td>
                  <td>Marknadsföring</td>
                  <td>Facebook Pixel – remarketing</td>
                  <td>90 dagar</td>
                </tr>
              </tbody>
            </table>

            <p>
              Du kan när som helst ändra dina cookie-inställningar via knappen{" "}
              <strong>&quot;Hantera cookies&quot;</strong> i sidfoten, eller via din
              webbläsares inställningar. Observera att avaktivering av
              analytiska cookies inte påverkar webbplatsens funktionalitet.
            </p>
          </section>

          {/* 10. Säkerhet */}
          <section
            className="policy-section"
            aria-labelledby="section-security"
          >
            <h2 id="section-security">10. Säkerhet</h2>
            <p>
              Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att
              skydda dina personuppgifter mot obehörig åtkomst, förlust eller
              förstörelse, däribland:
            </p>
            <ul>
              <li>HTTPS-kryptering (TLS) för all datatrafik</li>
              <li>Begränsad åtkomst – enbart behörig personal</li>
              <li>Regelbundna säkerhetsgranskningar</li>
              <li>Lösenordspolicy och tvåfaktorsautentisering internt</li>
            </ul>
            <p>
              Vid en personuppgiftsincident som medför hög risk för dina
              rättigheter och friheter kommer vi att underrätta dig och
              Integritetsskyddsmyndigheten (IMY) inom 72 timmar, i enlighet med
              GDPR art. 33–34.
            </p>
          </section>

          {/* 11. Ändringar */}
          <section
            className="policy-section"
            aria-labelledby="section-changes"
          >
            <h2 id="section-changes">11. Ändringar av integritetspolicyn</h2>
            <p>
              Vi kan komma att uppdatera denna policy från tid till annan. Vid
              väsentliga ändringar informerar vi dig via e-post (om vi har din
              adress) eller via en tydlig notis på webbplatsen. Den senaste
              versionen finns alltid tillgänglig på denna sida.
            </p>
          </section>

          {/* 12. Kontakt */}
          <section
            className="policy-section"
            aria-labelledby="section-contact"
          >
            <h2 id="section-contact">12. Kontakta oss</h2>
            <p>
              Har du frågor om denna integritetspolicy eller vill utöva dina
              rättigheter? Kontakta oss:
            </p>
            <ul>
              <li>
                <strong>E-post:</strong>{" "}
                <a href="mailto:gdpr@elsaker-demo.se">gdpr@elsaker-demo.se</a>
              </li>
              <li>
                <strong>Post:</strong> ElSäker AB, Dataskyddsansvarig,
                Exempelgatan 12, 111 22 Stockholm
              </li>
              <li>
                <strong>Telefon:</strong>{" "}
                <a href="tel:+46701234567">070-123 45 67</a> (mån–fre 07–18)
              </li>
            </ul>
            <p>
              Du har också rätt att lämna in ett klagomål till{" "}
              <strong>Integritetsskyddsmyndigheten (IMY)</strong>:
              <br />
              <a
                href="https://www.imy.se"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.imy.se
              </a>{" "}
              · Box 8114, 104 20 Stockholm
            </p>
          </section>

          <Link
            href="/"
            className="btn btn-dark"
            style={{ marginTop: "1rem", display: "inline-block" }}
          >
            ← Tillbaka till startsidan
          </Link>
        </div>
      </main>

      <PolicyFooter />
      <BackToTop />
    </CookieConsentProvider>
  );
}
