import React from 'react'
import ngo2 from '../assets/ngo6.jpg'
import ngo3 from '../assets/ngo4.jpg'
import CardMision from '../components/CardMision';
import Button from '../components/Button';
import imgdonate from '../assets/imgDonate.jpg';
import { truncateText } from '../constants/index';
import informationCard from "../constants/informationCardHome.js"
import ContactForm from '../components/ContactForm.jsx';



const Home = () => {
  return (
    <>
      {/* ============== Hero section ============== */}
      <>
        <section className="hero__section pt-[40px] 2xl:h-[calc(100vh-88px)]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[70px] md:gap-[90px] items-center justify-between">
              {/* ============== Hero content ============== */}
              <div>
                <div className="flex flex-col items-center justify-center md:justify-start md:items-start lg:w-[570px]">
                  <h1 className="text-center md:text-start text-[36px] leading-[46px] font-[800] md:text-[60px] text-[#181A1E] md:leading-[60px]">
                    Brindando <span className="text-[#f58634]">esperanza y apoyo</span> a la comunidad
                  </h1>

                  <p className="text__para text-center md:text-start">
                    Una organización comprometida a extender ayuda a niños y adultos en momentos difíciles.
                    Una organización comprometida a extender ayuda
                  </p>
                  <Button className={'text-white bg-[#f58634] mt-[24px]'} text="Ver más" />
                </div>
              </div>

              {/* ============== Hero content ============== */}
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full" src={ngo2} alt="" />
                </div>

                <div className="mt-[30px] hidden md:block ">
                  <img src={ngo3} className="w-full mb-[30px]" alt="" />
                  <img src={ngo3} className="w-full" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      {/* ============== Mision content ============== */}

      <section class=" text-black">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-4 lg:pt-0">
          <div class="mx-auto max-w-[36rem] text-center">
            <h2 class="text-3xl font-bold sm:text-4xl text-black">Estamos En Una Misión De Ayudar</h2>
            <p class="mt-4 text-gray-600">
              Fundación Lemuel es una entidad de bien público, sin fines de lucro, creada por la iniciativa de la Pastora Viviana Safita de Villarreal, con la misión de extender ayuda en sentido social, en especial a niños y ancianos en situación de riesgo.
            </p>
          </div>
          <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <CardMision
              title="Atención Integral a Niños"
              text="Brindamos cuidado y apoyo integral a niños en situación de riesgo, asegurando su bienestar físico, emocional y espiritual."
            />
            <CardMision
              title="Asistencia a Ancianos"
              text="Ofrecemos acompañamiento y asistencia a ancianos que se encuentran en situaciones de vulnerabilidad, proporcionando atención y cuidado personalizado."
            />
            <CardMision
              title="Desarrollo Comunitario"
              text="Trabajamos en proyectos de desarrollo comunitario para mejorar la calidad de vida de las personas en nuestras comunidades, promoviendo el bienestar y la inclusión social."
            />
          </div>
        </div>
      </section>

      {/* ============== Actividades Recientes ============== */}

      <section class="bg-white ">
        <div class="container px-6 py-10 mx-auto">
          <div class="text-center">
            <h1 class="text-3xl font-bold sm:text-4xl text-black">Actividades Recientes</h1>

            <p class="max-w-lg mx-auto mt-4 text-gray-500">
              Salami mustard spice tea fridge authentic Chinese food dish salt tasty liquor. Sweet savory foodtruck
              pie.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {informationCard.map((information) => (
              <div>
                <div class="relative">
                  <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={information.img} alt="" />
                </div>

                <h1 class="mt-6 text-xl font-semibold text-gray-800 ">
                  {information.title}
                </h1>

                <hr class="w-32 my-3 text-orange-500" />

                <p class="text-sm text-gray-500 ">
                  {truncateText(information.text, 140)}
                </p>

                <a href="#" class="inline-block mt-4 text-orange-500 underline hover:text-orange-400">Leer más</a>
              </div>
            ))}
          </div>

          {/* bg-[#f5f6fa] */}
        </div>
        <div className="container">
          <div className='flex flex-col rounded-lg  border shadow-lg shadow-[rgba(251,146,60,0.24)] border-orange-100 mt-12 md:mt-[6rem] md:flex-row'>
            <div className="relative w-[100%] h-auto md:rounded-l-lg md:rounded-tr-none rounded-t-lg bg-gradient-to-b from-black to-orange-900 md:w-3/5">
              <img className="md:absolute md:h-full h-[25rem] w-full object-cover md:rounded-l-lg md:rounded-tr-none rounded-t-lg opacity-30" src={imgdonate} alt="" />
              <div className='absolute w-[100%] px-8 py-14 md:p-0 md:w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <p className="font-bold text-sm text-center sm:text-left sm:text-xl lg:text-xl xl:text-2xl text-white my-2">¿Querés contribuir con nosotros?</p>
                <p className="text-3xl text-center lg:text-5xl sm:text-left text-white font-bold my-2">Sumate a Nuestra Causa</p>
                <p className="text-sm text-center sm:text-lg sm:text-justify text-white leading-none my-3 z-0">Tu apoyo es fundamental para continuar extendiendo nuestras manos de ayuda a quienes más lo necesitan y sustentar nuestras actividades. Cada contribución cuenta, puedes hacer la diferencia a través de Mercado Pago o contactarnos en nuestras redes sociales. También estamos disponibles en nuestra dirección.</p>
              </div>
            </div>

            <div className='w-[100%] md:w-1/3 mx-auto py-[2rem] p-4'>

              <ContactForm row={"3"} textButton={"Colaborar"} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home