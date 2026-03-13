export default function HeroSection() {
  return (
    <>
      {/* Hero */}
      <section id="hero" aria-labelledby="hero-heading">
        <div className="hero-bg-pattern" aria-hidden="true"></div>
        <div className="container">
          <div className="hero-content">
            {/* Text */}
            <div className="hero-text">
              <div className="hero-badge" aria-label="Auktoriserat elföretag">
                Auktoriserat elföretag
              </div>
              <h1 id="hero-heading">
                Din <span>pålitliga</span>
                <br />
                elektriker i
                <br />
                Stockholm
              </h1>
              <p>
                Professionella elinstallationer, felsökning och laddboxar
                utförda av certifierade elektriker. Vi är snabba, trygga och
                alltid tillgängliga för akuta ärenden.
              </p>
              <div className="hero-buttons">
                <a href="#kontakt" className="btn btn-primary">
                  Begär gratis offert
                </a>
                <a href="tel:+46701234567" className="btn btn-outline">
                  Ring oss nu
                </a>
              </div>
              <div className="hero-stats" role="list">
                <div className="stat" role="listitem">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Års erfarenhet</span>
                </div>
                <div className="stat" role="listitem">
                  <span className="stat-number">2 000+</span>
                  <span className="stat-label">Nöjda kunder</span>
                </div>
                <div className="stat" role="listitem">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Jourtillgänglighet</span>
                </div>
              </div>
            </div>

            {/* Visual card */}
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-card">
                <div className="hero-card-header">
                  <div className="hero-avatar">EA</div>
                  <div>
                    <div className="hero-card-name">Erik Andersson</div>
                    <div className="hero-card-title">
                      Legitimerad elektriker · 15 år
                    </div>
                  </div>
                </div>
                <ul className="hero-services-list">
                  <li className="hero-service-item">
                    <span className="icon" aria-hidden="true">&#9658;</span>{" "}
                    Elinstallationer hem &amp; villa
                  </li>
                  <li className="hero-service-item">
                    <span className="icon" aria-hidden="true">&#9658;</span>{" "}
                    Kommersiella installationer
                  </li>
                  <li className="hero-service-item">
                    <span className="icon" aria-hidden="true">&#9658;</span>{" "}
                    Laddbox för elbil
                  </li>
                  <li className="hero-service-item">
                    <span className="icon" aria-hidden="true">&#9658;</span>{" "}
                    Felsökning &amp; reparation
                  </li>
                  <li className="hero-service-item">
                    <span className="icon" aria-hidden="true">&#9658;</span>{" "}
                    Solceller &amp; batteri
                  </li>
                </ul>
                <div className="hero-card-footer">
                  <div className="availability">
                    <div className="availability-dot"></div>
                    Ledig för uppdrag
                  </div>
                  <a
                    href="#kontakt"
                    className="btn btn-primary"
                    style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
                  >
                    Kontakta
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Strip */}
      <div className="usp-strip" role="list" aria-label="Våra fördelar">
        <div className="container">
          <div className="usp-items">
            {[
              "Auktoriserat elföretag",
              "Samma dag – akuta jobb",
              "Fasta priser – inga dolda avgifter",
              "Garanti på allt arbete",
              "ROT-avdrag gäller",
            ].map((item) => (
              <div className="usp-item" role="listitem" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
