(function () {
  const PHONE_DISPLAY = "+44 7490 905545";
  const PHONE_TEL = "+447490905545";
  const WHATSAPP = "https://wa.me/447490905545";

  const services = [
    ["truck-fast", "Man and Van", "Flexible London moves", "/services/man-and-van/"],
    ["home-2", "House Removals", "Home and flat removals", "/services/house-removals/"],
    ["buildings-2", "Office Removals", "Business relocation help", "/services/office-removals/"],
    ["box", "Packing", "Packing materials and help", "/services/packing/"],
    ["teacher", "Student Removals", "Room and term moves", "/services/student-removals/"],
    ["clock", "Same-Day Moves", "Check urgent availability", "/services/same-day-moves/"],
    ["box-tick", "Furniture Delivery", "Single furniture items", "/services/furniture-delivery/"],
    ["music", "Piano Removals", "Subject to access details", "/services/piano-removals/"],
    ["arrow-up-2", "Sofa Hoisting", "Access-led sofa support", "/services/sofa-hoisting/"]
  ];

  const areas = [
    ["map", "East London", "Stratford, Hackney, Bow, Walthamstow.", "/areas/east-london/"],
    ["map", "North London", "Islington, Barnet, Enfield, Highbury.", "/areas/north-london/"],
    ["map", "South London", "Croydon, Brixton, Greenwich, Lewisham.", "/areas/south-london/"],
    ["map", "West London", "Ealing, Hammersmith, Chiswick, Acton.", "/areas/west-london/"],
    ["map", "Central London", "Westminster, Soho, Shoreditch, City.", "/areas/central-london/"],
    ["location", "Ilford", "IG1-IG6 local page.", "/services/man-and-van/ilford/"],
    ["location", "Croydon", "CR0, CR2, CR7 and nearby.", "/services/man-and-van/croydon/"]
  ];

  const iconMap = {
    "arrow-down": "hgi-arrow-down-01",
    "arrow-right": "hgi-arrow-right-01",
    "arrow-up": "hgi-arrow-up-01",
    "arrow-up-2": "hgi-arrow-up-02",
    "box": "hgi-package",
    "box-1": "hgi-delivery-box-01",
    "box-tick": "hgi-package-delivered",
    "book": "hgi-book-open-01",
    "building": "hgi-building-03",
    "buildings-2": "hgi-building-03",
    "calculator": "hgi-calculator",
    "calendar": "hgi-calendar-03",
    "card": "hgi-credit-card",
    "clock": "hgi-clock-01",
    "document-text": "hgi-legal-document-02",
    "flash": "hgi-flash",
    "gallery": "hgi-image-02",
    "home-2": "hgi-home-06",
    "info-circle": "hgi-information-circle",
    "location": "hgi-location-03",
    "map": "hgi-maps-location-01",
    "map-1": "hgi-maps-location-01",
    "cancel": "hgi-cancel-01",
    "menu": "hgi-menu-01",
    "menu-board": "hgi-clipboard",
    "message-dots": "hgi-message-02",
    "message-question": "hgi-message-question",
    "message-text": "hgi-message-01",
    "mobile": "hgi-smart-phone-01",
    "music": "hgi-music-note-03",
    "people": "hgi-user-group",
    "phone": "hgi-call-02",
    "profile-2user": "hgi-user-multiple",
    "question-message": "hgi-bubble-chat-question",
    "ranking": "hgi-ranking",
    "receipt-text": "hgi-invoice-02",
    "route-square": "hgi-route-01",
    "search-normal": "hgi-search-01",
    "shield-tick": "hgi-shield-02",
    "sofa": "hgi-sofa-03",
    "star": "hgi-star",
    "teacher": "hgi-student",
    "tick-circle": "hgi-checkmark-circle-02",
    "truck-fast": "hgi-truck-delivery",
    "truck-speed": "hgi-truck-delivery",
    "whatsapp": "hgi-whatsapp",
    "whatsapp-business": "hgi-whatsapp-business",
    "users": "hgi-user-group"
  };

  function iconClass(name) {
    return `hgi-stroke ${iconMap[name] || "hgi-circle"}`;
  }

  function megaItems(items) {
    return items.map(([icon, title, desc, href]) => `
      <li><a class="gh-mega-link" href="${href}">
        <span class="gh-mega-icon"><i class="${iconClass(icon)}" aria-hidden="true"></i></span>
        <span><span class="gh-mega-title">${title}</span><span>${desc}</span></span>
      </a></li>
    `).join("");
  }

  function mobileItems(items) {
    return items.map(([icon, title, desc, href]) => `
      <a class="gh-mobile-sub-link" href="${href}">
        <i class="${iconClass(icon)}" aria-hidden="true"></i>
        <span>${title}<small>${desc}</small></span>
      </a>
    `).join("");
  }

  function headerMarkup() {
    return `
      <div class="gh-top-strip">
        <div class="gh-container gh-top-strip-inner">
          <span class="gh-top-item"><i class="${iconClass("shield-tick")} gh-top-icon" aria-hidden="true"></i> Fully insured London movers</span>
          <span class="gh-top-item"><i class="${iconClass("clock")} gh-top-icon" aria-hidden="true"></i> Same-day bookings available</span>
          <a class="gh-top-item" href="tel:${PHONE_TEL}"><i class="${iconClass("phone")} gh-top-icon" aria-hidden="true"></i> ${PHONE_DISPLAY}</a>
        </div>
      </div>
      <header class="gh-header">
        <div class="gh-container gh-main">
          <a class="gh-brand" href="/" aria-label="Beta Relocation home">
            <img class="gh-favicon" src="/assets/favicon.png" alt="">
            <span class="gh-brand-text">
              <img class="gh-brand-logo" src="/assets/beta-relocation-logo.webp" alt="Beta Relocation">
            </span>
          </a>
          <nav class="gh-nav" aria-label="Primary navigation">
            <div class="gh-nav-item">
              <button class="gh-trigger" type="button" aria-haspopup="true">Services <i class="gh-chevron ${iconClass("arrow-down")}" aria-hidden="true"></i></button>
              <div class="gh-mega">
                <div class="gh-mega-grid">
                  <ul class="gh-mega-list">${megaItems(services.slice(0, 5))}</ul>
                  <ul class="gh-mega-list">${megaItems(services.slice(5))}</ul>
                  <div class="gh-mega-feature">
                    <h2>Book a London move fast</h2>
                    <p>Send postcodes, item photos, stairs, lift and parking notes on WhatsApp.</p>
                    <a class="gh-button gh-primary motion-3d-primary" href="${WHATSAPP}"><i class="${iconClass("whatsapp-business")}" aria-hidden="true"></i> WhatsApp quote</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="gh-nav-item">
              <button class="gh-trigger" type="button" aria-haspopup="true">Areas <i class="gh-chevron ${iconClass("arrow-down")}" aria-hidden="true"></i></button>
              <div class="gh-mega">
                <div class="gh-mega-grid">
                  <ul class="gh-mega-list">${megaItems(areas.slice(0, 3))}</ul>
                  <ul class="gh-mega-list">${megaItems(areas.slice(3))}</ul>
                  <div class="gh-mega-feature">
                    <h2>London-only coverage</h2>
                    <p>Focused on London moves, with local pages built around real access and parking details.</p>
                    <a class="gh-button gh-primary" href="/areas/"><i class="${iconClass("location")}" aria-hidden="true"></i> Check my area</a>
                  </div>
                </div>
              </div>
            </div>
            <a class="gh-link" href="/pricing/">Pricing</a>
            <a class="gh-link" href="/app/">App</a>
            <a class="gh-link" href="/#faqs">FAQ</a>
          </nav>
          <div class="gh-actions">
            <a class="gh-phone" href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a>
            <a class="gh-button" href="/app/"><i class="${iconClass("mobile")}" aria-hidden="true"></i> Get app</a>
            <a class="gh-button gh-primary motion-3d-primary" href="${WHATSAPP}"><i class="${iconClass("whatsapp-business")}" aria-hidden="true"></i> Quote</a>
            <button class="gh-menu-button" type="button" aria-label="Open menu" data-gh-open><i class="${iconClass("menu")}" aria-hidden="true"></i></button>
          </div>
        </div>
      </header>
      <div class="gh-countdown" data-gh-countdown>
        <div class="gh-container gh-countdown-inner">
          <i class="${iconClass("clock")}" aria-hidden="true"></i>
          <span data-gh-countdown-label>Same-day request window closes in</span>
          <span class="gh-countdown-time" data-gh-countdown-time>--:--:--</span>
          <a href="${WHATSAPP}">Check availability</a>
        </div>
      </div>
    `;
  }

  function drawerMarkup() {
    return `
      <div class="gh-drawer" data-gh-drawer aria-hidden="true">
        <div class="gh-panel">
          <div class="gh-drawer-head">
            <a class="gh-brand" href="/" aria-label="Beta Relocation home">
              <img class="gh-favicon" src="/assets/favicon.png" alt="">
              <span class="gh-brand-text">
                <img class="gh-brand-logo" src="/assets/beta-relocation-logo.webp" alt="Beta Relocation">
              </span>
            </a>
            <button class="gh-close" type="button" aria-label="Close menu" data-gh-close><i class="${iconClass("cancel")}" aria-hidden="true"></i></button>
          </div>
          <button class="gh-mobile-link" type="button" data-gh-mobile-target="services">Services <i class="gh-chevron ${iconClass("arrow-down")}" aria-hidden="true"></i></button>
          <button class="gh-mobile-link" type="button" data-gh-mobile-target="areas">Areas <i class="gh-chevron ${iconClass("arrow-down")}" aria-hidden="true"></i></button>
          <a class="gh-mobile-link" href="/pricing/">Pricing</a>
          <a class="gh-mobile-link" href="/app/">App</a>
          <a class="gh-mobile-link" href="/about/">About</a>
          <a class="gh-mobile-link" href="/contact/">Contact</a>
          <div class="gh-mobile-cta">
            <a class="gh-button gh-primary motion-3d-primary" href="${WHATSAPP}"><i class="${iconClass("whatsapp-business")}" aria-hidden="true"></i> WhatsApp quote</a>
            <a class="gh-button" href="tel:${PHONE_TEL}"><i class="${iconClass("phone")}" aria-hidden="true"></i> Call ${PHONE_DISPLAY}</a>
          </div>
        </div>
        <div class="gh-panel gh-panel-page" data-gh-mobile-page="services">
          <div class="gh-drawer-head">
            <button class="gh-back" type="button" data-gh-mobile-back><i class="gh-chevron ${iconClass("arrow-down")}" aria-hidden="true"></i> Back</button>
            <button class="gh-close" type="button" aria-label="Close menu" data-gh-close><i class="${iconClass("cancel")}" aria-hidden="true"></i></button>
          </div>
          <div class="gh-mobile-sub">${mobileItems(services)}</div>
        </div>
        <div class="gh-panel gh-panel-page" data-gh-mobile-page="areas">
          <div class="gh-drawer-head">
            <button class="gh-back" type="button" data-gh-mobile-back><i class="gh-chevron ${iconClass("arrow-down")}" aria-hidden="true"></i> Back</button>
            <button class="gh-close" type="button" aria-label="Close menu" data-gh-close><i class="${iconClass("cancel")}" aria-hidden="true"></i></button>
          </div>
          <div class="gh-mobile-sub">${mobileItems(areas)}</div>
        </div>
      </div>
    `;
  }

  function bottomNavMarkup() {
    return `
      <nav class="gh-bottom-nav" aria-label="Mobile quick actions">
        <a href="${WHATSAPP}"><i class="${iconClass("whatsapp-business")}" aria-hidden="true"></i><span>Quote</span></a>
        <a href="tel:${PHONE_TEL}"><i class="${iconClass("phone")}" aria-hidden="true"></i><span>Call</span></a>
        <a href="/pricing/"><i class="${iconClass("receipt-text")}" aria-hidden="true"></i><span>Pricing</span></a>
        <a href="/app/"><i class="${iconClass("mobile")}" aria-hidden="true"></i><span>App</span></a>
      </nav>
    `;
  }

  function scrollTopMarkup() {
    return `
      <button class="gh-scroll-top" type="button" aria-label="Go to top" data-gh-scroll-top style="--scroll-progress: 0deg;">
        <span class="gh-scroll-top-ring"></span>
        <i class="${iconClass("arrow-up")}" aria-hidden="true"></i>
      </button>
    `;
  }

  function setDrawer(drawerEl, open) {
    if (!drawerEl) return;
    drawerEl.classList.toggle("is-open", open);
    drawerEl.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      document.querySelectorAll("[data-gh-mobile-page]").forEach((page) => page.classList.remove("is-active"));
    }
  }

  function init() {
    if (!document.querySelector('link[href="https://iconsax.gitlab.io/i/icons.css"]')) {
      const iconsax = document.createElement("link");
      iconsax.rel = "stylesheet";
      iconsax.href = "https://iconsax.gitlab.io/i/icons.css";
      document.head.appendChild(iconsax);
    }
    if (!document.querySelector('link[href*="hgi-stroke-rounded.css"]')) {
      const hugeicons = document.createElement("link");
      hugeicons.rel = "stylesheet";
      hugeicons.href = "/assets/vendor/hugeicons/hgi-stroke-rounded.css";
      document.head.appendChild(hugeicons);
    }
    if (!document.querySelector('link[rel="icon"]')) {
      const icon = document.createElement("link");
      icon.rel = "icon";
      icon.href = "/assets/favicon.png";
      icon.type = "image/png";
      document.head.appendChild(icon);
    }
    if (!document.querySelector('link[rel="apple-touch-icon"]')) {
      const apple = document.createElement("link");
      apple.rel = "apple-touch-icon";
      apple.href = "/assets/beta-relocation-favicon.png";
      document.head.appendChild(apple);
    }

    const header = document.querySelector("[data-beta-global-header]");
    if (header) header.outerHTML = headerMarkup();

    const drawer = document.querySelector("[data-beta-global-drawer]");
    if (drawer) drawer.outerHTML = drawerMarkup();

    const bottom = document.querySelector("[data-beta-global-bottom-nav]");
    if (bottom) bottom.outerHTML = bottomNavMarkup();
    if (!document.querySelector("[data-gh-scroll-top]")) {
      document.body.insertAdjacentHTML("beforeend", scrollTopMarkup());
    }

    const drawerEl = document.querySelector("[data-gh-drawer]");
    const openBtn = document.querySelector("[data-gh-open]");
    const scrollTop = document.querySelector("[data-gh-scroll-top]");

    const syncMegaTop = () => {
      const headerEl = document.querySelector(".gh-header");
      if (!headerEl) return;
      document.documentElement.style.setProperty("--gh-mega-top", `${Math.round(headerEl.getBoundingClientRect().bottom)}px`);
    };

    const convertIconsaxToHugeicons = () => {
      document.querySelectorAll("i.iconsax[icon-name]").forEach((icon) => {
        const mapped = iconMap[icon.getAttribute("icon-name")];
        if (!mapped) return;
        icon.className = `hgi-stroke ${mapped}`;
        icon.removeAttribute("icon-name");
        icon.setAttribute("aria-hidden", "true");
      });
      document.querySelectorAll('a[href*="wa.me"] i').forEach((icon) => {
        icon.className = `hgi-stroke ${iconMap["whatsapp-business"]}`;
        icon.removeAttribute("icon-name");
        icon.setAttribute("aria-hidden", "true");
      });
    };

    syncMegaTop();
    convertIconsaxToHugeicons();
    window.addEventListener("resize", syncMegaTop);
    window.addEventListener("scroll", syncMegaTop, { passive: true });

    const updateScrollTop = () => {
      if (!scrollTop) return;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      scrollTop.style.setProperty("--scroll-progress", `${progress * 360}deg`);
      scrollTop.classList.toggle("is-visible", window.scrollY > 280);
      scrollTop.setAttribute("aria-label", `Go to top, ${Math.round(progress * 100)} percent scrolled`);
    };

    if (scrollTop) {
      scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
      updateScrollTop();
      window.addEventListener("scroll", updateScrollTop, { passive: true });
      window.addEventListener("resize", updateScrollTop);
    }

    const setupReveal = () => {
      const oneTimeTargets = Array.from(document.querySelectorAll([
        "main > section",
        ".card",
        ".service-card",
        ".area-card",
        ".trust-card",
        ".difference-card",
        ".cta-card",
        ".rate-card",
        ".calc-card",
        ".summary-card",
        ".beta-faq-item",
        ".faq-item",
        ".hero-media",
        ".service-image",
        ".article-image",
        ".blog-image",
        ".hero-card"
      ].join(","))).filter((el) => !el.closest(".gh-header") && !el.closest(".gh-drawer") && !el.closest(".gh-bottom-nav"));
      const textTargets = Array.from(document.querySelectorAll([
        ".hero .eyebrow",
        ".hero h1",
        ".section-head .eyebrow",
        ".section-head h2",
        ".section-head p",
        ".faq-section-head .eyebrow",
        ".faq-section-head h2"
      ].join(","))).filter((el) => !el.closest(".gh-header") && !el.closest(".gh-drawer") && !el.closest(".gh-bottom-nav"));
      const targets = [...oneTimeTargets, ...textTargets];

      if (!targets.length) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
        targets.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      targets.forEach((el, index) => {
        el.classList.add("beta-reveal");
        if (textTargets.includes(el)) el.classList.add("beta-text-reveal");
        if (el.matches(".hero-media, .service-image, .article-image, .blog-image")) el.classList.add("beta-image-reveal");
        el.dataset.revealDelay = String(index % 6);
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const isText = entry.target.classList.contains("beta-text-reveal");
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (!isText) observer.unobserve(entry.target);
            return;
          }
          if (isText) entry.target.classList.remove("is-visible");
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

      targets.forEach((el) => observer.observe(el));
    };

    setupReveal();

    const setupCountdown = () => {
      const box = document.querySelector("[data-gh-countdown]");
      const label = document.querySelector("[data-gh-countdown-label]");
      const time = document.querySelector("[data-gh-countdown-time]");
      if (!box || !label || !time) return;

      const londonParts = () => {
        const parts = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/London",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }).formatToParts(new Date()).reduce((acc, part) => {
          if (part.type !== "literal") acc[part.type] = Number(part.value);
          return acc;
        }, {});
        return parts;
      };

      const update = () => {
        const now = londonParts();
        const nowSeconds = (now.hour * 3600) + (now.minute * 60) + now.second;
        const cutoffSeconds = 14 * 3600;
        const nextOpenSeconds = 24 * 3600;
        let diff = cutoffSeconds - nowSeconds;

        if (diff > 0) {
          box.classList.remove("is-late");
          label.textContent = "Same-day request window closes in";
        } else {
          box.classList.add("is-late");
          label.textContent = "Same-day window passed today. Next request window opens in";
          diff = nextOpenSeconds - nowSeconds + (7 * 3600);
        }

        const hours = Math.floor(diff / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;
        time.textContent = [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
      };

      update();
      setInterval(update, 1000);
    };

    setupCountdown();

    const setupAnimatedPrices = () => {
      const format = (value) => `£${Math.round(value)}`;
      const parse = (text) => Number(String(text).replace(/[^0-9.]/g, "")) || 0;
      document.querySelectorAll("[data-total], [data-total-small]").forEach((el) => {
        let current = parse(el.textContent);
        const animateTo = (next) => {
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            el.textContent = format(next);
            current = next;
            return;
          }
          const start = current;
          const distance = next - start;
          const startTime = performance.now();
          const duration = 360;
          const tick = (now) => {
            const progress = Math.min(1, (now - startTime) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = format(start + (distance * eased));
            if (progress < 1) requestAnimationFrame(tick);
            else current = next;
          };
          requestAnimationFrame(tick);
        };
        const pop = () => {
          el.classList.remove("beta-price-pop");
          void el.offsetWidth;
          el.classList.add("beta-price-pop");
        };
        const observer = new MutationObserver(() => {
          const next = parse(el.textContent);
          if (next === current || el.dataset.animatingPrice === "true") return;
          el.dataset.animatingPrice = "true";
          pop();
          animateTo(next);
          setTimeout(() => { el.dataset.animatingPrice = "false"; }, 420);
        });
        observer.observe(el, { childList: true, characterData: true, subtree: true });
      });
    };

    setupAnimatedPrices();

    if (openBtn && drawerEl) {
      openBtn.addEventListener("click", () => setDrawer(drawerEl, true));
    }
    document.querySelectorAll("[data-gh-close]").forEach((button) => {
      button.addEventListener("click", () => setDrawer(drawerEl, false));
    });
    if (drawerEl) {
      drawerEl.addEventListener("click", (event) => {
        if (event.target === drawerEl) setDrawer(drawerEl, false);
      });
    }

    document.querySelectorAll("[data-gh-mobile-target]").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll("[data-gh-mobile-page]").forEach((page) => {
          page.classList.toggle("is-active", page.dataset.ghMobilePage === button.dataset.ghMobileTarget);
        });
      });
    });
    document.querySelectorAll("[data-gh-mobile-back]").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll("[data-gh-mobile-page]").forEach((page) => page.classList.remove("is-active"));
      });
    });

    document.querySelectorAll(".gh-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const item = trigger.closest(".gh-nav-item");
        document.querySelectorAll(".gh-nav-item.is-open").forEach((openItem) => {
          if (openItem !== item) openItem.classList.remove("is-open");
        });
        item.classList.toggle("is-open");
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".gh-nav-item")) {
        document.querySelectorAll(".gh-nav-item.is-open").forEach((item) => item.classList.remove("is-open"));
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setDrawer(drawerEl, false);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
