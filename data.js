const TOPICS = [
  {
    id: "joining",
    num: "01",
    icon: "user-plus",
    title: { bn: "রাইডার জয়েনিং প্রক্রিয়া", en: "Rider Joining Process" },
    subtitle: { bn: "যোগ্যতা, কাগজপত্র ও রেজিস্ট্রেশন", en: "Eligibility, documents & registration" },
    html: {
      bn: `
        <div class="theme-joining content-box">
          <p>এই অংশে বাইক, কার, পার্সেল এবং সিএনজি রাইডারদের পাঠাও-এ যুক্ত হওয়ার সম্পূর্ণ প্রক্রিয়া নিয়ে আলোচনা করা হলো।</p>
          
          <h2 style="margin-top:20px;">১. যানবাহনের যোগ্যতা</h2>
          <table class="cx-table">
            <thead>
              <tr><th>যানবাহনের ধরন</th><th>ন্যূনতম সিসি/ইঞ্জিন ক্ষমতা</th><th>মডেল বছর</th></tr>
            </thead>
            <tbody>
              <tr><td>বাইক</td><td>১০- সিসি</td><td>প্রযোজ্য নয়</td></tr>
              <tr><td>কার</td><td>১০০০ সিসি</td><td>১৯৯৫ বা তার বেশি</td></tr>
              <tr><td>পার্সেল</td><td>বাইক এর মত</td><td>প্রযোজ্য নয়</td></tr>
              <tr><td>সিএনজি</td><td>প্রযোজ্য নয়</td><td>প্রযোজ্য নয়</td></tr>
            </tbody>
          </table>

          <h2 style="margin-top:25px;">২. জয়েনিং এর জন্য প্রয়োজনীয় কাগজপত্র</h2>
          <table class="cx-table">
            <thead>
              <tr><th>যানবাহনের ধরন</th><th>প্রয়োজনীয় কাগজপত্র</th></tr>
            </thead>
            <tbody>
              <tr><td>বাইক</td><td>জাতীয় পরিচয় পত্র, ড্রাইভিং লাইসেন্স (ফিজিক্যাল/অনলাইন কপি, পেশাদারি বা অপেশাদারি) অথবা ডেলিভারি রসিদ, রেজিস্ট্রেশন পেপার অথবা প্রাপ্তি স্বীকার রসিদ, ট্যাক্স টোকেন, ইন্স্যুরেন্স পেপার (ঐচ্ছিক), মালিকের জাতীয় পরিচয় পত্র (যদি নিজে গাড়ির মালিক না হন)</td></tr>
              <tr><td>কার</td><td>জাতীয় পরিচয়পত্র (NID), ড্রাইভিং লাইসেন্স (পেশাদারি/অপেশাদারি), গাড়ির রেজিস্ট্রেশন পেপার, ট্যাক্স টোকেন, ফিটনেস পেপার, ইন্স্যুরেন্স পেপার, মালিকের জাতীয় পরিচয়পত্র (যদি ক্যাপ্টেন গাড়ির মালিক না হন)</td></tr>
              <tr><td>পার্সেল - বাইক</td><td>বাইকের জন্য প্রযোজ্য সকল কাগজপত্র</td></tr>
              <tr><td>পার্সেল - সাইকেল</td><td>জাতীয় পরিচয় পত্রের মূল কপি (না থাকলে QR কোডসহ অনলাইন কপি), রেফারেন্স (মা/বাবা/ভাই/বোন) এর জাতীয় পরিচয় পত্র</td></tr>
              <tr><td>সিএনজি</td><td>প্রযোজ্য নয়</td></tr>
            </tbody>
          </table>

          <div style="margin-top:15px; background: rgba(0,0,0,0.04); padding: 12px; border-radius: 8px;">
            <strong>বিশেষ দ্রষ্টব্য:</strong>
            <ul style="margin-left:20px; margin-top:5px;">
              <li>গাড়ির ডকুমেন্টস-এর কোনো প্রকার ফটোকপি বা স্ক্যান কপি গ্রহণযোগ্য নয়, শুধুমাত্র অরিজিনাল ডকুমেন্ট প্রয়োজন।</li>
              <li>নতুন অ্যাকাউন্ট খোলার ক্ষেত্রে এমন মোবাইল নম্বর ব্যবহার করতে হবে যা পূর্বে পাঠাও-এর অন্য কোনো অ্যাকাউন্টে ব্যবহৃত হয়নি।</li>
            </ul>
          </div>

          <h2 style="margin-top:25px;">৩. রেজিস্ট্রেশন প্রক্রিয়া (বাইক, কার, পার্সেল)</h2>
          <p>পাঠাও-এ রাইডার হিসেবে রেজিস্ট্রেশন করার জন্য তিনটি প্রধান পদ্ধতি রয়েছে:</p>
          
          <h3 style="margin-top:15px;">৩.১ সেলফ-অনবোর্ডিং</h3>
          <p>রাইডাররা নিজেরাই পাঠাও অ্যাপের মাধ্যমে রেজিস্ট্রেশন সম্পন্ন করতে পারেন:</p>
          <ol style="margin-left: 20px; margin-top: 8px;">
            <li>পাঠাও অ্যাপটি ডাউনলোড করুন।</li>
            <li>অ্যাপে প্রবেশ করে 'এখনই রেজিস্টার করুন' বাটনে ক্লিক করুন।</li>
            <li>যে ফোন নম্বর দিয়ে অ্যাকাউন্ট খুলতে চান, সেটি টাইপ করুন।</li>
            <li>'Next' এ ক্লিক করে আপনার নম্বর যাচাই করুন।</li>
            <li>আপনার বাহনের ধরন (বাইক, কার ইত্যাদি) নির্বাচন করুন।</li>
            <li>আপনার নম্বরে পাঠানো ভেরিফিকেশন কোডটি টাইপ করুন।</li>
            <li>আপনার নাম এবং একটি পাসওয়ার্ড দিন।</li>
            <li>আপনার প্রোফাইল ছবি তুলুন এবং আপলোড করুন (ছবিতে মুখমণ্ডল স্পষ্টভাবে দেখা যেতে হবে, চশমা বা টুপি পরা যাবে না)।</li>
            <li>প্রয়োজনীয় তথ্যাবলী (NID, ড্রাইভিং লাইসেন্স ইত্যাদি) সতর্কতার সাথে সঠিক ঘরে পূরণ করুন।</li>
            <li>সকল তথ্যের স্পষ্ট ছবি আপলোড করে জমা দিন।</li>
          </ol>
          <p style="margin-top:8px;"><em>নোট: তথ্য জমা দেওয়ার পর পাঠাও টিম নথিগুলো যাচাই-বাছাই করবে। সব ঠিক থাকলে অ্যাকাউন্ট একটিভ হয়ে যাবে।</em></p>

          <h3 style="margin-top:20px;">৩.২ এজেন্ট অনবোর্ডিং</h3>
          <p>যেসব রাইডার নিজেরা অ্যাপের মাধ্যমে আবেদন করতে পারেন না, তারা নিবন্ধিত পাঠাও এজেন্টের মাধ্যমে অনবোর্ড হতে পারেন:</p>
          <ul style="margin-left: 20px; margin-top: 8px;">
            <li>রাইডারকে তার সকল মূল কাগজপত্র নিয়ে নিকটস্থ পাঠাও এজেন্ট বা ওয়াকে নিয়ে যেতে হবে।</li>
            <li>এজেন্ট রাইডারের তথ্য সিস্টেম-এ ইনপুট দিয়ে অনবোর্ডিং সম্পন্ন করবেন।</li>
          </ul>

          <h3 style="margin-top:20px;">৩.৩ ফিল্ড অনবোর্ডিং (ফ্রিল্যান্সার/ইভেন্ট)</h3>
          <ul style="margin-left: 20px; margin-top: 8px;">
            <li>বিশেষ ক্যাম্পেইন বা ফিল্ড অ্যাক্টিভেশনের সময় পাঠাও প্রতিনিধিরা সরাসরি স্পটে উপস্থিত থেকে রাইডার অনবোর্ডিং করে থাকেন।</li>
          </ul>

          <h2 style="margin-top:25px;">৪. অনবোর্ডিং ট্রেনিং ও কুইজ</h2>
          <ul style="margin-left: 20px; margin-top: 8px;">
            <li>রেজিস্ট্রেশন সফল হওয়ার পর রাইডারকে অ্যাপের মধ্যে একটি সংক্ষিপ্ত ট্রেনিং ভিডিও দেখতে হয়।</li>
            <li>ট্রেনিং শেষে নিরাপত্তা ও সার্ভিস মান সংক্রান্ত কয়েকটি সহজ প্রশ্নের উত্তর (কুইজ) দিতে হয়। কুইজে উত্তীর্ণ হলে অ্যাকাউন্ট ব্যবহারের উপযোগী হয়।</li>
          </ul>

          <h2 style="margin-top:25px;">৫. ট্রেনিং ও আইডি অ্যাক্টিভেশন সংক্রান্ত নিয়মাবলী</h2>
          <ul style="margin-left: 20px; margin-top: 8px;">
            <li>সকল নথি সঠিকভাবে জমা দেওয়ার ২৪-৪৮ ঘণ্টার মধ্যে সাধারণত আইডি ভেরিফিকেশন সম্পন্ন হয়।</li>
            <li>নথিতে কোনো ত্রুটি থাকলে অ্যাপের মাধ্যমে জানানো হয় এবং পুনরায় সঠিক নথি আপলোড করতে বলা হয়।</li>
          </ul>
        </div>
      `,
      en: `
        <div class="theme-joining content-box">
          <p>This section covers the complete process of joining Pathao for Bike, Car, Parcel, and CNG riders.</p>
          <h2>1. Vehicle Eligibility</h2>
          <table class="cx-table">
            <thead>
              <tr><th>Vehicle Type</th><th>Min Engine Capacity</th><th>Model Year</th></tr>
            </thead>
            <tbody>
              <tr><td>Bike</td><td>100 CC</td><td>N/A</td></tr>
              <tr><td>Car</td><td>1000 CC</td><td>1995 or above</td></tr>
              <tr><td>Parcel</td><td>Same as Bike</td><td>N/A</td></tr>
              <tr><td>CNG</td><td>N/A</td><td>N/A</td></tr>
            </tbody>
          </table>
          <h2 style="margin-top:20px;">2. Required Documents</h2>
          <table class="cx-table">
            <thead>
              <tr><th>Vehicle</th><th>Documents Needed</th></tr>
            </thead>
            <tbody>
              <tr><td>Bike</td><td>NID, Driving License, Registration Paper / Acknowledgement Slip, Tax Token, Insurance (Optional).</td></tr>
              <tr><td>Car</td><td>NID, Driving License, Car Registration Paper, Tax Token, Fitness Paper, Insurance.</td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  },
  {
    id: "joining-bonus",
    num: "02",
    icon: "gift",
    title: { bn: "জয়েনিং বোনাস ও রেফারেল প্রোগ্রাম", en: "Joining Bonus & Referral Program" },
    subtitle: { bn: "বাইক, কার ও পার্সেলের বোনাস কাঠামো", en: "Bonus structure for Bike, Car & Parcel" },
    html: {
      bn: `
        <div class="theme-joining content-box">
          <h2>১. জয়েনিং বোনাস</h2>
          <p>নতুন যুক্ত হওয়া রাইডারদের উৎসাহিত করতে পাঠাও নির্দিষ্ট সময় পর পর বিভিন্ন আকর্ষণীয় জয়েনিং বোনাস অফার করে থাকে।</p>

          <h3 style="margin-top:15px;">১.১ বোনাস পাওয়ার শর্তাবলী:</h3>
          <ul style="margin-left:20px; margin-top:8px;">
            <li>অ্যাকেডমি/অনবোর্ডিং সম্পন্ন করার নির্দিষ্ট দিনের (যেমন: ৭ দিন) মধ্যে নির্দিষ্ট সংখ্যক রাইড (যেমন: ১০টি রাইড) সম্পন্ন করতে হবে।</li>
            <li>রাইড সমাপ্তির হার (Completion Rate) এবং অ্যাকসেপ্টেন্স রেট কোম্পানির নির্ধারিত সীমার ওপরে থাকতে হবে।</li>
            <li>কোনো প্রকার ফেক বা ভুয়া রাইড করা যাবে না।</li>
          </ul>

          <h3 style="margin-top:20px;">১.২ বোনাস পাওয়ার সময়সূচি:</h3>
          <p>অফার অনুযায়ী বোনাসের টাকা সাপ্তাহিক পেমেন্ট চক্রের সাথে অথবা ওয়ালেটে জমা হয়।</p>

          <h2 style="margin-top:25px;">২. রেফারেল প্রোগ্রাম</h2>
          <p>বিদ্যমান রাইডাররা অন্য নতুন রাইডারকে রেফার করে অতিরিক্ত অর্থ উপার্জন করতে পারেন।</p>

          <h3 style="margin-top:15px;">২.১ কীভাবে রেফার করবেন?</h3>
          <ol style="margin-left:20px; margin-top:8px;">
            <li>পাঠাও ড্রাইভ অ্যাপের 'Refer' বা 'রেফারেল' সেকশনে যান।</li>
            <li>আপনার ইউনিক রেফারেল কোড বা লিংকটি নতুন রাইডারের সাথে শেয়ার করুন।</li>
            <li>নতুন রাইডার রেজিস্ট্রেশন করার সময় আপনার কোডটি ব্যবহার করবেন।</li>
          </ol>

          <h3 style="margin-top:20px;">২.২ রেফারেল বোনাস পাওয়ার নিয়ম:</h3>
          <ul style="margin-left:20px; margin-top:8px;">
            <li>রেফারকৃত রাইডারকে অনবোর্ডিং সম্পন্ন করে নির্দিষ্ট সময়সীমার মধ্যে ন্যূনতম লক্ষ্যমাত্রার রাইড সম্পন্ন করতে হবে।</li>
            <li>শর্ত পূরণ হলে রেফারার (যিনি রেফার করেছেন) এবং রেফারেল (যাকে রেফার করা হয়েছে) উভয়ই নির্ধারিত বোনাস পাবেন।</li>
          </ul>
        </div>
      `,
      en: `
        <div class="theme-joining content-box">
          <h2>1. Joining Bonus</h2>
          <p>New drivers receive attractive joining bonuses upon meeting specific ride targets within set timelines.</p>
          <h2>2. Referral Program</h2>
          <p>Existing riders can earn extra income by referring new riders using their unique referral code in the app.</p>
        </div>
      `
    }
  },
  {
    id: "fare",
    num: "03",
    icon: "calculator",
    title: { bn: "ফেয়ার ও ভাড়া বিবরণী", en: "Fare & Pricing Structure" },
    subtitle: { bn: "বেস ফেয়ার, দূরত্ব ও সময়ভিত্তিক চার্জ", en: "Base fare, distance & time charges" },
    html: {
      bn: `
        <div class="theme-fare content-box">
          <h2>১. ফেয়ার বা ভাড়া নির্ধারণ পদ্ধতি</h2>
          <p>পাঠাও-এ রাইডের মোট ভাড়া ডায়নামিক্যালি অ্যালগরিদমের মাধ্যমে হিসাব করা হয়। ভাড়ার প্রধান উপাদানগুলো নিচে আলোচনা করা হলো:</p>

          <table class="cx-table" style="margin-top:15px;">
            <thead>
              <tr><th>ভাড়ার উপাদান</th><th>বিবরণ</th></tr>
            </thead>
            <tbody>
              <tr><td>বেস ফেয়ার (Base Fare)</td><td>রাইড শুরু করার জন্য নির্ধারিত প্রাথমিক ফি।</td></tr>
              <tr><td>দূরত্ব ফি (Distance Charge)</td><td>অতিক্রান্ত প্রতি কিলোমিটারের জন্য নির্ধারিত চার্জ।</td></tr>
              <tr><td>সময় ফি (Time Charge)</td><td>রাইডের মোট সময় বা যানজটে অতিবাহিত প্রতি মিনিটের জন্য চার্জ।</td></tr>
              <tr><td>সার্জ প্রাইসিং (Surge/Demand Pricing)</td><td>অতিরিক্ত যাত্রী চাহিদা, খারাপ আবহাওয়া বা যানজটের সময় ভাড়ার সাথে যুক্ত হওয়া অতিরিক্ত গুণক।</td></tr>
              <tr><td>টোল ও নাইট চার্জ</td><td>প্রযোজ্য ক্ষেত্রে ফ্লাইওভার/সেতু টোল অথবা গভীর রাতে বিশেষ ফি যুক্ত হতে পারে।</td></tr>
            </tbody>
          </table>

          <h2 style="margin-top:25px;">২. প্রোমো কোড ও ডিসকাউন্ট</h2>
          <p>প্যাসেঞ্জারদের দেওয়া প্রোমো বা ডিসকাউন্টের কারণে রাইডারদের উপার্জনে কোনো ক্ষতি হয় না। রাইডার সর্বদা সম্পূর্ণ ভাড়ার অংশ পাবেন, ডিসকাউন্টের টাকা পাঠাও কোম্পানি রাইডারকে পরিশোধ করে।</p>

          <h2 style="margin-top:25px;">৩. ওয়েটিং চার্জ ও ক্যানসেলেশন ফি</h2>
          <ul style="margin-left:20px; margin-top:8px;">
            <li><strong>ওয়েটিং চার্জ:</strong> রাইডার পিকআপ পয়েন্টে পৌঁছানোর পর নির্দিষ্ট ফ্রি ওয়েটিং টাইমের (যেমন: ৫ মিনিট) বেশি অপেক্ষা করলে প্রতি মিনিটের জন্য ওয়েটিং চার্জ যোগ হয়।</li>
            <li><strong>ক্যানসেলেশন ফি:</strong> রাইডার পিকআপ স্থানে পৌঁছানোর পর কাস্টমার যুক্তিসঙ্গত কারণ ছাড়া রাইড ক্যানসেল করলে কাস্টমারের ওপর ক্যানসেলেশন ফি ধার্য হয়, যার একটি অংশ রাইডার পান।</li>
          </ul>
        </div>
      `,
      en: `
        <div class="theme-fare content-box">
          <h2>1. Fare Calculation Structure</h2>
          <p>Fares are calculated using base fare, distance traveled, ride duration, and demand surge adjustments.</p>
        </div>
      `
    }
  },
  {
    id: "star-program",
    num: "04",
    icon: "star",
    title: { bn: "স্টার প্রোগ্রাম", en: "Star Program" },
    subtitle: { bn: "প্লাটিনাম, গোল্ড ও সিলভার স্ট্যাটাস", en: "Platinum, Gold & Silver status benefits" },
    html: {
      bn: `
        <div class="theme-star content-box">
          <h2>১. স্টার প্রোগ্রাম কী?</h2>
          <p>স্টার প্রোগ্রাম হলো পাঠাও-এর সেরা ও নিয়মিত রাইডারদের জন্য একটি বিশেষ রিওয়ার্ড ও পারফরম্যান্স ফ্রেমওয়ার্ক। রাইডারদের দক্ষতা ও সেবার মানের ওপর ভিত্তি করে বিভিন্ন ব্যাজ বা টায়ার প্রদান করা হয়।</p>

          <h2 style="margin-top:20px;">২. টায়ার ও র‍্যাঙ্কিং বিভাজন</h2>
          <table class="cx-table">
            <thead>
              <tr><th>টাইটেল/লেভেল</th><th>রাইড টার্গেট (মাসিক)</th><th>অ্যাকসেপ্টেন্স রেট</th><th>ক্যানসেলেশন রেট</th></tr>
            </thead>
            <tbody>
              <tr><td>Platinum (প্লাটিনাম)</td><td>১৫০+ রাইড</td><td>৯০%+</td><td>৫% এর নিচে</td></tr>
              <tr><td>Gold (গোল্ড)</td><td>১০০+ রাইড</td><td>৮৫%+</td><td>৮% এর নিচে</td></tr>
              <tr><td>Silver (সিলভার)</td><td>৫০+ রাইড</td><td>৮০%+</td><td>১০% এর নিচে</td></tr>
              <tr><td>Bronze (ব্রোঞ্জ)</td><td>সাধারণ রাইডারদের জন্য সূচনা টায়ার</td><td>-</td><td>-</td></tr>
            </tbody>
          </table>

          <h2 style="margin-top:25px;">৩. স্টার প্রোগ্রামের সুবিধাসমূহ</h2>
          <ul style="margin-left:20px; margin-top:8px;">
            <li><strong>অতিরিক্ত বোনাস:</strong> প্লাটিনাম ও গোল্ড রাইডাররা যেকোনো সাধারণ বোনাস ক্যাম্পেইনে অতিরিক্ত শতাংশ ক্যাশব্যাক/বোনাস পান।</li>
            <li><strong>প্রাইওরিটি সাপোর্ট:</strong> কাস্টমার এক্সপেরিয়েন্স ও হেল্পডেস্কে অগ্রাধিকার সেবা।</li>
            <li><strong>বিশেষ কমিক/ডিসকাউন্ট:</strong> জ্বালানি, গাড়ির পার্টস কেনা এবং মেইনটেন্যান্সে ডিসকাউন্ট পার্টনারশিপ সুবিধা।</li>
            <li><strong>ফ্লেক্সিবল ক্যাশআউট:</strong> দ্রুত টাকা তোলার সুবিধা।</li>
          </ul>
        </div>
      `,
      en: `
        <div class="theme-star content-box">
          <h2>1. What is the Star Program?</h2>
          <p>A performance framework recognizing top riders with Platinum, Gold, and Silver tiers based on monthly completed rides and rating.</p>
        </div>
      `
    }
  },
  {
    id: "flag",
    num: "05",
    icon: "flag",
    title: { bn: "ফ্ল্যাগিং ও সিস্টেম রেস্ট্রিকশন", en: "Flagging & Restrictions" },
    subtitle: { bn: "অ্যাকাউন্ট ফ্ল্যাগ হওয়ার কারণ ও সমাধান", en: "Flagging causes and account reactivation" },
    html: {
      bn: `
        <div class="theme-flag content-box">
          <h2>১. ফ্ল্যাগিং (Flagging) কী?</h2>
          <p>পাঠাও সিস্টেম বা নিরাপত্তা দল যখন কোনো রাইডারের অ্যাকাউন্টে অস্বাভাবিক কর্মকাণ্ড বা অনিয়ম দেখতে পায়, তখন সাময়িকভাবে বা স্থায়ীভাবে অ্যাকাউন্ট সীমাবদ্ধ করাকে ফ্ল্যাগিং বলে।</p>

          <h2 style="margin-top:20px;">২. ফ্ল্যাগ হওয়ার প্রধান কারণসমূহ</h2>
          <ul style="margin-left:20px; margin-top:8px;">
            <li><strong>ফেক জিপিএস (Fake GPS) বা অবস্থান জালিয়াতি:</strong> লোকেশন স্পুফিং অ্যাপ ব্যবহার করে জিপিএস লোকেশন পরিবর্তন করা।</li>
            <li><strong>ভুয়া রাইড (Fake Rides):</strong> নিজেকেই নিজে রাইড দেওয়া বা প্যাসেঞ্জারের সাথে যোগসাজশে মিথ্যা রাইড দেখিয়ে বোনাস নেওয়া।</li>
            <li><strong>অতিরিক্ত রাইড ক্যানসেলেশন:</strong> কাস্টমারের রাইড রিসিভ করার পর ঘন ঘন বিনা কারণে ক্যানসেল করা।</li>
            <li><strong>অসদাচরণ বা নিরাপত্তা লঙ্ঘন:</strong> প্যাসেঞ্জার বা কাস্টমার সাপোর্ট টিমের সাথে কটু আচরণ করা।</li>
            <li><strong>অননুমোদিত বাহন বা চালক:</strong> নিবন্ধিত রাইডার ছাড়া অন্য কেউ গাড়ি চালালে।</li>
          </ul>

          <h2 style="margin-top:25px;">৩. ফ্ল্যাগিং এর ধরন ও আনফ্ল্যাগ করার উপায়</h2>
          <table class="cx-table">
            <thead>
              <tr><th>ফ্ল্যাগের ধরন</th><th>প্রভাব</th><th>সমাধান বা আনফ্ল্যাগ প্রক্রিয়া</th></tr>
            </thead>
            <tbody>
              <tr><td>ওয়ার্নিং ফ্ল্যাগ</td><td>সতর্কবার্তা দেওয়া হয়, রাইড চালু থাকে।</td><td>নিয়ম মেনে রাইড সম্পন্ন করা।</td></tr>
              <tr><td>টেম্পোরারি ব্লক (Temporary)</td><td>২৪ থেকে ৭২ ঘণ্টা অ্যাকাউন্ট বন্ধ থাকে।</td><td>মেয়াদ শেষে স্বয়ংক্রিয়ভাবে খুলে যায় বা কুইজ দিতে হয়।</td></tr>
              <tr><td>পারমানেন্ট ব্লক (Permanent)</td><td>অ্যাকাউন্ট স্থায়ীভাবে স্থগিত।</td><td>গুরুতর জালিয়াতি ব্যতীত আপিলের সুযোগ কম। কাস্টমার কেয়ারে যোগাযোগ।</td></tr>
            </tbody>
          </table>
        </div>
      `,
      en: `
        <div class="theme-flag content-box">
          <h2>Account Flagging Guidelines</h2>
          <p>System restrictions applied due to fraud, fake GPS, high cancellations, or policy violations.</p>
        </div>
      `
    }
  },
  {
    id: "due",
    num: "06",
    icon: "wallet",
    title: { bn: "ডিউ ও বকেয়া ব্যবস্থাপনা", en: "Due & Repayment Management" },
    subtitle: { bn: "ডিউ লিমিট ও পেমেন্ট পরিশোধ নিয়ম", en: "Due limits and repayment rules" },
    html: {
      bn: `
        <div class="theme-due content-box">
          <h2>১. ডিউ (Due) কী এবং কীভাবে তৈরি হয়?</h2>
          <p>প্যাসেঞ্জার যখন ক্যাশে ভাড়া পরিশোধ করেন, তখন পাঠাও-এর নির্ধারিত কমিশন বা প্ল্যাটফর্ম ফি রাইডারের ওয়ালেটে 'ডিউ' বা ঋণ হিসেবে জমা হয়।</p>

          <h2 style="margin-top:20px;">২. ডিউ লিমিট (Due Limit)</h2>
          <p>প্রতিটি ক্যাটাগরির রাইডারের জন্য নির্দিষ্ট পরিমাণ ডিউ সীমা থাকে। লিমিট পার হলে নতুন রাইড পাওয়া বন্ধ হয়ে যায়:</p>

          <table class="cx-table" style="margin-top:10px;">
            <thead>
              <tr><th>যানবাহনের ধরন</th><th>সাধারণ ডিউ সীমা (টাকা)</th></tr>
            </thead>
            <tbody>
              <tr><td>বাইক</td><td>৳ ৫০০ - ৳ ১,০০০ (স্ট্যাটাস অনুযায়ী)</td></tr>
              <tr><td>কার</td><td>৳ ২,০০০ - ৳ ৩,০০০</td></tr>
              <tr><td>সিএনজি</td><td>৳ ১,০০০</td></tr>
            </tbody>
          </table>

          <h2 style="margin-top:25px;">৩. ডিউ পরিশোধের উপায়</h2>
          <p>রাইডাররা নিম্নের মাধ্যমগুলো দিয়ে বকেয়া ডিউ পরিশোধ করতে পারেন:</p>
          <ul style="margin-left:20px; margin-top:8px;">
            <li><strong>ডিজিটাল পেমেন্ট রিকোয়েস্ট (DP):</strong> অ্যাপ থেকেই বিকাশ, নগদ, রকেট বা কার্ডের মাধ্যমে সরাসরি ডিউ শোধ করা যায়।</li>
            <li><strong>ডিজিটাল রাইড এডজাস্টমেন্ট:</strong> পরবর্তী ডিজিটাল বা পে-লেটার রাইড সম্পূর্ণ হলে সেই ভাড়া থেকে বকেয়া ডিউ স্বয়ংক্রিয়ভাবে অ্যাডজাস্ট হয়ে যায়।</li>
          </ul>
        </div>
      `,
      en: `
        <div class="theme-due content-box">
          <h2>Due Management</h2>
          <p>When cash rides occur, Pathao commission accumulates as 'Due'. Driver accounts get blocked if due limits are crossed until repaid via bKash, Nagad, or Digital Ride adjustments.</p>
        </div>
      `
    }
  },
  {
    id: "payment-flow",
    num: "07",
    icon: "credit-card",
    title: { bn: "পেমেন্ট ফ্লো", en: "Payment Flow Chart" },
    subtitle: { bn: "ডিজিটাল ও পে-লেটার পেমেন্ট প্রসেস", en: "Digital & Pay-Later Payment Flow" },
    html: {
      bn: `
        <div class="theme-payment content-box">
          <h2>১. প্রাথমিক পেমেন্ট মাধ্যম অনুযায়ী চূড়ান্ত পেমেন্ট অপশন</h2>
          <p>ডিজিটাল ও পে-লেটার পেমেন্টের ফ্লো, এবং কাজ পরিচালনায় পেমেন্ট সেটেলমেন্ট অপশনসমূহ:</p>

          <table class="cx-table" style="margin-top:15px;">
            <thead>
              <tr><th>প্রাথমিক পেমেন্ট মাধ্যম</th><th>চূড়ান্ত পেমেন্ট মাধ্যম</th></tr>
            </thead>
            <tbody>
              <tr><td>Cash</td><td>Cash, DP, Paylater, Pathao Pay</td></tr>
              <tr><td>Digital Payment</td><td>Cash, DP, Pathao Pay</td></tr>
              <tr><td>Pay Later</td><td>কোনো অপশন নেই (সরাসরি পেমেন্ট)</td></tr>
              <tr><td>Pathao Pay</td><td>Cash, DP, Paylater, Pathao Pay</td></tr>
            </tbody>
          </table>

          <h2 style="margin-top:25px;">২. বিভিন্ন পেমেন্ট ফ্লো এর ধাপসমূহ</h2>
          
          <h3 style="margin-top:15px;">২.১ ডিজিটাল পেমেন্ট ফ্লো (DP Flow)</h3>
          <p>১. TOP UP $\\rightarrow$ যখন ইউজার বা ড্রাইভার অ্যাপ থেকে পেমেন্ট রিকোয়েস্ট করা হয়।</p>
          <p>২. PAYMENT $\\rightarrow$ যখন পাঠাও-এর সিস্টেমে পেমেন্ট সফল হয়।</p>
          <p>৩. DISBURSED $\\rightarrow$ যখন পেমেন্ট ড্রাইভারের ডিজিটাল ক্রেডিটে যুক্ত হয়।</p>

          <h3 style="margin-top:20px;">২.২ পে-লেটার পেমেন্ট ফ্লো (Pay Later Flow)</h3>
          <p>১. DISBURSED $\\rightarrow$ পেমেন্টের সাথে সাথেই ড্রাইভারের ডিজিটাল ক্রেডিটে যুক্ত হয়ে যায়।</p>

          <h3 style="margin-top:20px;">২.৩ DP ডিউ এডজাস্টমেন্ট ফ্লো</h3>
          <p>১. PAYMENT $\\rightarrow$ বকেয়ার জন্য পরিশোধ করা হয়েছে।</p>

          <h3 style="margin-top:20px;">২.৪ DP উইথড্র ফ্লো</h3>
          <p>১. PAYMENT $\\rightarrow$ ড্রাইভার অ্যাপ থেকে পেমেন্ট রিকোয়েস্ট করে বিকাশ, রকেট অথবা ব্যাংকে ক্যাশআউট নেওয়া হয়।</p>
        </div>
      `,
      en: `
        <div class="theme-payment content-box">
          <h2>Payment Options & Settlement Flow</h2>
          <table class="cx-table">
            <thead>
              <tr><th>Primary Payment</th><th>Final Settlement Methods</th></tr>
            </thead>
            <tbody>
              <tr><td>Cash</td><td>Cash, DP, Paylater, Pathao Pay</td></tr>
              <tr><td>Digital Payment</td><td>Cash, DP, Pathao Pay</td></tr>
              <tr><td>Pay Later</td><td>Direct Payment</td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  },
  {
    id: "sops",
    num: "08",
    icon: "file-signature",
    title: { bn: "সকল SOP লিংক", en: "All SOP Links" },
    subtitle: { bn: "জরুরি সকল SOP নথিপত্র ও নির্দেশিকা", en: "Essential SOP documentation links" },
    html: {
      bn: `
        <div class="theme-joining content-box">
          <h2>পাঠাও রাইডস স্ট্যান্ডার্ড অপারেটিং প্রসিডিউর (SOP)</h2>
          <p>প্রয়োজনীয় সকল অফিশিয়াল এসওপি নথি লিংকের তালিকা নিচে আলাদা কার্ডে দেওয়া হলো:</p>
          
          <div class="tools-grid">
            <a href="https://driver-sop-link.com" target="_blank" class="tool-card">
              <i class="fas fa-file-alt"></i>
              <span>Driver SOP</span>
            </a>
            <a href="https://rides-merged-sop-link.com" target="_blank" class="tool-card">
              <i class="fas fa-file-contract"></i>
              <span>Rides Merged SOP</span>
            </a>
            <a href="https://user-sop-link.com" target="_blank" class="tool-card">
              <i class="fas fa-motorcycle"></i>
              <span>User SOP (Bike / Car / Parcel / CNG)</span>
            </a>
            <a href="https://rides-flag-dashboard-link.com" target="_blank" class="tool-card">
              <i class="fas fa-chart-line"></i>
              <span>Rides Flag Dashboard</span>
            </a>
            <a href="https://flag-trip-tracking-link.com" target="_blank" class="tool-card">
              <i class="fas fa-route"></i>
              <span>ফ্ল্যাগ ট্রিপ ট্র্যাকিং</span>
            </a>
            <a href="https://flag-trip-data-link.com" target="_blank" class="tool-card">
              <i class="fas fa-database"></i>
              <span>Flag Trip Data for Rides</span>
            </a>
          </div>
        </div>
      `,
      en: `
        <div class="theme-joining content-box">
          <h2>Standard Operating Procedures (SOP)</h2>
          <div class="tools-grid">
            <a href="#" target="_blank" class="tool-card"><i class="fas fa-file-alt"></i><span>Driver SOP</span></a>
            <a href="#" target="_blank" class="tool-card"><i class="fas fa-file-contract"></i><span>Rides Merged SOP</span></a>
            <a href="#" target="_blank" class="tool-card"><i class="fas fa-motorcycle"></i><span>User SOP (Bike/Car/Parcel/CNG)</span></a>
          </div>
        </div>
      `
    }
  },
  {
    id: "internal-tools",
    num: "09",
    icon: "tools",
    title: { bn: "ইন্টারনাল টুলস তালিকা", en: "Internal Tools List" },
    subtitle: { bn: "প্রতিদিনের কাজে ব্যবহৃত ইন্টারনাল টুলস", en: "Daily internal agent web tools" },
    html: {
      bn: `
        <div class="theme-payment content-box">
          <h2>কাস্টমার এক্সপেরিয়েন্স টিম টুলস</h2>
          <p>দৈনন্দিন কাজে ব্যবহৃত পাঠাও কাস্টমার এক্সপেরিয়েন্স টিমের ইন্টারনাল পোর্টালগুলোর দ্রুত অ্যাক্সেস:</p>

          <div class="tools-grid">
            <a href="https://enlistenlist.pathaointernal.com" target="_blank" class="tool-card">
              <i class="fas fa-list-ul"></i>
              <span>Enlisten List</span>
            </a>
            <a href="https://engine.pathaointernal.com" target="_blank" class="tool-card">
              <i class="fas fa-cogs"></i>
              <span>Engine Roomer</span>
            </a>
            <a href="https://ideskpathao.idesk360.com" target="_blank" class="tool-card">
              <i class="fas fa-headset"></i>
              <span>iDesk Pathao</span>
            </a>
            <a href="https://v3.pathaointernal.com" target="_blank" class="tool-card">
              <i class="fas fa-tachometer-alt"></i>
              <span>Quest Dashboard</span>
            </a>
            <a href="https://pathaolabs.com" target="_blank" class="tool-card">
              <i class="fas fa-phone-alt"></i>
              <span>Pathao Talktalk</span>
            </a>
            <a href="https://garikoigarikoi.pathaointernal.com" target="_blank" class="tool-card">
              <i class="fas fa-map-marked-alt"></i>
              <span>Gari Koigari Koi</span>
            </a>
            <a href="https://chatwoottickets.pathaointernal.com" target="_blank" class="tool-card">
              <i class="fas fa-comments"></i>
              <span>Chatwoot Tickets</span>
            </a>
            <a href="http://192.168.1.90/datum" target="_blank" class="tool-card">
              <i class="fas fa-server"></i>
              <span>Datum Server</span>
            </a>
          </div>
        </div>
      `,
      en: `
        <div class="theme-payment content-box">
          <h2>Internal Tools & Customer Experience Portals</h2>
          <div class="tools-grid">
            <a href="https://enlistenlist.pathaointernal.com" target="_blank" class="tool-card"><i class="fas fa-list-ul"></i><span>Enlisten List</span></a>
            <a href="https://engine.pathaointernal.com" target="_blank" class="tool-card"><i class="fas fa-cogs"></i><span>Engine Roomer</span></a>
            <a href="https://ideskpathao.idesk360.com" target="_blank" class="tool-card"><i class="fas fa-headset"></i><span>iDesk Pathao</span></a>
          </div>
        </div>
      `
    }
  }
];
