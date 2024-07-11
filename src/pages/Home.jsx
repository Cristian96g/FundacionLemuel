import React from 'react'
import home1 from '../assets/home1.jpg'
import home2 from '../assets/home2.jpg'
import home3 from '../assets/home3.jpg'
import CardMision from '../components/CardMision';
import Button from '../components/Button';
import imgdonate from '../assets/imgDonate.jpg';
import { truncateText } from '../constants/index';
import informationCard from "../constants/informationCardHome.js"
import ContactForm from '../components/ContactForm.jsx';
import { FaSchool, FaHeart, FaSmile, FaGift } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      {/* ============== Hero section ============== */}
      <section className="hero__section pt-[2.5rem] 2xl:h-[calc(100vh-88px)]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[4.375rem] md:gap-[5.625rem] items-center justify-between">
            {/* ============== Hero content ============== */}
            <div>
              <div className="flex flex-col items-center justify-center md:justify-start md:items-start lg:w-[35.625rem]">
                <h1 className="text-center md:text-start text-[2.25rem] leading-[2.875rem] font-[800] md:text-[3.75rem] text-[#181A1E] md:leading-[3.75rem]">
                  Brindando <span className="text-[#f58634]">esperanza y apoyo</span> a la comunidad
                </h1>

                <p className="text__para text-center md:text-justify text-headingColor">
                  Una organización comprometida a brindar ayuda y contención a niños, adolescentes, jóvenes y adultos
                  en situación de vulnerabilidad social, así como también a ofrecer apoyo en momentos difíciles de la vida.
                  Nuestro objetivo es consolidar y afianzar al ser humano, trabajando de manera integral para que cada individuo
                  pueda alcanzar la plenitud deseada.
                </p>
                <Button className={'text-white bg-[#f58634] mt-[1.5rem]'} text="Ver más" />
              </div>
            </div>

            {/* ============== Hero content ============== */}
            <div className="flex gap-[1.875rem] justify-end">
              <div>
                <img className="w-full" src={home1} alt="" />
              </div>

              <div className="mt-[1.875rem] hidden md:block ">
                <img src={home2} className="w-full mb-[1.875rem]" alt="" />
                <img src={home3} className="w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== Mision content ============== */}

      <section className="text-black">
        <div className="mx-auto max-w-screen-xl px-[1rem] py-[2rem] sm:px-[1.5rem] sm:py-[3rem] lg:px-[2rem] lg:py-[1rem] lg:pt-0">
          <div className="mx-auto max-w-[36rem] text-center">
            <h2 className="text-[1.875rem] font-bold sm:text-[2.5rem] text-headingColor">Estamos En Una Misión De Ayudar</h2>
            <p className="mt-[1rem] text-headingColor">
              La Fundación Lemuel es una entidad de bien público sin fines de lucro, creada por la iniciativa de la Pastora Viviana Safita de Villarreal.
              Nuestra misión es ofrecer ayuda social a quienes más lo necesitan. Conoce algunas de nuestras campañas.
            </p>
          </div>
          <div className="mt-[3rem] grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <CardMision
              title="Más Útiles Que Nunca"
              text="Recolectamos útiles escolares para niños y jóvenes de comunidades vulnerables, apoyando su educación."
              icon={FaSchool}
            />
            <CardMision
              title="Ayúdanos a Abrigar"
              text="Juntamos ropa de invierno y mantas para quienes más lo necesitan durante los meses fríos, ayudándolos a mantenerse abrigados."
              icon={FaHeart}
            />
            <CardMision
              title="Juntos por una Sonrisa"
              text="Celebramos el Día del Niño recolectando juguetes y regalos para llevar sonrisas a los niños en su día especial."
              icon={FaSmile}
            />
            <CardMision
              title="Navidad de Jesús"
              text="Llevamos cajas navideñas a distintos lugares para compartir la Navidad y llevar alegría a más familias."
              icon={FaGift}
            />
          </div>
        </div>
      </section>

      {/* ============== Actividades Recientes ============== */}

      <section className="bg-white">
        <div className="container px-[1.5rem] py-[2.5rem] mx-auto">
          <div className="text-center">
            <h1 className="text-[1.875rem] font-bold sm:text-[2.5rem] text-headingColor">Actividades Recientes</h1>

            <p className="max-w-lg mx-auto mt-[1rem] text-headingColor">
              Las últimas novedades de nuestra fundación del mes de mayo
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-[2rem] md:mt-[4rem] md:grid-cols-2 xl:grid-cols-4">
            {informationCard.map((information) => (
              <div>
                <div className="relative">
                  <img className="object-cover object-center w-full h-[16rem] rounded-lg lg:h-[20rem]" src={information.img} alt="" />
                </div>

                <h1 className="mt-[1.5rem] text-[1.25rem] font-semibold text-headingColor ">
                  {information.title}
                </h1>

                <hr className="w-[8rem] my-[0.75rem] text-orange-500" />

                <p className="text-sm text-justify text-headingColor ">
                  {truncateText(information.text, 140)}
                </p>

                <a href="#" className="inline-block mt-[1rem] text-orange-500 underline hover:text-orange-400">Leer más</a>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className='flex flex-col bg-[#f5f6fa] rounded-lg border shadow-lg shadow-[rgba(251,146,60,0.24)] border-orange-100 mt-[3rem] md:mt-[6rem] md:flex-row'>
            <div className="relative w-full h-auto md:rounded-l-lg md:rounded-tr-none rounded-t-lg bg-gradient-to-b from-black to-orange-900 md:w-[60%]">
              <img className="md:absolute md:h-full h-[25rem] w-full object-cover md:rounded-l-lg md:rounded-tr-none rounded-t-lg opacity-30" src={imgdonate} alt="" />
              <div className='absolute w-full px-[2rem] py-[3.5rem] md:p-0 md:w-[75%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <p className="font-bold text-sm text-center sm:text-left sm:text-xl lg:text-xl xl:text-2xl text-white my-[0.5rem]">¿Querés contribuir con nosotros?</p>
                <p className="text-[1.875rem] text-center lg:text-[3.125rem] sm:text-left text-white font-bold my-[0.5rem]">Sumate a Nuestra Causa</p>
                <p className="text-sm text-center sm:text-lg sm:text-justify text-white leading-none my-[0.75rem] z-0">Tu apoyo es fundamental para continuar extendiendo nuestras manos de ayuda a quienes más lo necesitan y sustentar nuestras actividades. Cada contribución cuenta, puedes hacer la diferencia a través de Mercado Pago o contactarnos en nuestras redes sociales. También estamos disponibles en nuestra dirección.</p>
              </div>
            </div>

            <div className='w-full md:w-[33%] mx-auto py-[2rem] p-4'>

              <ContactForm row={"3"} textButton={"Colaborar"} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
