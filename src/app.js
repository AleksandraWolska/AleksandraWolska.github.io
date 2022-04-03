toggleHamburgerMenu = (flag = false) => {
    let menu = document.querySelector("#menu")
    if (flag || menu.className === "menu") {
        menu.className += " opened"
    } else {
        menu.className = "menu"
    }
}




