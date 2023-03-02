// Валидация 
let formJs = document.querySelector('.form-js');
let formInputs = document.querySelectorAll('.name-and-mail');
let inputMail = document.querySelector('.mail');

function validateMail(mail) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}

formJs.onsubmit = function () {
 let mailVal = inputMail.value;
 let emptyInputs = Array.from(formInputs).filter(input =>input.value === '');

 formInputs.forEach(function (input) {
    if (input.value === '') {
        input.classList.add('name-mail-err');
        console.log('input');
    } else (
        input.classList.remove('name-mail-err')
    )
 });

 if (emptyInputs.length !== 0) {
    return false
 }
 if(!validateMail(mailVal)) {
    console.log('email not valid');
    inputMail.classList.add('name-mail-err')
    return false;
 } else {inputMail.classList.remove('name-mail-err');
}
}


