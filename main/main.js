function mobileMenu() {
    var node = document.getElementById("middle_menu");
    document.getElementById("menu-display").appendChild(node);
    toggle();
}

/*Toggle function*/
function toggle() {
    var x = document.getElementById("menu-display");
    if (x.style.display = "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/*Will add another function for more animation */
function newAnimation(){
    var input = document.getElementsByClassName("form");
}

document.getElementById("menu-display").addEventListener("click", mobileMenu);
