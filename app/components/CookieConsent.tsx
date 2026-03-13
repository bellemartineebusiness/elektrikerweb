"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import Link from "next/link";

// ── Types ──────────────────────────────────────────────────────────────────────

interface CookieConsentData {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  date: string;
}

interface CookieContextValue {
  openCookieModal: () => void;
}

// ── Context ────────────────────────────────────────────────────────────────────

const CookieContext = createContext<CookieContextValue>({
  openCookieModal: () => {},
});

export function useCookieContext(): CookieContextValue {
  return useContext(CookieContext);
}

// ── Storage helpers ────────────────────────────────────────────────────────────

const COOKIE_KEY = "elsaker_cookie_consent";

function getCookieConsent(): CookieConsentData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    return raw ? (JSON.parse(raw) as CookieConsentData) : null;
  } catch {
    return null;
  }
}

function setCookieConsent(value: CookieConsentData): void {
  try {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(value));
  } catch {
    // storage may be unavailable
  }
}

// ── Provider + Banner + Modal ──────────────────────────────────────────────────

interface CookieConsentProviderProps {
  children: ReactNode;
}

export function CookieConsentProvider({
  children,
}: CookieConsentProviderProps) {
  const [bannerVisible, setBannerVisible] = useState<boolean>(false);
  const [bannerHiding, setBannerHiding] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [analyticsChecked, setAnalyticsChecked] = useState<boolean>(() => {
    const consent = getCookieConsent();
    return consent ? !!consent.analytics : false;
  });
  const [marketingChecked, setMarketingChecked] = useState<boolean>(() => {
    const consent = getCookieConsent();
    return consent ? !!consent.marketing : false;
  });

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      const timer = setTimeout(() => setBannerVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent): void {
      if (e.key === "Escape" && modalOpen) {
        setModalOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  const hideBanner = useCallback((): void => {
    setBannerHiding(true);
    setTimeout(() => {
      setBannerVisible(false);
      setBannerHiding(false);
    }, 300);
  }, []);

  function openCookieModal(): void {
    setModalOpen(true);
  }

  function acceptAll(): void {
    setCookieConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      date: new Date().toISOString(),
    });
    hideBanner();
    setModalOpen(false);
    setAnalyticsChecked(true);
    setMarketingChecked(true);
  }

  function declineNonEssential(): void {
    setCookieConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      date: new Date().toISOString(),
    });
    hideBanner();
  }

  function savePreferences(): void {
    setCookieConsent({
      necessary: true,
      analytics: analyticsChecked,
      marketing: marketingChecked,
      date: new Date().toISOString(),
    });
    setModalOpen(false);
    hideBanner();
  }

  function handleModalBackdropClick(
    e: React.MouseEvent<HTMLDivElement>
  ): void {
    if (e.target === e.currentTarget) {
      setModalOpen(false);
    }
  }

  return (
    <CookieContext.Provider value={{ openCookieModal }}>
      {children}

      {/* Cookie Banner */}
      {bannerVisible && (
        <div
          id="cookie-banner"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie-meddelande"
          style={
            bannerHiding
              ? { animation: "slideDown 0.3s ease forwards" }
              : undefined
          }
        >
          <div className="cookie-inner">
            <div className="cookie-text">
              <h3>Vi använder cookies</h3>
              <p>
                Vi använder nödvändiga cookies för att sidan ska fungera, samt
                analytiska cookies för att förbättra upplevelsen. Läs mer i vår{" "}
                <Link href="/integritetspolicy">integritetspolicy</Link>.
              </p>
            </div>
            <div className="cookie-buttons">
              <button
                className="btn-cookie-accept"
                onClick={acceptAll}
              >
                Acceptera alla
              </button>
              <button
                className="btn-cookie-decline"
                onClick={declineNonEssential}
              >
                Endast nödvändiga
              </button>
              <button
                className="btn-cookie-settings"
                onClick={openCookieModal}
              >
                Anpassa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {modalOpen && (
        <div
          id="cookie-modal"
          className="open"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          onClick={handleModalBackdropClick}
        >
          <div className="cookie-modal-box">
            <div className="cookie-modal-header">
              <h2 id="cookie-modal-title">Cookie-inställningar</h2>
              <button
                className="modal-close"
                onClick={() => setModalOpen(false)}
                aria-label="Stäng"
              >
                &times;
              </button>
            </div>

            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              Välj vilka typer av cookies du tillåter. Nödvändiga cookies kan
              inte stängas av eftersom de är nödvändiga för att webbplatsen ska
              fungera korrekt. Läs mer i vår{" "}
              <Link
                href="/integritetspolicy"
                style={{ color: "var(--mid)" }}
              >
                integritetspolicy
              </Link>
              .
            </p>

            {/* Necessary */}
            <div className="cookie-category">
              <div className="cookie-category-header">
                <h4>Nödvändiga cookies</h4>
                <label
                  className="toggle-switch"
                  aria-label="Nödvändiga cookies (alltid aktiverade)"
                >
                  <input
                    type="checkbox"
                    id="toggle-necessary"
                    checked
                    disabled
                    readOnly
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <p>
                Dessa cookies är nödvändiga för att webbplatsen ska fungera och
                kan inte stängas av. De lagrar t.ex. dina cookie-val och
                sessionsdata.
              </p>
            </div>

            {/* Analytics */}
            <div className="cookie-category">
              <div className="cookie-category-header">
                <h4>Analytiska cookies</h4>
                <label
                  className="toggle-switch"
                  aria-label="Analytiska cookies"
                >
                  <input
                    type="checkbox"
                    id="toggle-analytics"
                    checked={analyticsChecked}
                    onChange={(e) => setAnalyticsChecked(e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <p>
                Hjälper oss förstå hur besökare använder sidan (t.ex. Google
                Analytics). Ingen personlig identifiering sker.
              </p>
            </div>

            {/* Marketing */}
            <div className="cookie-category">
              <div className="cookie-category-header">
                <h4>Marknadsföringscookies</h4>
                <label
                  className="toggle-switch"
                  aria-label="Marknadsföringscookies"
                >
                  <input
                    type="checkbox"
                    id="toggle-marketing"
                    checked={marketingChecked}
                    onChange={(e) => setMarketingChecked(e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <p>
                Används för att visa relevanta annonser på andra webbplatser.
                Dina data kan delas med tredjepartsannonsörer.
              </p>
            </div>

            <div className="cookie-modal-footer">
              <button
                className="btn btn-dark"
                onClick={savePreferences}
              >
                Spara mina val
              </button>
              <button className="btn btn-primary" onClick={acceptAll}>
                Acceptera alla
              </button>
            </div>
          </div>
        </div>
      )}
    </CookieContext.Provider>
  );
}
