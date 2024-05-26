import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailPage = () => {
  const location = useLocation();
  const { title, text, img, detailedText } = location.state || {};

  console.log("Received State in DetailPage:", { title, text, img, detailedText });

  if (!title || !text || !img || !detailedText) {
    return <p className='text-2xl text-center'>No se encontró información para esta tarjeta.</p>;
  }

  return (
    <div className="container mx-auto my-10 p-4 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2">
        <img className="w-full h-auto rounded-lg" src={img} alt={title} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-6">{text}</p>
        <p className="text-md">{detailedText}</p>
      </div>
    </div>
  );
}

export default DetailPage;

