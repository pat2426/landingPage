function mobileMenu() {
    var node = document.getElementById("middle_menu");
    document.getElementById("menu-display").appendChild(node);
    toggle();
}

/*Toggle function*/
function toggle() {
    var x = document.getElementById("menu-display");
    if (x.style.display = "block") {
        x.style.display = "inline-none";
    } else {
        x.style.display = "block";
    }
}
document.getElementById("menu-display").addEventListener("click", mobileMenu);
