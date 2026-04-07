/*Mobile menu function*/ 
function mobileMenu() {
    var node = document.getElementById("middle_menu");
    document.getElementById("menu-display").appendChild(node);
    toggle();
}

/*Toggle function*/
function toggle() {
    var x = document.getElementById("menu-display");
    // Toggle display between none and block
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    // Also close menu when a menu item is clicked
    var menuItems = x.querySelectorAll("a, button, li");
    menuItems.forEach(function(item) {
        item.onclick = function(e) {
            // Only close if the menu is open
            if (x.style.display === "block") {
                x.style.display = "none";
            }
        };
    });
}

/*form animation */
function newAnimation(){
    var links = document.getElementsByClassName("footer-links");
}

document.getElementById("menu-display").addEventListener("click", mobileMenu);
