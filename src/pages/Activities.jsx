import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/Card';
import sections from '../constants/informationCard'; // Ajusta la ruta según sea necesario
import PageHeader from '../components/PageHeader';

const Activities = () => {
  const containerRef = useRef([]);
  const [scrollX, setScrollX] = useState([0, 0, 0, 0]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScroll, setStartScroll] = useState(0);

  const getCardWidth = (index) => {
    if (containerRef.current[index]) {
      const containerWidth = containerRef.current[index].clientWidth;
      return window.innerWidth < 768 ? containerWidth : containerWidth / 3; // Mobile view: full width, Desktop view: 3 cards per row
    }
    return 0;
  };

  const adjustScrollX = (index, newScrollX) => {
    const cardWidth = getCardWidth(index);
    const maxScroll = -(cardWidth * sections[index].cards.length - cardWidth * (window.innerWidth < 768 ? 1 : 3)); // Adjust for number of cards per row
    return Math.max(maxScroll, Math.min(0, newScrollX));
  };

  useEffect(() => {
    const initialScrollX = sections.map((_, index) => adjustScrollX(index, 0));
    setScrollX(initialScrollX);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const initialScrollX = sections.map((_, index) => adjustScrollX(index, 0));
      setScrollX(initialScrollX);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleTouchStart = (e, index) => onMouseDown(e.touches[0], index);
    const handleTouchMove = (e, index) => onMouseMove(e.touches[0], index);
    const handleTouchEnd = (index) => onMouseUp(index);

    containerRef.current.forEach((container, index) => {
      if (container) {
        container.addEventListener('touchstart', (e) => handleTouchStart(e, index), { passive: false });
        container.addEventListener('touchmove', (e) => handleTouchMove(e, index), { passive: false });
        container.addEventListener('touchend', () => handleTouchEnd(index));
      }
    });

    return () => {
      containerRef.current.forEach((container, index) => {
        if (container) {
          container.removeEventListener('touchstart', (e) => handleTouchStart(e, index));
          container.removeEventListener('touchmove', (e) => handleTouchMove(e, index));
          container.removeEventListener('touchend', () => handleTouchEnd(index));
        }
      });
    };
  }, [scrollX]);

  const onMouseDown = (e, index) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setStartScroll(scrollX[index]);
    e.preventDefault();
  };

  const onMouseMove = (e, index) => {
    if (!isDragging) return;
    const distance = e.pageX - startX;
    const newScrollX = adjustScrollX(index, startScroll + distance);
    setScrollX(prev => prev.map((x, i) => (i === index ? newScrollX : x)));
    e.preventDefault();
  };

  const onMouseUp = (index) => {
    setIsDragging(false);
  };

  const handleNavigation = (index, direction) => {
    const cardWidth = getCardWidth(index);
    const newScrollX = adjustScrollX(index, scrollX[index] - direction * cardWidth);
    setScrollX(prev => prev.map((x, i) => (i === index ? newScrollX : x)));
  };

  return (
    <div className='container mx-auto mb-12'>
      <PageHeader title={"Actividades"} />
      {sections.map((section, index) => (
        <div key={index} className='my-5'>
          <div className='sm:text-center sm:max-w-md sm:mx-auto'>
            <h1 className={`my-2 text-[#52658d] text-3xl font-extrabold sm:text-4xl`}>{section.title}</h1>
            <p className="my-2 text-gray-600">{section.paragraph}</p>
          </div>
          <div className="relative" style={{ width: '100%' }}
               onMouseDown={(e) => onMouseDown(e, index)}
               onMouseMove={(e) => onMouseMove(e, index)}
               onMouseUp={() => onMouseUp(index)}
               onMouseLeave={() => onMouseUp(index)}
               ref={el => containerRef.current[index] = el}>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleNavigation(index, -1)}>
              &#10094;
            </button>
            <div className="overflow-hidden carousel-container" style={{ width: '100%' }}>
              <div className='flex transition-transform duration-300' style={{ transform: `translateX(${scrollX[index]}px)` }}>
                {section.cards.map((card, cardIndex) => (
                  <div key={cardIndex} className="carousel-item flex-none" style={{ width: getCardWidth(index) }}>
                    <Card
                      id={card.id}
                      title={card.title}
                      text={card.text}
                      img={card.img}
                    
                    />
                  </div>
                ))}
              </div>
            </div>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleNavigation(index, 1)}>
              &#10095;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;