import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button'; // Asegúrate de ajustar la ruta

const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, text, img } = location.state || {};

  return (
    <div className='container mx-auto my-12'>
      <div className='flex flex-col md:flex-row items-start'>
        <img className="object-cover object-center w-full md:w-1/2 h-auto rounded-lg" src={img} alt={title} />
        <div className='md:ml-6 mt-6 md:mt-0'>
          <h1 className='text-3xl font-extrabold'>{title}</h1>
          <hr className='w-32 my-3 text-orange-500' />
          <p className='text-gray-600' dangerouslySetInnerHTML={{ __html: text }}></p>
          <Button
            onClick={() => navigate(-1)}
            className='mt-4 bg-orange-500 text-white'
            text='Volver'
          />
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
