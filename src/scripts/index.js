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
  var hamburger = document.querySelector(".hamburger");
  var menu = document.querySelector(".menu-mobile__menu");
  var header = document.querySelector(".header");

  hamburger.addEventListener("click", function() {
   
    hamburger.classList.toggle("is-active"); 
    menu.classList.toggle("show");
    header.classList.toggle("down");
  });