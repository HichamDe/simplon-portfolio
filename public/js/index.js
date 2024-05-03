

// This button will be clickabale in small screens only
// where the visibility is false 
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => menu.classList.toggle("hidden"))
