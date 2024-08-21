import React from 'react';

/**
 * Componente CtaDetails que muestra detalles de una llamada a la acción.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.title - El título del detalle.
 * @param {string} props.text - El texto del detalle.
 * @param {string} props.img - La URL de la imagen.
 * @returns {JSX.Element} El componente renderizado.
 */
const CtaDetails = ({ title, text, img }) => {
  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '70px', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: '800', color: '#181A1E' }}>
              {title}
            </h1>
            <div 
              style={{ textAlign: 'center' }}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'end', gap: '30px' }}>
          <div>
            <img style={{ width: '100%', height: '52px', objectFit: 'cover', borderRadius: '8px' }} src={img} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaDetails;
