import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../assets/defaultImage.jpg'; // Asegúrate de que la ruta es correcta

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

const Card = ({ id, title, text, img }) => {
  const imageSrc = img || defaultImage;

  return (
    <div className='card-container group hover:no-underline focus:no-underline dark:bg-white'>
      <div className='relative'>
        <img className="object-cover object-center w-full h-60 rounded-lg" src={imageSrc} alt={title} />
      </div>

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

        <div className='mt-auto'>
          <Link
            to={`/details/${id}`}
            state={{ title, text, img: imageSrc }}
            className='read-more'>
            Leer Más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
