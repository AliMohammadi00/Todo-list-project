let linesEffects = document.querySelectorAll(".title-main__h3")
let asideTag = document.querySelector(".manage")
let manageFirstPart = document.querySelector('.manage__add-folder')
let manageSecondPart = document.querySelector(".manage__all-folder")
// let userInfoHeader = document.querySelector(".base__show-user-info")

window.addEventListener("load", () =>{
    asideTag.classList.add("manage--active")
    setTimeout(() => {
        manageFirstPart.classList.add("active--visible")
        manageSecondPart.classList.add("active--visible")

    }, 1000);
    setTimeout(() => {
        linesEffects.forEach(line => {
            line.classList.add("title-main__h3--js-activate")
        });
    }, 2000);
})