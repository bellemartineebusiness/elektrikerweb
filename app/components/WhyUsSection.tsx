interface WhyFeature {
  icon: string;
  title: string;
  description: string;
}

const features: WhyFeature[] = [
  {
    icon: "AUT",
    title: "Auktoriserat & certifierat",
    description:
      "Vi är auktoriserade av Installatörsföretagen och arbetar alltid enligt gällande föreskrifter och standarder.",
  },
  {
    icon: "PRI",
    title: "Transparenta priser",
    description:
      "Alltid fast pris i offerten – inga dolda avgifter eller obehagliga överraskningar på fakturan.",
  },
  {
    icon: "SNB",
    title: "Snabb service",
    description:
      "De flesta jobb kan vi utföra inom 24 timmar. Akuta ärenden hanteras samma dag, dygnet runt.",
  },
  {
    icon: "GAR",
    title: "Garanti på allt arbete",
    description:
      "Vi ger 2 års garanti på utfört arbete utöver den lagstadgade garantin. Du kan alltid känna dig trygg.",
  },
  {
    icon: "ROT",
    title: "ROT-avdrag",
    description:
      "Som privatperson kan du nyttja ROT-avdraget och direkt halvera din arbetskostnad. Vi sköter ansökan åt dig.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="varfor-oss" aria-labelledby="why-heading">
      <div className="container">
        <div className="why-grid">
          <div className="why-image" aria-hidden="true">
            <div className="why-image-inner">
              <span className="why-big-number">15+</span>
              <span className="why-big-label">Års erfarenhet</span>
            </div>
          </div>

          <div>
            <h2 className="section-title" id="why-heading">
              Varför välja{" "}
              <span className="highlight">ElSäker AB?</span>
            </h2>
            <p className="section-subtitle">
              Vi är inte bara elektriker – vi är din långsiktiga partner för ett
              tryggt elsystem.
            </p>

            <div className="why-features">
              {features.map((feature) => (
                <div className="why-feature" key={feature.icon}>
                  <div className="why-feature-icon" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <div className="why-feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
