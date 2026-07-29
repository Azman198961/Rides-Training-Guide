document.addEventListener("DOMContentLoaded", () => {
  let currentLang = "bn";
  let activeTopicId = null;

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

  // UI Strings Translation Dictionary
  const uiTexts = {
    bn: {
      topicsTitle: "একটি ট্রেনিং টপিক নির্বাচন করুন",
      backBtn: "সব টপিক"
    },
    en: {
      topicsTitle: "Select a Training Topic",
      backBtn: "All Topics"
    }
  };

  // 1. Render Topics Cards in Grid
  function renderTopics() {
    if (!topicsGrid) return;
    topicsGrid.innerHTML = "";

    TOPICS.forEach((topic) => {
      const card = document.createElement("div");
      card.className = "topic-card";

      const titleText = topic.title[currentLang] || topic.title.bn;
      const subtitleText = topic.subtitle[currentLang] || topic.subtitle.bn;

      card.innerHTML = `
        <div class="topic-card-icon">
          <i class="fa-solid fa-${topic.icon}"></i>
        </div>
        <div class="topic-card-content">
          <span class="topic-num">${topic.num}</span>
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
    const topic = TOPICS.find((t) => t.id === id);
    if (!topic) return;

    activeTopicId = id;
    const titleText = topic.title[currentLang] || topic.title.bn;
    const contentHTML = topic.html[currentLang] || topic.html.bn;

    detailTitle.textContent = `${topic.num}: ${titleText}`;
    detailContent.innerHTML = contentHTML;

    // View Switching
    topicsView.classList.remove("active-view");
    topicsView.style.display = "none";

    detailView.classList.add("active-view");
    detailView.style.display = "block";

    // Setup inner tab interactions if any exist in loaded HTML
    setupInnerTabs();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 3. Setup Inner Sub-tabs within Content
  function setupInnerTabs() {
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
    detailView.classList.remove("active-view");
    detailView.style.display = "none";

    topicsView.classList.add("active-view");
    topicsView.style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 5. Update Language State
  function setLanguage(lang) {
    currentLang = lang;

    if (lang === "bn") {
      langBnBtn.classList.add("active");
      langEnBtn.classList.remove("active");
    } else {
      langEnBtn.classList.add("active");
      langBnBtn.classList.remove("active");
    }

    // Update Headers Text
    topicsTitle.textContent = uiTexts[currentLang].topicsTitle;
    backBtnText.textContent = uiTexts[currentLang].backBtn;

    // Re-render UI
    renderTopics();

    // If detail view is currently active, refresh its content language
    if (activeTopicId) {
      showTopicDetail(activeTopicId);
    }
  }

  // Event Listeners
  if (backBtn) {
    backBtn.addEventListener("click", showTopicsList);
  }

  if (goHome) {
    goHome.addEventListener("click", showTopicsList);
  }

  if (langBnBtn) {
    langBnBtn.addEventListener("click", () => setLanguage("bn"));
  }

  if (langEnBtn) {
    langEnBtn.addEventListener("click", () => setLanguage("en"));
  }

  // Initial Load
  renderTopics();
});
