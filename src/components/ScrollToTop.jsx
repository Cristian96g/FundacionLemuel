// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente ScrollToTop que desplaza la ventana hacia arriba cuando se cambia la ruta.
 * Utiliza el hook useEffect para escuchar los cambios en la ruta.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza la ventana hacia arriba con un comportamiento suave
  }, [pathname]);

  return null; // Este componente no renderiza nada en la UI
};

export default ScrollToTop;
