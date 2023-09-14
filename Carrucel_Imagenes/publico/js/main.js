const btnLeft  = document.querySelector(".btn-left");
const btnRight  = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderSection  = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());

setInterval(() => {
    moveToRight()
}, 3000);

let operacion = 0;
let counter = 0;
let widthImg  = 100 / sliderSection.length;

