import React, { useEffect, useState } from 'react';

/**
 * Componente Accordion que permite mostrar y ocultar secciones de contenido.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.openSection - La sección inicial que debe estar abierta.
 * @returns {JSX.Element} El componente renderizado.
 */
function Accordion({ openSection: initialOpenSection }) {
  const [openSection, setOpenSection] = useState(initialOpenSection || '');

  useEffect(() => {
    if (initialOpenSection) {
      setOpenSection(initialOpenSection);
    }
  }, [initialOpenSection]);

  /**
   * Alterna la visibilidad de una sección.
   *
   * @param {string} section - La sección a alternar.
   */
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  return (
    <div className="m-2 space-y-2">
      {/* Sección Historia */}
      <div id="historia" className="group flex flex-col rounded-lg text-white" tabIndex="1">
        <div
          className="flex bg-orange-500 p-5 rounded-lg cursor-pointer items-center justify-between"
          onClick={() => toggleSection('historia')}
        >
          <h1 className="font-bold text-xl">Historia</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className={`h-2 w-3 transition-all duration-500 ${openSection === 'historia' ? '-rotate-180' : ''}`}
            alt="Chevron"
          />
        </div>
        <div
          className={`${
            openSection === 'historia' ? 'visible max-h-screen p-5 opacity-100' : 'invisible max-h-0 opacity-0'
          } bg-white text-black text-justify rounded-b-md border border-orange-200 transition-all duration-1000`}
        >
          <p className='pb-2'>
            Nacimos en la ciudad de Córdoba capital por iniciativa de la pastora Viviana Safita de Villarreal,
            quien ante la necesidad económica que estaba atravesando el país, buscó la manera de ayudar a los más
            necesitados. Con una visión clara brindada por Raul Alberto Villareal su esposo, Presidente y Fundador del
            Ministerio M.E.D.E.A
          </p>
          <p className='py-2'>
            En el año 2011, nosotros los que llevamos adelante esta obra de amor en el sur del país, tuvimos la
            oportunidad de conocer y aprender de la metodología implementada en la central, abarcando las cuatro áreas
            fundamentales: Social, Deportiva, Cultural y Espiritual. Totalmente enamorados de esta visión integral,
            decidimos adoptarla y traerla a nuestra comunidad, con el firme propósito de replicar su impacto positivo
            y transformar vidas.
          </p>
          <p className='py-2'>
            Así fue como, en el año 2012, dimos nuestros primeros pasos en Caleta Olivia, Santa Cruz, en el sur del país.
            Día a día, diversos actores sociales se sumaron a nuestra causa, adoptando la visión que trajimos y uniendo
            esfuerzos en el trabajo comunitario y social bajo el lema "NO TE ENTREGUES, HAY ESPERANZA". Comprometidos con
            la labor diaria, hemos implementado actividades semanales abiertas a la comunidad, todas ellas de manera
            totalmente gratuita. Así nació la Fundación LEMUEL Manos Extendidas, dedicada a brindar ayuda, acompañamiento
            y contención. Hoy, seguimos extendiendo nuestras manos hacia provincias vecinas, fortaleciendo nuestro
            compromiso de apoyo y servicio."
          </p>
        </div>
      </div>

      {/* Sección Colaboraciones y Apoyo */}
      <div className="group flex flex-col rounded-lg text-white" tabIndex="1">
        <div
          className="flex bg-orange-500 p-5 rounded-lg cursor-pointer items-center justify-between"
          onClick={() => toggleSection('colaboraciones')}
        >
          <h1 className="font-bold text-xl">Colaboraciones y Apoyo</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className={`h-2 w-3 transition-all duration-500 ${openSection === 'colaboraciones' ? '-rotate-180' : ''}`}
            alt="Chevron"
          />
        </div>
        <div
          className={`${
            openSection === 'colaboraciones' ? 'visible max-h-screen p-5 opacity-100' : 'invisible max-h-0 opacity-0'
          } bg-white text-black text-justify rounded-b-md border border-orange-200 transition-all duration-1000`}
        >
          <p className='pb-2'>
            Es muy importante reconocer y resaltar el apoyo constante de los voluntarios que forman parte de nuestra institución, así como de los comerciantes locales que se suman día a día a esta loable labor. También es crucial destacar que nuestro trabajo siempre se realiza en red, buscando unirnos al esfuerzo institucional brindado por el municipio, la provincia y la nación.
          </p>
          <p className='py-2'>
            En estos últimos dos años, CGC nos ha acompañado en varios proyectos como Potrero Digital y proyectos con Creer Hacer, y ahora estamos realizando una diplomatura de Transformadores Sociales. Fuimos seleccionados, entre muchos proyectos, para llevar adelante un trabajo conjunto con la Asociación Espacio Red en Comunidad, contando con el apoyo de las empresas Cookins y CGC.
          </p>
          <p className='py-2'>
            Todos los talleres brindados son de capacitación y formación para el trabajo, buscando brindar nuevas herramientas a los participantes para que puedan aplicarlas en la búsqueda laboral. Todas las colaboraciones que puedan sumarse serán bienvenidas, ya que nuestra idea es seguir generando espacios de manera gratuita, pero para ello es fundamental sostener nuestra institución.
          </p>
          <p className='py-2'>
            Queremos expresar nuestra más profunda gratitud primeramente a Natalia Razzetti y Caro Alfonso, quienes actuaron como puente para que la empresa Qservicessoftware conociera esta maravillosa obra de amor. Gracias a su intervención y al apoyo del equipo de trabajo que, sin dudarlo, se unieron voluntariamente a esta noble causa y realizaron un aporte económico crucial, pudimos adquirir los materiales necesarios para completar el nuevo espacio donde los niños pueden disfrutar de su merienda, participar en talleres de gastronomía y contar con un área áulica para su aprendizaje.
          </p>
        </div>
      </div>

      {/* Sección Dónde Estamos y Qué Creemos */}
      <div className="group flex flex-col rounded-lg text-white" tabIndex="1">
        <div
          className="flex bg-orange-500 p-5 rounded-lg cursor-pointer items-center justify-between"
          onClick={() => toggleSection('creemos')}
        >
          <h1 className="font-bold text-xl">Dónde Estamos y Qué Creemos</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className={`h-2 w-3 transition-all duration-500 ${openSection === 'creemos' ? '-rotate-180' : ''}`}
            alt="Chevron"
          />
        </div>
        <div
          className={`${
            openSection === 'creemos' ? 'visible max-h-screen p-5 opacity-100' : 'invisible max-h-0 opacity-0'
          } bg-white text-black text-justify rounded-b-md border border-orange-200 transition-all duration-1000`}
        >
          <p className='py-2'>
            Nuestra fundación se encuentra ubicada en el barrio mutual más precisamente en la calle Luigi Cossia 1197, es aquí donde abarcamos todas las áreas social, deportiva, cultural y espiritual... queremos que sepas que somos una institución sin fines de lucro y sin credo religioso.
            Así que no necesita ser parte de la comunidad cristiana para unirte a nosotros o recibir nuestra ayuda estamos aquí para acompañarte.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
