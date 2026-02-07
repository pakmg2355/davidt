const items = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target); // 👈 deja de observarlo
        }
    });
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));

const params = new URLSearchParams(window.location.search);
const lang = params.get("lang") || "es";

