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
const container = document.getElementById("butterflies");
const butterflyCount = 10;

for (let i = 0; i < butterflyCount; i++) {
  const b = document.createElement("div");
  b.className = "butterfly";
  b.style.left = Math.random() * 100 + "%";
  b.style.animationDelay = Math.random() * 5 + "s";
  b.style.animationDuration = Math.random() * 4 + 6 + "s";

  b.innerHTML = "<span></span><span></span>";
  container.appendChild(b);
}
