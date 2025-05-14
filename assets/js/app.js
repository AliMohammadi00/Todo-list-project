let linesEffects = document.querySelectorAll(".title-main__h3")
let asideTag = document.querySelector(".manage")
let manageFirstPart = document.querySelector('.manage__add-folder')
let manageSecondPart = document.querySelector(".manage__all-folder")
let userInfoHeader = document.querySelector(".base__show-user-info")
let userName = document.querySelector(".user-info__name")
let baseTag = document.querySelector(".base")

window.addEventListener("load", () =>{
    asideTag.classList.add("manage--active")
    userInfoHeader.classList.add("active--visible")

    setTimeout(() => {
        manageFirstPart.classList.add("active--visible")
        manageSecondPart.classList.add("active--visible")
        userName.classList.add("user-info__name--active")
    }, 1000);

    setTimeout(() => {
        baseTag.classList.add("base--active")
        linesEffects.forEach(line => {
            line.classList.add("title-main__h3--js-activate")
        });
    }, 1500);
})