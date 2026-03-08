const targetDate = new Date("July 16, 2026 00:00:00").getTime();

function toggleMode() {
  document.body.classList.toggle("light");
}

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
