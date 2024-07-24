import React, { useEffect } from 'react';
import Accordeon from '../components/Accordeon';
import PageHeader from '../components/PageHeader';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const openSection = location.state ? location.state.openSection : '';

  useEffect(() => {
    if (openSection) {
      const element = document.getElementById(openSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [openSection]);

  return (
    <div className='container'>
      <PageHeader title={"Nosotros"} />
      <h1 className='text-center mb-8 text-xl text-[#52658d]'>¡Hola! Somos Fundación Lemuel, y queremos contarte un poco sobre nosotros.</h1>
      <Accordeon openSection={openSection} />
    </div>
  );
};

export default About;
