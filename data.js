const TOPICS = [
  {
    id: "joining",
    num: "01",
    icon: "user-plus",
    title: { bn: "রাইডার জয়েনিং প্রক্রিয়া", en: "Rider Joining Process" },
    subtitle: { bn: "যোগ্যতা, কাগজপত্র ও রেজিস্ট্রেশন", en: "Eligibility, documents & registration" },
    html: { bn: "", en: "" }
  },
  {
    id: "bonus",
    num: "02",
    icon: "gift",
    title: { bn: "জয়েনিং বোনাস ও রেফারেল প্রোগ্রাম", en: "Joining Bonus & Referral Program" },
    subtitle: { bn: "বাইক, কার ও পার্সেলের বোনাস কাঠামো", en: "Bonus structure for Bike, Car & Parcel" },
    html: { bn: "", en: "" }
  },
  {
    id: "star",
    num: "03",
    icon: "star",
    title: { bn: "স্টার প্রোগ্রাম", en: "Star Program" },
    subtitle: { bn: "প্লাটিনাম, গোল্ড ও সিলভার স্ট্যাটাস", en: "Platinum, Gold & Silver status" },
    html: { bn: "", en: "" }
  },
  {
    id: "fare",
    num: "04",
    icon: "wallet",
    title: { bn: "ভাড়া তথ্য", en: "Fare Information" },
    subtitle: { bn: "পার্সেল, বাইক ও কার সেবার ভাড়া কাঠামো", en: "Fare breakdown for Parcel, Bike & Car" },
    html: { bn: "", en: "" }
  },
  {
    id: "due",
    num: "05",
    icon: "credit-card",
    title: { bn: "ডিউ ও পেমেন্ট", en: "Due & Payment" },
    subtitle: { bn: "ডিউ লিমিট ও পরিশোধ প্রক্রিয়া", en: "Due limits & payment process" },
    html: { bn: "", en: "" }
  },
  {
    id: "flag",
    num: "06",
    icon: "flag",
    title: { bn: "ফ্ল্যাগড ট্রিপ", en: "Flagged Trips" },
    subtitle: { bn: "কারণ, প্রতিরোধ ও রিভিউ প্রক্রিয়া", en: "Causes, prevention & review process" },
    html: { bn: "", en: "" }
  },
  {
    id: "payment-flow",
    num: "07",
    icon: "refresh-cw",
    title: { bn: "পেমেন্ট ফ্লো", en: "Payment Flow" },
    subtitle: { bn: "ডিজিটাল, পে-লেটার ও ডিউ পেমেন্ট ফ্লো", en: "Digital, Pay Later & due payment flow" },
    html: { bn: "", en: "" }
  },
  {
    id: "sops-tools",
    num: "08",
    icon: "tool",
    title: { bn: "SOP ও ইন্টারনাল টুলস", en: "SOPs & Internal Tools" },
    subtitle: { bn: "জরুরি SOP লিংক ও ইন্টারনাল টুলস", en: "Essential SOP links & internal tools" },
    html: { bn: "", en: "" }
  }
];

TOPICS[0].html.bn = `
<p class="lead">এই অংশে বাইক, কার, পার্সেল এবং সিএনজি রাইডারদের পাঠাও-এ যুক্ত হওয়ার সম্পূর্ণ প্রক্রিয়া নিয়ে আলোচনা করা হলো।</p>
<h3>১. যানবাহনের যোগ্যতা</h3>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>যানবাহনের ধরন</th><th>ন্যূনতম সিসি/ইঞ্জিন ক্ষমতা</th><th>মডেল বছর</th></tr></thead>
<tbody>
<tr><td>বাইক</td><td>১০০ সিসি</td><td>প্রযোজ্য নয়</td></tr>
<tr><td>কার</td><td>১০০০ সিসি</td><td>১৯৯৫ বা তার বেশি</td></tr>
<tr><td>পার্সেল</td><td>বাইক এর মত</td><td>প্রযোজ্য নয়</td></tr>
<tr><td>সিএনজি</td><td>প্রযোজ্য নয়</td><td>প্রযোজ্য নয়</td></tr>
</tbody></table></div>
<h3>২. জয়েনিং এর জন্য প্রয়োজনীয় কাগজপত্র</h3>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>যানবাহনের ধরন</th><th>প্রয়োজনীয় কাগজপত্র</th></tr></thead>
<tbody>
<tr><td>বাইক</td><td>জাতীয় পরিচয় পত্র, ড্রাইভিং লাইসেন্স (ফিজিকাল/অনলাইন কপি, পেশাদারি বা অপেশাদারি) অথবা ডেলিভারি রসিদ, রেজিস্ট্রেশন পেপার অথবা প্রাপ্তি স্বীকার রসিদ, ট্যাক্স টোকেন, ইন্স্যুরেন্স পেপার (ঐচ্ছিক), মালিকের জাতীয় পরিচয় পত্র (যদি নিজে গাড়ির মালিক না হন)</td></tr>
<tr><td>কার</td><td>জাতীয় পরিচয়পত্র (NID), ড্রাইভিং লাইসেন্স (পেশাদারী/অপেশাদারী), গাড়ির রেজিস্ট্রেশন পেপার, ট্যাক্স টোকেন, ফিটনেস পেপার, ইনস্যুরেন্স পেপার, মালিকের জাতীয় পরিচয়পত্র (যদি ক্যাপ্টেন গাড়ির মালিক না হন)</td></tr>
<tr><td>পার্সেল - বাইক</td><td>বাইকের জন্য প্রযোজ্য সকল কাগজপত্র</td></tr>
<tr><td>পার্সেল - সাইকেল</td><td>জাতীয় পরিচয় পত্রের মূল কপি (না থাকলে QR কোডসহ অনলাইন কপি), রেফারেন্স (মা/বাবা/ভাই/বোন) এর জাতীয় পরিচয় পত্র</td></tr>
<tr><td>সিএনজি</td><td>প্রযোজ্য নয়</td></tr>
</tbody></table></div>
<div class="callout">
<strong>বিশেষ দ্রষ্টব্য:</strong>
<ul>
<li>গাড়ির ডকুমেন্টস-এর কোনো প্রকার ফটোকপি বা স্ক্যান কপি গ্রহণযোগ্য নয়; শুধুমাত্র অরিজিনাল ডকুমেন্ট প্রয়োজন।</li>
<li>নতুন অ্যাকাউন্ট খোলার ক্ষেত্রে এমন মোবাইল নম্বর ব্যবহার করতে হবে যা পূর্বে পাঠাও-এর অন্য কোনো অ্যাকাউন্টে ব্যবহৃত হয়নি।</li>
</ul>
</div>
<h3>৩. রেজিস্ট্রেশন প্রক্রিয়া (বাইক, কার, পার্সেল)</h3>
<p>পাঠাও-এ রাইডার হিসেবে রেজিস্ট্রেশন করার জন্য তিনটি প্রধান পদ্ধতি রয়েছে:</p>
<h4>৩.১ সেলফ-অনবোর্ডিং</h4>
<p>রাইডাররা নিজেরাই পাঠাও অ্যাপের মাধ্যমে রেজিস্ট্রেশন সম্পন্ন করতে পারেন:</p>
<ol class="steps">
<li>পাঠাও অ্যাপটি ডাউনলোড করুন।</li>
<li>অ্যাপে প্রবেশ করে 'এখনই রেজিস্টার করুন' বাটনে ক্লিক করুন।</li>
<li>যে ফোন নম্বর দিয়ে অ্যাকাউন্ট খুলতে চান, সেটি টাইপ করুন।</li>
<li>'Next' এ ক্লিক করে আপনার শহর নির্বাচন করুন।</li>
<li>আপনার বাহনের ধরন (বাইক, কার ইত্যাদি) নির্বাচন করুন।</li>
<li>আপনার নম্বরে পাঠানো ভেরিফিকেশন কোডটি টাইপ করুন।</li>
<li>আপনার নাম এবং একটি পাসওয়ার্ড দিন।</li>
<li>আপনার জেন্ডার নির্বাচন করুন।</li>
<li>আপনার নতুন অ্যাকাউন্ট ওপেন হয়ে যাবে।</li>
</ol>
<p>এরপর হোম স্ক্রিনে "আপনার তথ্য যোগ করুন" অপশনে ক্লিক করে প্রয়োজনীয় ডকুমেন্ট আপলোড করে অ্যাকাউন্ট তৈরির প্রক্রিয়া সম্পন্ন করুন। সবকিছু ঠিক থাকলে সাধারণত ১ ঘণ্টার মধ্যে অ্যাকাউন্ট চালু হয়ে যাবে।</p>
<h4>৩.২ ওয়াক-ইন সেন্টার (WIC) ভিজিট</h4>
<p>সেলফ-অনবোর্ডিং এ সমস্যা হলে বা সরাসরি সহায়তা প্রয়োজন হলে নিকটস্থ ওয়াক-ইন সেন্টারে (WIC) যোগাযোগ করা যায়।</p>
<ul>
<li><strong>সময়:</strong> সকাল ১০:০০ টা থেকে সন্ধ্যা ৬:০০ টা</li>
<li><strong>ছুটি (ঢাকা):</strong> শুক্রবার ও সরকারি ছুটির দিন</li>
<li><strong>ছুটি (চট্টগ্রাম ও সিলেট):</strong> শুক্রবার, শনিবার ও সরকারি ছুটির দিন</li>
</ul>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>শহর</th><th>অফিসের ঠিকানা</th></tr></thead>
<tbody>
<tr><td>ঢাকা (বনানী)</td><td>জাহানারা গার্ডেন, বাড়ি নং ১০৩, রোড নং ১৩/এ, ব্লক-সি, বনানী, ঢাকা-১২১৩ (সাবেক বনানী পোস্ট অফিস সংলগ্ন)</td></tr>
<tr><td>ঢাকা (মোহাম্মদপুর)</td><td>২য় তলা, বাড়ি-৪১/৩২, ব্লক-বি, রোড-০৩, চানমিয়া হাউজিং, মোহাম্মদপুর</td></tr>
<tr><td>ঢাকা (মিরপুর)</td><td>২য় তলা, ফ্ল্যাট-২/এ, হাউস-৪৪, রোড-২, ব্লক-ই, মিরপুর-১২</td></tr>
<tr><td>চট্টগ্রাম</td><td>ইয়াহিয়া টাওয়ার, ৮ম তলা, ৩৩৫, সিডিএ এভিনিউ, এম.এম. আলী রোড, লালখান বাজার, চট্টগ্রাম</td></tr>
<tr><td>সিলেট</td><td>প্রথম ফ্লোর, এম ঝর্ণা কমপ্লেক্স, শাহী ঈদগাহ রোড, কুমার পাড়া, সিলেট</td></tr>
</tbody></table></div>
<h4>৩.৩ RCM পয়েন্ট ভিজিট (শুধুমাত্র ঢাকায়)</h4>
<p>শুধুমাত্র ঢাকায় যারা যুক্ত হতে চান, তারা বিভিন্ন রিটেইলার (RCM) পয়েন্টে ভিজিট করেও অ্যাকাউন্ট খুলতে পারেন। এক্ষেত্রে নতুন অ্যাকাউন্ট তৈরির জন্য <strong>২০০ টাকা</strong> চার্জ প্রযোজ্য হবে।</p>
<h3>সিএনজি রেজিস্ট্রেশন প্রক্রিয়া</h3>
<p>সিএনজি রেজিস্ট্রেশনের জন্য যোগাযোগ করলে নির্দিষ্ট এলাকার KAM-এর নম্বর শেয়ার করে দিতে হবে। KAM-এর সাথে যোগাযোগ করে অ্যাকাউন্ট তৈরি করা সম্ভব।</p>
<h3>প্রায়শই জিজ্ঞাসিত প্রশ্ন</h3>
<div class="faq">
<details><summary>বাইক রাইডারের ন্যূনতম সিসি ও মডেল কত হতে হবে?</summary><p>ন্যূনতম ১০০ সিসি হতে হবে; মডেল বছরের কোনো শর্ত নেই।</p></details>
<details><summary>কার রাইডারদের জন্য ন্যূনতম ইঞ্জিন ক্ষমতা ও মডেলের শর্ত কী?</summary><p>ন্যূনতম ১০০০ সিসি ইঞ্জিন ক্ষমতা এবং মডেল ১৯৯৫ বা তার বেশি হতে হবে।</p></details>
<details><summary>পার্সেল বা সিএনজি রাইডারদের জন্য সিসি বা মডেলের শর্ত আছে কি?</summary><p>না, পার্সেল ও সিএনজি রাইডারদের জন্য যানবাহনের সিসি বা মডেলের কোনো নির্দিষ্ট শর্ত প্রযোজ্য নয়।</p></details>
<details><summary>কাগজপত্র জমা দেওয়ার সময় কি ফটোকপি বা স্ক্যান কপি গ্রহণযোগ্য হবে?</summary><p>না, শুধুমাত্র অরিজিনাল ডকুমেন্ট প্রয়োজন; কোনো ফটোকপি বা স্ক্যান কপি গ্রহণযোগ্য নয়।</p></details>
<details><summary>সেলফ-অনবোর্ডিং এর মাধ্যমে অ্যাকাউন্ট চালু হতে কতক্ষণ সময় লাগে?</summary><p>সবকিছু ঠিক থাকলে সাধারণত ১ ঘণ্টার মধ্যে অ্যাকাউন্ট চালু হয়ে যায়।</p></details>
<details><summary>RCM পয়েন্টে রেজিস্ট্রেশন করলে কি চার্জ প্রযোজ্য?</summary><p>হ্যাঁ, ২০০ টাকা চার্জ প্রযোজ্য হবে। এটি শুধুমাত্র ঢাকার জন্য প্রযোজ্য।</p></details>
<details><summary>রেজিস্ট্রেশনের জন্য কি পূর্বে ব্যবহৃত মোবাইল নম্বর ব্যবহার করা যাবে?</summary><p>না, এমন নম্বর ব্যবহার করতে হবে যা আগে কোনো পাঠাও অ্যাকাউন্টে ব্যবহৃত হয়নি।</p></details>
</div>
`;

TOPICS[0].html.en = `
<p class="lead">This section covers the complete process for Bike, Car, Parcel, and CNG riders to join Pathao.</p>
<h3>1. Vehicle Eligibility</h3>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>Vehicle Type</th><th>Minimum CC / Engine Capacity</th><th>Model Year</th></tr></thead>
<tbody>
<tr><td>Bike</td><td>100cc</td><td>Not applicable</td></tr>
<tr><td>Car</td><td>1000cc</td><td>1995 or newer</td></tr>
<tr><td>Parcel</td><td>Same as Bike</td><td>Not applicable</td></tr>
<tr><td>CNG</td><td>Not applicable</td><td>Not applicable</td></tr>
</tbody></table></div>
<h3>2. Documents Required for Joining</h3>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>Vehicle Type</th><th>Required Documents</th></tr></thead>
<tbody>
<tr><td>Bike</td><td>National ID card, driving license (physical or online copy, professional or non-professional) or delivery receipt, registration paper or acknowledgement receipt, tax token, insurance paper (optional), owner's NID (if the rider does not own the vehicle)</td></tr>
<tr><td>Car</td><td>National ID card (NID), driving license (professional/non-professional), vehicle registration paper, tax token, fitness paper, insurance paper, owner's NID (if the captain does not own the vehicle)</td></tr>
<tr><td>Parcel - Bike</td><td>All documents applicable to Bike</td></tr>
<tr><td>Parcel - Cycle</td><td>Original copy of NID (or online copy with QR code if original unavailable), NID of a reference person (mother/father/brother/sister)</td></tr>
<tr><td>CNG</td><td>Not applicable</td></tr>
</tbody></table></div>
<div class="callout">
<strong>Special Notes:</strong>
<ul>
<li>No photocopies or scanned copies of vehicle documents are accepted; only original documents are required.</li>
<li>The mobile number used for a new account must not have been used on any other Pathao account before.</li>
</ul>
</div>
<h3>3. Registration Process (Bike, Car, Parcel)</h3>
<p>There are three main methods for registering as a rider on Pathao:</p>
<h4>3.1 Self-Onboarding</h4>
<p>Riders can complete registration themselves through the Pathao app:</p>
<ol class="steps">
<li>Download the Pathao app.</li>
<li>Open the app and tap the "Register Now" button.</li>
<li>Type the phone number you want to use to open the account.</li>
<li>Tap "Next" and select your city.</li>
<li>Select your vehicle type (Bike, Car, etc.).</li>
<li>Enter the verification code sent to your number.</li>
<li>Provide your name and a password.</li>
<li>Select your gender.</li>
<li>Your new account will be created.</li>
</ol>
<p>Next, from the home screen, tap "Add Your Information" to upload the required documents for yourself and your vehicle to complete account creation. If everything is in order, the account is usually activated within 1 hour.</p>
<h4>3.2 Walk-in Center (WIC) Visit</h4>
<p>If a rider or captain faces issues with self-onboarding or needs direct assistance, they can visit the nearest Pathao Walk-in Center (WIC).</p>
<ul>
<li><strong>Hours:</strong> 10:00 AM to 6:00 PM</li>
<li><strong>Holidays (Dhaka):</strong> Friday and government holidays</li>
<li><strong>Holidays (Chattogram & Sylhet):</strong> Friday, Saturday, and government holidays</li>
</ul>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>City</th><th>Office Address</th></tr></thead>
<tbody>
<tr><td>Dhaka (Banani)</td><td>Jahanara Garden, House 103, Road 13/A, Block-C, Banani, Dhaka-1213 (adjacent to the former Banani Post Office)</td></tr>
<tr><td>Dhaka (Mohammadpur)</td><td>2nd Floor, House-41/32, Block-B, Road-03, Chan Mia Housing, Mohammadpur</td></tr>
<tr><td>Dhaka (Mirpur)</td><td>2nd Floor, Flat-2/A, House-44, Road-2, Block-E, Mirpur-12</td></tr>
<tr><td>Chattogram</td><td>Yahia Tower, 8th Floor, 335, CDA Avenue, M.M. Ali Road, Lalkhan Bazar, Chattogram</td></tr>
<tr><td>Sylhet</td><td>1st Floor, M Jhorna Complex, Shahi Eidgah Road, Kumar Para, Sylhet</td></tr>
</tbody></table></div>
<h4>3.3 RCM Point Visit (Dhaka Only)</h4>
<p>Riders joining in Dhaka can also open an account by visiting one of various retailer (RCM) points. A charge of <strong>Tk. 200</strong> applies for opening a new account this way.</p>
<h3>CNG Registration Process</h3>
<p>For CNG registration, contact us and we will share the KAM's number for your specific area. You can create an account by contacting that KAM directly.</p>
<h3>Frequently Asked Questions</h3>
<div class="faq">
<details><summary>What is the minimum CC and model year for a bike rider?</summary><p>Minimum 100cc is required; there is no model year requirement.</p></details>
<details><summary>What are the engine capacity and model requirements for car riders?</summary><p>A minimum 1000cc engine capacity and model year 1995 or newer are required.</p></details>
<details><summary>Are there CC or model requirements for parcel or CNG riders?</summary><p>No, there is no specific CC or model requirement for parcel or CNG riders.</p></details>
<details><summary>Are photocopies or scanned copies accepted when submitting documents?</summary><p>No, only original documents are accepted; photocopies or scanned copies are not.</p></details>
<details><summary>How long does it take to activate an account via self-onboarding?</summary><p>If everything is correct, the account is usually activated within 1 hour.</p></details>
<details><summary>Is there a charge for registering at an RCM point?</summary><p>Yes, a charge of Tk. 200 applies. This is only applicable in Dhaka.</p></details>
<details><summary>Can a previously used mobile number be used for registration?</summary><p>No, the number must not have been used on any other Pathao account before.</p></details>
</div>
`;

TOPICS[1].html.bn = `
<p class="lead">নতুন রাইডার/ক্যাপ্টেন হিসেবে জয়েন করলে এবং পরিচিতদের রেফার করলে যেসব বোনাস পাওয়া যায় তার সম্পূর্ণ তালিকা।</p>
<h3>জয়েনিং বোনাস: পার্সেল</h3>
<p>নতুন পার্সেল সাইক্লিস্ট হিসেবে জয়েন করলেই পাচ্ছেন আকর্ষণীয় জয়েনিং বোনাস। শর্ত: কমপ্লিশন রেট ৮০% বা তার বেশি থাকতে হবে।</p>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>সময়কাল</th><th>শর্ত</th><th>বোনাস</th></tr></thead>
<tbody>
<tr><td>প্রথম ৩ দিন</td><td>৩টি ট্রিপ</td><td>২০০ টাকা</td></tr>
<tr><td>প্রথম ৭ দিন</td><td>১০টি ট্রিপ</td><td>৫০০ টাকা</td></tr>
<tr><td>পরবর্তী ২০ দিন</td><td>২৫টি ট্রিপ</td><td>১,০০০ টাকা</td></tr>
</tbody></table></div>
<h3>জয়েনিং বোনাস: বাইক</h3>
<div class="badge">New Rider Joining Bonus (New Offer) — শুরু: ১৫ আগস্ট, ২০২৫ (পরবর্তী নোটিশ না দেওয়া পর্যন্ত চালু)</div>
<p>নতুন রাইডারদের জন্য শর্ত: ৬৫% কমপ্লিশন রেট বজায় রাখা।</p>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>সময়কাল</th><th>শর্ত</th><th>বোনাস</th></tr></thead>
<tbody>
<tr><td>প্রথম ৩ দিন</td><td>৩টি ট্রিপ</td><td>১৫০ টাকা</td></tr>
<tr><td>প্রথম ২০ দিন</td><td>৩০টি ট্রিপ</td><td>১,০০০ টাকা</td></tr>
<tr><td>পরবর্তী ২০ দিন</td><td>৬০টি ট্রিপ</td><td>১,৫০০ টাকা</td></tr>
</tbody></table></div>
<p>স্ল্যাব-ভিত্তিক কমিশন রেট অপরিবর্তিত থাকবে। <strong>এই অফার শুধুমাত্র ঢাকার জন্য প্রযোজ্য।</strong></p>
<div class="callout"><strong>বিঃদ্রঃ</strong> নতুন রাইডার অ্যাকাউন্ট ভেরিফাই হওয়ার পরের দিন সকাল ১০টায় কোয়েস্ট চালু হবে। কোয়েস্টের সময়সীমা শেষ হওয়ার পর রাইডার তার ডিজিটাল ওয়ালেটে বোনাস পাবেন। উদাহরণস্বরূপ, ৩ দিনের মধ্যে ৩টি ট্রিপ সম্পন্ন করলে বোনাসটি ৩ দিন মেয়াদ শেষ হওয়ার পরের দিন পাওয়া যাবে।</div>
<h3>জয়েনিং বোনাস: কার</h3>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>সময়কাল</th><th>শর্ত</th><th>বোনাস</th></tr></thead>
<tbody>
<tr><td>প্রথম ৩ দিন</td><td>৩টি ট্রিপ</td><td>৫০ও টাকা</td></tr>
<tr><td>প্রথম ২০ দিন</td><td>৩০টি ট্রিপ</td><td>২,০০০ টাকা</td></tr>
<tr><td>পরবর্তী ২০ দিন</td><td>৪৫টি ট্রিপ</td><td>২,২০০ টাকা</td></tr>
<tr><td>প্রথম ৪০ দিন</td><td>—</td><td>১০% কমিশনে ট্রিপ শেয়ার করার সুযোগ</td></tr>
</tbody></table></div>
<p><strong>নোট:</strong> ক্যাপ্টেন হিসেবে জয়েন করার পরের দিন সকাল ১০টা থেকে নতুন ক্যাপ্টেনের কমিশন অফার চালু হবে। বোনাস পেমেন্ট শর্ত পূরণ হওয়ার পরদিন সেটি ওয়ালেটে যুক্ত হবে। যেমন, প্রথম ৩ দিনে ৩টি ট্রিপ সম্পন্ন করলে চতুর্থ দিনে ৫০০ টাকা পেমেন্ট ওয়ালেটে পাওয়া যাবে।</p>
<h3>রেফারেল প্রোগ্রাম</h3>
<h4>পার্সেল</h4>
<p>একজন পার্সেল রাইডার অন্য কাউকে রেফার করলে উভয় রাইডার রেফারেল বোনাসের জন্য প্রযোজ্য হবেন। নতুন পার্সেল রাইডার প্রথম ১৫ দিনের মধ্যে ৩৫টি ডেলিভারি সম্পন্ন করলে দু'জনেই বোনাস পাবেন।</p>
<ul><li>নতুন রাইডার পাবেন: <strong>৫০০ টাকা</strong></li><li>যিনি রেফার করেছেন, তিনি পাবেন: <strong>৫০০ টাকা</strong></li></ul>
<h4>বাইক</h4>
<p>একজন রাইডার অন্য কাউকে রেফার করলে এবং নতুন রাইডার ১৫ দিনে ১০টি ট্রিপ সম্পন্ন করলে উভয় রাইডার বোনাস পাবেন।</p>
<ul><li>নতুন রাইডার পাবেন: <strong>১০০ টাকা</strong></li><li>যিনি রেফার করেছেন, তিনি পাবেন: <strong>২০০ টাকা</strong></li></ul>
<p class="hint">রেফারেল কোড পাওয়া যাবে: Pathao Driver app &gt; Earning &gt; Referral Bonus &gt; See details</p>
<h4>কার</h4>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>শহর ও ক্যাটাগরি</th><th>শর্ত</th><th>নতুন ক্যাপ্টেন পাবেন</th><th>রেফারকারী পাবেন</th></tr></thead>
<tbody>
<tr><td>ঢাকা — Car Plus</td><td>১৫ দিনে ১০টি ট্রিপ</td><td>৩০০ টাকা</td><td>২৫০ টাকা</td></tr>
<tr><td>ঢাকা — Car Prime</td><td>১৫ দিনে ১০টি ট্রিপ</td><td>৩০০ টাকা</td><td>৪০০ টাকা</td></tr>
<tr><td>ঢাকা — Car Max</td><td>১৫ দিনে ১০টি ট্রিপ</td><td>৩০০ টাকা</td><td>৫০ও টাকা</td></tr>
<tr><td>চট্টগ্রাম — Car Plus</td><td>১৫ দিনে ১০টি ট্রিপ</td><td>১,০০০ টাকা</td><td>১,০০০ টাকা</td></tr>
</tbody></table></div>
`;

TOPICS[1].html.en = `
<p class="lead">A complete list of the bonuses available for joining as a new rider/captain and for referring people you know.</p>
<h3>Joining Bonus: Parcel</h3>
<p>New parcel cyclists get an attractive joining bonus. Condition: a completion rate of 80% or higher must be maintained.</p>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>Period</th><th>Condition</th><th>Bonus</th></tr></thead>
<tbody>
<tr><td>First 3 days</td><td>3 trips</td><td>Tk. 200</td></tr>
<tr><td>First 7 days</td><td>10 trips</td><td>Tk. 500</td></tr>
<tr><td>Next 20 days</td><td>25 trips</td><td>Tk. 1,000</td></tr>
</tbody></table></div>
<h3>Joining Bonus: Bike</h3>
<div class="badge">New Rider Joining Bonus (New Offer) — Start date: 15 August, 2025 (until further notice)</div>
<p>Condition for new riders: maintain a 65% completion rate.</p>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>Period</th><th>Condition</th><th>Bonus</th></tr></thead>
<tbody>
<tr><td>First 3 days</td><td>3 trips</td><td>Tk. 150</td></tr>
<tr><td>First 20 days</td><td>30 trips</td><td>Tk. 1,000</td></tr>
<tr><td>Next 20 days</td><td>60 trips</td><td>Tk. 1,500</td></tr>
</tbody></table></div>
<p>The slab-based commission rate remains unchanged. <strong>This joining bonus offer is applicable only in Dhaka.</strong></p>
<div class="callout"><strong>Note:</strong> The quest becomes active at 10 AM the day after a new rider's account is verified. The rider receives the bonus in their digital wallet once each quest's time window ends. For example, if a rider completes 3 trips within a day, the bonus is credited the day after the 3-day window ends.</div>
<h3>Joining Bonus: Car</h3>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>Period</th><th>Condition</th><th>Bonus</th></tr></thead>
<tbody>
<tr><td>First 3 days</td><td>3 trips</td><td>Tk. 500</td></tr>
<tr><td>First 20 days</td><td>30 trips</td><td>Tk. 2,000</td></tr>
<tr><td>Next 20 days</td><td>45 trips</td><td>Tk. 2,200</td></tr>
<tr><td>First 40 days</td><td>—</td><td>Opportunity to share trips at 10% commission</td></tr>
</tbody></table></div>
<p><strong>Note:</strong> The new captain's commission offer becomes active at 10 AM the day after joining. The bonus is credited to the wallet the day after the payment condition is met. For example, completing 3 trips within the first 3 days means the Tk. 500 payment is credited to the wallet on the 4th day.</p>
<h3>Referral Program</h3>
<h4>Parcel</h4>
<p>When a parcel rider refers someone, both riders become eligible for a referral bonus once the new parcel rider completes 35 deliveries within the first 15 days.</p>
<ul><li>New rider gets: <strong>Tk. 500</strong></li><li>Referrer gets: <strong>Tk. 500</strong></li></ul>
<h4>Bike</h4>
<p>When a rider refers someone, both riders get the bonus once the new rider completes 10 trips within 15 days.</p>
<ul><li>New rider gets: <strong>Tk. 100</strong></li><li>Referrer gets: <strong>Tk. 200</strong></li></ul>
<p class="hint">Find your referral code: Pathao Driver app &gt; Earning &gt; Referral Bonus &gt; See details</p>
<h4>Car</h4>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>City & Category</th><th>Condition</th><th>New Captain Gets</th><th>Referrer Gets</th></tr></thead>
<tbody>
<tr><td>Dhaka — Car Plus</td><td>10 trips in 15 days</td><td>Tk. 300</td><td>Tk. 250</td></tr>
<tr><td>Dhaka — Car Prime</td><td>10 trips in 15 days</td><td>Tk. 300</td><td>Tk. 400</td></tr>
<tr><td>Dhaka — Car Max</td><td>10 trips in 15 days</td><td>Tk. 300</td><td>Tk. 500</td></tr>
<tr><td>Chattogram — Car Plus</td><td>10 trips in 15 days</td><td>Tk. 1,000</td><td>Tk. 1,000</td></tr>
</tbody></table></div>
`;

TOPICS[2].html.bn = `
<p class="lead">টপ পারফর্মিং রাইডারদের উৎসাহিত করতে এবং সবার আয় বৃদ্ধি করতে চালু হয়েছে স্টার প্রোগ্রাম। প্রতি মাসে নির্দিষ্ট কিছু শর্ত পূরণ করলেই হওয়া যাবে স্টার রাইডার/ক্যাপ্টেন।</p>
<h3>বাইক স্টার প্রোগ্রাম</h3>
<p>এই প্রোগ্রামে বাইক ইন্টারসিটি ট্রিপ, ক্যাশ আউট চার্জ কোয়েস্ট, স্পেশাল বোনাস ও বেনিফিট পাওয়া যায় — ৩টি ক্যাটাগরিতে: প্লাটিনাম, গোল্ড ও সিলভার।</p>
<p><strong>সাধারণ শর্তসমূহ:</strong> ট্রিপ টার্গেট পূরণ ও কমপ্লিশন রেট বজায় রাখা, নিয়মিত বকেয়া পরিশোধ, ডিজিটাল পেমেন্ট গ্রহণ, যাত্রী থেকে কম রিপোর্ট ইস্যু পাওয়া।</p>
<div class="tier-grid">
<div class="tier tier-platinum">
<h4>প্লাটিনাম রাইডার</h4>
<p class="tier-target">১১০টি ট্রিপ &middot; ৬৫% কমপ্লিশন রেট</p>
<ul>
<li>দৈনিক স্পেশাল প্লাটিনাম কোয়েস্ট</li>
<li>ইনস্ট্যান্ট ক্যাশ আউট চার্জ</li>
<li>ইন্টারসিটি ট্রিপ ও কোয়েস্ট</li>
<li>সরাসরি Pathao KAM-এর সাথে যোগাযোগের সুযোগ</li>
<li>WIC অফিসে দ্রুত সার্ভিস</li>
<li>স্পেশাল বোনাস</li>
</ul>
</div>
<div class="tier tier-gold">
<h4>গোল্ড রাইডার</h4>
<p class="tier-target">৮০টি ট্রিপ &middot; ৬৫% কমপ্লিশন রেট</p>
<ul>
<li>দৈনিক স্পেশাল গোল্ড কোয়েস্ট</li>
<li>ইনস্ট্যান্ট ক্যাশ আউট চার্জ</li>
<li>ইন্টারসিটি ট্রিপ ও কোয়েস্ট</li>
<li>সরাসরি Pathao প্রতিনিধির সাথে যোগাযোগের সুযোগ</li>
<li>আকর্ষণীয় কোয়েস্ট</li>
</ul>
</div>
<div class="tier tier-silver">
<h4>সিলভার রাইডার</h4>
<p class="tier-target">৬০টি ট্রিপ &middot; ৬৫% কমপ্লিশন রেট</p>
<ul>
<li>দৈনিক স্পেশাল সিলভার কোয়েস্ট</li>
<li>ইনস্ট্যান্ট ক্যাশ আউট চার্জ</li>
<li>আকর্ষণীয় কোয়েস্ট</li>
<li>ইন্টারসিটি ট্রিপ ও কোয়েস্ট</li>
</ul>
</div>
</div>
<h3>কার স্টার প্রোগ্রাম (স্টার ক্যাপ্টেন)</h3>
<p>স্টার ক্যাপ্টেন প্রোগ্রামে ভিন্ন ক্যাটাগরি অনুযায়ী সুবিধা দেওয়া হয় — প্লাটিনাম, গোল্ড ও সিলভার।</p>
<div class="tier-grid">
<div class="tier tier-platinum">
<h4>প্লাটিনাম ক্যাপ্টেন</h4>
<p class="tier-target">আগের মাসে ৯৫ ট্রিপ &middot; ৬৫% কমপ্লিশন রেট &middot; ৩০% ট্রিপে ৫ স্টার</p>
<ul>
<li>৫% কমিশনে ট্রিপ দেওয়ার সুযোগ</li>
<li>ক্যাশ আউট চার্জ কোয়েস্ট</li>
<li>আকর্ষণীয় স্পেশাল কোয়েস্ট অফার</li>
</ul>
</div>
<div class="tier tier-gold">
<h4>গোল্ড ক্যাপ্টেন</h4>
<p class="tier-target">আগের মাসে ৬৫ ট্রিপ &middot; ৬৫% কমপ্লিশন রেট &middot; ৩০% ট্রিপে ৫ স্টার</p>
<ul>
<li>১০% কমিশনে ট্রিপ দেওয়ার সুযোগ</li>
<li>ক্যাশ আউট চার্জ কোয়েস্ট</li>
<li>আকর্ষণীয় স্পেশাল কোয়েস্ট অফার</li>
</ul>
</div>
<div class="tier tier-silver">
<h4>সিলভার ক্যাপ্টেন</h4>
<p class="tier-target">আগের মাসে ৪৫ ট্রিপ &middot; ৬৫% কমপ্লিশন রেট &middot; ৩০% ট্রিপে ৫ স্টার</p>
<ul>
<li>প্রথম ৩ ট্রিপে ১৫% ও পরবর্তী সব ট্রিপে ১০% কমিশনে ট্রিপ দেওয়ার সুযোগ</li>
<li>ক্যাশ আউট চার্জ কোয়েস্ট</li>
<li>আকর্ষণীয় স্পেশাল কোয়েস্ট অফার</li>
</ul>
</div>
</div>
<p>টার্গেট পূরণ করলে পরের মাসেও বর্তমান সুযোগ-সুবিধা বজায় থাকবে।</p>
<div class="callout"><strong>নতুন ড্রাইভার হিসেবে স্টার ক্যাপ্টেন হওয়া যাবে কি?</strong> স্টার ক্যাপ্টেন হওয়ার জন্য নতুন ড্রাইভার হিসেবে ৪০ দিন পূর্ণ করতে হবে। এরপর নির্ধারিত টার্গেট অর্জন করলেই স্টার ক্যাপ্টেন হিসেবে যোগ্য বিবেচিত হবেন।</div>
`;

TOPICS[2].html.en = `
<p class="lead">The Star Program was created to encourage top-performing riders and boost earnings for everyone. Meeting a set of simple conditions each month qualifies a rider or captain for Star status.</p>
<h3>Bike Star Program</h3>
<p>This program offers bike intercity trips, cash-out charge quests, special bonuses, and other benefits — across 3 categories: Platinum, Gold, and Silver.</p>
<p><strong>General conditions:</strong> meet trip targets and maintain the completion rate, pay dues regularly, accept digital payments, and keep passenger-reported issues low.</p>
<div class="tier-grid">
<div class="tier tier-platinum">
<h4>Platinum Rider</h4>
<p class="tier-target">110 trips &middot; 65% completion rate</p>
<ul>
<li>Daily special Platinum quest</li>
<li>Instant cash-out charge</li>
<li>Intercity trips & quests</li>
<li>Direct access to a Pathao KAM</li>
<li>Priority service at WIC offices</li>
<li>Special bonus</li>
</ul>
</div>
<div class="tier tier-gold">
<h4>Gold Rider</h4>
<p class="tier-target">80 trips &middot; 65% completion rate</p>
<ul>
<li>Daily special Gold quest</li>
<li>Instant cash-out charge</li>
<li>Intercity trips & quests</li>
<li>Direct access to a Pathao representative</li>
<li>Attractive quests</li>
</ul>
</div>
<div class="tier tier-silver">
<h4>Silver Rider</h4>
<p class="tier-target">60 trips &middot; 65% completion rate</p>
<ul>
<li>Daily special Silver quest</li>
<li>Instant cash-out charge</li>
<li>Attractive quests</li>
<li>Intercity trips & quests</li>
</ul>
</div>
</div>
<h3>Car Star Program (Star Captain)</h3>
<p>The Star Captain program offers benefits based on category — Platinum, Gold, and Silver.</p>
<div class="tier-grid">
<div class="tier tier-platinum">
<h4>Platinum Captain</h4>
<p class="tier-target">95 trips last month &middot; 65% completion rate &middot; 5-star on 30% of trips</p>
<ul>
<li>Ride-sharing opportunity at 5% commission</li>
<li>Cash-out charge quests</li>
<li>Attractive special quest offer</li>
</ul>
</div>
<div class="tier tier-gold">
<h4>Gold Captain</h4>
<p class="tier-target">65 trips last month &middot; 65% completion rate &middot; 5-star on 30% of trips</p>
<ul>
<li>Ride-sharing opportunity at 10% commission</li>
<li>Cash-out charge quests</li>
<li>Attractive special quest offer</li>
</ul>
</div>
<div class="tier tier-silver">
<h4>Silver Captain</h4>
<p class="tier-target">45 trips last month &middot; 65% completion rate &middot; 5-star on 30% of trips</p>
<ul>
<li>15% commission on first 3 trips, then 10% on all subsequent trips</li>
<li>Cash-out charge quests</li>
<li>Attractive special quest offer</li>
</ul>
</div>
</div>
<p>Meeting the target keeps your current benefits active the following month as well.</p>
<div class="callout"><strong>Can a new driver become a Star Captain?</strong> A driver must complete 40 days as a new driver before becoming eligible for Star Captain. After that, meeting the designated targets qualifies them for Star Captain status.</div>
`;

TOPICS[3].html.bn = `
<div class="tabs-inner" data-group="fare-bn">
<div class="tabs-inner-nav">
<button class="tin-btn active" data-target="fare-bn-parcel">পার্সেল</button>
<button class="tin-btn" data-target="fare-bn-bike">বাইক</button>
<button class="tin-btn" data-target="fare-bn-car">কার</button>
<button class="tin-btn" data-target="fare-bn-common">সাধারণ নীতিমালা</button>
</div>
<div class="tin-pane active" id="fare-bn-parcel">
<h3>পার্সেল ভাড়া বিভাজন</h3>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>উপাদান</th><th>পরিমাণ</th></tr></thead>
<tbody>
<tr><td>বেস ফেয়ার</td><td>৬০ টাকা</td></tr>
<tr><td>প্রতি কিলোমিটার</td><td>১২ টাকা</td></tr>
<tr><td>সেফটি কভারেজ ফি</td><td>১০ টাকা</td></tr>
<tr><td>পাঠাও কমিশন</td><td>২০%</td></tr>
</tbody></table></div>
<p><strong>প্রযোজ্য শহর:</strong> ঢাকা, চট্টগ্রাম, সিলেট। <span class="warn">ড্রাইভারদের সাথে ভাড়া বিভাজন শেয়ার করা যাবে না।</span></p>
<h4>পিক-আপ ফি</h4>
<p>অপেক্ষাকৃত বেশি দূরত্বের পিকআপ লোকেশনের ট্রিপ সম্পন্ন করলে পিকআপ ফি পাওয়া যায়। সিস্টেম দূরত্ব পরিমাপ করে স্বয়ংক্রিয়ভাবে এই টাকা ট্রিপের ভাড়ার সাথে যুক্ত করে এবং অ্যাপে "পিক-আপ ফি অন্তর্ভুক্ত" লেখা দেখানো হয়।</p>
<p><strong>সর্বোচ্চ পরিমাণ (ঢাকা ও চট্টগ্রাম):</strong> প্রতি কিলোমিটার ১০ টাকা হিসেবে সর্বনিম্ন ১০ টাকা থেকে সর্বোচ্চ ৩০ টাকা।</p>
<h4>সেফটি কভারেজ ফি</h4>
<p>পার্সেল ডেলিভারির সময় অনাকাঙ্ক্ষিত দুর্ঘটনা ঘটলে পাঠাও থেকে রাইডারকে আর্থিক সহায়তা দেওয়া হয়।</p>
<ul>
<li><strong>ফি পরিমাণ:</strong> ১০ টাকা (শুধুমাত্র ইউজার থেকে নেওয়া হয়, রাইডারের কোনো অতিরিক্ত চার্জ নেই — এটি বিনামূল্যের সুবিধা)</li>
<li><strong>চালু হওয়ার তারিখ:</strong> ১৯ জুন ২০২৫</li>
<li><strong>কভারেজ:</strong> ছোট দুর্ঘটনা — সর্বোচ্চ ৳৫,০০০ &middot; বড় দুর্ঘটনা — সর্বোচ্চ ৳১,০০,০০০ &middot; দুর্ঘটনাজনিত মৃত্যু — পরিবারের জন্য ৳১,০০,০০০</li>
</ul>
<p><strong>ক্লেইম প্রক্রিয়া:</strong></p>
<ol class="steps">
<li>প্রয়োজনীয় চিকিৎসা গ্রহণ করুন এবং সকল ডকুমেন্ট সংগ্রহ করুন।</li>
<li>চিকিৎসার সকল ডকুমেন্ট স্ক্যান বা ছবি তুলে ইমেইল করুন: <code>rsiaid@pathao.com</code></li>
<li>ইমেইল পাওয়ার পর পাঠাও দ্রুততার সাথে ক্লেইম প্রক্রিয়া শুরু করবে।</li>
</ol>
<div class="callout">শুধুমাত্র রাইডারের শারীরিক ক্ষতির বিপরীতে সেফটি কভারেজ প্রযোজ্য। গাড়ির ক্ষতির জন্য কোনো আর্থিক সুবিধা নেই।</div>
<h4>পার্সেল স্টার প্রোগ্রাম ও বোনাস</h4>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>ক্যাটাগরি</th><th>মাসিক নিশ্চিত বোনাস (সর্বোচ্চ)</th></tr></thead>
<tbody>
<tr><td>প্লাটিনাম</td><td>১,০০০ টাকা</td></tr>
<tr><td>গোল্ড</td><td>৮০০ টাকা</td></tr>
<tr><td>সিলভার</td><td>৭০০ টাকা</td></tr>
</tbody></table></div>
<p>প্রতিটি ক্যাটাগরিতে প্রতিদিন/সপ্তাহে স্পেশাল বোনাসের সুযোগ ও ডিজিটাল পেমেন্ট ক্যাশ আউট চার্জে বিশেষ সুবিধা রয়েছে।</p>
</div>
<div class="tin-pane" id="fare-bn-bike">
<h3>বাইক ভাড়া উপাদান</h3>
<ul>
<li><strong>ক্যান্সেলেশন ফি:</strong> যোগ্য হতে ৫+ মিনিট অপেক্ষার সময় প্রয়োজন</li>
<li><strong>ওয়েটিং ফি:</strong> যোগ্য হতে ৫+ মিনিট অপেক্ষা এবং ২০০ মিটার রেডিয়াসের মধ্যে থাকা প্রয়োজন</li>
<li><strong>লং ডিসটেন্স পিকআপ (LDP) ফি:</strong> আন্তঃশহর ট্রিপের জন্য</li>
<li><strong>ডিজিটাল পেমেন্ট চার্জ:</strong> স্টার রাইডারদের জন্য কমানো হয়</li>
</ul>
<h4>ভাড়া রিপোর্ট ও সমন্বয়</h4>
<p><strong>রিপোর্ট উইন্ডো:</strong> ৩০ দিন পর্যন্ত &middot; <strong>সমন্বয় সময়সীমা:</strong> ৪৮ কর্মঘণ্টা</p>
<ol class="steps">
<li>পাঠাও ড্রাইভ অ্যাপের হোম পেজ থেকে "উপার্জন" অপশনে যান।</li>
<li>"ট্রিপ হিস্ট্রি" অপশনে যান।</li>
<li>নির্দিষ্ট ট্রিপটি সিলেক্ট করুন।</li>
<li>"রিপোর্ট ইস্যু" অপশনে ক্লিক করুন।</li>
<li>"আমার ভাড়া রিভিউ করুন" অপশন নির্বাচন করুন।</li>
<li>প্রাসঙ্গিক বিকল্প নির্বাচন করে রিপোর্ট সাবমিট করুন।</li>
</ol>
<p class="hint">ট্রিপ চলাকালীন সর্বদা ইন্টারনেট কানেকশন চালু রাখুন যাতে সিস্টেম ট্রিপের তথ্য সঠিকভাবে রেকর্ড করতে পারে।</p>
<h4>কমিশন</h4>
<p>বাইকের রেগুলার কমিশন <strong>১৫%</strong>। স্ল্যাব-ভিত্তিক কমিশন অফার চালু আছে (শুরু: ১২ মার্চ, ২০২৪ — পরবর্তী নোটিশ না দেওয়া পর্যন্ত):</p>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>দিনের ট্রিপ</th><th>কমিশন</th></tr></thead>
<tbody>
<tr><td>১ম ও ২য় ট্রিপ</td><td>১৫%</td></tr>
<tr><td>৩য় ও ৪র্থ ট্রিপ</td><td>১০%</td></tr>
<tr><td>৫ম ও ৬ষ্ঠ ট্রিপ</td><td>৫%</td></tr>
<tr><td>৭ম ট্রিপ থেকে পরবর্তী সব</td><td>১%</td></tr>
</tbody></table></div>
<p class="hint">নতুন রাইডার জয়েন করার ২ কর্মদিবসের মধ্যে কোয়েস্ট চালু হবে। কোয়েস্ট সক্রিয় না হওয়া পর্যন্ত ১৫% কমিশন কাটা হবে।</p>
</div>
<div class="tin-pane" id="fare-bn-car">
<h3>কার ভাড়া উপাদান</h3>
<ul>
<li><strong>ক্যান্সেলেশন ফি:</strong> যোগ্য হতে ৫+ মিনিট অপেক্ষার সময় প্রয়োজন</li>
<li><strong>ওয়েটিং ফি:</strong> যোগ্য হতে ৫+ মিনিট অপেক্ষা এবং ২০০ মিটার রেডিয়াসের মধ্যে থাকা প্রয়োজন</li>
<li><strong>LDP ফি:</strong> ভেহিকেল টাইপ ও ট্রিপ টাইপের উপর ভিত্তি করে</li>
</ul>
<h4>সমস্যা সমাধান গাইড</h4>
<div class="faq">
<details><summary>ক্যান্সেলেশন ফি না পাওয়ার সমাধান</summary>
<p><strong>যোগ্যতা:</strong> ক্যান্সেলেশনের সময় ৫ মিনিট বা তার বেশি হতে হবে; কম হলে ক্যাপ্টেন যোগ্য নয়।</p>
<p><strong>রিপোর্ট প্রক্রিয়া:</strong> উপার্জন &rarr; ট্রিপ হিস্ট্রি &rarr; ট্রিপ সিলেক্ট &rarr; রিপোর্ট করুন &rarr; "আমার ভাড়া রিভিউ করুন" &rarr; "আমি ক্যান্সেলেশন ফি সংগ্রহ করিনি" &rarr; বিস্তারিত লিখে সাবমিট করুন।</p>
<p><strong>সমন্বয় সময়:</strong> প্রতি রবিবার</p>
</details>
<details><summary>ওয়েটিং ফি না পাওয়ার সমাধান</summary>
<p><strong>যোগ্যতা:</strong> ওয়েটিং সময় ৫ মিনিট বা বেশি এবং পিকআপ লোকেশন থেকে ২০০ মিটারের মধ্যে থাকতে হবে।</p>
<p><strong>রিপোর্ট প্রক্রিয়া:</strong> উপার্জন &rarr; ট্রিপ হিস্ট্রি &rarr; ট্রিপ সিলেক্ট &rarr; রিপোর্ট করুন &rarr; "আমার ভাড়া রিভিউ করুন" &rarr; "আমি এই ট্রিপের জন্য ওয়েটিং ফি পাইনি" &rarr; সাবমিট করুন।</p>
<p><strong>সমন্বয় সময়:</strong> প্রতি রবিবার ডিজিটাল ব্যালেন্সে পেমেন্ট করা হয়।</p>
</details>
<details><summary>LDP ফি না পাওয়ার সমাধান</summary>
<p><strong>চেকিং প্রক্রিয়া:</strong> Engine Room-এ Ride ID দিয়ে ট্রিপ সার্চ করুন &rarr; Final Breakdown সেকশনে LDP আছে কিনা চেক করুন &rarr; না থাকলে Validate বাটনে ক্লিক করুন &rarr; Intercity/Innercity চেক করুন &rarr; Estimated Pickup Distance কপি করে LDP eligibility ও amount বের করুন।</p>
<p><strong>রিপোর্ট প্রক্রিয়া:</strong> উপার্জন &rarr; ট্রিপ হিস্ট্রি &rarr; ট্রিপ সিলেক্ট &rarr; রিপোর্ট করুন &rarr; "আমার ভাড়া রিভিউ করুন" &rarr; LDP সম্পর্কিত বিকল্প নির্বাচন করে সাবমিট করুন।</p>
</details>
<details><summary>দূরত্ব/সময় বেশি কিন্তু ভাড়া এডজাস্ট হয়নি</summary>
<p><strong>রিপোর্ট প্রক্রিয়া:</strong> উপার্জন &rarr; ট্রিপ হিস্ট্রি &rarr; ট্রিপ সিলেক্ট &rarr; রিপোর্ট ইস্যু &rarr; "আমার ভাড়া রিভিউ করুন" &rarr; "ট্রিপের সঠিক ভাড়া আদায় করিনি" &rarr; "অ্যাপ ভুল দূরত্ব/সময়কাল দেখাচ্ছে" নির্বাচন করে সাবমিট করুন।</p>
<p><strong>রিপোর্ট উইন্ডো:</strong> ৩০ দিন &middot; <strong>সমন্বয়:</strong> যাচাইয়ের ৪৮ কর্মঘণ্টার মধ্যে</p>
</details>
</div>
<h4>ডিসকাউন্ট ও প্রমো</h4>
<p><strong>এডজাস্টমেন্ট নিয়ম:</strong></p>
<ol class="steps">
<li>ডিসকাউন্ট অ্যামাউন্ট পাঠাও-এর কমিশন থেকে মাইনাস করা হয়।</li>
<li>বাকি টাকা ক্যাপ্টেনের বকেয়ার সাথে এডজাস্ট করা হয়।</li>
<li>কোনো বকেয়া না থাকলে পরদিন দুপুর ২টার মধ্যে ডিজিটাল ব্যালেন্সে জমা হয়।</li>
</ol>
<p class="hint">উদাহরণ: কাস্টমারের প্রমো ১০০ টাকা, পাঠাও কমিশন ৪০ টাকা &rarr; ক্যাপ্টেন পাবেন ১০০ − ৪০ = ৬০ টাকা।</p>
<p><strong>ডিসকাউন্ট না পেলে:</strong> ট্রিপ আইডি শেয়ার করুন — Engine Room থেকে যাচাই করা হবে। পরদিন দুপুর ২টার পরও না পেলে কার প্লাস বাগ ট্র্যাকারে ইনপুট দেওয়া হবে; ২৪-৪৮ কর্মঘণ্টায় সমাধান হবে বলে আশা করা যায়।</p>
</div>
<div class="tin-pane" id="fare-bn-common">
<h3>সাধারণ ভাড়া সম্পর্কিত নীতিমালা</h3>
<ul>
<li>সমস্ত সেবায় ভাড়া সম্পর্কে ৩০ দিনের মধ্যে রিপোর্ট করা যায়।</li>
<li>এডজাস্টমেন্ট সাধারণত ৪৮ কর্মঘণ্টায় সম্পন্ন হয়।</li>
<li>ট্রিপ চলাকালীন ইন্টারনেট কানেকশন সক্রিয় রাখা অত্যন্ত গুরুত্বপূর্ণ।</li>
</ul>
<h4>ডিজিটাল পেমেন্ট গুরুত্বপূর্ণ তথ্য</h4>
<ul>
<li>পাঠাও ড্রাইভ অ্যাপই একমাত্র ডিউ পরিশোধের মাধ্যম।</li>
<li>মার্চেন্ট নম্বরে বা অ্যাপের বাইরে পেমেন্ট করলে ডিউ এডজাস্ট হবে না।</li>
<li>সিস্টেম রাত ১২টার পর রিফ্রেশ হয় — তখন সাময়িক অসামঞ্জস্যতা দেখা যেতে পারে।</li>
</ul>
</div>
</div>
`;

TOPICS[3].html.en = `
<div class="tabs-inner" data-group="fare-en">
<div class="tabs-inner-nav">
<button class="tin-btn active" data-target="fare-en-parcel">Parcel</button>
<button class="tin-btn" data-target="fare-en-bike">Bike</button>
<button class="tin-btn" data-target="fare-en-car">Car</button>
<button class="tin-btn" data-target="fare-en-common">Common Policies</button>
</div>
<div class="tin-pane active" id="fare-en-parcel">
<h3>Parcel Fare Breakdown</h3>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>Component</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Base Fare</td><td>Tk. 60</td></tr>
<tr><td>Per Kilometer</td><td>Tk. 12</td></tr>
<tr><td>Safety Coverage Fee</td><td>Tk. 10</td></tr>
<tr><td>Pathao Commission</td><td>20%</td></tr>
</tbody></table></div>
<p><strong>Applicable cities:</strong> Dhaka, Chattogram, Sylhet. <span class="warn">The fare breakdown must not be shared with drivers.</span></p>
<h4>Pickup Fee</h4>
<p>A pickup fee is earned for completing trips with a relatively long-distance pickup location. The system automatically measures the distance and adds this amount to the trip fare, showing "pickup fee included" in the app.</p>
<p><strong>Maximum amount (Dhaka & Chattogram):</strong> Tk. 10 per extra kilometer, from a minimum of Tk. 10 up to a maximum of Tk. 30.</p>
<h4>Safety Coverage Fee</h4>
<p>If an unforeseen accident occurs during a parcel delivery, Pathao provides financial assistance to the rider.</p>
<ul>
<li><strong>Fee amount:</strong> Tk. 10 (charged only to the user; riders pay no extra charge — it's a free benefit)</li>
<li><strong>Effective from:</strong> 19 June 2025</li>
<li><strong>Coverage:</strong> Minor accident — up to Tk. 5,000 &middot; Major accident — up to Tk. 1,00,000 &middot; Accidental death — Tk. 1,00,000 for the family</li>
</ul>
<p><strong>Claim process:</strong></p>
<ol class="steps">
<li>Get the necessary medical treatment and collect all documents.</li>
<li>Scan or photograph all treatment documents and email them to: <code>rsiaid@pathao.com</code></li>
<li>Pathao will begin the claim process promptly after receiving the email.</li>
</ol>
<div class="callout">Safety coverage applies only to the rider's physical injury. No financial benefit is provided for vehicle damage.</div>
<h4>Parcel Star Program & Bonuses</h4>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>Category</th><th>Guaranteed Monthly Bonus (Max)</th></tr></thead>
<tbody>
<tr><td>Platinum</td><td>Tk. 1,000</td></tr>
<tr><td>Gold</td><td>Tk. 800</td></tr>
<tr><td>Silver</td><td>Tk. 700</td></tr>
</tbody></table></div>
<p>Each category also gets daily/weekly special bonus opportunities and special benefits on digital payment cash-out charges.</p>
</div>
<div class="tin-pane" id="fare-en-bike">
<h3>Bike Fare Components</h3>
<ul>
<li><strong>Cancellation Fee:</strong> Requires 5+ minutes of waiting time to be eligible</li>
<li><strong>Waiting Fee:</strong> Requires 5+ minutes of waiting within a 200-meter radius to be eligible</li>
<li><strong>Long Distance Pickup (LDP) Fee:</strong> For intercity trips</li>
<li><strong>Digital Payment Charge:</strong> Reduced for Star riders</li>
</ul>
<h4>Fare Report & Adjustment</h4>
<p><strong>Report window:</strong> up to 30 days &middot; <strong>Adjustment timeline:</strong> 48 working hours</p>
<ol class="steps">
<li>From the Pathao Drive app home page, go to "Earnings".</li>
<li>Go to "Trip History".</li>
<li>Select the specific trip.</li>
<li>Click "Report Issue".</li>
<li>Select "Review My Fare".</li>
<li>Select the relevant option and submit the report.</li>
</ol>
<p class="hint">Always keep the internet connection active during a trip so the system can record trip data accurately.</p>
<h4>Commission</h4>
<p>The regular bike commission is <strong>15%</strong>. A slab-wise commission offer is currently running (start date: 12 March, 2024 — until further notice):</p>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>Trip of the Day</th><th>Commission</th></tr></thead>
<tbody>
<tr><td>1st & 2nd trip</td><td>15%</td></tr>
<tr><td>3rd & 4th trip</td><td>10%</td></tr>
<tr><td>5th & 6th trip</td><td>5%</td></tr>
<tr><td>7th trip onward</td><td>1%</td></tr>
</tbody></table></div>
<p class="hint">The quest will be activated within two working days of a new rider joining. A 15% commission will be deducted until the quest is active.</p>
</div>
<div class="tin-pane" id="fare-en-car">
<h3>Car Fare Components</h3>
<ul>
<li><strong>Cancellation Fee:</strong> Requires 5+ minutes of waiting time to be eligible</li>
<li><strong>Waiting Fee:</strong> Requires 5+ minutes of waiting within a 200-meter radius to be eligible</li>
<li><strong>LDP Fee:</strong> Based on vehicle type and trip type</li>
</ul>
<h4>Troubleshooting Guide</h4>
<div class="faq">
<details><summary>Not receiving the cancellation fee</summary>
<p><strong>Eligibility:</strong> The cancellation duration must be 5 minutes or more; if less, the captain is not eligible.</p>
<p><strong>Report process:</strong> Earnings &rarr; Trip History &rarr; select trip &rarr; Report &rarr; "Review My Fare" &rarr; "I did not receive the cancellation fee" &rarr; write details and submit.</p>
<p><strong>Adjustment timeline:</strong> Every Sunday</p>
</details>
<details><summary>Not receiving the waiting fee</summary>
<p><strong>Eligibility:</strong> Waiting time of 5 minutes or more, within 200 meters of the pickup location.</p>
<p><strong>Report process:</strong> Earnings &rarr; Trip History &rarr; select trip &rarr; Report &rarr; "Review My Fare" &rarr; "I did not receive the waiting fee for this trip" &rarr; submit.</p>
<p><strong>Adjustment timeline:</strong> Paid to the digital balance every Sunday.</p>
</details>
<details><summary>Not receiving the LDP fee</summary>
<p><strong>Checking process:</strong> Open Engine Room and search the trip by Ride ID &rarr; check the Final Breakdown section for LDP &rarr; if missing, click Validate &rarr; check Intercity/Innercity &rarr; copy the Estimated Pickup Distance to determine LDP eligibility and amount.</p>
<p><strong>Report process:</strong> Earnings &rarr; Trip History &rarr; select trip &rarr; Report &rarr; "Review My Fare" &rarr; select the LDP-related option and submit.</p>
</details>
<details><summary>Extra distance/time recorded but fare not adjusted</summary>
<p><strong>Report process:</strong> Earnings &rarr; Trip History &rarr; select trip &rarr; Report Issue &rarr; "Review My Fare" &rarr; "The correct fare was not charged for the trip" &rarr; select "App showing wrong distance/duration" and submit.</p>
<p><strong>Report window:</strong> 30 days &middot; <strong>Adjustment:</strong> within 48 working hours after verification</p>
</details>
</div>
<h4>Discount & Promo</h4>
<p><strong>Adjustment rule:</strong></p>
<ol class="steps">
<li>The discount amount is deducted from Pathao's commission.</li>
<li>The remaining amount is adjusted against the captain's due.</li>
<li>If there is no due, it is credited to the digital balance by 2 PM the next day.</li>
</ol>
<p class="hint">Example: Customer promo Tk. 100, Pathao commission Tk. 40 &rarr; captain receives 100 − 40 = Tk. 60.</p>
<p><strong>If the discount is not received:</strong> Share the trip ID — it will be verified from Engine Room. If not adjusted by 2 PM the next day, it will be logged in the Car Plus bug tracker; resolution is expected within 24-48 working hours.</p>
</div>
<div class="tin-pane" id="fare-en-common">
<h3>General Fare Policies</h3>
<ul>
<li>Fare issues for all services can be reported within 30 days.</li>
<li>Adjustments are usually completed within 48 working hours.</li>
<li>Keeping the internet connection active during a trip is essential.</li>
</ul>
<h4>Important Digital Payment Information</h4>
<ul>
<li>The Pathao Drive app is the only channel for paying dues.</li>
<li>Payments made to a merchant number or outside the app will not adjust the due.</li>
<li>The system refreshes after 12 AM — temporary discrepancies may appear at that time.</li>
</ul>
</div>
</div>
`;

TOPICS[4].html.bn = `
<p class="lead">প্রতিটি সেবার ডিউ লিমিট, পরিশোধ মাধ্যম ও ধাপে ধাপে পরিশোধ প্রক্রিয়া।</p>
<h3>ডিউ লিমিট</h3>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>শহর</th><th>বাইক / পার্সেল</th><th>কার</th></tr></thead>
<tbody>
<tr><td>ঢাকা</td><td>৩০০ টাকা</td><td>৬০০ টাকা</td></tr>
<tr><td>চট্টগ্রাম</td><td>২০০ টাকা</td><td>৪০০ টাকা</td></tr>
<tr><td>সিলেট</td><td>১৫০ টাকা</td><td>—</td></tr>
</tbody></table></div>
<div class="callout warn">ডিউ লিমিট অতিক্রম করার আগেই পরিশোধ করে ফেলুন, অন্যথায় অ্যাকাউন্ট স্বয়ংক্রিয়ভাবে সাসপেন্ড হয়ে যাবে।</div>
<h3>পেমেন্ট মাধ্যম</h3>
<p>ডিজিটাল ক্রেডিট, বিকাশ, রকেট, নগদ, ভিসা/মাস্টারকার্ড, অ্যামেক্স কার্ড, নেক্সাস পে, ওকে ওয়ালেট এবং আই পে।</p>
<h3>বিকাশের মাধ্যমে ডিউ পরিশোধ</h3>
<ol class="steps">
<li>পাঠাও ড্রাইভ অ্যাপে যান।</li>
<li>"Earnings" অপশনে প্রবেশ করুন।</li>
<li>"Adjust Due" অপশনটি নির্বাচন করুন।</li>
<li>টাকার পরিমাণ লিখে CONTINUE বাটনে ক্লিক করুন।</li>
<li>ডিজিটাল পেমেন্ট থেকে পেমেন্ট মাধ্যম বেছে নিন (বিকাশ, নগদ, ভিসা কার্ড, ডিজিটাল ক্রেডিট ইত্যাদি)।</li>
<li>বিকাশ অ্যাকাউন্ট সেভ রাখতে "Remember Bkash" এ "Yes" নির্বাচন করুন।</li>
<li>বিকাশ অ্যাকাউন্ট নম্বর লিখুন।</li>
<li>৬ সংখ্যার ভেরিফিকেশন কোড দিন।</li>
<li>বিকাশ পিন নম্বর দিন।</li>
</ol>
<p class="hint">এখানে উদাহরণ হিসেবে 'বিকাশ' ব্যবহার করা হয়েছে, তবে যেকোনো পেমেন্ট মাধ্যমে একই নিয়ম প্রযোজ্য। পরিশোধ সফল হলে পাঠাও অ্যাপে কনফার্মেশন পাওয়া যাবে।</p>
<div class="callout">রাত ১২টার পর সিস্টেম রিফ্রেশ হয়, তখন Due balance-এ সাময়িক অসামঞ্জস্যতা দেখাতে পারে। ৩০ মিনিট অপেক্ষা করলে সিস্টেম রিফ্রেশ হয়ে সঠিক এমাউন্ট দেখাবে।</div>
<h3>ডিজিটাল ক্রেডিটের মাধ্যমে ডিউ পরিশোধ</h3>
<ol class="steps">
<li>অ্যাপের "উপার্জন" অপশনে যান।</li>
<li>"আপনার ডিউ পরিশোধ করুন" অপশনে ক্লিক করুন।</li>
<li>টাকার পরিমাণ লিখুন।</li>
<li>"চালিয়ে যান" এ ক্লিক করুন।</li>
<li>"ডিজিটাল ক্রেডিট" অপশনে ক্লিক করলেই বকেয়া পরিশোধ হয়ে যাবে।</li>
</ol>
<h3>হঠাৎ ডিউ বেড়ে যাওয়ার কারণ</h3>
<div class="faq">
<details><summary>কারণ ১: সিস্টেম রিফ্রেশজনিত সাময়িক অসামঞ্জস্যতা</summary>
<p>অ্যাকাউন্ট চেক করলে দেখা যায় বর্তমানে সঠিক পরিমাণ ডিউ দেখানো হচ্ছে। রাত ১২টার পর সিস্টেম রিফ্রেশ হওয়ায় Due balance-এ অসামঞ্জস্যতা দেখাতে পারে — এমন হলে ৩০ মিনিট অপেক্ষা করুন, সিস্টেম রিফ্রেশ হয়ে সঠিক এমাউন্ট দেখাবে।</p>
</details>
<details><summary>কারণ ২: ফ্ল্যাগড ট্রিপের কারণে কমিশন/কোয়েস্ট বোনাস ডিউ-তে যোগ হওয়া</summary>
<p>নির্দিষ্ট তারিখে একটি কোয়েস্ট পেমেন্ট করা হয়েছিল, কিন্তু পরবর্তীতে কোয়েস্ট-অন্তর্ভুক্ত একটি ট্রিপ সঠিকভাবে সম্পন্ন না হওয়ায় সিস্টেম থেকে সন্দেহজনক হিসেবে বাতিল করা হয়েছে, ফলে সেই কোয়েস্ট পেমেন্টের টাকা পুনরায় ডিউ ব্যালেন্সে এডজাস্ট হয়েছে।</p>
</details>
</div>
`;

TOPICS[4].html.en = `
<p class="lead">Due limits, payment methods, and step-by-step payment processes for each service.</p>
<h3>Due Limits</h3>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>City</th><th>Bike / Parcel</th><th>Car</th></tr></thead>
<tbody>
<tr><td>Dhaka</td><td>Tk. 300</td><td>Tk. 600</td></tr>
<tr><td>Chattogram</td><td>Tk. 200</td><td>Tk. 400</td></tr>
<tr><td>Sylhet</td><td>Tk. 150</td><td>—</td></tr>
</tbody></table></div>
<div class="callout warn">Please pay before the due limit is exceeded, otherwise the account will be automatically suspended.</div>
<h3>Payment Methods</h3>
<p>Digital Credit, bKash, Rocket, Nagad, Visa/Mastercard, Amex Card, Nexus Pay, OK Wallet, and iPay.</p>
<h3>Paying Dues via bKash</h3>
<ol class="steps">
<li>Go to the Pathao Drive app.</li>
<li>Enter the "Earnings" option.</li>
<li>Select "Adjust Due".</li>
<li>Enter the amount and click CONTINUE.</li>
<li>Select a payment method from digital payments (bKash, Nagad, Visa card, Digital Credit, etc.).</li>
<li>Select "Yes" for "Remember Bkash" to save the account.</li>
<li>Enter your bKash account number.</li>
<li>Enter the 6-digit verification code sent to your account.</li>
<li>Enter your bKash PIN.</li>
</ol>
<p class="hint">bKash is used here as an example — the same steps apply for any payment method. A confirmation appears in the Pathao app once payment succeeds.</p>
<div class="callout">The system refreshes after 12 AM, which can cause a temporary discrepancy in the due balance. Please wait 30 minutes; the correct amount will show once the system refreshes.</div>
<h3>Paying Dues via Digital Credit</h3>
<ol class="steps">
<li>Go to "Earnings" in the app.</li>
<li>Click "Adjust Your Due".</li>
<li>Enter the amount.</li>
<li>Click "Continue".</li>
<li>Select "Digital Credit" and the due will be cleared.</li>
</ol>
<h3>Why Did My Due Suddenly Increase?</h3>
<div class="faq">
<details><summary>Reason 1: Temporary discrepancy from a system refresh</summary>
<p>Checking the account shows the correct due amount is currently displayed. Since the system refreshes after 12 AM, the due balance may show a discrepancy — in that case, wait 30 minutes and the correct amount will appear after the refresh.</p>
</details>
<details><summary>Reason 2: Commission/quest bonus added back to due after a flagged trip</summary>
<p>A quest payment was made on a specific date, but a trip included in that quest was later cancelled by the system as suspicious for not being completed correctly. As a result, that quest payment amount was readjusted back into the due balance.</p>
</details>
</div>
`;

TOPICS[5].html.bn = `
<p class="lead">ট্রিপ কেন ফ্ল্যাগ হয়, কীভাবে তা এড়ানো যায় এবং ফ্ল্যাগড ট্রিপ রিভিউ রিকোয়েস্ট করার সম্পূর্ণ প্রক্রিয়া।</p>
<div class="tabs-inner" data-group="flag-bn">
<div class="tabs-inner-nav">
<button class="tin-btn active" data-target="flag-bn-parcel">পার্সেল</button>
<button class="tin-btn" data-target="flag-bn-bike">বাইক</button>
<button class="tin-btn" data-target="flag-bn-car">কার</button>
</div>
<div class="tin-pane active" id="flag-bn-parcel">
<h3>পার্সেলে ফ্ল্যাগড ট্রিপ কী?</h3>
<p>কোনো পার্সেল ট্রিপ শুরু করার কিছুক্ষণের মধ্যেই আবার "ট্রিপ শেষ" বাটনে চাপ দেওয়া হলে সেই ট্রিপটি ফ্ল্যাগ ট্রিপ হিসেবে গণ্য হয়।</p>
<h4>কীভাবে এড়ানো যাবে</h4>
<ul>
<li>পার্সেল পিকআপ করার পর অ্যাপ থেকে সঠিকভাবে ট্রিপ শুরু করুন।</li>
<li>রিসিভারের কাছে পার্সেল পৌঁছে দেওয়ার পর অ্যাপ থেকে ট্রিপ শেষ করুন।</li>
<li>সবসময় ডিভাইসে ইন্টারনেট ও লোকেশন (GPS) চালু রাখুন।</li>
<li>সর্বোপরি পাঠাও-এর নিয়ম মেনে পার্সেল ট্রিপ সম্পন্ন করুন।</li>
</ul>
</div>
<div class="tin-pane" id="flag-bn-bike">
<h3>ফ্ল্যাগড ট্রিপ কী?</h3>
<p>ট্রিপ চলাকালে সন্দেহজনক কিছু দেখা গেলে — যেমন রুট অস্বাভাবিক হওয়া, শুরু বা শেষ সঠিকভাবে না হওয়া, বা সময়ের গরমিল — সাধারণত এসব কারণে ট্রিপ ফ্ল্যাগ হয়। পাঠাও-এর নির্ধারিত নিয়ম ভঙ্গ করে নেওয়া ট্রিপগুলোও ফ্ল্যাগ হয়ে থাকে।</p>
<h4>কীভাবে এড়ানো যাবে</h4>
<ul>
<li>ইউজারকে পিকআপ করার পর অ্যাপ থেকে সঠিকভাবে ট্রিপ শুরু করুন।</li>
<li>ইউজারকে ড্রপ অফ করার পর অ্যাপ থেকে ট্রিপ শেষ করুন।</li>
<li>সবসময় ডিভাইসে ইন্টারনেট ও লোকেশন (GPS) চালু রাখুন।</li>
<li>সর্বোপরি পাঠাও-এর নিয়ম মেনে রাইড শেয়ার করুন।</li>
</ul>
</div>
<div class="tin-pane" id="flag-bn-car">
<h3>ফ্ল্যাগ ট্রিপ কী?</h3>
<p>পাঠাও-এর নির্দিষ্ট নিয়ম বা পলিসি অনুযায়ী নির্ধারিত সময় ও দূরত্বের মধ্যে সম্পন্ন না হলে সিস্টেম সেই ট্রিপকে সন্দেহজনক মনে করে ফ্ল্যাগ হিসেবে চিহ্নিত করে।</p>
<p>ট্রিপ চলাকালে রুট অস্বাভাবিক হওয়া, শুরু বা শেষ সঠিকভাবে না হওয়া, সময়ের গরমিল, অথবা ফোনে নেটওয়ার্ক/ইন্টারনেট সমস্যার কারণে কিলোমিটার ও মিনিট সঠিকভাবে গণনা না হলে ভাড়া সঠিকভাবে না আসার কারণেও ট্রিপ ফ্ল্যাগ হয়। পাঠাও-এর নিয়ম ভঙ্গ করে নেওয়া ট্রিপগুলোও ফ্ল্যাগ হয়ে থাকে।</p>
</div>
</div>
<h3>ফ্ল্যাগ ট্রিপ রিভিউ রিকোয়েস্ট প্রসেস</h3>
<ol class="steps">
<li>অ্যাপের "উপার্জন" সেকশনের 'ফ্ল্যাগ ট্রিপ' বাটনে যান।</li>
<li>ফ্ল্যাগ হওয়া ট্রিপগুলো "লাল রঙের সন্দেহপূর্ণ" লেখা থাকবে।</li>
<li>যে ট্রিপের পাশে 'আপিল' লেখা আছে সেই বাটনে ক্লিক করুন।</li>
<li>'বিবরণ' অপশনে সমস্যাটি বিস্তারিতভাবে লিখুন এবং একটি কারণ নির্বাচন করুন।</li>
<li>'সাবমিট করুন' বাটনে ক্লিক করে ট্রিপটি রিভিউ করুন।</li>
</ol>
<h3>ট্রিপের স্ট্যাটাস রং অনুযায়ী চেনার উপায়</h3>
<div class="status-grid">
<div class="status-chip status-red">লাল — সন্দেহপূর্ণ / বাতিল</div>
<div class="status-chip status-green">সবুজ — একসেপ্ট</div>
<div class="status-chip status-yellow">হলুদ — রিভিউ চলছে</div>
<div class="status-chip status-gray">ধূসর — এক্সপায়ার্ড</div>
<div class="status-chip status-black">কালো — আপিল বাকি</div>
</div>
<ul>
<li><strong>রিজেক্ট হলে:</strong> "সমস্যাটির জন্য আন্তরিকভাবে দুঃখিত। আপনার এই ট্রিপের জন্য রিভিউ রিকোয়েস্টটি গ্রহণযোগ্য হয়নি এবং রিকোয়েস্টটি রিজেক্ট করে দেওয়া হয়েছে।"</li>
<li><strong>একসেপ্ট হলে:</strong> ট্রিপের পাশে 'সবুজ রঙের একসেপ্ট' লেখা থাকবে এবং পরিশোধযোগ্য ব্যালেন্সে টাকা সমন্বয় করা হবে।</li>
<li><strong>রিভিউ চলাকালীন:</strong> 'হলুদ রঙের রিভিউ' লেখা থাকবে।</li>
<li><strong>এক্সপায়ার্ড হলে:</strong> 'ধূসর রঙের এক্সপায়ার্ড' লেখা থাকবে — অর্থাৎ আর রিভিউ করার সুযোগ নেই।</li>
<li><strong>রিভিউ বাকি থাকলে:</strong> 'কালো রঙের আপিল' লেখা থাকবে — অর্থাৎ এখনও রিভিউ করা হয়নি।</li>
</ul>
<div class="callout">রিভিউ রিকোয়েস্ট করা যাবে ট্রিপ 'সন্দেহজনক' হিসেবে চিহ্নিত হওয়ার <strong>৭ দিনের মধ্যে</strong>। রিকোয়েস্ট জমা দেওয়ার পর <strong>২৪-৪৮ কর্মঘণ্টার</strong> মধ্যে সমাধান দেওয়া হবে।</div>
<h3>স্ট্যান্ডার্ড রেসপন্স স্ক্রিপ্ট</h3>
<div class="script-box">
<p><strong>যদি ক্যাপ্টেন ইতিমধ্যে আপিল করে থাকেন:</strong> "অসুবিধার জন্য আন্তরিকভাবে দুঃখিত। যাচাই করে দেখা গেছে ট্রিপটি সঠিকভাবে সম্পন্ন না হওয়ায় সিস্টেম কর্তৃক সন্দেহজনক হিসেবে চিহ্নিত হয়েছে। আপনি ইতিমধ্যে এই ট্রিপের জন্য একটি রিভিউ রিকোয়েস্ট জমা দিয়েছেন এবং বিষয়টি পর্যালোচনাধীন আছে। আমরা এই সমস্যাটি সমাধানের জন্য কাজ করছি এবং শীঘ্রই আপনাকে আপডেট জানাব।"</p>
<p><strong>যদি ক্যাপ্টেন এখনও আপিল না করে থাকেন:</strong> "অসুবিধার জন্য আন্তরিকভাবে দুঃখিত। যাচাই করে দেখা গেছে ট্রিপটি সঠিকভাবে সম্পন্ন না হওয়ায় সিস্টেম কর্তৃক সন্দেহজনক হিসেবে চিহ্নিত হয়েছে। এই বিষয়ে রিভিউ রিকোয়েস্ট করতে, দয়া করে ট্রিপের জন্য একটি রিপোর্ট জমা দিন। এটি আপনার অ্যাপের 'উপার্জন' সেকশনের অধীনে 'ফ্ল্যাগড ট্রিপ' অপশনে পাবেন। সেখানে আপিল করার অপশন দেখতে পাবেন। অনুগ্রহ করে একটি আপিল সাবমিট করুন, আশা করি সমস্যাটির যথাযথ সমাধান হবে।"</p>
</div>
<h3>ফ্ল্যাগড ট্রিপ যাচাইয়ের ড্যাশবোর্ড</h3>
<p>প্রথমে রেজিস্টার্ড পাঠাও ফোন নম্বরটি সংগ্রহ করুন। এরপর Engine Room থেকে যাচাই করুন কোন ট্রিপটি ফ্ল্যাগ হয়েছে, কেন হয়েছে, ওই ট্রিপে কোনো কোয়েস্ট বোনাস দেওয়া হয়েছিল কিনা, এবং ক্যাপ্টেন ইতিমধ্যে আপিল করেছেন কিনা।</p>
<p>RIDES FLAG DASHBOARD ট্যাবে ট্রিপ খুঁজে না পাওয়া গেলে (Engine Room-এ Appeal Status: Pending), সেই ট্রিপ "flag trip data for rides" শিটে খুঁজে দেখতে হবে এবং সে অনুযায়ী রিপ্লাই দিতে হবে।</p>
`;

TOPICS[5].html.en = `
<p class="lead">Why trips get flagged, how to avoid it, and the complete process for requesting a flagged trip review.</p>
<div class="tabs-inner" data-group="flag-en">
<div class="tabs-inner-nav">
<button class="tin-btn active" data-target="flag-en-parcel">Parcel</button>
<button class="tin-btn" data-target="flag-en-bike">Bike</button>
<button class="tin-btn" data-target="flag-en-car">Car</button>
</div>
<div class="tin-pane active" id="flag-en-parcel">
<h3>What is a Flagged Trip in Parcel?</h3>
<p>If "End Trip" is pressed shortly after starting a parcel trip, that trip is considered a flagged trip.</p>
<h4>How to Avoid It</h4>
<ul>
<li>Start the trip correctly from the app after picking up the parcel.</li>
<li>End the trip from the app after delivering the parcel to the receiver.</li>
<li>Always keep internet and location (GPS) turned on.</li>
<li>Above all, complete parcel trips in accordance with Pathao's rules.</li>
</ul>
</div>
<div class="tin-pane" id="flag-en-bike">
<h3>What is a Flagged Trip?</h3>
<p>If something suspicious is observed during a trip — such as an unusual route, an incorrect start or end, or a time mismatch — the trip is usually flagged for these reasons. Trips taken in violation of Pathao's rules are also flagged.</p>
<h4>How to Avoid It</h4>
<ul>
<li>Start the trip correctly from the app after picking up the user.</li>
<li>End the trip from the app after dropping off the user.</li>
<li>Always keep internet and location (GPS) turned on.</li>
<li>Above all, share rides according to Pathao's rules.</li>
</ul>
</div>
<div class="tin-pane" id="flag-en-car">
<h3>What is a Flagged Trip?</h3>
<p>A flagged trip refers to a trip that the system marks as suspicious when it is not completed within the designated time and distance according to Pathao's rules or policies.</p>
<p>If something suspicious is observed during a trip — an unusual route, incorrect start/end, a time mismatch — or if a network/internet issue on the phone prevents kilometers and minutes from being calculated correctly (causing an incorrect fare), the trip is also flagged. Trips taken in violation of Pathao's rules are also flagged.</p>
</div>
</div>
<h3>Flagged Trip Review Request Process</h3>
<ol class="steps">
<li>Go to the "Flagged Trip" button under the "Earnings" section of the app.</li>
<li>Flagged trips will be marked "Flagged" in red.</li>
<li>Click the "Appeal" button next to the flagged trip.</li>
<li>In the "Description" field, write your issue in detail and select a reason.</li>
<li>Click "Submit" to send the review request.</li>
</ol>
<h3>How to Read Trip Status Colors</h3>
<div class="status-grid">
<div class="status-chip status-red">Red — Flagged / Rejected</div>
<div class="status-chip status-green">Green — Accepted</div>
<div class="status-chip status-yellow">Yellow — In Review</div>
<div class="status-chip status-gray">Gray — Expired</div>
<div class="status-chip status-black">Black — Appeal pending</div>
</div>
<ul>
<li><strong>If rejected:</strong> "We are sorry for the inconvenience. Upon checking, we found that your review request for this trip was rejected."</li>
<li><strong>If accepted:</strong> The trip shows a green "Accepted" status, and the amount is adjusted in the payable balance.</li>
<li><strong>While under review:</strong> The trip shows a yellow "In Review" status.</li>
<li><strong>If expired:</strong> The trip shows a gray "Expired" status — meaning it can no longer be reviewed.</li>
<li><strong>If review is pending:</strong> The trip shows a black "Appeal" status — meaning you haven't reviewed it yet.</li>
</ul>
<div class="callout">A review can be requested within <strong>7 days</strong> of a trip being marked "Flagged". After submitting a review request, a resolution is provided within <strong>24-48 working hours</strong>.</div>
<h3>Standard Response Scripts</h3>
<div class="script-box">
<p><strong>If the captain has already appealed:</strong> "We are sorry for the inconvenience. Upon checking, we found that this trip was marked as suspicious by the system for not being completed correctly. You have already submitted a review request for this trip, and the matter is under review. We are working on resolving this issue and will update you soon."</p>
<p><strong>If the captain has not appealed yet:</strong> "We are sorry for the inconvenience. Upon checking, we found that this trip was marked as suspicious by the system for not being completed correctly. To request a review of this matter, please submit a report for the trip. You can find this trip from the 'Flagged Trip' option under the 'Earnings' section in your app. There, you will see an option to appeal the trip. Please submit an appeal, and we hope the issue will be resolved appropriately."</p>
</div>
<h3>Flagged Trip Verification Dashboard</h3>
<p>First, collect the registered Pathao phone number. Then verify from Engine Room which trip was flagged, why, whether any quest bonus was applied to that trip, and whether the captain has already submitted an appeal.</p>
<p>For flagged trips not found in the RIDES FLAG DASHBOARD tab (with Appeal Status: Pending in Engine Room), check the "flag trip data for rides" sheet and respond accordingly.</p>
`;

TOPICS[6].html.bn = `
<p class="lead">ডিজিটাল, পে-লেটার এবং ডিউ পরিশোধের সম্পূর্ণ পেমেন্ট ফ্লো।</p>
<h3>প্রাথমিক পেমেন্ট মাধ্যম অনুযায়ী চূড়ান্ত পেমেন্ট অপশন</h3>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>প্রাথমিক পেমেন্ট মাধ্যম</th><th>চূড়ান্ত পেমেন্ট মাধ্যম</th></tr></thead>
<tbody>
<tr><td>Cash</td><td>Cash, DP, Paylater, Pathao Pay</td></tr>
<tr><td>Digital Payment</td><td>Cash, DP, Pathao Pay</td></tr>
<tr><td>Pay Later</td><td>কোনো অপশন নেই (সরাসরি পেমেন্ট)</td></tr>
<tr><td>Pathao Pay</td><td>Cash, DP, Paylater, Pathao Pay</td></tr>
</tbody></table></div>
<h3>ডিজিটাল পেমেন্ট ফ্লো</h3>
<div class="flow">
<div class="flow-step"><span class="flow-num">১</span><div><h4>TOP UP</h4><p>যখন ইউজার বা ড্রাইভ অ্যাপ থেকে পেমেন্ট রিকোয়েস্ট করা হয়।</p></div></div>
<div class="flow-arrow">&darr;</div>
<div class="flow-step"><span class="flow-num">২</span><div><h4>PAYMENT</h4><p>যখন পাঠাও-এর সিস্টেমে পেমেন্ট সফল হয়।</p></div></div>
<div class="flow-arrow">&darr;</div>
<div class="flow-step"><span class="flow-num">৩</span><div><h4>DISBURSED</h4><p>যখন পেমেন্ট ড্রাইভারের ডিজিটাল ক্রেডিটে যুক্ত হয়।</p></div></div>
</div>
<h3>পে-লেটার পেমেন্ট ফ্লো</h3>
<div class="flow">
<div class="flow-step"><span class="flow-num">১</span><div><h4>DISBURSED</h4><p>পেমেন্ট সাথে সাথেই ড্রাইভারের ডিজিটাল ক্রেডিটে যুক্ত হয়ে যায়।</p></div></div>
</div>
<h3>DP ডিউ এডজাস্টমেন্ট ফ্লো</h3>
<div class="flow">
<div class="flow-step"><span class="flow-num">১</span><div><h4>PAYMENT</h4><p>বকেয়ার জন্য পরিশোধ করা হয়েছে।</p></div></div>
</div>
<h3>DP উইথড্র ফ্লো</h3>
<div class="flow">
<div class="flow-step"><span class="flow-num">১</span><div><h4>PAYMENT</h4><p>ড্রাইভ অ্যাপ থেকে পেমেন্ট রিকোয়েস্ট করে বিকাশ, রকেট অথবা ওয়ানব্যাংক এটিএমে পাঠানো হয়।</p></div></div>
</div>
`;

TOPICS[6].html.en = `
<p class="lead">The complete payment flow for digital, Pay Later, and due payments.</p>
<h3>Final Payment Options by Initial Payment Method</h3>
<div class="table-wrap"><table class="cx-table">
<thead><tr><th>Initial Payment Method</th><th>Final Payment Method</th></tr></thead>
<tbody>
<tr><td>Cash</td><td>Cash, DP, Paylater, Pathao Pay</td></tr>
<tr><td>Digital Payment</td><td>Cash, DP, Pathao Pay</td></tr>
<tr><td>Pay Later</td><td>No option (direct payment)</td></tr>
<tr><td>Pathao Pay</td><td>Cash, DP, Paylater, Pathao Pay</td></tr>
</tbody></table></div>
<h3>Digital Payment Flow</h3>
<div class="flow">
<div class="flow-step"><span class="flow-num">1</span><div><h4>TOP UP</h4><p>When payment is requested from the user or the Drive app.</p></div></div>
<div class="flow-arrow">&darr;</div>
<div class="flow-step"><span class="flow-num">2</span><div><h4>PAYMENT</h4><p>When payment is successful in Pathao's system.</p></div></div>
<div class="flow-arrow">&darr;</div>
<div class="flow-step"><span class="flow-num">3</span><div><h4>DISBURSED</h4><p>When the payment is added to the driver's digital credit.</p></div></div>
</div>
<h3>Pay Later Payment Flow</h3>
<div class="flow">
<div class="flow-step"><span class="flow-num">1</span><div><h4>DISBURSED</h4><p>Payment is immediately disbursed to the driver's digital credit.</p></div></div>
</div>
<h3>DP Due Adjustment Flow</h3>
<div class="flow">
<div class="flow-step"><span class="flow-num">1</span><div><h4>PAYMENT</h4><p>Paid for due.</p></div></div>
</div>
<h3>DP Withdraw Flow</h3>
<div class="flow">
<div class="flow-step"><span class="flow-num">1</span><div><h4>PAYMENT</h4><p>Payment is requested from the Drive app and sent to bKash, Rocket, or a OneBank ATM.</p></div></div>
</div>
`;

TOPICS[7].html.bn = `
<p class="lead">প্রতিদিনের কাজের জন্য প্রয়োজনীয় সকল SOP লিংক এবং ইন্টারনাল টুলসের তালিকা।</p>
<h3>সকল SOP</h3>
<div class="link-grid">
<a class="link-card" href="https://docs.google.com/spreadsheets/d/1iv2mUrA_DEbj03bPWOHwrzxionkqYsCp7aAkm7N5avs/edit?gid=925150589#gid=925150589" target="_blank" rel="noopener"><span>User SOPs</span><small>Bike / Car / Parcel / CNG</small></a>
<a class="link-card" href="https://docs.google.com/spreadsheets/d/1J8dOd8iXyBzQafpQS-2NDt5EvlLCE0Pc0lxRkcozspc/edit?pli=1&gid=1275837616#gid=1275837616" target="_blank" rel="noopener"><span>Driver SOPs</span><small>Rides Merged SOP</small></a>
</div>
<h3>ইন্টারনাল টুলস তালিকা</h3>
<div class="tool-grid">
<a class="tool-card" href="https://enlist.pathaointernal.com/login" target="_blank" rel="noopener"><span class="tool-name">Enlist</span></a>
<a class="tool-card" href="https://er-beta.pathaointernal.com/user-search" target="_blank" rel="noopener"><span class="tool-name">Engine Room</span></a>
<a class="tool-card" href="https://pathao.idesk360.com/auth" target="_blank" rel="noopener"><span class="tool-name">Idesk</span></a>
<a class="tool-card" href="https://quest-v3.pathaointernal.com/?redirectFrom=%2Fquest-activation" target="_blank" rel="noopener"><span class="tool-name">Quest Dashboard</span></a>
<a class="tool-card" href="https://talk.pathaolabs.com/one-pathao/channels/town-square" target="_blank" rel="noopener"><span class="tool-name">Pathao Talk</span></a>
<a class="tool-card" href="https://garikoi.pathaointernal.com/" target="_blank" rel="noopener"><span class="tool-name">Gari koi</span></a>
<a class="tool-card" href="http://192.168.1.90/datum/index.php" target="_blank" rel="noopener"><span class="tool-name">Datum</span></a>
<a class="tool-card" href="https://tickets.pathaointernal.com/app/accounts/1/dashboard" target="_blank" rel="noopener"><span class="tool-name">Chatwoot</span></a>
</div>
`;

TOPICS[7].html.en = `
<p class="lead">List of all essential SOP links and internal tools used in day-to-day work.</p>
<h3>All SOPs</h3>
<div class="link-grid">
<a class="link-card" href="https://docs.google.com/spreadsheets/d/1iv2mUrA_DEbj03bPWOHwrzxionkqYsCp7aAkm7N5avs/edit?gid=925150589#gid=925150589" target="_blank" rel="noopener"><span>User SOPs</span><small>Bike / Car / Parcel / CNG</small></a>
<a class="link-card" href="https://docs.google.com/spreadsheets/d/1J8dOd8iXyBzQafpQS-2NDt5EvlLCE0Pc0lxRkcozspc/edit?pli=1&gid=1275837616#gid=1275837616" target="_blank" rel="noopener"><span>Driver SOPs</span><small>Rides Merged SOP</small></a>
</div>
<h3>Internal Tools List</h3>
<div class="tool-grid">
<a class="tool-card" href="https://enlist.pathaointernal.com/login" target="_blank" rel="noopener"><span class="tool-name">Enlist</span></a>
<a class="tool-card" href="https://er-beta.pathaointernal.com/user-search" target="_blank" rel="noopener"><span class="tool-name">Engine Room</span></a>
<a class="tool-card" href="https://pathao.idesk360.com/auth" target="_blank" rel="noopener"><span class="tool-name">Idesk</span></a>
<a class="tool-card" href="https://quest-v3.pathaointernal.com/?redirectFrom=%2Fquest-activation" target="_blank" rel="noopener"><span class="tool-name">Quest Dashboard</span></a>
<a class="tool-card" href="https://talk.pathaolabs.com/one-pathao/channels/town-square" target="_blank" rel="noopener"><span class="tool-name">Pathao Talk</span></a>
<a class="tool-card" href="https://garikoi.pathaointernal.com/" target="_blank" rel="noopener"><span class="tool-name">Gari koi</span></a>
<a class="tool-card" href="http://192.168.1.90/datum/index.php" target="_blank" rel="noopener"><span class="tool-name">Datum</span></a>
<a class="tool-card" href="https://tickets.pathaointernal.com/app/accounts/1/dashboard" target="_blank" rel="noopener"><span class="tool-name">Chatwoot</span></a>
</div>
`;
