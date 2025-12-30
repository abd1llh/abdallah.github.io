const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");
const closeMenu = document.getElementById("closeMenu");
const yearEl = document.getElementById("year");

if (yearEl) yearEl.textContent = new Date().getFullYear();

function openMenu(){
  menuBtn.classList.add("is-open");
  menuOverlay.classList.add("is-open");
  menuBtn.setAttribute("aria-expanded", "true");
  menuOverlay.setAttribute("aria-hidden", "false");
}

function hideMenu(){
  menuBtn.classList.remove("is-open");
  menuOverlay.classList.remove("is-open");
  menuBtn.setAttribute("aria-expanded", "false");
  menuOverlay.setAttribute("aria-hidden", "true");
}

menuBtn?.addEventListener("click", () => {
  const isOpen = menuOverlay.classList.contains("is-open");
  isOpen ? hideMenu() : openMenu();
});

closeMenu?.addEventListener("click", hideMenu);

// اقفل لو ضغطت خارج الروابط/القائمة
menuOverlay?.addEventListener("click", (e) => {
  if (e.target === menuOverlay) hideMenu();
});

// ESC يقفل
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") hideMenu();
});
