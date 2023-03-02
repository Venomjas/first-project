"use strict"
let writeUsButton = document.querySelector('.write-us');
let popup = document.querySelector('.form-write-us');
let close = document.querySelector('.exit');
const login = popup.querySelector("[name=name]");
const password = popup.querySelector("[name=email]")

let closePopup = function(){
    popup.classList.remove('modal-show');
}

writeUsButton.addEventListener('click', function (evt){
    evt.preventDefault();
    popup.classList.add('modal-show');
    login.focus();
});

close.addEventListener('click', function (evt){
    evt.preventDefault();
    closePopup()
});

document.addEventListener('keydown', function (evt){
    if (evt.key === 'Escape') {
        closePopup()
    }
})

const form = document.querySelector('.form-write-us');
form.addEventListener("submit", function(evt){
if (!login.value || !password.value){
evt.preventDefault();
console.log('заполни');
}
})
