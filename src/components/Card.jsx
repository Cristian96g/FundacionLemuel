import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../assets/defaultImage.jpg'; // Asegúrate de que la ruta es correcta

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

const Card = ({ id, title, text, img }) => {
    const imageSrc = img || defaultImage;

    return (
        <div className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-white p-2'>
          <div className='relative'>
            <img className="object-cover object-center w-full h-60 rounded-lg" src={imageSrc} alt={title} />
          </div>

          <h1 className='mt-6 text-xl font-semibold text-[#52658d] text-justify'>
            {title}
          </h1>
          <hr className='w-32 my-3 text-orange-500'/>
          <p className='text-sm text-[#52658d] text-justify'>
            {truncateText(text.replace(/<[^>]+>/g, ''), 50)}
          </p>

          <Link 
              to={`/details/${id}`} 
              state= {{ title, text, img: imageSrc}}
             className='inline-block mt-4 text-orange-500 underline hover:text-orange-400'>
            Leer Más
          </Link>
        </div>
    );
}

export default Card;