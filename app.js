(function () {
  "use strict";

  const STRINGS = {
    bn: {
      brandTitle: "Pathao Rides CX",
      brandSub: "ট্রেনিং ম্যাটেরিয়াল",
      welcomeTitle: "পাঠাও রাইডস ট্রেনিং গাইডে স্বাগতম",
      welcomeSubtitle: "কাস্টমার এক্সপেরিয়েন্স, রাইড ফ্লো এবং ইন্টারনাল টুলস সহজে শিখুন।",
      btnChooseTopic: "টপিক নির্বাচন করুন",
      topicsTitle: "একটি ট্রেনিং টপিক নির্বাচন করুন",
      backHome: "হোম",
      backTopics: "সব টপিক"
    },
    en: {
      brandTitle: "Pathao Rides CX",
      brandSub: "Training Material",
      welcomeTitle: "Welcome to Pathao Rides Training Guide",
      welcomeSubtitle: "Master customer experience, ride flows, and internal tools with ease.",
      btnChooseTopic: "Choose your Topic",
      topicsTitle: "Select a Training Topic",
      backHome: "Home",
      backTopics: "All Topics"
    }
  };

  const STORAGE_LANG = "pathao_cx_lang_v2";
  const STORAGE_TOPIC = "pathao_cx_topic_v2";

  let lang = localStorage.getItem(STORAGE_LANG) || "bn";
  let activeTopic = localStorage.getItem(STORAGE_TOPIC) || (typeof TOPICS !== "undefined" && TOPICS[0] ? TOPICS[0].id : "");

  // Topic ID to Theme Class Mapping
  const THEME_MAP = {
    joining: "theme-joining",
    bonus: "theme-joining",
    star: "theme-star",
    fare: "theme-fare",
    due: "theme-due",
    flag: "theme-flag",
    "payment-flow": "theme-payment",
    "sops-tools": "theme-payment"
  };

  // DOM Elements
  const btnBn = document.getElementById("lang-bn");
  const btnEn = document.getElementById("lang-en");
  const goHome = document.getElementById("go-home");

  const welcomeView = document.getElementById("welcome-view");
  const topicsView = document.getElementById("topics-view");
  const detailView = document.getElementById("detail-view");

  const welcomeTitle = document.getElementById("welcome-title");
  const welcomeSubtitle = document.getElementById("welcome-subtitle");
  const btnChooseTopic = document.getElementById("btn-choose-topic");
  const btnText = document.getElementById("btn-text");

  const topicsTitle = document.getElementById("topics-title");
  const topicsGrid = document.getElementById("topics-grid");
  const backToHome = document.getElementById("back-to-home");

  const backToTopics = document.getElementById("back-to-topics");
  const detailTopicTitle = document.getElementById("detail-topic-title");
  const contentDisplay = document.getElementById("content-display");

  // View Switcher Helper
  function showView(viewEl) {
    [welcomeView, topicsView, detailView].forEach((v) => {
      if (v) v.classList.remove("active-view");
    });
    if (viewEl) viewEl.classList.add("active-view");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Apply Multilingual Strings
  function applyStrings() {
    document.documentElement.lang = lang;
    document.title = lang === "bn"
      ? "Pathao Rides CX — ট্রেনিং ম্যাটেরিয়াল"
      : "Pathao Rides CX — Training Material";

    if (welcomeTitle) welcomeTitle.textContent = STRINGS[lang].welcomeTitle;
    if (welcomeSubtitle) welcomeSubtitle.textContent = STRINGS[lang].welcomeSubtitle;
    if (btnText) btnText.textContent = STRINGS[lang].btnChooseTopic;
    if (topicsTitle) topicsTitle.textContent = STRINGS[lang].topicsTitle;

    if (backToHome) {
      backToHome.innerHTML = `<i class="fas fa-chevron-left"></i> ${STRINGS[lang].backHome}`;
    }
    if (backToTopics) {
      backToTopics.innerHTML = `<i class="fas fa-chevron-left"></i> ${STRINGS[lang].backTopics}`;
    }
  }

  // Render Topic Cards Grid
  function renderTopicsGrid() {
    if (!topicsGrid || typeof TOPICS === "undefined") return;
    topicsGrid.innerHTML = "";

    TOPICS.forEach((t) => {
      const card = document.createElement("div");
      card.className = "topic-card";
      card.innerHTML = `
        <div class="topic-card-icon">
          <i class="fas fa-${t.icon || 'book'}"></i>
        </div>
        <div class="topic-card-content">
          <span class="topic-num">Topic ${t.num}</span>
          <h3>${t.title[lang]}</h3>
          <p>${t.subtitle[lang]}</p>
        </div>
      `;

      card.addEventListener("click", () => {
        activeTopic = t.id;
        localStorage.setItem(STORAGE_TOPIC, activeTopic);
        renderDetailContent();
        showView(detailView);
      });

      topicsGrid.appendChild(card);
    });
  }

  // Inner Tabs Click Handling
  function bindInnerTabs(root) {
    if (!root) return;
    root.querySelectorAll(".tin-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const navEl = btn.closest(".tabs-inner-nav");
        const container = btn.closest(".tabs-inner");
        if (!navEl || !container) return;

        navEl.querySelectorAll(".tin-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const targetId = btn.getAttribute("data-target");
        container.querySelectorAll(".tin-pane").forEach((p) => p.classList.remove("active"));

        const targetPane = container.querySelector("#" + targetId);
        if (targetPane) targetPane.classList.add("active");
      });
    });
  }

  // Apply Topic Theme CSS Class Dynamic
  function applyTopicTheme(topicId) {
    if (!contentDisplay) return;
    
    // Clean old themes
    Object.values(THEME_MAP).forEach((cls) => contentDisplay.classList.remove(cls));
    
    // Add current theme
    const themeClass = THEME_MAP[topicId] || "theme-joining";
    contentDisplay.classList.add(themeClass);
  }

  // Render Content Details
  function renderDetailContent() {
    if (typeof TOPICS === "undefined" || !TOPICS.length) return;
    const topic = TOPICS.find((t) => t.id === activeTopic) || TOPICS[0];

    if (detailTopicTitle) detailTopicTitle.textContent = topic.title[lang];
    if (contentDisplay) {
      applyTopicTheme(topic.id);
      contentDisplay.innerHTML = topic.html[lang];
      bindInnerTabs(contentDisplay);
    }
  }

  // Switch Language
  function setLang(next) {
    lang = next;
    localStorage.setItem(STORAGE_LANG, lang);

    btnBn?.classList.toggle("active", lang === "bn");
    btnEn?.classList.toggle("active", lang === "en");

    applyStrings();
    renderTopicsGrid();
    renderDetailContent();
  }

  // Event Listeners
  btnBn?.addEventListener("click", () => setLang("bn"));
  btnEn?.addEventListener("click", () => setLang("en"));

  goHome?.addEventListener("click", () => showView(welcomeView));
  btnChooseTopic?.addEventListener("click", () => showView(topicsView));
  backToHome?.addEventListener("click", () => showView(welcomeView));
  backToTopics?.addEventListener("click", () => showView(topicsView));

  // Initialize
  function init() {
    if (typeof TOPICS !== "undefined" && TOPICS.length > 0) {
      if (!TOPICS.find((t) => t.id === activeTopic)) {
        activeTopic = TOPICS[0].id;
      }
    }

    btnBn?.classList.toggle("active", lang === "bn");
    btnEn?.classList.toggle("active", lang === "en");

    applyStrings();
    renderTopicsGrid();
    renderDetailContent();
  }

  init();
})();
