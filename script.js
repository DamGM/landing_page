document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

    alert('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');

    
});

// Función para ir al slide anterior
function prevSlide(button) {
    const slider = button.parentElement.querySelector('.slider-images');
    const images = slider.querySelectorAll('img');
    let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    images[activeIndex].classList.remove('active');
    activeIndex = (activeIndex === 0) ? images.length - 1 : activeIndex - 1;
    images[activeIndex].classList.add('active');
}

// Función para ir al siguiente slide
function nextSlide(button) {
    const slider = button.parentElement.querySelector('.slider-images');
    const images = slider.querySelectorAll('img');
    let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    images[activeIndex].classList.remove('active');
    activeIndex = (activeIndex === images.length - 1) ? 0 : activeIndex + 1;
    images[activeIndex].classList.add('active');
}

// Mostrar la primera imagen por defecto en cada slider
document.querySelectorAll('.slider-images img:first-child').forEach(img => {
    img.classList.add('active');
});
