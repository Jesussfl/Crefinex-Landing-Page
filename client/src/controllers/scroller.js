export const handleScrollTo = (section, offset) => {
  const cursosSection = document.getElementById(section);
  const navBarHeight = 80; // Obtener la altura de la barra de navegación
  const scrollToPosition =
    cursosSection.getBoundingClientRect().top +
    window.pageYOffset -
    navBarHeight -
    offset; // Calcular la posición de desplazamiento con un espacio superior
  window.scrollTo({
    top: scrollToPosition,
    behavior: "smooth",
  });
};
