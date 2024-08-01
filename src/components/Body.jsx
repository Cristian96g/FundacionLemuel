import foto from '../assets/imagen_0.jpg';
import foto1 from '../assets/imagen_1.jpg';
import Card from './Card';
import React from 'react';

/**
 * Componente Body que muestra una sección de novedades con tarjetas informativas.
 *
 * @returns {JSX.Element} El componente renderizado.
 */
export const Body = () => {
  return (
    <section className="container max-w-7xl p-2 mx-auto space-y-6 sm:space-y-12 dark:bg-gray-100 dark:text-gray-800">
      <div className='space-y-2 py-2 md:space-y-5'>
        <h2 className='text-3xl text-center font-extrabold leading-9 tracking-tight text-gray-500 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14'>Novedades</h2>
      </div>
      <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card img={foto1} link="https://www.instagram.com/p/C4ZGSaXuKUV/?img_index=1" texto="Fundación Lemuel trabajando desde sus 4 areas, en esta oportunidad desde el área cultural, hemos firmado un convenio con educación para poder realizar terminalidad educativa nivel primario EPJA n° 16."></Card>
        <Card img={foto} link="https://www.instagram.com/p/C4ZGSaXuKUV/?img_index=1"></Card>
        <Card img={foto1} link="https://www.instagram.com/p/C4ZGSaXuKUV/?img_index=1"></Card>
        <Card img={foto} link="https://www.instagram.com/p/C4ZGSaXuKUV/?img_index=1"></Card>
      </div>
      <div className="flex justify-center">
        <button type="button" className="inline-flex items-center my-2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Mas Novedades</button>
      </div>
    </section>
  );
}

export default Body;
