import React, { useEffect } from 'react';
import Accordeon from '../components/Accordeon';
import PageHeader from '../components/PageHeader';
import { useLocation } from 'react-router-dom';

/**
 * Componente About que muestra la página "Nosotros".
 *
 * @returns {JSX.Element} El componente renderizado.
 */
const About = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      // Primero desplázate hasta la parte superior
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Luego, espera un momento y desplázate a la sección específica
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Ajusta el tiempo según sea necesario
    }
  }, [location]);

  return (
    <div className='container'>
      <PageHeader title={"Nosotros"} />
      <h1 className='text-center mb-8 text-xl text-[#52658d]'>¡Hola! Somos Fundación Lemuel, y queremos contarte un poco sobre nosotros.</h1>
      <Accordeon openSection={location.hash.replace('#', '')} />
    </div>
  );
};

export default About;
