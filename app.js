(function () {
  "use strict";

  // ১. TOPICS Array সংজ্ঞায়িত করা হলো (সব ১০টি টপিকের জন্য)
  const TOPICS = [
    {
      id: "joining",
      num: "01",
      icon: "user-plus",
      title: { bn: "রাইডার জয়েনিং প্রক্রিয়া", en: "Rider Onboarding Process" },
      subtitle: { bn: "যোগ্যতা, কাগজপত্র ও রেজিস্ট্রেশন", en: "Eligibility, documents & registration" },
      html: {
        bn: "<section class='section-card'><h3>১. প্রয়োজনীয় কাগজপত্র</h3><p>জাতীয় পরিচয়পত্র, ড্রাইভিং লাইসেন্স এবং বাইকের সঠিক কাগজপত্র প্রয়োজন।</p></section>",
        en: "<section class='section-card'><h3>1. Required Documents</h3><p>National ID, Driving License, and valid Vehicle Documents are required.</p></section>"
      }
    },
    {
      id: "bonus",
      num: "02",
      icon: "gift",
      title: { bn: "জয়েনিং বোনাস ও রেফারেল প্রোগ্রাম", en: "Joining Bonus & Referral Program" },
      subtitle: { bn: "বাইক, কার ও পার্সেলের বোনাস কাঠামো", en: "Bonus structure for Bike, Car & Parcel" },
      html: {
        bn: "<section class='section-card'><h3>১. রেফারেল বোনাস</h3><p>নতুন রাইডার রেফার করে আকর্ষণীয় বোনাস উপভোগ করুন।</p></section>",
        en: "<section class='section-card'><h3>1. Referral Bonus</h3><p>Refer new riders and earn exciting bonuses.</p></section>"
      }
    },
    {
      id: "star",
      num: "03",
      icon: "star",
      title: { bn: "স্টার প্রোগ্রাম", en: "Star Program" },
      subtitle: { bn: "প্লাটিনাম, গোল্ড ও সিলভার স্ট্যাটাস", en: "Platinum, Gold & Silver Tier Status" },
      html: {
        bn: "<section class='section-card'><h3>১. স্ট্যাটাস লেভেল</h3><p>পারফরম্যান্সের উপর ভিত্তি করে প্লাটিনাম, গোল্ড ও সিলভার টায়ার নির্ধারিত হয়।</p></section>",
        en: "<section class='section-card'><h3>1. Status Levels</h3><p>Platinum, Gold, and Silver tiers based on performance.</p></section>"
      }
    },
    {
      id: "fare",
      num: "04",
      icon: "wallet",
      title: { bn: "ভাড়া তথ্য", en: "Fare Information" },
      subtitle: { bn: "পার্সেল, বাইক ও কার সেবার ভাড়া কাঠামো", en: "Fare structure for Parcel, Bike & Car" },
      html: {
        bn: "<section class='section-card'><h3>১. বেস ফেয়ার</h3><p>দূরত্ব এবং সময়ের উপর ভিত্তি করে ভাড়া হিসাব করা হয়।</p></section>",
        en: "<section class='section-card'><h3>1. Base Fare</h3><p>Fare is calculated based on distance and time elapsed.</p></section>"
      }
    },
    {
      id: "due",
      num: "05",
      icon: "credit-card",
      title: { bn: "ডিউ ও পেমেন্ট", en: "Due & Payment" },
      subtitle: { bn: "ডিউ লিমিট ও পরিশোধ প্রক্রিয়া", en: "Due limit and repayment methods" },
      html: {
        bn: "<section class='section-card'><h3>১. ডিউ পরিশোধ</h3><p>ডিজিটাল পেমেন্টের মাধ্যমে সহজেই আপনার ডিউ পরিশোধ করুন।</p></section>",
        en: "<section class='section-card'><h3>1. Due Repayment</h3><p>Clear your pending dues easily via digital payments.</p></section>"
      }
    },
    {
      id: "flag",
      num: "06",
      icon: "flag",
      title: { bn: "ফ্ল্যাগড ট্রিপ", en: "Flagged Trip" },
      subtitle: { bn: "কারণ, প্রতিরোধ ও রিভিউ প্রক্রিয়া", en: "Reasons, prevention & review flow" },
      html: {
        bn: "<section class='section-card'><h3>১. রিভিউ পদ্ধতি</h3><p>যেকোনো অস্বাভাবিক ট্রিপ পর্যালোচনার আওতায় আনা হয়।</p></section>",
        en: "<section class='section-card'><h3>1. Review Process</h3><p>Any abnormal ride is subject to internal review.</p></section>"
      }
    },
    {
      id: "payment-flow",
      num: "07",
      icon: "arrows-split-up-and-left",
      title: { bn: "পেমেন্ট ফ্লো", en: "Payment Flow" },
      subtitle: { bn: "ডিজিটাল, পে-লেটার ও ডিউ পেমেন্ট ফ্লো", en: "Digital, Pay Later & Due flows" },
      html: {
        bn: "<section class='section-card'><h3>১. ডিজিটাল পেমেন্ট</h3><p>কাস্টমার সরাসরি বিকাশ বা কার্ডের মাধ্যমে পেমেন্ট করতে পারেন।</p></section>",
        en: "<section class='section-card'><h3>1. Digital Payment</h3><p>Customers can pay directly via bKash or Cards.</p></section>"
      }
    },
    {
      id: "sops-tools",
      num: "08",
      icon: "toolbox",
      title: { bn: "SOP ও ইন্টারনাল টুলস", en: "SOPs & Internal Tools" },
      subtitle: { bn: "জরুরি SOP লিংক ও ইন্টারনাল টুলস", en: "Important SOP links and internal tools" },
      html: {
        bn: "<section class='section-card'><h3>১. ইন্টারনাল টুলস</h3><p>সমস্যা সমাধানের জন্য অভ্যন্তরীণ টুলস ও নির্দেশিকা অনুসরণ করুন।</p></section>",
        en: "<section class='section-card'><h3>1. Internal Tools</h3><p>Follow internal tools and guidelines for issue resolution.</p></section>"
      }
    },
    {
      id: "parcel",
      num: "09",
      icon: "box",
      title: { bn: "পার্সেল সার্ভিস", en: "Parcel Service" },
      subtitle: { bn: "ডেলিভারি গাইডলাইন, রিটার্ন নীতি ও বিস্তারিত", en: "Delivery guidelines, return policy & details" },
      html: {
        bn: "<section class='section-card'><h3>১. পার্সেল ওভারভিউ</h3><p>নিরাপদে ও দ্রুত পার্সেল ডেলিভারির গাইডলাইন। দাহ্য বা অবৈধ বস্তু পরিবহন সম্পূর্ণ নিষেধ।</p></section>",
        en: "<section class='section-card'><h3>1. Parcel Overview</h3><p>Guidelines for safe parcel delivery. Carrying hazardous or illegal items is strictly prohibited.</p></section>"
      }
    },
    {
      id: "qa-param",
      num: "10",
      icon: "list-check",
      title: { bn: "QA Parameter", en: "QA Parameter" },
      subtitle: { bn: "কোয়ালিটি অ্যাসিওরেন্স মানদণ্ড ও স্কোরিং গাইড", en: "Quality Assurance standards & scoring guide" },
      html: {
        bn: `<section class='section-card'>
               <h3>কোয়ালিটি অ্যাসিওরেন্স মানদণ্ড</h3>
               <table class='cx-table'>
                 <thead><tr><th>প্যারামিটার</th><th>বিবরণ</th><th>স্কোর</th></tr></thead>
                 <tbody>
                   <tr><td>Greeting</td><td>পেশাদার সম্ভাষণ</td><td>15%</td></tr>
                   <tr><td>Active Listening</td><td>মনোযোগ দিয়ে শোনা</td><td>20%</td></tr>
                   <tr><td>Correct Info</td><td>সঠিক SOP অনুসরণ</td><td>35%</td></tr>
                 </tbody>
               </table>
             </section>`,
        en: `<section class='section-card'>
               <h3>Quality Assurance Standards</h3>
               <table class='cx-table'>
                 <thead><tr><th>Parameter</th><th>Description</th><th>Score</th></tr></thead>
                 <tbody>
                   <tr><td>Greeting</td><td>Professional greeting</td><td>15%</td></tr>
                   <tr><td>Active Listening</td><td>Listening attentively</td><td>20%</td></tr>
                   <tr><td>Correct Info</td><td>Following correct SOP</td><td>35%</td></tr>
                 </tbody>
               </table>
             </section>`
      }
    }
  ];

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
  let activeTopic = localStorage.getItem(STORAGE_TOPIC) || (TOPICS[0] ? TOPICS[0].id : "");

  // Topic ID to Theme Class Mapping (নতুন টপিকসহ আপডেট করা হয়েছে)
  const THEME_MAP = {
    joining: "theme-joining",
    bonus: "theme-joining",
    star: "theme-star",
    fare: "theme-fare",
    due: "theme-due",
    flag: "theme-flag",
    "payment-flow": "theme-payment",
    "sops-tools": "theme-payment",
    parcel: "theme-joining",
    "qa-param": "theme-payment"
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
    if (!topicsGrid) return;
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
    if (!TOPICS.length) return;
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
    if (TOPICS.length > 0) {
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
