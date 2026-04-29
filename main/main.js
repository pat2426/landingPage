/*Mobile menu function*/ 
function mobileMenu() {
    var sourceMenu = document.getElementById("middle_menu");
    var mobileMenuContainer = document.getElementById("menu-display");
    var isMobileScreen = window.matchMedia("(max-width: 768px)").matches;

    if (!sourceMenu || !mobileMenuContainer || !isMobileScreen) {
        if (mobileMenuContainer) {
            mobileMenuContainer.classList.remove("is-open");
        }
        return;
    }

    if (!mobileMenuContainer.dataset.initialized) {
        mobileMenuContainer.innerHTML = sourceMenu.innerHTML;
        mobileMenuContainer.dataset.initialized = "true";

        var mobileLinks = mobileMenuContainer.querySelectorAll("a");
        mobileLinks.forEach(function(link) {
            link.addEventListener("click", function() {
                mobileMenuContainer.classList.remove("is-open");
            });
        });
    }

    mobileMenuContainer.classList.toggle("is-open");
}

/*form animation */
function newAnimation(){
    var links = document.getElementsByClassName("footer-links");
}

document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById("menu-link");
    var menuContainer = document.getElementById("menu-display");

    if (!menuButton || !menuContainer) {
        return;
    }

    // Prevent duplicate click handling from inline HTML onclick.
    menuButton.removeAttribute("onclick");

    menuButton.addEventListener("click", function(event) {
        event.preventDefault();
        if (window.matchMedia("(max-width: 768px)").matches) {
            mobileMenu();
        }
    });

    document.addEventListener("click", function(event) {
        if (!menuContainer.contains(event.target) && !menuButton.contains(event.target)) {
            menuContainer.classList.remove("is-open");
        }
    });

    window.addEventListener("resize", function() {
        if (!window.matchMedia("(max-width: 768px)").matches) {
            menuContainer.classList.remove("is-open");
        }
    });
});
