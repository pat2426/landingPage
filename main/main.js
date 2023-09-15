function mobileMenu() {
    var node = document.getElementById("middle_menu");
    document.getElementById("menu-display").appendChild(node);
    toggle();
}

function changeColor(){
    
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

/*form animation */
function newAnimation(){
    var links = document.getElementsByClassName("footer-links");
    links.addEventListener("mousemove",changeColor)
}

document.getElementById("menu-display").addEventListener("click", mobileMenu);
