document.addEventListener('wheel', (event) => {
    const horizontalScroll = document.querySelector('.horizontal-scroll');
    const isHoveringHorizontal = horizontalScroll.matches(':hover');
  
    if (isHoveringHorizontal) {
      event.preventDefault(); // Evita el scroll vertical mientras estás en la galería
      horizontalScroll.scrollLeft += event.deltaY; // Desplaza horizontalmente
    }
  });