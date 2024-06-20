import React, { useState } from 'react';

function Accordeon() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Cerrar el panel si se hace clic de nuevo
    } else {
      setActiveIndex(index); // Abrir el nuevo panel
    }
  };

  const panels = [
    {
      title: 'Historia',
      content: 'Nacimos en la ciudad de Córdoba capital por iniciativa de la pastora Viviana Safita de Villarreal, quien ante la necesidad económica que estaba atravesando el país, buscó la manera de ayudar a lo más necesitado. Con una visión clara brindada por Raul Alberto Villareal su esposo, Presidente y Fundador del Ministerio M.E.D.E.A En el año 2011, nosotros los que llevamos adelante esta obra de amor en el sur del país, tuvimos la oportunidad de conocer y aprender de la metodología implementada en la central, abarcando las cuatro áreas fundamentales: Social, Deportiva, Cultural y Espiritual. Totalmente enamorados de esta visión integral, decidimos adoptarla y traerla a nuestra comunidad, con el firme propósito de replicar su impacto positivo y transformar vidas. Así fue como, en el año 2012, dimos nuestros primeros pasos en Caleta Olivia, Santa Cruz, en el sur del país. Día a día, diversos actores sociales se sumaron a nuestra causa, adoptando la visión que trajimos y uniendo esfuerzos en el trabajo comunitario y soc'
    },
    {
      title: 'Colaboraciones y Apoyo',
      content: 'Es muy importante reconocer y resaltar el apoyo constante de los voluntarios que forman parte de nuestra institución, así como de los comerciantes locales que se suman día a día a esta loable labor. También es crucial destacar que nuestro trabajo siempre se realiza en red, buscando unirnos al esfuerzo institucional brindado por el municipio, la provincia y la nación. En estos últimos dos años, CGC nos ha acompañado en varios proyectos como Potrero Digital y proyectos con Creer Hacer, y ahora estamos realizando una diplomatura de Transformadores Sociales. Fuimos seleccionados, entre muchos proyectos, para llevar adelante un trabajo conjunto con la Asociación Espacio Red en Comunidad, contando con el apoyo de las empresas Cookins y CGC. Todos los talleres brindados son de capacitación y formación para el trabajo, buscando brindar nuevas herramientas a los participantes para que puedan aplicarlas en la búsqueda laboral. Todas las colaboraciones que puedan sumarse serán bienvenidas, ya que nuestra idea es seguir generando espacios de manera gratuita, pero para ello es fundamental sostener nuestra institución.'
    },
    {
      title: 'Dónde Estamos y Qué Creemos',
      content: 'Nuestra fundación se encuentra ubicada en el barrio mutual más Precisamente en la calle Luigi cossia 1197, es aquí donde abarcamos todas las áreas social, deportiva, cultural y espiritual... queremos que sepas que somos una institución sin fines de lucro y sin credo religioso. Así que no necesita ser parte de la comunidad cristiana para unirte a nosotros o recibir nuestra ayuda estamos aquí para acompañarte.'
    },
  ];

  return (
    <div className="m-2 space-y-2">
      {panels.map((panel, index) => (
        <div className="group flex flex-col rounded-lg text-white" key={index} tabIndex="1">
          <div
            className={`flex bg-orange-500 p-5 rounded-lg cursor-pointer items-center justify-between ${
              activeIndex === index ? 'rounded-t-md' : 'rounded-lg'
            }`}
            onClick={() => handleToggle(index)}
          >
            <h1 className="font-bold text-xl">{panel.title}</h1>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
              className={`h-2 w-3 transition-all duration-500 ${activeIndex === index ? '-rotate-180' : ''}`}
            />
          </div>
          <div
            className={`${
              activeIndex === index ? 'visible p-5 max-h-screen opacity-100 duration-1000' : 'invisible max-h-0 opacity-0'
            } bg-white rounded-b-md border border-orange-200 transition-all`}
          >
            <p className="text-[#52658d]">{panel.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordeon;
