const symbolCounter = document.querySelector('.symbol-counter');
const textarea = document.querySelector('.letter');


let  counterFunction = textarea.addEventListener('input', function (event) {
    console.log(event.target.validity);
    symbolCounter.textContent = `${event.target.value.length} / 1000`;
    if (event.target.value.length > 10) {
        textarea.setCustomValidity("Too long")
    } else {
        textarea.setCustomValidity("")
    }
})