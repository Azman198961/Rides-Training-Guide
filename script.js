document.addEventListener("DOMContentLoaded", () => {
  const topicsGrid = document.getElementById("topics-grid");
  const topicsView = document.getElementById("topics-view");
  const detailView = document.getElementById("detail-view");
  const detailTitle = document.getElementById("detail-title");
  const detailContent = document.getElementById("detail-content");
  const backBtn = document.getElementById("back-btn");

  // ১. Topics Grid-এ কার্ডসমূহ লোড করা
  function renderTopics() {
    if (!topicsGrid) return;
    topicsGrid.innerHTML = "";

    Object.keys(topicData).forEach((id) => {
      const topic = topicData[id];
      const card = document.createElement("div");
      card.className = "topic-card";
      
      card.innerHTML = `
        <div class="topic-icon">
          <i class="fas fa-${topic.icon}"></i>
        </div>
        <div class="topic-info">
          <span class="topic-num">${topic.num}</span>
          <h3>${topic.title}</h3>
          <p>${topic.subtitle}</p>
        </div>
      `;

      // কার্ডে ক্লিক করলে Detail View চালু হবে
      card.addEventListener("click", () => {
        showTopicDetail(id);
      });

      topicsGrid.appendChild(card);
    });
  }

  // ২. নির্দিষ্ট টপিকের তথ্যাদি Detail View-এ দেখানো
  function showTopicDetail(id) {
    const topic = topicData[id];
    if (topic) {
      detailTitle.textContent = `${topic.num}: ${topic.title}`;
      detailContent.innerHTML = topic.content;

      // Modal এর বদলে View Switch করা
      topicsView.style.display = "none";
      detailView.style.display = "block";

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // ৩. ব্যাক বাটনে ক্লিক করলে আবার হোম পেজ/গ্রিডে ফেরত নিয়ে যাওয়া
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      detailView.style.display = "none";
      topicsView.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ইনিশিয়াল লোড
  renderTopics();
});
