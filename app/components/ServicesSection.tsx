interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: "EL",
    title: "Elinstallationer",
    description:
      "Nyinstallation, tillbyggnad och renovering av elsystem i villa, radhus och lägenhet. Alltid enligt gällande normer.",
  },
  {
    icon: "EV",
    title: "Laddbox för elbil",
    description:
      "Installation av laddboxar för alla bilmärken hemma eller på kontoret. Vi hjälper dig välja rätt effekt och fabrikat.",
  },
  {
    icon: "FEL",
    title: "Felsökning & reparation",
    description:
      "Snabb och noggrann felsökning av elfel, kortslutningar och strömavbrott. Vi löser problemet på ett och samma besök.",
  },
  {
    icon: "SOL",
    title: "Solceller",
    description:
      "Installation av solcellssystem med eller utan batteri. Vi tar hand om hela processen från offert till nätanmälan.",
  },
  {
    icon: "LJU",
    title: "Belysning & styrning",
    description:
      "Smarthem-lösningar, LED-belysning, dimrar och Philips Hue. Ge ditt hem eller kontor en modern och energieffektiv belysning.",
  },
  {
    icon: "FÖR",
    title: "Företagsinstallationer",
    description:
      "Kontor, butiker och industrifastigheter. Vi planerar och genomför elinstallationer av alla storlekar med minimal driftstopp.",
  },
  {
    icon: "EC",
    title: "Elcentral & säkring",
    description:
      "Byte och uppgradering av elcentral, jordfelsbrytare och säkringar. En trygg elcentral är grunden för ett säkert elsystem.",
  },
  {
    icon: "JOU",
    title: "Jour & akutservice",
    description:
      "Vi finns tillgängliga dygnet runt för akuta elfel. Certifierade elektriker på plats inom 60 minuter i Stockholmsregionen.",
  },
];

export default function ServicesSection() {
  return (
    <section id="tjanster" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="services-heading">
            Våra <span className="highlight">tjänster</span>
          </h2>
          <p className="section-subtitle">
            Vi erbjuder ett komplett utbud av eltjänster för både privatpersoner
            och företag.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.icon}>
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
