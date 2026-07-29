(function () {
  "use strict";

  const STRINGS = {
    bn: {
      welcomeTitle: "Welcome To Pathao Ride CX Training Guide",
      welcomeSubtitle: "কাস্টমার এক্সপেরিয়েন্স, রাইড ফ্লো এবং ইন্টারনাল টুলস সহজে শিখুন।",
      btnChooseTopic: "টপিক নির্বাচন করুন",
      topicsTitle: "একটি ট্রেনিং টপিক নির্বাচন করুন",
      backHome: "হোম",
      backTopics: "সব টপিক"
    },
    en: {
      welcomeTitle: "Welcome To Pathao Ride CX Training Guide",
      welcomeSubtitle: "Master customer experience, ride flows, and internal tools with ease.",
      btnChooseTopic: "Choose your Topic",
      topicsTitle: "Select a Training Topic",
      backHome: "Home",
      backTopics: "All Topics"
    }
  };

  const STORAGE_LANG = "pathao_cx_lang_v3";
  const STORAGE_TOPIC = "pathao_cx_topic_v3";

  // Safeguard in case TOPICS is not loaded properly
  const safeTopics = (typeof TOPICS !== "undefined" && Array.isArray(TOPICS)) ? TOPICS : [];

  let lang = localStorage.getItem(STORAGE_LANG) || "bn";
  let activeTopic = localStorage.getItem(STORAGE_TOPIC) || (safeTopics[0] ? safeTopics[0].id : "");

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

  // View Switcher with Smooth Animation
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
    if (!topicsGrid) return;
    topicsGrid.innerHTML = "";

    if (!safeTopics.length) {
      topicsGrid.innerHTML = "<p>No topics available.</p>";
      return;
    }

    safeTopics.forEach((t) => {
      const card = document.createElement("div");
      card.className = "topic-card";
      card.innerHTML = `
        <div class="topic-card-icon">
          <i class="fas fa-${t.icon || 'book'}"></i>
        </div>
        <div class="topic-card-content">
          <span class="topic-num">TOPIC ${t.num}</span>
          <h3>${t.title ? t.title[lang] : ''}</h3>
          <p>${t.subtitle ? t.subtitle[lang] : ''}</p>
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

  // Bind Inner Tabs with animation
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

  // Render Topic Content with Animation
  function renderDetailContent() {
    if (!safeTopics.length) return;
    const topic = safeTopics.find((t) => t.id === activeTopic) || safeTopics[0];

    if (detailTopicTitle) detailTopicTitle.textContent = topic.title ? topic.title[lang] : '';
    if (contentDisplay) {
      contentDisplay.style.animation = 'none';
      contentDisplay.offsetHeight; // Trigger reflow
      contentDisplay.style.animation = null;

      contentDisplay.innerHTML = (topic.html && topic.html[lang]) ? topic.html[lang] : "<p>Content coming soon...</p>";
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

  // Initialization
  function init() {
    btnBn?.classList.toggle("active", lang === "bn");
    btnEn?.classList.toggle("active", lang === "en");

    applyStrings();
    renderTopicsGrid();
    renderDetailContent();
    showView(welcomeView); // Always start at Welcome Home View
  }

  init();
})();
