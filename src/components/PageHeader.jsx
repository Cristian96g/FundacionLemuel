import React from "react";

/**
 * Componente PageHeader que muestra el encabezado de una página.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.title - El título de la página.
 * @returns {JSX.Element} El componente renderizado.
 */
const PageHeader = ({ title }) => {
  return (
    <div className="">
      <div className="text-center w-full mx-auto pt-12 pb-4 px-4 sm:px-6 lg:py-8 lg:px-8 z-20">
        <h2 className="text-4xl font-extrabold text-orange-400 sm:text-5xl">
          <span className="block">{title}</span>
        </h2>
      </div>
    </div>
  );
};

export default PageHeader;
