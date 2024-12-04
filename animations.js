// Animaciones - animations.js
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
    }

    setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.classList.add('fade-in');
                }
            });
        }, {
            threshold: 0.1
        });

        // Observar elementos que queremos animar
        document.querySelectorAll('.h').forEach(el => {
            observer.observe(el);
        });
    }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    new AnimationManager();
});




