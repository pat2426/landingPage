function mobileMenu() {
    var node = document.getElementById("middle_menu");
    document.getElementById("menu-display").appendChild(node);
    toggle();
}

/*Toggle function*/
function toggle() {
    var x = document.getElementById("menu-display");
    if (x.style.display = "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
}

document.getElementById("menu-display").addEventListener("click", mobileMenu);
