const menuEmail = document.querySelector(".navbar-email")
const DesktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")


menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", togglemobileMenu)


function toggleDesktopMenu() {
    DesktopMenu.classList.toggle("inactive")
}

function togglemobileMenu() {
    mobileMenu.classList.toggle("inactive")

}