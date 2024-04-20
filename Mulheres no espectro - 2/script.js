document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicatorsContainer = document.querySelector('.indicator-container');
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                indicatorsContainer.children[index].classList.add('active');
            } else {
                slide.classList.remove('active');
                indicatorsContainer.children[i].classList.remove('active');
            }
        });
        slideIndex = index;
    };

    prevBtn.addEventListener('click', () => {
        showSlide((slideIndex - 1 + slides.length) % slides.length);
    });

    nextBtn.addEventListener('click', () => {
        showSlide((slideIndex + 1) % slides.length);
    });

    indicatorsContainer.addEventListener('click', (e) => {
        if (e.target.matches('.indicator')) {
            showSlide(Array.from(indicatorsContainer.children).indexOf(e.target));
        }
    });

    showSlide(slideIndex);
});