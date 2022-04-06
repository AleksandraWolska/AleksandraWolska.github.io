toggleHamburgerMenu = () => {
    let menu = document.querySelector("#menu")
    if (menu.className === "menu") {
        menu.className += " opened"
    } else {
        menu.className = "menu"
    }
}




