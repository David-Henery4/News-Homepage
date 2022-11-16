
// SIDEBAR


const sidebar =  document.getElementById("sidebar")
const burger = document.getElementById("burger")
const closeIcon = document.getElementById("close")
const overlay = document.getElementById("overlay")

burger.addEventListener("click", () => {
  overlay.style.display = "block";
  sidebar.style.translateX = "0%"
})

