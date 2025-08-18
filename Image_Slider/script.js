const slides = document.querySelectorAll('.slides');
let currentSlide = 0;
let slideInterval = null;

document.addEventListener('DOMContentLoaded', initializeSlider); // Ensure the DOM is fully loaded before running the script

function initializeSlider() {
    if(slides.length > 0) {
        slides[currentSlide].classList.add('DisplaySlide');
        slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }
}

function showSlide(index) {
    if(index >= slides.length) {
        index = 0; // Loop back to the first slide
    }
    else if(index < 0) {
        index = slides.length - 1; // Loop back to the last slide
    }

    currentSlide = index; // Always update currentSlide

    slides.forEach(slide => {
        slide.classList.remove('DisplaySlide');
    });
    slides[currentSlide].classList.add('DisplaySlide');
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    clearInterval(slideInterval); // Stop the interval
    currentSlide--;
    showSlide(currentSlide);
}
