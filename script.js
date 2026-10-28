"use strict";

const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") document.documentElement.dataset.theme = "dark";

function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === "dark";
  themeToggle.textContent = dark ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-pressed", String(dark));
}

updateThemeButton();
themeToggle.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  if (dark) {
    document.documentElement.dataset.theme = "dark";
    localStorage.setItem("portfolio-theme", "dark");
  } else {
    delete document.documentElement.dataset.theme;
    localStorage.setItem("portfolio-theme", "light");
  }
  updateThemeButton();
});

document.getElementById("year").textContent = new Date().getFullYear();
