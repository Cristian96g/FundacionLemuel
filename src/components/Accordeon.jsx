import React from 'react';

function Accordeon() {
  return (
    <div className="m-2 space-y-2">
      <div className="group flex flex-col rounded-lg text-white" tabIndex="1">
        <div className="flex bg-orange-500 p-5 rounded-lg cursor-pointer items-center justify-between group-focus-within:rounded-t-md group-focus-within:rounded-b-none">
          <h1 className="font-bold text-xl">Historia</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className="h-2 w-3 transition-all duration-500 group-focus-within:-rotate-180"
          />
        </div>
        <div className="invisible bg-white text-black text-justify max-h-0 opacity-0 rounded-b-md border border-orange-200 transition-all group-focus-within:visible group-focus-within:p-5 group-focus-within:max-h-screen group-focus-within:opacity-100 group-focus-within:duration-1000">
          <p className='pb-2'>
            Nacimos en la ciudad de Córdoba capital por iniciativa de la pastora Viviana Safita de Villarreal,
            quien ante la necesidad económica que estaba atravesando el país, buscó la manera de ayudar a lo más
            necesitado. Con una visión clara brindada por Raul Alberto Villareal su esposo, Presidente y Fundador del
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
      <div className="group flex flex-col rounded-lg text-white" tabIndex="1">
        <div className="flex bg-orange-500 p-5 rounded-lg cursor-pointer items-center justify-between group-focus-within:rounded-t-md group-focus-within:rounded-b-none">
          <h1 className="font-bold text-xl">Colaboraciones y Apoyo</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className="h-2 w-3 transition-all duration-500 group-focus-within:-rotate-180"
          />
        </div>
        <div className="invisible bg-white text-black text-justify max-h-0 opacity-0 rounded-b-md border border-orange-200 transition-all group-focus-within:visible group-focus-within:p-5 group-focus-within:max-h-screen group-focus-within:opacity-100 group-focus-within:duration-1000">
          <p className='pb-2'>
            Es muy importante reconocer y resaltar el apoyo constante de los voluntarios que forman parte de nuestra institución, así como de los comerciantes locales que se suman día a día a esta loable labor. También es crucial destacar que nuestro trabajo siempre se realiza en red, buscando unirnos al esfuerzo institucional brindado por el municipio, la provincia y la nación.
          </p>
          <p className='py-2'>
            En estos últimos dos años, CGC nos ha acompañado en varios proyectos como Potrero Digital y proyectos con Creer Hacer, y ahora estamos realizando una diplomatura de Transformadores Sociales. Fuimos seleccionados, entre muchos proyectos, para llevar adelante un trabajo conjunto con la Asociación Espacio Red en Comunidad, contando con el apoyo de las empresas Cookins y CGC.
          </p>
          <p className='py-2'>
            Todos los talleres brindados son de capacitación y formación para el trabajo, buscando brindar nuevas herramientas a los participantes para que puedan aplicarlas en la búsqueda laboral. Todas las colaboraciones que puedan sumarse serán bienvenidas, ya que nuestra idea es seguir generando espacios de manera gratuita, pero para ello es fundamental sostener nuestra institución.
          </p>
          <p className='py-2'>
            Queremos expresar nuestra más profunda gratitud primeramente a Natalia Razzetti quien junto a Caro Alfonso actuaron como puente para que la empresa Qservicessoftware conociera esta maravillosa obra de amor. Gracias a su intervención y al apoyo del equipo de trabajo que sin dudarlo se unieron voluntariamente a esta causa noble, realizando un aporte económico crucial. Este generoso apoyo nos permitió adquirir los materiales necesarios para completar el nuevo espacio, donde los niños pueden disfrutar de su merienda y participar en talleres de gastronomía, además de contar con un área áulica para su aprendizaje. Su contribución ha sido fundamental para llevar a cabo esta iniciativa que tanto beneficia a nuestra comunidad.
          </p>
        </div>
      </div>
      <div className="group flex flex-col rounded-lg text-white" tabIndex="1">
        <div className="flex bg-orange-500 p-5 rounded-lg cursor-pointer items-center justify-between group-focus-within:rounded-t-md group-focus-within:rounded-b-none">
          <h1 className="font-bold text-xl">Dónde Estamos y Qué Creemos</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className="h-2 w-3 transition-all duration-500 group-focus-within:-rotate-180"
          />
        </div>
        <div className="invisible bg-white text-black text-justify max-h-0 opacity-0 rounded-b-md border border-orange-200 transition-all group-focus-within:visible group-focus-within:p-5 group-focus-within:max-h-screen group-focus-within:opacity-100 group-focus-within:duration-1000">
          <p className='py-2'>
            Nuestra fundación se encuentra ubicada en el barrio mutual más Precisamente en la calle Luigi cossia 1197, es aquí donde abarcamos todas las áreas social, deportiva, cultural y espiritual... queremos que sepas que somos una institución sin fines de lucro y sin credo religioso.
            Así que no necesita ser parte de la comunidad cristiana para unirte a nosotros o recibir nuestra ayuda estamos aquí para acompañarte.          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordeon;