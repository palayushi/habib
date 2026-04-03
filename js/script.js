const elements = document.querySelectorAll('.fade-in');

function revealOnLoadAndScroll() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
}

// Run once on load
window.addEventListener('load', revealOnLoadAndScroll);

// Run on scroll
window.addEventListener('scroll', revealOnLoadAndScroll);


// slideshow logic
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((s, i) => {
        s.classList.remove('active');
    });
    slides[index].classList.add('active');
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 1500);