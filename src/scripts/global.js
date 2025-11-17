import { themeChange } from "theme-change";
themeChange();

const navbar = document.getElementById("navbar");
const navDrob = document.getElementById("navDrob");
const navDrob1 = document.getElementById("navDrob1");
const hoverZone = document.getElementById("hover-zone");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    navbar.classList.add("-translate-y-full");
    navDrob.classList.add("invisible");
    navDrob1.classList.add("invisible");
  } else {
    navbar.classList.remove("-translate-y-full");
    navDrob.classList.remove("invisible");
    navDrob1.classList.remove("invisible");
  }

  lastScroll = currentScroll;
});

hoverZone.addEventListener("mouseenter", () => {
  navbar.classList.remove("-translate-y-full");
  navDrob.classList.remove("invisible");
  navDrob1.classList.remove("invisible");
});

navbar.addEventListener("mouseleave", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("-translate-y-full");
    navDrob.classList.add("invisible");
    navDrob1.classList.add("invisible");
  }
});
