const mobileMenuEl = document.getElementById("mobile-menu")

let menuVisible = false;
function toggleMenu() {
    if(menuVisible) {
        mobileMenuEl.style.transform = "translateX(120%)"
    } else {
        mobileMenuEl.style.transform = "translateX(20%)"
    }
}