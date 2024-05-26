import React from 'react';

const CtaDetails = ({ title, text, img, detailedText }) => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-[70px] md:gap-[90px] items-center justify-between">
        <div>
          <div className="flex flex-col items-center justify-center md:justify-start md:items-start lg:w-[570px]">
            <h1 className="text-center md:text-start text-[36px] leading-[46px] font-[800] md:text-[60px] text-[#181A1E] md:leading-[60px]">
              {title}
            </h1>
            <p className="text__para text-center md:text-start">
              {text}
            </p>
            <p className="text__para text-center md:text-start">
              {detailedText}
            </p>
          </div>
        </div>
        <div className="flex gap-[30px] justify-end">
          <div>
            <img className="w-full" src={img} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaDetails;
