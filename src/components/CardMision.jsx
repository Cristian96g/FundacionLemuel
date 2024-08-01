import React from 'react';

/**
 * Componente CardMision para mostrar una tarjeta con información sobre una misión.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.text - El texto de la tarjeta.
 * @param {string} props.title - El título de la tarjeta.
 * @param {Function} props.icon - El icono a mostrar en la tarjeta.
 * @returns {JSX.Element} La tarjeta renderizada.
 */
const CardMision = ({ text, title, icon: Icon }) => {
  return (
    <div className="block rounded-xl border border-orange-100 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10 text-center">
      <Icon size={44} className="mx-auto text-orange-500" />
      <h2 className="mt-4 text-xl font-bold text-headingColor">{title}</h2>
      <p className="mt-1 text-sm text-headingColor">
        {text}
      </p>
    </div>
  );
}

export default CardMision;
