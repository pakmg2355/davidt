// Seleccionamos todos los elementos con cualquier animación
const items = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        // Si quieres que se desactive cuando salga de pantalla:
        else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

// Observamos todos los elementos
items.forEach(item => observer.observe(item));