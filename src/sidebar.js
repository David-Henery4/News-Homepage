// SIDEBAR

// ELEMENTS
const sidebar = document.getElementById("sidebar");
const burger = document.getElementById("burger");
const closeIcon = document.getElementById("close");
const overlay = document.getElementById("overlay");

// OPEN SIDEBAR
burger.addEventListener("click", () => {
  overlay.style.display = "block";
  sidebar.style.transform = "translateX(0%)";
});

// CLOSE ICON
closeIcon.addEventListener("click", () => {
  overlay.style.display = "none"
  sidebar.style.transform = "translateX(100%)";
})
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  sidebar.style.transform = "translateX(100%)";
});