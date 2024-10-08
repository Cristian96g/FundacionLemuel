import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdContact, IoMdTime } from "react-icons/io";
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <section className='py-0' id="contact">
      <PageHeader title={"Contacto"} />
      <div className="container max-w-6xl mx-auto pb-6 md:py-6">
        <div className="px-4 py-8 sm:px-6 lg:px-8 lg:py-8">
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="text-center md:text-left mt-3 mb-12 text-lg text-gray-600">
                  Estamos aquí para responder tus preguntas, resolver tus inquietudes y brindarte el mejor
                  servicio. No dudes en contactarnos para obtener asistencia personalizada y hacer que tu
                  experiencia de compra sea aún más satisfactoria.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded color__resources text-gray-50">
                      <FaLocationDot size={24} className='text-[#f58634]' />
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Dirección</h3>
                      <p className="text-gray-600">1197 Luigi Cosia</p>
                      <p className="text-gray-600">Caleta Olivia, Santa Cruz</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded color__resources text-gray-50">
                      <IoMdContact size={24} className='text-[#f58634]' />
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Contacto</h3>
                      <p className="text-gray-600">Teléfono: +54 (297) 4191960</p>
                      <p className="text-gray-600">Email: Fundacionlemuelcaletaolivia@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded color__resources text-gray-50">
                      <IoMdTime size={24} className='text-[#f58634]' />
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Horario de atención</h3>
                      <p className="text-gray-600">Lunes - Viernes: 09:00 - 14:00</p>
                      <p className="text-gray-600">Sábados & Domingos: 17:00 - 22:00</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl px-5 md:p-4 md:pt-0">
                <div className="relative rounded-lg bg-white px-8 shadow-lg shadow-[rgba(251,146,60,0.24)] sm:p-12">
                  <ContactForm row={"5"} textButton={"Enviar"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white container max-w-6xl mx-auto pt-6">
        <div className="px-6 py-12">
          <div className="text-center">
            <h1 className="title__main pt-2">Nuestra Ubicación</h1>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Estamos ubicados en Caleta Olivia. ¡Visítanos en nuestros horarios de atención. Estamos ansiosos por recibirte y brindarte la mejor experiencia. Acércate a disfrutar de las diferentes actividades que ofrecemos en la fundación.
            </p>
          </div>
          <div className="overflow-hidden mt-[2rem] rounded-lg lg:col-span-2 h-96">
            <iframe width="100%" height="100%" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1208.1159369846127!2d-67.5474473!3d-46.4460234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde5dfa4ddf8502f%3A0xa63521c1a726b59!2sM.E.D.E.A%20Anexo%20Caleta%20Olivia!5e1!3m2!1ses-419!2sar!4v1716392519522!5m2!1ses-419!2sar">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
