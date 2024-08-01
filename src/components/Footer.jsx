// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import logo from '../assets/logo.png';

/**
 * Componente Footer que muestra el pie de página del sitio web.
 * Incluye enlaces de navegación y redes sociales.
 *
 * @returns {JSX.Element} El componente renderizado.
 */
const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/">
              <img src={logo} className="h-8" alt="Fundación Lemuel Logo" />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <Link to="/about#about" className="text-orange-500 hover:text-orange-700">Nosotros</Link>
            <Link to="/activities#activities" className="text-orange-500 hover:text-orange-700">Actividades</Link>
            <Link to="/contact#contact" className="text-orange-500 hover:text-orange-700">Contacto</Link>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100081438307111&locale=az_AZ" target='_blank' rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/fundacion_lemuel_co/" target='_blank' rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        <hr className="my-6 border-orange-500" />
        <div className="text-center text-sm text-orange-600">
          © 2024 Potrero Digital. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
