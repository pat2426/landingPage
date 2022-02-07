//function to open the hamburger menu
function mobileMenu() {
    var node = document.getElementById("middle_menu");
    document.getElementById("menu-display").appendChild(node);
    toggle();
}

/*Toggle function*/
function toggle() {
    var x = document.getElementById("menu-display");
    if (x.style.display = "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline";
    }
}

document.getElementById("menu-display").addEventListener("click", mobileMenu);
