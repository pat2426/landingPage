/*need to continue to work on this*/
function mobileMenu() {
  var node = document.getElementById("middle_menu");
  document.getElementById("menu-display").appendChild(node);
  toggle();
}

function toggle() {
  var x = document.getElementById("menu-display");
  if (x.style.display = "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}
document.getElementById("menu-display").addEventListener("click", mobileMenu);