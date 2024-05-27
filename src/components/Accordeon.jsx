import React from 'react';

function Accordeon() {
  return (
    <div class="m-2 space-y-2">
      <div class="group flex flex-col rounded-lg text-white" tabindex="1">
        <div class="flex bg-orange-500 p-5 rounded-lg cursor-pointer items-center justify-between group-focus-within:rounded-t-md group-focus-within:rounded-b-none">
          <h1 className='font-bold text-xl'>Historia</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            class="h-2 w-3 transition-all duration-500 group-focus-within:-rotate-180"
          />
        </div>
        <div class="invisible bg-white text-orange-500 max-h-0 opacity-0 rounded-b-md border border-orange-200 transition-all group-focus-within:visible group-focus-within:p-5 group-focus-within:max-h-screen group-focus-within:opacity-100 group-focus-within:duration-1000">
          <p className='text-[#52658d]'>
            Nacimos en Córdoba Capital gracias a la pastora Viviana Sagital Villarreal,
            quien vio la necesidad de ayudar a los más necesitados debido a la situación del país.
            Queremos que sepas que estamos aquí para ti.
          </p>
          <ol>
            2011: Comenzamos con nuestro ministerio MD, trabajando en 4 áreas: social,
            deportiva, cultural y espiritual.
          </ol>
          <ol>
            2013: Dimos nuestros primeros pasos en Caleta Olivia, en el sur,
            y nos unimos a un grupo de personas comprometidas con la comunidad.
            Así nació Fundación Lemuel Manos Extendidas,
            extendiendo nuestra ayuda también a localidades vecinas.
          </ol>
        </div>
      </div>
      <div class="group flex flex-col rounded-lg text-white" tabindex="1">
        <div class="flex bg-orange-500 p-5 rounded-lg cursor-pointer items-center justify-between group-focus-within:rounded-t-md group-focus-within:rounded-b-none">
          <h1 className='font-bold text-xl'>Colaboraciones y Apoyo</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            class="h-2 w-3 transition-all duration-500 group-focus-within:-rotate-180"
          />
        </div>
        <div class="invisible bg-white text-orange-500 max-h-0 opacity-0 rounded-b-md border border-orange-200 transition-all group-focus-within:visible group-focus-within:p-5 group-focus-within:max-h-screen group-focus-within:opacity-100 group-focus-within:duration-1000">
          <p>
            En los últimos dos años, CGC nos ha acompañado en varios proyectos como Potrero,
            proyectos con Creer Hacer, y ahora, una diplomatura de Transformadores Sociales.
            Sin embargo, es importante que sepas que no recibimos ayuda del estado ni de empresas;
            contamos con inversión social del área de CCC.
          </p>
        </div>
      </div>
      <div class="group flex flex-col rounded-lg text-white" tabindex="1">
        <div class="flex bg-[#f58634] p-5 rounded-lg cursor-pointer items-center justify-between group-focus-within:rounded-t-md group-focus-within:rounded-b-none">
          <h1 className='font-bold text-xl'>Dónde Estamos y Qué Creemos</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            class="h-2 w-3 transition-all duration-500 group-focus-within:-rotate-180"
          />
        </div>
        <div class="invisible bg-white text-[#f58634] max-h-0 opacity-0 rounded-b-md border border-orange-200 transition-all group-focus-within:visible group-focus-within:p-5 group-focus-within:max-h-screen group-focus-within:opacity-100 group-focus-within:duration-1000">
          <p>
          Nuestro Ministerio MDA está en el barrio Oeste, y aquí es donde abarcamos toda el área social. Queremos que sepas que somos una institución sin fines de lucro y sin credo religioso, así que no necesitas ser parte de la comunidad cristiana para unirte a nosotros o recibir nuestra ayuda. ¡Estamos aquí para ti!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordeon;
