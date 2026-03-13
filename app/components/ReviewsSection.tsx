interface Review {
  initials: string;
  text: string;
  name: string;
  location: string;
}

const reviews: Review[] = [
  {
    initials: "MJ",
    text: "Fantastisk service! Erik kom samma dag och löste ett komplicerat elfel som ett annat företag missat. Proffsigt, snyggt utfört och priset var precis som utlovat.",
    name: "Maria Johansson",
    location: "Lidingö · Verified Google-recension",
  },
  {
    initials: "PL",
    text: "Installerade laddbox till min Tesla på ett bra och effektivt sätt. Tydlig information i förväg, kom i tid och lämnade inget skräp. Absolut rekommenderas!",
    name: "Peter Lindström",
    location: "Solna · Verified Google-recension",
  },
  {
    initials: "AK",
    text: "Bytte ut hela elcentralen i vår villa. Noggranna, ordentliga och lättillgängliga. De förklarade varje steg och vi kände oss trygga hela vägen. 10/10!",
    name: "Anna Karlsson",
    location: "Nacka · Verified Google-recension",
  },
  {
    initials: "TH",
    text: "Vi anlitade ElSäker för vår kontorsrenovering. Stort projekt som sköttes professionellt utan ett enda driftstopp för oss. Starkt rekommenderat!",
    name: "Thomas Holm",
    location: "Stockholm City · Verified Google-recension",
  },
  {
    initials: "SB",
    text: "Ringde på söndagskväll p.g.a. strömavbrott och de var hos oss inom 45 minuter. Otrolig jour-service! Priset var rimligt trots obekväm tid.",
    name: "Sara Berg",
    location: "Huddinge · Verified Google-recension",
  },
  {
    initials: "LN",
    text: "Installerade solceller och laddbox i ett svep. Skötte nätanmälan och allt pappersarbete. Nu genererar vi mer el än vi förbrukar. Ovärderligt!",
    name: "Lars Nilsson",
    location: "Tyresö · Verified Google-recension",
  },
];

export default function ReviewsSection() {
  return (
    <section id="recensioner" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="reviews-heading">
            Vad våra <span className="highlight">kunder säger</span>
          </h2>
          <p className="section-subtitle">
            Mer än 2 000 nöjda kunder i Stockholmsregionen.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.initials}>
              <div className="review-quote" aria-hidden="true">
                &ldquo;
              </div>
              <p className="review-text">{review.text}</p>
              <div
                className="review-stars"
                aria-label="5 av 5 stjärnor"
              >
                ★★★★★
              </div>
              <div className="review-author">
                <div className="review-avatar" aria-hidden="true">
                  {review.initials}
                </div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-location">{review.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
