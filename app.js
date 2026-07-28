(function () {
  "use strict";

  const STRINGS = {
    bn: {
      brandTitle: "Pathao Rides CX",
      brandSub: "ট্রেনিং ম্যাটেরিয়াল",
      topicsLabel: "টপিকস",
      footerNote: "পাঠাও রাইডস কাস্টমার এক্সপেরিয়েন্স টিমের জন্য প্রস্তুতকৃত।"
    },
    en: {
      brandTitle: "Pathao Rides CX",
      brandSub: "Training Material",
      topicsLabel: "Topics",
      footerNote: "Prepared for the Pathao Rides Customer Experience team."
    }
  };

  const STORAGE_LANG = "pathao_cx_lang";
  const STORAGE_TOPIC = "pathao_cx_topic";

  let lang = localStorage.getItem(STORAGE_LANG) || "bn";
  let activeTopic = localStorage.getItem(STORAGE_TOPIC) || (TOPICS[0] && TOPICS[0].id);

  const topicListEl = document.getElementById("topicList");
  const heroEyebrow = document.getElementById("heroEyebrow");
  const heroTitle = document.getElementById("heroTitle");
  const heroSubtitle = document.getElementById("heroSubtitle");
  const panelEl = document.getElementById("panel");
  const btnBn = document.getElementById("btnBn");
  const btnEn = document.getElementById("btnEn");
  const sideNav = document.getElementById("sideNav");
  const menuToggle = document.getElementById("menuToggle");
  const scrim = document.getElementById("scrim");

  function applyStrings() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (STRINGS[lang][key]) el.textContent = STRINGS[lang][key];
    });
    document.documentElement.lang = lang;
    document.title = lang === "bn"
      ? "Pathao Rides CX — ট্রেনিং ম্যাটেরিয়াল"
      : "Pathao Rides CX — Training Material";
  }

  function renderNav() {
    topicListEl.innerHTML = "";
    TOPICS.forEach((t) => {
      const btn = document.createElement("button");
      btn.className = "topic-item" + (t.id === activeTopic ? " active" : "");
      btn.setAttribute("data-topic", t.id);
      btn.innerHTML = `
        <span class="topic-stop">${t.num}</span>
        <span class="topic-body">
          <span class="topic-title">${t.title[lang]}</span>
          <span class="topic-sub">${t.subtitle[lang]}</span>
        </span>`;
      btn.addEventListener("click", () => {
        activeTopic = t.id;
        localStorage.setItem(STORAGE_TOPIC, activeTopic);
        renderNav();
        renderContent();
        closeMobileNav();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      topicListEl.appendChild(btn);
    });
  }

  function bindInnerTabs(root) {
    const groups = {};
    root.querySelectorAll(".tin-btn").forEach((btn) => {
      const nav = btn.parentElement;
      if (!groups[nav.dataset.group || nav.outerHTML.slice(0, 10) + Math.random()]) {
        // noop grouping key set below anyway
      }
      btn.addEventListener("click", () => {
        const navEl = btn.closest(".tabs-inner-nav");
        const container = btn.closest(".tabs-inner");
        navEl.querySelectorAll(".tin-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const targetId = btn.getAttribute("data-target");
        container.querySelectorAll(".tin-pane").forEach((p) => p.classList.remove("active"));
        const targetPane = container.querySelector("#" + targetId);
        if (targetPane) targetPane.classList.add("active");
      });
    });
  }

  function renderContent() {
    const topic = TOPICS.find((t) => t.id === activeTopic) || TOPICS[0];
    const idx = TOPICS.indexOf(topic) + 1;
    const total = TOPICS.length;
    heroEyebrow.textContent = String(idx).padStart(2, "0") + " / " + String(total).padStart(2, "0");
    heroTitle.textContent = topic.title[lang];
    heroSubtitle.textContent = topic.subtitle[lang];
    panelEl.innerHTML = topic.html[lang];
    bindInnerTabs(panelEl);
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem(STORAGE_LANG, lang);
    btnBn.classList.toggle("active", lang === "bn");
    btnEn.classList.toggle("active", lang === "en");
    applyStrings();
    renderNav();
    renderContent();
  }

  function openMobileNav() {
    sideNav.classList.add("open");
    scrim.classList.add("show");
    menuToggle.setAttribute("aria-expanded", "true");
  }
  function closeMobileNav() {
    sideNav.classList.remove("open");
    scrim.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", () => {
    sideNav.classList.contains("open") ? closeMobileNav() : openMobileNav();
  });
  scrim.addEventListener("click", closeMobileNav);

  btnBn.addEventListener("click", () => setLang("bn"));
  btnEn.addEventListener("click", () => setLang("en"));

  // init
  if (!TOPICS.find((t) => t.id === activeTopic)) activeTopic = TOPICS[0].id;
  btnBn.classList.toggle("active", lang === "bn");
  btnEn.classList.toggle("active", lang === "en");
  applyStrings();
  renderNav();
  renderContent();
})();
