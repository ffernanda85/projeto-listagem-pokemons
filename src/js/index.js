const btnChangeTheme = document.getElementById("btn-change-theme");
const body = document.querySelector("body")
const imgBtnChangeTheme = document.querySelector(".img-btn")

btnChangeTheme.addEventListener("click", () => {
    const darkModeActived = body.classList.contains("dark-mode")

    body.classList.toggle("dark-mode");

    if (darkModeActived) {
        imgBtnChangeTheme.setAttribute("src", "./src/img/dark_ligth/sun.png")
    } else {
        imgBtnChangeTheme.setAttribute("src", "./src/img/dark_ligth/moon.png")
    }
});

