/*need to continue to work on this*/
function mobileMenu() {
  var node = document.getElementById("nav-middle-links");
  document.getElementById("menu-display").appendChild(node);
  toggle();
}

function toggle() {
  var x = document.getElementById("menu-display");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}
document.getElementById("nav-middle-links").addEventListener("click", mobileMenu);