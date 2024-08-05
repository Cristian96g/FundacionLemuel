import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../assets/defaultImage.jpg'; 

/**
 * Trunca el texto si excede la longitud máxima especificada y agrega un par de letras antes de los puntos suspensivos.
 *
 * @param {string} text - El texto a truncar.
 * @param {number} maxLength - La longitud máxima permitida para el texto.
 * @returns {string} El texto truncado con letras adicionales antes de los puntos suspensivos.
 */
const truncateText = (text, maxLength) => {
  const additionalText = '...'; // Texto adicional antes de los puntos suspensivos
  const additionalLength = additionalText.length; // Longitud del texto adicional
  return text.length > maxLength ? text.substring(0, maxLength - additionalLength) + additionalText : text;
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
const Card = ({ id, title, text, img, active }) => {
  const imageSrc = img || defaultImage; // Utiliza la imagen proporcionada o una imagen predeterminada si no se proporciona
  const isConstruction = id === "Cn"; // Identificar si es una tarjeta de "Construcción"

  return (
    <div className='card-container group hover:no-underline focus:no-underline dark:bg-white'>
      <div className='relative'>
        <img className="object-cover object-center w-full h-60 rounded-lg" src={imageSrc} alt={title} /> {/* Imagen de la tarjeta */}
      </div>
      {!isConstruction && ( // Mostrar el contenido solo si no es una tarjeta de "Construcción"
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className='mt-6 card-title'>
              {truncateText(title, 42)} {/* Título truncado de la tarjeta */}
            </h1>
            <hr className='w-32 my-3 text-orange-500' /> {/* Línea horizontal de separación */}
            <p className='card-text mb-1'> {/* Párrafo con texto truncado y margen inferior reducido */}
              {truncateText(text.replace(/<[^>]+>/g, ''), 50)} {/* Elimina etiquetas HTML y trunca el texto */}
            </p>
          </div>
          <Link
            to={`/details/${id}`} // Enlace a la página de detalles con el estado de la tarjeta
            state={{ title, text, img: imageSrc }}
            className='read-more mt-1'> {/* Clase para el enlace "Leer Más" con margen superior reducido */}
            Leer Más
          </Link>
        </div>
      )}
    </div>
  );
}

export default Card;
