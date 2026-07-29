document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_LANG = "pathao_cx_lang_v2";
  const STORAGE_TOPIC = "pathao_cx_topic_v2";

  let currentLang = localStorage.getItem(STORAGE_LANG) || "bn";
  let activeTopicId = localStorage.getItem(STORAGE_TOPIC) || (typeof TOPICS !== "undefined" && TOPICS.length ? TOPICS[0].id : null);

  // DOM Elements
  const topicsGrid = document.getElementById("topics-grid");
  const topicsView = document.getElementById("topics-view");
  const detailView = document.getElementById("detail-view");
  const detailTitle = document.getElementById("detail-title");
  const detailContent = document.getElementById("detail-content");
  const backBtn = document.getElementById("back-btn");
  const backBtnText = document.getElementById("back-btn-text");
  const topicsTitle = document.getElementById("topics-title");
  const goHome = document.getElementById("go-home");

  const langBnBtn = document.getElementById("lang-bn");
  const langEnBtn = document.getElementById("lang-en");

  // UI Strings Dictionary
  const uiTexts = {
    bn: {
      topicsTitle: "একটি ট্রেনিং টপিক নির্বাচন করুন",
      backBtn: "সব টপিক",
      pageTitle: "Pathao Rides CX — ট্রেনিং ম্যাটেরিয়াল"
    },
    en: {
      topicsTitle: "Select a Training Topic",
      backBtn: "All Topics",
      pageTitle: "Pathao Rides CX — Training Material"
    }
  };

  // 1. Render Topics Cards
  function renderTopics() {
    if (!topicsGrid || typeof TOPICS === "undefined") return;
    topicsGrid.innerHTML = "";

    TOPICS.forEach((topic) => {
      const card = document.createElement("div");
      card.className = "topic-card";

      const titleText = topic.title[currentLang] || topic.title.bn;
      const subtitleText = topic.subtitle[currentLang] || topic.subtitle.bn;

      card.innerHTML = `
        <div class="topic-card-icon">
          <i class="fa-solid fa-${topic.icon || 'book'}"></i>
        </div>
        <div class="topic-card-content">
          <span class="topic-num">Topic ${topic.num}</span>
          <h3>${titleText}</h3>
          <p>${subtitleText}</p>
        </div>
      `;

      card.addEventListener("click", () => {
        showTopicDetail(topic.id);
      });

      topicsGrid.appendChild(card);
    });
  }

  // 2. Show Topic Details
  function showTopicDetail(id) {
    if (typeof TOPICS === "undefined") return;
    const topic = TOPICS.find((t) => t.id === id);
    if (!topic) return;

    activeTopicId = id;
    localStorage.setItem(STORAGE_TOPIC, activeTopicId);

    const titleText = topic.title[currentLang] || topic.title.bn;
    const contentHTML = topic.html[currentLang] || topic.html.bn;

    if (detailTitle) detailTitle.textContent = `${topic.num}: ${titleText}`;
    if (detailContent) {
      detailContent.innerHTML = contentHTML;
      setupInnerTabs();
    }

    // View Switching
    if (topicsView) {
      topicsView.classList.remove("active-view");
      topicsView.style.display = "none";
    }

    if (detailView) {
      detailView.classList.add("active-view");
      detailView.style.display = "block";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 3. Setup Inner Sub-tabs within Content
  function setupInnerTabs() {
    if (!detailContent) return;
    const tabGroups = detailContent.querySelectorAll(".tabs-inner");

    tabGroups.forEach((group) => {
      const tabBtns = group.querySelectorAll(".tin-btn");
      const tabPanes = group.querySelectorAll(".tin-pane");

      tabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const targetId = btn.getAttribute("data-target");

          tabBtns.forEach((b) => b.classList.remove("active"));
          tabPanes.forEach((p) => p.classList.remove("active"));

          btn.classList.add("active");
          const targetPane = group.querySelector(`#${targetId}`);
          if (targetPane) {
            targetPane.classList.add("active");
          }
        });
      });
    });
  }

  // 4. Back to Main Topics List View
  function showTopicsList() {
    activeTopicId = null;
    localStorage.removeItem(STORAGE_TOPIC);

    if (detailView) {
      detailView.classList.remove("active-view");
      detailView.style.display = "none";
    }

    if (topicsView) {
      topicsView.classList.add("active-view");
      topicsView.style.display = "block";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 5. Update Language State
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_LANG, currentLang);
    document.documentElement.lang = currentLang;
    document.title = uiTexts[currentLang].pageTitle;

    if (currentLang === "bn") {
      langBnBtn?.classList.add("active");
      langEnBtn?.classList.remove("active");
    } else {
      langEnBtn?.classList.add("active");
      langBnBtn?.classList.remove("active");
    }

    if (topicsTitle) topicsTitle.textContent = uiTexts[currentLang].topicsTitle;
    if (backBtnText) backBtnText.textContent = uiTexts[currentLang].backBtn;

    renderTopics();

    if (activeTopicId) {
      showTopicDetail(activeTopicId);
    }
  }

  // Event Listeners
  backBtn?.addEventListener("click", showTopicsList);
  goHome?.addEventListener("click", showTopicsList);
  langBnBtn?.addEventListener("click", () => setLanguage("bn"));
  langEnBtn?.addEventListener("click", () => setLanguage("en"));

  // Initial Load
  setLanguage(currentLang);
  
  // Restore view if active topic stored
  if (activeTopicId && TOPICS.some(t => t.id === activeTopicId)) {
    showTopicDetail(activeTopicId);
  } else {
    showTopicsList();
  }
});
