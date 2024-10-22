const openMenu = document.querySelector(".open-menu-btn")
const closeMenu = document.querySelector(".close-menu-btn")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-menu a")

// console.log(navLinks);

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.style.right = "-250px"
    })
})


openMenu.addEventListener("click", () => {
    navMenu.style.right = "0"

})

closeMenu.addEventListener("click", () => {
    navMenu.style.right = "-250px"
})