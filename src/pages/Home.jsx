import React from 'react'
import ngo2 from '../assets/ngo6.jpg'
import ngo3 from '../assets/ngo4.jpg'
import ngo4 from '../assets/ngo8.jpg'
import CardMision from '../components/CardMision';
import Button from '../components/Button';
import imgdonate from '../assets/imgDonate.jpg';
import img2 from '../assets/img_2.jpeg'
import img3 from '../assets/img_3.jpeg'
import act1 from '../assets/actividad.jpg'
import act2 from '../assets/actividad3.jpg'
import act3 from '../assets/actividad2.jpg'
import act4 from '../assets/actividad4.jpg'
import { FaSchool, FaHeart, FaSmile, FaGift } from 'react-icons/fa';
import { truncateText } from '../constants/index.js';


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
                  <h1 className="text-center  md:text-start text-[36px] leading-[46px] font-[800] md:text-[60px] text-[#181A1E] md:leading-[60px]">
                    Brindando <span className="text-[#f58634]">esperanza y apoyo</span> a la comunidad
                  </h1>

                  <p className="text__para text-headingColor text-center md:text-start">
                    Una organización comprometida a brindar ayuda y contención a niños, adolescentes, jóvenes y adultos
                    en situación de vulnerabilidad social, así como también a ofrecer apoyo en momentos difíciles de la vida.
                    Nuestro objetivo es consolidar y afianzar al ser humano, trabajando de manera integral para que cada individuo
                    pueda alcanzar la plenitud deseada.
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
                  <img src={ngo4} className="w-full" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      {/* ============== Mision content ============== */}

      <section class=" text-black">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
          <div class="mx-auto max-w-[36rem] text-center">
            <h2 class="text-3xl font-bold sm:text-4xl text-headingColor">Estamos En Una Misión De Ayudar</h2>
            <p class="mt-4 text-headingColor">
              La Fundación Lemuel es una entidad de bien público sin fines de lucro, creada por la iniciativa de la Pastora Viviana Safita de Villarreal.
              Nuestra misión es ofrecer ayuda social a quienes más lo necesitan. Conoce algunas de nuestras campañas.
            </p>
          </div>
          <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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

      {/* ============== 3er content ============== */}

      {/* ============== 4to content ============== */}

      <section class="bg-white ">
        <div class="container px-6 py-10 mx-auto">
          <div class="text-center">
            <h1 class="text-3xl font-bold sm:text-4xl text-headingColor">Actividades Recientes</h1>

            <p class="max-w-lg mx-auto mt-4 text-headingColor">
              Las últimas novedades de nuestra fundación del mes de mayo
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {/* ============== Card #1 ============== */}
            <div>
              <div class="relative">
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={act1} alt="" />
              </div>

              <h1 class="mt-6 text-xl font-semibold text-headingColor ">
                Capacitacion instituto cookins
              </h1>
              <hr class="w-32 my-3 text-orange-500" />
              <p class="text-sm text-headingColor ">
                Capacitacion en hotelería, gastronomía y tareas generales en conjunto con Asociación espacio red comunidad y la prestigiosa empresa Cookins
              </p>
              <a href="#" class="inline-block mt-4 text-orange-500 underline hover:text-orange-400">Leer Más</a>
            </div>
            {/* ============== Card #2 ============== */}
            <div>
              <div class="relative">
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={act2} alt="" />
              </div>

              <h1 class="mt-6 text-xl font-semibold text-headingColor ">
                Peluqueros solidarios 4ta edición.
              </h1>
              <hr class="w-32 my-3 text-orange-500" />
              <p class="text-sm text-headingColor ">
                ¡Campaña Peluqueros Solidarios! 🥰 Ayúdanos a abrigar a quienes más lo necesitan 🙌🏻
                Acercate a nuestra fundación con algo de abrigo para intercambiar por un corte de pelo🧣✂️
                Agradecemos a todos los peluqueros/as que colaboran en esta gran campaña.
              </p>
              <a href="#" class="inline-block mt-4 text-orange-500 underline hover:text-orange-400">Leer Más</a>
            </div>
            {/* ============== Card #3 ============== */}
            <div>
              <div class="relative">
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={act3} alt="" />
              </div>

              <h1 class="mt-6 text-xl font-semibold text-headingColor ">
                Campaña solidaria ayúdanos abrigar.
              </h1>
              <hr class="w-32 my-3 text-orange-500" />
              <p class="text-sm text-headingColor ">
                La campaña "Ayúdanos a abrigar" ha regresado en 2024 con el mismo espíritu solidario de años anteriores.
                Esta iniciativa se dedica a recolectar camperas, térmicos y frazadas durante eventos solidarios para distribuirlos entre personas en situación de necesidad.
                Con la colaboración de voluntarios y donantes, la campaña busca llevar abrigo y esperanza a quienes más lo necesitan,
                reafirmando el compromiso de la comunidad con la solidaridad y el cuidado mutuo.
              </p>
              <a href="#" class="inline-block mt-4 text-orange-500 underline hover:text-orange-400">Leer Más</a>
            </div>
            {/* ============== Card #4 ============== */}
            <div>
              <div class="relative">
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={act4} alt="" />
              </div>
              <h1 class="mt-6 text-xl font-semibold text-headingColor ">
                Peña Folclórica 25 de mayo.
              </h1>
              <hr class="w-32 my-3 text-orange-500" />
              <p class="text-sm text-headingColor ">
                Organizamos la Peña Folclórica en conmemoración del 25 de mayo. Las colaboraciones recibidas durante este evento nos permiten donar camperas, térmicos y frazadas a través de nuestra campaña "Ayúdanos a abrigar".
              </p>
              <a href="#" class="inline-block mt-4 text-orange-500 underline hover:text-orange-400">Leer Más</a>
            </div>
          </div>

          <div className='flex flex-col rounded-lg bg-[#f5f6fa] border border-orange-100 mt-12 md:flex-row'>
            <div className="relative w-[100%] h-auto md:rounded-l-lg rounded-t-lg bg-gradient-to-b from-black to-orange-900 md:w-3/5">
              <img className="md:absolute md:h-full h-[25rem] w-full object-cover md:rounded-l-lg rounded-t-lg opacity-30" src={imgdonate} alt="" />
              <div className='absolute w-[100%] px-8 py-14 md:p-0 md:w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <p className="font-bold text-sm text-center sm:text-left sm:text-xl lg:text-xl xl:text-2xl text-white my-2">¿Querés contribuir con nosotros?</p>
                <p className="text-3xl text-center lg:text-5xl sm:text-left text-white font-bold my-2">Sumate a Nuestra Causa</p>
                <p className="text-sm text-center sm:text-lg sm:text-justify text-white leading-none my-3 z-0">Tu apoyo es fundamental para continuar extendiendo nuestras manos de ayuda a quienes más lo necesitan y sustentar nuestras actividades. Cada contribución cuenta, puedes hacer la diferencia a través de Mercado Pago o contactarnos en nuestras redes sociales. También estamos disponibles en nuestra dirección.</p>
              </div>
            </div>
            <div className='w-[100%] md:w-1/3 mx-auto py-[2rem] p-4'>
              <div class="mb-6">
                <input type="text" placeholder="Nombre" name="nombre" class="input__style" />
              </div>
              <div class="mb-6">
                <input type="email" placeholder="Email" name="email" class="input__style" />
              </div>
              <div class="mb-6">
                <input type="text" placeholder="Telefono" name="telefono" class="input__style" />
              </div>
              <div class="mb-4">
                <textarea rows="3" placeholder="Deja tu comentario.." name="mensaje" class="input__style resize-none"></textarea>
              </div>
              <Button className={'text-white bg-orange-500 '} text="COLABORAR" />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home