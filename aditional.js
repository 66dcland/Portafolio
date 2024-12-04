    // Alternar alto contraste
    function toggleHighContrast() {
        document.body.classList.toggle('high-contrast');
    }

    // Alternar texto agrandado
    function toggleLargeText() {
        document.body.classList.toggle('large-text');
    }

    // Alternar escala de grises
    function toggleGrayscale() {
        document.body.classList.toggle('grayscale');
    }

    // Reiniciar estilos
    function resetStyles() {
        document.body.classList.remove('high-contrast', 'large-text', 'grayscale');
    }