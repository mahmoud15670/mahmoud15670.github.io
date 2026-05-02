const targetDate = new Date("July 15, 2026 19:00:00").getTime();

function animateValue(id, newValue) {
  const el = document.getElementById(id);
  if (el.textContent != newValue) {
    el.style.transform = "scale(1.2)";
    el.textContent = newValue;
    setTimeout(() => (el.style.transform = "scale(1)"), 200);
  }
}

const alarm = document.getElementById("alarm");

const interval = setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML =
      "<div class='finished'>🎉 لقد حان اليوم! 🎉</div>";
    alarm.play();
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  animateValue("days", days);
  animateValue("hours", hours);
  animateValue("minutes", minutes);
  animateValue("seconds", seconds);
}, 1000);

function openAnimation() {
  const wrapper = document.getElementById("envelope-wrapper");
  const mainPage = document.getElementById("main-page");
  const audio = document.getElementById("myAudio");
  const scroll = document.getElementById("scroll-down");

  // 1. تشغيل حركة التكبير
  wrapper.classList.add("zoom-effect");
  audio.play();

  // 2. إظهار المحتوى الجديد بعد ما الزووم يغطي الشاشة
  setTimeout(() => {
    wrapper.style.display = "none";
    mainPage.classList.remove("hidden");

    // إضافة Delay بسيط عشان الـ Fade in يكون ناعم
    setTimeout(() => {
      mainPage.classList.add("show-page");
    }, 50);
    setTimeout(function () {
      audio.pause();
      audio.currentTime = 0;
      scroll.classList.add("scroll-down-msg");
    }, 17000);
  }, 1000); // الوقت ده لازم يكون متوافق مع وقت الـ CSS transition
}

// إنشاء فراشات بشكل عشوائي
const images = [
  "/assets/butterflies.png",
  "/assets/butterfly.png",
  "/assets/butterfly2.png",
  "/assets/butterfly3.png",
  "/assets/butterfly4.png",
];
const container = document.getElementById("butterflies");
const butterflyCount = 10;

for (let i = 0; i < butterflyCount; i++) {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const b = document.createElement("div");
  b.className = "butterfly";

  // 1. مكان البدء الأفقي (من 0 لـ 100% من عرض الشاشة)
  b.style.left = Math.random() * 100 + "vw";

  // 2. مقدار الانحراف الأفقي وهي طالعة (عشان متطلعش في خط مستقيم ممل)
  // ده بيخليها تروح يمين أو شمال بمقدار عشوائي
  const drift = (Math.random() - 0.5) * 400 + "px";
  b.style.setProperty("--drift-x", drift);

  // 3. زاوية دوران عشوائية عند النهاية
  const rotation = Math.random() * 360 + "deg";
  b.style.setProperty("--rotation", rotation);

  // 4. سرعة وتأخير عشوائي
  b.style.animationDuration = Math.random() * 5 + 5 + "s";
  b.style.animationDelay = Math.random() * 10 + "s";

  b.style.backgroundImage = `url(${randomImage})`;
  b.innerHTML = "<span></span><span></span>";
  container.appendChild(b);
}

const firebaseConfig = {
  apiKey: "AIzaSyAQtTg_-W4owJWydSrshsseT1BQR6RKPiE",
  authDomain: "mynotes-mgh.firebaseapp.com",
  databaseURL: "https://mynotes-mgh-default-rtdb.firebaseio.com",
  projectId: "mynotes-mgh",
  storageBucket: "mynotes-mgh.firebasestorage.app",
  messagingSenderId: "422166703812",
  appId: "1:422166703812:web:016a7cda14491d2eafa391",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const messageForm = document.getElementById("message-form");

messageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const now = new Date();
  const humanReadableTime = now.toLocaleString("ar-EG");

  // Generate a unique key for the new message
  const messagesRef = database.ref("messages");
  const newMessageRef = messagesRef.push();

  if (name && message) {
    newMessageRef
      .set({
        name: name,
        message: message,
        timestamp: Date.now(), // Good practice to add a timestamp
        humanReadableTime: humanReadableTime, // Add the human-readable time
      })
      .then(function () {
        alert("تم حفظ البيانات بنجاح!");
        messageForm.reset();
      })
      .catch(function (error) {
        console.error("Firebase Error:", error);
        alert("حدث خطأ: " + error.message);
      });
  } else {
    alert("يرجى ملء جميع الحقول قبل الإرسال.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ضع هنا مسارات الصور الخاصة بك
  const frames = [
    "/assets/icons/1.png",
    "/assets/icons/2.png",
    "/assets/icons/3.png",
    "/assets/icons/4.png",
    "/assets/icons/5.png",
    "/assets/icons/6.png",
    "/assets/icons/7.png",
    "/assets/icons/8.png",
    "/assets/icons/9.png",
    "/assets/icons/10.png",
  ];

  let currentIndex = 0;
  const favicon = document.getElementById("dynamic-favicon");

  setInterval(() => {
    currentIndex = (currentIndex + 1) % frames.length;
    favicon.href = frames[currentIndex];
  }, 200);
});
