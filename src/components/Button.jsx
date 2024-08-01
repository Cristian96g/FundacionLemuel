import React from 'react';

/**
 * Componente Button que renderiza un botón con efectos de transición.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.className - Las clases CSS para estilizar el botón.
 * @param {Function} props.onClick - La función a ejecutar cuando se hace clic en el botón.
 * @param {string} props.text - El texto a mostrar en el botón.
 * @returns {JSX.Element} El componente renderizado.
 */
const Button = ({ className, onClick, text }) => {
  return (
    <button
      className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium ${className}`}
      onClick={onClick}
    >
      <span>{text}</span>
      <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-12 -translate-x-full group-hover:duration-1000 group-hover:transform group-hover:translate-x-full">
        <div className="relative h-full w-8 bg-white/20"></div>
      </div>
    </button>
  );
}

export default Button;
