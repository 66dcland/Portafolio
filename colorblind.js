// Modo Daltonismo - colorblind.js
class ColorblindManager {
    constructor() {
        this.isColorblind = localStorage.getItem('colorblindMode') === 'true';
        this.init();
    }

    init() {
        const button = document.getElementById('colorblindMode');
        const body = document.body;
        
        // Aplicar modo si estaba activo
        if (this.isColorblind) {
            body.classList.add('colorblind-mode');
            button.classList.add('active');
        }
        
        // Manejar el clic en el botón
        button.addEventListener('click', () => {
            body.classList.toggle('colorblind-mode');
            button.classList.toggle('active');
            
            // Guardar preferencia
            localStorage.setItem('colorblindMode', body.classList.contains('colorblind-mode'));
        });
    }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    new ColorblindManager();
});
