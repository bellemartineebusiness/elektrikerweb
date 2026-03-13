import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyUsSection from "./components/WhyUsSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { CookieConsentProvider } from "./components/CookieConsent";

export default function Home() {
  return (
    <CookieConsentProvider>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </CookieConsentProvider>
  );
}
