const toggleBtn = document.getElementById("toggle-theme");
const icon = document.getElementById("icon");

function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  icon.textContent = theme === "dark" ? "🌙" : "🌞";
  localStorage.setItem("theme", theme);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

// Toggle on click
toggleBtn.addEventListener("click", () => {
  const current = document.body.classList.contains("dark") ? "dark" : "light";
  const newTheme = current === "dark" ? "light" : "dark";
  setTheme(newTheme);
});
