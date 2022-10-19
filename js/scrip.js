document.querySelector(".hambutton__nav").addEventListener("click",animatateBars);

var hambutton__nav__bar1 = document.querySelector(".hambutton__nav__bar1");
var hambutton__nav__bar2 = document.querySelector(".hambutton__nav__bar2");
var hambutton__nav__bar3 = document.querySelector(".hambutton__nav__bar3");

function animatateBars(){
hambutton__nav__bar1.classList.toggle("activehambutton__nav__bar1");
hambutton__nav__bar2.classList.toggle("activehambutton__nav__bar2");
hambutton__nav__bar3.classList.toggle("activehambutton__nav__bar3");
}


const hambutton__nav = document.querySelector (".hambutton__nav");
const menu__escrito = document.querySelector (".menu__escrito");
hambutton__nav.addEventListener("click", () =>{
    menu__escrito.classList.toggle("active")
});