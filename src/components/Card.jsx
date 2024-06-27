import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../assets/defaultImage.jpg'; // Asegúrate de que la ruta es correcta

/**
 * Trunca el texto si excede la longitud máxima especificada.
 *
 * @param {string} text - El texto a truncar.
 * @param {number} maxLength - La longitud máxima permitida para el texto.
 * @returns {string} El texto truncado.
 */
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

/**
 * Componente para mostrar una tarjeta con información.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.id - El identificador de la tarjeta.
 * @param {string} props.title - El título de la tarjeta.
 * @param {string} props.text - El texto de la tarjeta.
 * @param {string} props.img - La URL de la imagen de la tarjeta.
 * @param {boolean} props.active - Indica si la tarjeta está activa.
 * @returns {JSX.Element} La tarjeta renderizada.
 */
const Card = ({ id, title, text, img ,active}) => {
  const imageSrc = img || defaultImage;

  return (
    <div className='card-container group hover:no-underline focus:no-underline dark:bg-white'>
      <div className='relative'>
        <img className="object-cover object-center w-full h-60 rounded-lg" src={imageSrc} alt={title} />
      </div>
      {active ? (
        // No se muestra el Link si active es true
       null
      ) : (
      <div className="flex flex-col justify-between h-full">
        <div>
          <h1 className='mt-6 card-title'>
            {title}
          </h1>
          <hr className='w-32 my-3 text-orange-500' />
          <p className='card-text'>
            {truncateText(text.replace(/<[^>]+>/g, ''), 50)}
          </p>
        </div>
        <Link
          to={`/details/${id}`}
          state={{ title, text, img: imageSrc }}
          className='read-more'>
          Leer Más
        </Link>
      
      </div>
      )}
    </div>
  );
}

export default Card;
