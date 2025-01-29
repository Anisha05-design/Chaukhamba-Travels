let currentSlide = 1;
showSlide(currentSlide);

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function setSlide(n) {
    showSlide(currentSlide = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slides');
    const dots = document.querySelectorAll('.dot');
    if (n > slides.length) currentSlide = 1;
    if (n < 1) currentSlide = slides.length;
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.className = dot.className.replace(' active', ''));
    slides[currentSlide - 1].style.display = 'block';
    dots[currentSlide - 1].className += ' active';
}
