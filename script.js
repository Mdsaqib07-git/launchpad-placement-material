const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const toast = document.querySelector(".toast");
const buyButton = document.querySelector(".buy-button");
const storageKey = "launchpad-kit-claimed";

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 4200);
}

function syncPurchaseState() {
  if (localStorage.getItem(storageKey) === "true") {
    buyButton.innerHTML = "Access your kit <span>→</span>";
  }
}

buyButton?.addEventListener("click", () => {
  localStorage.setItem(storageKey, "true");
  syncPurchaseState();
  showToast("Your ₹50 offer is reserved — check your inbox for access.");
});

syncPurchaseState();
