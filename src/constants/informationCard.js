import merienda from '../assets/merienda.jpg'
import roperoComunitario from '../assets/roperoComunitario.jpeg'
import cajasNavideñas from '../assets/cajasNavideñas.jpg'

import futbol from '../assets/deportiva2.jpg'
import natacion from '../assets/natacion.jpg'
import boxeo from '../assets/deportiva.jpg'
import funcional from '../assets/deportiva3.jpg'



import campañaCultural from '../assets/campañaCultural.jpg'


import cultural from '../assets/cultural1.jpg'
import cultural2 from '../assets/cultural2.jpg'
import cultural3 from '../assets/cultural3.jpg'
import cultural4 from '../assets/cultural4.jpg'



import religion from '../assets/religion1.jpg'
import religion2 from '../assets/religion2.jpg'
// la informacion de la card 
const sections = [
    { 
      title: "Social", 
      paragraph: "Realizamos campañas sociales para ayudar a la comunidad",
      cards: [
        { id: "ropero-comunitario", title: "Ropero comunitario", text: "Descripción breve de Ropero comunitario", detailedText: "Texto detallado sobre Ropero comunitario...", img: roperoComunitario },
        { id: "cajas-navideñas", title: "Cajas Navideñas", text: "Descripción breve de caja navideña", detailedText: "Texto detallado sobre caja navideña...", img: cajasNavideñas },
        { id: "copa-de-leche", title: "Copa de leche", text: "Descripción breve de Copa de leche", detailedText: "Texto detallado sobre Copa de leche...", img: merienda}
     
      ] 
    },
    { 
      title: "Deportiva ", 
      paragraph: "Desarrollamos diferentes actividades para la inclusión de nuestro jovenes",
      cards: [
        { id: "futbol", title: "futbol", text: "Descripción breve de futbol", detailedText: "Texto detallado sobre futbol", img:futbol},
        { id: "natacion", title: "Natacion", text: "Descripción breve de natacion", detailedText: "Texto detallado sobre natacion", img:natacion},
        { id: "boxeo", title: "Boxeo", text: "Descripción breve de boxeo", detailedText: "Texto detallado sobre Box", img:boxeo},
        { id: "funcional", title: "funcional", text: "Descripción breve de Clase de funcional", detailedText: "Texto detallado sobre funcional..", img: funcional }
      ] 
    },
    { 
      title: "Cultural", 
      paragraph: "Incluimos diferentes propuestas sobre temáticas que ocurren en la actualidad",
      cards: [
        { id: "mas-utiles-que-nunca", title: "Mas utiles que nunca", text: "Descripción breve de mas utiles que nunca", detailedText: "Texto detallado sobre mas utiles que nunca", img: campañaCultural },
        { id: "patinaje", title: "Patinaje", text: "Descripción breve de Patinaje", detailedText: "Texto detallado sobre Copa de leche...", img: cultural },
        { id: "clase-aerobica", title: "Clase aeróbica", text: "Descripción breve de Clase aeróbica", detailedText: "Texto detallado sobre Copa de leche...", img: cultural2},
        { id: "Clases", title: "a", text: "Descripción breve de a", detailedText: "Texto detallado sobre Copa de leche..." , img: cultural3},
        { id: "Clases", title: "a", text: "Descripción breve de a", detailedText: "Texto detallado sobre Copa de leche..." , img: cultural4}
      ] 
    },
    { 
      title: "Espiritual", 
      paragraph: "Encuentros grupales de fortaleza",
      cards: [
        { id: "meditacion", title: "Meditación", text: "Descripción breve de Meditación", detailedText: "Texto detallado sobre Copa de leche...", img: religion },
        { id: "yoga", title: "Yoga", text: "Descripción breve de Yoga", detailedText: "Texto detallado sobre Copa de leche...", img: religion2},
        { id: "lectura-espiritual", title: "Lectura espiritual", text: "Descripción breve de Lectura espiritual", detailedText: "Texto detallado sobre Copa de leche...",img: religion },
        { id: "lectura-espiritual", title: "Lectura espiritual", text: "Descripción breve de Lectura espiritual", detailedText: "Texto detallado sobre Copa de leche...", img: religion }
      ] 
    }
  ];
  
  export default sections;
  