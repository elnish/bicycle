//Email validation
let form = document.querySelector('.email__form');
let input = document.querySelector('.email__input');
let masege = document.querySelector('.email__masege');
let btn = document.querySelector('.email__button');
let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function showMessage(message, className) {
    masege.textContent = message;
    masege.classList.add(className);
}

function removeClass(className1, className2) {
    masege.classList.remove(className1, className2);
}

function validate(event) {
    event.preventDefault();
    let value = input.value;
        if (value.length == 0){
            showMessage("Please, enter your email :)", "email__masege_hint");
            removeClass("email__masege_error", "email__masege_success");
        } else if (!re.test(value)) {
            showMessage("Email is incorect!", "email__masege_error");
            removeClass("email__masege_hint", "email__masege_success");
            input.value = "";
        } else {
            showMessage("Thanks!", "email__masege_success");
            removeClass("email__masege_hint", "email__masege_error");
            input.value = "";
        }
}

form.addEventListener('submit', validate);

  //for .hamburger
  let hamburger = document.querySelector(".hamburger");
  let menu = document.querySelector(".menu-mobile__menu");
  let header = document.querySelector(".header");

  hamburger.addEventListener("click", function() {
   
    hamburger.classList.toggle("large"); 
    menu.classList.toggle("show");
    header.classList.toggle("down");
  });

let textList = document.querySelectorAll(".text-block_small");
let picList = document.querySelectorAll(".work__picture");
for(let i = 0; i < textList.length; i++) {
    textList[i].addEventListener("mouseover", function() {  
        textList[i].classList.add("large"); 
        picList[i].classList.add("smaller"); 
    });
    textList[i].addEventListener("mouseout", function() {  
        textList[i].classList.remove("large"); 
        picList[i].classList.remove("smaller"); 
    });
}
