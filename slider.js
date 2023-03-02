
// let slides = document.getElementsByClassName("slide");
// let dots = document.getElementsByClassName("page-slide");

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
  
//   if (n > slides.length) {slideIndex = 1}

//   if (n < 1) {slideIndex = slides.length}

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }

//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

// for (i = 0; i < dots.length; i++) {
//     dots[i].addEventListener('click', function (){
//         currentSlide(i)
//     })
//   }

const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.page-slide');

const CONTROL_ACTIVE_CLASS = 'page-slide-active';
const SLIDE_ACTIVE_CLASS = 'slide-active';

let removeClassfromCollection = function(collection, className) {
    for (let i = 0 ;i < collection.length; i++) {
        collection[i].classList.remove(className);
    }
}

 for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', function() {
        removeClassfromCollection(slides,SLIDE_ACTIVE_CLASS);
        removeClassfromCollection(controls,CONTROL_ACTIVE_CLASS);
        controls[i].classList.add(CONTROL_ACTIVE_CLASS);
        slides[i].classList.add(SLIDE_ACTIVE_CLASS);
    })
 }

