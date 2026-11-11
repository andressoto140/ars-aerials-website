document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", open);
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

navToggle.addEventListener("click", () => {
  setMenu(!navLinks.classList.contains("open"));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Escape closes the menu and puts focus back on the button that opened it.
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks.classList.contains("open")) {
    setMenu(false);
    navToggle.focus();
  }
});
