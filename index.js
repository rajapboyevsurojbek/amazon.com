const sidebarEl = document.querySelector(".sidebar");
const locationEl = document.querySelector(".location");

function showSidebar() {
  sidebarEl.classList.toggle("show");
  if (sidebarEl.classList.contains("show")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

function showLocation() {
  locationEl.style.display = "block";
}
function closeLocation() {
  locationEl.style.display = "none";
}
