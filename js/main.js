// ==============================
// ElSäker AB – Main JavaScript
// ==============================

(function () {
  'use strict';

  // ── Hamburger menu ───────────────────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Back-to-top button ───────────────────────────────────────────────────────
  const backToTop = document.getElementById('back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Contact form (demo – no real submission) ─────────────────────────────────
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactForm.style.display = 'none';
      formSuccess.style.display = 'block';
    });
  }

  // ── Cookie consent ───────────────────────────────────────────────────────────
  const COOKIE_KEY = 'elsaker_cookie_consent';
  const banner = document.getElementById('cookie-banner');
  const modal = document.getElementById('cookie-modal');

  function getCookieConsent() {
    try {
      return JSON.parse(localStorage.getItem(COOKIE_KEY));
    } catch (_) {
      return null;
    }
  }

  function setCookieConsent(value) {
    try {
      localStorage.setItem(COOKIE_KEY, JSON.stringify(value));
    } catch (_) {}
  }

  function hideBanner() {
    if (banner) {
      banner.style.animation = 'slideDown 0.3s ease forwards';
      setTimeout(function () {
        banner.style.display = 'none';
      }, 300);
    }
  }

  function showBanner() {
    if (banner) {
      banner.style.display = 'block';
    }
  }

  // Add slideDown keyframe dynamically
  const styleEl = document.createElement('style');
  styleEl.textContent = '@keyframes slideDown{from{transform:translateY(0);opacity:1}to{transform:translateY(100%);opacity:0}}';
  document.head.appendChild(styleEl);

  // Show banner if no consent saved
  const consent = getCookieConsent();
  if (!consent) {
    setTimeout(showBanner, 800);
  }

  // Accept all
  const btnAccept = document.getElementById('btn-cookie-accept');
  if (btnAccept) {
    btnAccept.addEventListener('click', function () {
      setCookieConsent({ necessary: true, analytics: true, marketing: true, date: new Date().toISOString() });
      hideBanner();
    });
  }

  // Decline non-essential
  const btnDecline = document.getElementById('btn-cookie-decline');
  if (btnDecline) {
    btnDecline.addEventListener('click', function () {
      setCookieConsent({ necessary: true, analytics: false, marketing: false, date: new Date().toISOString() });
      hideBanner();
    });
  }

  // Open settings modal
  const btnSettings = document.getElementById('btn-cookie-settings');
  if (btnSettings && modal) {
    btnSettings.addEventListener('click', function () {
      modal.classList.add('open');
    });
  }

  // Footer "Hantera cookies" links
  ['btn-manage-cookies', 'btn-manage-cookies-2'].forEach(function (id) {
    var btn = document.getElementById(id);
    if (btn && modal) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.add('open');
      });
    }
  });

  // Close modal
  const modalClose = document.getElementById('modal-close');
  if (modalClose && modal) {
    modalClose.addEventListener('click', function () {
      modal.classList.remove('open');
    });
  }

  // Click outside modal to close
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }

  // Save preferences from modal
  const btnSavePreferences = document.getElementById('btn-save-preferences');
  if (btnSavePreferences) {
    btnSavePreferences.addEventListener('click', function () {
      var analytics = document.getElementById('toggle-analytics');
      var marketing = document.getElementById('toggle-marketing');
      setCookieConsent({
        necessary: true,
        analytics: analytics ? analytics.checked : false,
        marketing: marketing ? marketing.checked : false,
        date: new Date().toISOString()
      });
      if (modal) modal.classList.remove('open');
      hideBanner();
    });
  }

  // Accept all from modal
  const btnAcceptAll = document.getElementById('btn-accept-all');
  if (btnAcceptAll) {
    btnAcceptAll.addEventListener('click', function () {
      var analytics = document.getElementById('toggle-analytics');
      var marketing = document.getElementById('toggle-marketing');
      if (analytics) analytics.checked = true;
      if (marketing) marketing.checked = true;
      setCookieConsent({ necessary: true, analytics: true, marketing: true, date: new Date().toISOString() });
      if (modal) modal.classList.remove('open');
      hideBanner();
    });
  }

  // Pre-fill modal toggles from saved consent
  if (modal && consent) {
    var analytics = document.getElementById('toggle-analytics');
    var marketing = document.getElementById('toggle-marketing');
    if (analytics) analytics.checked = !!consent.analytics;
    if (marketing) marketing.checked = !!consent.marketing;
  }

  // Keyboard: close modal on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal) {
      modal.classList.remove('open');
    }
  });

  // ── Smooth scroll for anchor links ──────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var headerHeight = document.getElementById('header') ? document.getElementById('header').offsetHeight : 70;
        var top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ── Active nav link on scroll ────────────────────────────────────────────────
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNav() {
    var scrollY = window.scrollY + 100;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

})();
