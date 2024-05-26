import merienda from '../assets/merienda.jpg';
import roperoComunitario from '../assets/roperoComunitario.jpeg';
import cajasNavideñas from '../assets/cajasNavideñas.jpeg';
import futbol from '../assets/deportiva2.jpg';
import natacion from '../assets/natacion.jpg';
import boxeo from '../assets/deportiva.jpg';
import funcional from '../assets/deportiva3.jpg';
import deportiva4 from '../assets/deportiva4.jpeg';
import deportiva5 from '../assets/deportiva5.jpeg';
import campañaCultural from '../assets/campañaCultural.jpg';
import cultural from '../assets/cultural1.jpg';
import cultural2 from '../assets/cultural2.jpg';
import cultural3 from '../assets/cultural3.jpg';
import cultural4 from '../assets/cultural4.jpg';
import cultural5 from '../assets/cultural5.jpeg';
import cultural6 from '../assets/cultural6.jpg';
import religion from '../assets/religion1.jpg';
import religion2 from '../assets/religion2.jpg';
import religion3 from '../assets/religion3.jpeg';
import religion4 from '../assets/religion4.jpeg';

// la informacion de la card 
const sections = [
  { 
    title: "Social", 
    paragraph: "Realizamos campañas sociales para ayudar a la comunidad",
    cards: [
      { 
        id: "ropero-comunitario", 
        title: "Ropero comunitario", 
        text: `¡Campaña Ropero Solidario! 🥰 
          <p>Acercá tus prendas que ya no usas para quienes más lo necesitan 🙌🏻</p>
          <p>Si necesitas ropa acercate a nuestra fundación y llevate algo para vestir🧣</p> 
          <p>Agradecemos a todos los/as que colaboran con esta iniciativa 🫶🏻</p> 
          <p>Fundación LEMUEL 💙❤️🧡</p>`, 
        img: roperoComunitario 
      },
      { 
        id: "cajas-navideñas", 
        title: "Cajas Navideñas", 
        text: `Descripción breve de caja navideña.`, 
        img: cajasNavideñas 
      },
      { 
        id: "copa-de-leche", 
        title: "Copa de leche", 
        text: `Descripción breve de Copa de leche.`, 
        img: merienda 
      }
    ] 
  },
  { 
    title: "Deportiva ", 
    paragraph: "Desarrollamos diferentes actividades para la inclusión de nuestro jovenes",
    cards: [
      { id: "futbol", title: "futbol", text: `Descripción breve de futbol.`, img: futbol },
      { id: "natacion", title: "Natacion", text: `Descripción breve de natacion.`, img: natacion },
      { id: "boxeo", title: "Boxeo", text: `Descripción breve de boxeo.`, img: boxeo },
      { id: "funcional", title: "funcional", text: `Descripción breve de Clase de funcional.`, img: funcional },
      { id: "Patinaje", title: "Patinaje", text: `¡Vení a patinar con nosotros! 🛴🛼 Fundación Lemuel promueve las actividades deportivas a las infancias, 👦🏻👧🏼 Vení a divertirte y andar sobre ruedas, tenemos grandes profes. ¡Los esperamos! ❤️🙌💪.`, img: deportiva4 },
      { id: "Colonias", title: "Colonias", text: `Actividades en diferentes espacios
      <p>⚽️ Playon deportivo M.E.D.E.A</p>
      <p>🧩 Escuelita</p>
      <p>🤹 SUM</p>
      <p>🏐 Cancha de vóley</p>
      <p>⛳ Plaza saludable</p>
      <p>🪁 Circunvalación</p>
      <p>🥊 Entrenamiento de boxeo</p>
      <p>💃 Coreografias 🤗</p>
      <p>⚜Todas las patrullas disfrazadas realizamos kermesse,taller de dibujo,fútbol,voley,caminata todos juntos y al llegar a la meta compartimos helado para todos. 🍨</p>
      <p>⛳ Al finalizar se compartió una Rica merienda con pizzetas, variedades de jugos y torta. 🍰</p>
      <p> 🫂Se entregaran presentes para los niños y despedimos una edición más de Colonias Lemuel ❤️. </p>`,
       img: deportiva5 }
    
    ] 
  },
  { 
    title: "Cultural", 
    paragraph: "Incluimos diferentes propuestas sobre temáticas que ocurren en la actualidad",
    cards: [
      { id: "mas-utiles-que-nunca", title: "Mas utiles que nunca", text: `📣 En el marco de la campaña solidaria llevada adelante por el área social de Fundación Lemuel recibimos donaciones para la comunidad.
        <p>📍 Agradecemos a todos los que colaboran para hacer esto posible 🙌</p>
        <p>•Dios le bendiga grandemente.</p>
        <p>Fundación LEMUEL 💙❤️🧡</p>`, img: campañaCultural },
      { id: "patinaje", title: "Patinaje", text: `Descripción breve de Patinaje.`, img: cultural },
      { id: "clase-aerobica", title: "Clase aeróbica", text: `Descripción breve de Clase aeróbica.`, img: cultural2 },
      { id: "Clases", title: "a", text: `Descripción breve de a.`, img: cultural3 },
      { id: "Peluqueria", title: "Peluqueria", text: `¡Campaña Peluqueros Solidarios! 🥰 
        <p>Ayúdanos a abrigar a quienes más lo necesitan 🙌🏻</p>  
        <p>Acercate a nuestra fundación con algo de abrigo para intercambiar por un corte de pelo🧣✂️</p> 
        <p>Agradecemos a todos los peluqueros/as que colaboran en esta gran campaña 🫶🏻</p>
        <p>Fundación LEMUEL 💙❤️🧡</p>`, img: cultural4 },
      { id: "taller-de-huerta", title: "taller de huerta", text: `✅️ Subsecretaria de Conocimiento y Gestión Productiva. 
        <p>🌱 La Supervisión de Punto Orgánico realizó hoy, en colaboración con la Fundación Lemuel, el Taller de Compostaje.</p> 
        <p>La Fundación Lemuel ha asumido el compromiso de valorar nuestros residuos orgánicos, lo que representa una oportunidad fundamental para involucrar a los jóvenes y promover acciones a favor del medio ambiente ♻️.</p>`, img: cultural5 },
      { id: "Clases-de-adulto", title: "Clases de adultos", text: `📣 Caleta Olivia 🗣️•
        <p>Fundación Lemuel trabajando desde sus 4 areas, en esta oportunidad desde el área cultural, hemos firmado un convenio con educación para poder realizar terminalidad educativa nivel primario EPJA n° 16. 👩🏻‍🎓</p>   
        <p>✅ ¡Veni a terminar el colegio! 😄✅️</p>`, img: cultural6 }
    ] 
  },
  { 
    title: "Espiritual", 
    paragraph: "Encuentros grupales de fortaleza",
    cards: [
      { id: "meditacion", title: "Meditación", text: `Descripción breve de Meditación.`, img: religion },
      { id: "yoga", title: "Yoga", text: `Descripción breve de Yoga.`, img: religion2 },
      { id: "Viernes-de-Casas-de-oración", title: "Viernes de Casas de oración 🏡💗", text: `✅Seguimos rodeando Caleta Olivia. 
        <p>💡Se iluminan los barrios: 📍René Favaloro. 📍Rotary 23. 📍Miramar. 📍Unión.</p>
        <p>📖 Isaías 56:7 yo los llevaré a mi santo monte, y los recrearé en mi casa de oración; sus holocaustos y sus sacrificios serán aceptos sobre mi altar; porque mi casa será llamada casa de oración para todos los pueblos.</p>`, img: religion3 },
      { id: "culto-de-niños", title: "🎊 culto de niños 👶🏻👧🏽🧑🏼", text: `El día sábado 23 de diciembre se celebra un hermoso culto de niños, dónde cada heredero del rey llevaron diferentes servicios adelante, donde también se hizo entrega de certificados A todos los niños que forman parte del D.I.N (Departamento de Instrucción al Niño).
        <p>Glorioso lo vivido, dónde llegaron familias completas a recibir el gran regalo de Dios 🎁 nuestra salvación por medio de 𝐉𝐞𝐬𝐮𝐜𝐫𝐢𝐬𝐭𝐨 ✝️.</p> 
        <p>📖 Pero Jesús dijo: Dejad a los niños veni.</p>`, img: religion4 }
    ] 
  }
];

export default sections;
