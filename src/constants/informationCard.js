import merienda from '../assets/merienda.jpg';
import roperoComunitario from '../assets/roperoComunitario.jpeg';
import modulosNavideños from '../assets/ModuloNavideños.jpeg';
import social5 from '../assets/social5.jpeg';
import social6 from '../assets/social6.jpeg';
import social7 from '../assets/social7.jpeg';
import futbol from '../assets/deportiva2.jpg';
import natacion from '../assets/natacion.jpg';
import boxeo from '../assets/deportiva.jpg';
import funcional from '../assets/deportiva3.jpg';
import deportiva4 from '../assets/deportiva4.jpeg';
import deportiva6 from '../assets/deportiva6.jpeg';
import campañaCultural from '../assets/campañaCultural.jpg';
import cultural2 from '../assets/cultural2.jpeg';
import modulosalimentarios from '../assets/ModulosAlimentarios.jpeg';
import cultural3 from '../assets/cultural3.jpeg';
import cultural4 from '../assets/cultural4.jpg';
import cultural5 from '../assets/cultural5.jpeg';
import cultural6 from '../assets/cultural6.jpg';
import cultural7 from '../assets/cultural7.jpeg';
import cultural8 from '../assets/cultural8.jpeg';
import cultural9 from '../assets/cultural9.jpeg';
import religion3 from '../assets/religion3.jpeg';
import religion4 from '../assets/religion4.jpeg';
import espiritual3 from '../assets/espiritual3.jpeg';
import espiritual5 from '../assets/espiritual5.jpeg';
import espiritual6 from '../assets/espiritual6.jpeg';
import construccion1 from '../assets/construccion_1.jpeg';
import construccion2 from '../assets/construccion_2.jpeg';
import construccion3 from '../assets/construccion_3.jpeg';
import construccion4 from '../assets/construccion_4.jpeg';
import construccion5 from '../assets/construccion_5.jpeg';
import construccion6 from '../assets/construccion_6.jpeg';
import construccion7 from '../assets/construccion_7.jpeg';
import construccion8 from '../assets/construccion_8.jpeg';
import construccion9 from '../assets/construccion_9.jpeg';
import construccion10 from '../assets/construccion_10.jpeg';

/**
 * @constant {Array} sections
 * @description Listado de secciones y sus tarjetas correspondientes, cada una con su título, párrafo, texto y la imagen asociada.
 */
const sections = [
  // Datos de las tarjetas de la sección "Social"
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
        id: "Modulos-navideños",
        title: "Modulos navideños",
        text: `✨Reparto de cajas navideñas, donde llegamos a más de un centenar de familias de nuestra localidad, junto a los operadores de fundación lemuel.`,
        img: modulosNavideños
      },
      {
        id: "copa-de-leche",
        title: "Copa de leche",
        text: `🥛🍪La "Copa de Leche" es una iniciativa de Fundación Lemuel que se ofrece en cada una de sus actividades comunitarias.`,
        img: merienda
      },
      {
        id: "modulos-alimentarios",
        title: "Modulos alimentarios",
        text: `La Fundación Lemuel lleva adelante una tarea crucial mediante la entrega de módulos alimentarios destinados a las familias más necesitadas 🫂 Con la colaboración de cada voluntario y a través de las campañas solidarias estas movilizan recursos y donaciones de alimentos 🍞 esenciales para la continuidad del programa 🤝`,
        img: modulosalimentarios
      },
      {
        id: "Colonias",
        title: "Colonias",
        section: "Social",
        text: `Actividades en diferentes espacios
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
        img: social5
      },
      {
        id: "Agrupacion-Gedeones-con-orientacion-Scout",
        title: "Agrupacion Gedeones con orientacion Scout",
        text: `<p>Aprenden a tomar decisiones y asumir responsabilidades, siempre trabajando con otro al cual aprenden a respetar y acompañar, además de adquirir habilidades prácticas para la vida al aire libre, como construir refugios 🛖 , encender fogatas de manera segura 🔥 , orientarse con mapas y brújulas.</p>
               <p>Todos los sábados de 17hs a 19hs.</p>
               <p>Divididos por patrullas y edades de los 04 años a 15 años. 👧🏼👦🏻</p>`,
        img: social6
      },
      {
        id: "Asistencia-a-familiar-por-situacion-edilicia-ante-catastrofe-climaticas-accidentales-domesticos",
        title: "Asistencia a familiar por la situacion edilicia ante catastrofe climaticas accidentales domesticos",
        text: `La asistencia edilicia 🏢 ofrecida por la Fundación Lemuel para las familias afectadas por catástrofes climáticas y accidentes domésticos. Al proporcionar materiales, mano de obra voluntaria y apoyo emocional, la fundación ayuda a las familias a reconstruir sus hogares 🏡y sus vidas, promoviendo la resiliencia y el bienestar comunitario.💗`,
        img: social7
      }
    ]
  },
  // Datos de las tarjetas de la sección "Deportiva"
  {
    title: "Deportiva",
    paragraph: "Desarrollamos diferentes actividades para la inclusión de nuestro jóvenes",
    cards: [
      {
        id: "futbol",
        title: "Futbol Mixto",
        text: `Fundación Lemuel ofrece actividades de fútbol mixto ⚽ para niños y adolescentes de 4 a 17 años. Esta iniciativa busca fomentar el deporte entre jóvenes de diferentes edades, proporcionando un entorno seguro y educativo para el desarrollo físico y social. Las actividades están diseñadas para adaptarse a las capacidades y necesidades de cada grupo de edad, promoviendo valores como el trabajo en equipo, la disciplina y el respeto. 👧🏼👦🏻`,
        img: futbol
      },
      {
        id: "natacion",
        title: "Natacion",
        text: `Fundación Lemuel realiza actividades deportivas como natación 🏊‍♂️ incluyendo a niños y niñas para que participen de juegos en conjunto en un ámbito acuático logrando así desarrollar sus habilidades motrices 👧🏼👦🏻`,
        img: natacion
      },
      {
        id: "boxeo",
        title: "Boxeo",
        text: `Entrenamiento de boxeo 🥊 para jóvenes y adultos a partir de los 12 años. Este programa tiene como objetivo promover la salud física. Las sesiones están adaptadas a las edades y condiciones físicas o problemas específicos de cada participante. 👧🏼👦🏻`,
        img: boxeo
      },
      {
        id: "funcional",
        title: "Entrenamiento Funcional",
        text: `Fundación Lemuel ofrece un variado programa deportivo que incluye entrenamiento funcional mixto para todas las edades 💪🙆‍♀️ Este tipo de entrenamiento está diseñado para mejorar la fuerza, la coordinación y la resistencia, adaptándose a las necesidades y habilidades de cada niño o niña 👧🏼👦🏻`,
        img: funcional
      },
      {
        id: "Patinaje",
        title: "Patinaje",
        text: `¡Vení a patinar con nosotros!
          <p>🛴🛼 Fundación Lemuel promueve las actividades deportivas a las infancias</p>
          <p> 👦🏻👧🏼 Vení a divertirte y andar sobre ruedas, tenemos grandes profes.</p>
          <p>¡Los esperamos! ❤️🙌💪.</p>`,
        img: deportiva4
      },
      {
        id: "Aerobica-Ritmos",
        title: "Aerobica y Ritmos",
        text: `Crear una actividad de aeróbica y ritmos 💃🕺 para mujeres a partir de los 12 años que sea divertida, alegre y llena de ritmo implica diseñar un programa inclusivo y adaptable a diferentes niveles de habilidad y energía. Este programa está diseñado para ser flexible y ajustarse a las necesidades del grupo, asegurando que todas las participantes disfruten y se beneficien del ejercicio físico y la alegría del baile.👧🏼👦🏻`,
        img: deportiva6
      }
    ]
  },
  // Datos de las tarjetas de la sección "Cultural"
  {
    title: "Cultural",
    paragraph: "Incluimos diferentes propuestas sobre temáticas que ocurren en la actualidad",
    cards: [
      {
        id: "mas-utiles-que-nunca",
        title: "Mas utiles que nunca",
        text: `📣 En el marco de la campaña solidaria llevada adelante por el área social de Fundación Lemuel recibimos donaciones para la comunidad.
          <p>📍 Agradecemos a todos los que colaboran para hacer esto posible 🙌</p>
          <p>•Dios le bendiga grandemente.</p>
          <p>Fundación LEMUEL 💙❤️🧡</p>`,
        img: campañaCultural
      },
      {
        id: "peñas-solidarias",
        title: "Peñas solidarias",
        text: `La Fundación Lemuel organiza peñas solidarias en las siguientes fechas: 1 de mayo, 25 de mayo, 20 de junio y 9 de julio. Cada evento se lleva a cabo bajo un lema y un propósito específico, enfocado en brindar ayuda a la comunidad 🫂🏡💗`,
        img: cultural2
      },
      {
        id: "Encuentro-mes-mujer",
        title: "Mes de la Mujer",
        text: `La Fundación Lemuel declara el mes de marzo como el Mes de la Mujer👩‍🦰 y organiza charlas y agasajos en diferentes fechas dentro de ese mes para reconocer y celebrar junto a todas las mujeres de la comunidad.👩👱‍♀️`,
        img: cultural3
      },
      {
        id: "Peluqueria",
        title: "Peluqueria",
        text: `¡Campaña Peluqueros Solidarios! 🥰 
          <p>Ayúdanos a abrigar a quienes más lo necesitan 🙌🏻</p>  
          <p>Acercate a nuestra fundación con algo de abrigo para intercambiar por un corte de pelo🧣✂️</p> 
          <p>Agradecemos a todos los peluqueros/as que colaboran en esta gran campaña 🫶🏻</p>
          <p>Fundación LEMUEL 💙❤️🧡</p>`,
        img: cultural4
      },
      {
        id: "taller-de-huerta",
        title: "Taller de huerta",
        text: `✅️ Subsecretaria de Conocimiento y Gestión Productiva. 
          <p>🌱 La Supervisión de Punto Orgánico realizó hoy, en colaboración con la Fundación Lemuel, el Taller de Compostaje.</p> 
          <p>La Fundación Lemuel ha asumido el compromiso de valorar nuestros residuos orgánicos, lo que representa una oportunidad fundamental para involucrar a los jóvenes y promover acciones a favor del medio ambiente ♻️.</p>`,
        img: cultural5
      },
      {
        id: "Clases-de-adulto",
        title: "Clases de adultos",
        text: `📣 Caleta Olivia 🗣️•
          <p>Fundación Lemuel trabajando desde sus 4 áreas, en esta oportunidad desde el área cultural, hemos firmado un convenio con educación para poder realizar terminalidad educativa nivel primario EPJA n° 16. 👩🏻‍🎓</p>   
          <p>✅ ¡Ven a terminar el colegio! 😄✅️</p>`,
        img: cultural6
      },
      {
        id: "Clases-nivel-primario-secundario",
        title: "Clases de apoyo de nivel primario y secundario",
        text: `La Fundación Lemuel ofrece clases de apoyo 📝 para estudiantes de primaria y secundaria de la comunidad, en colaboración con la Universidad Siglo XXI. Los estudiantes universitarios realizan pasantías en las instalaciones de la fundación, brindando ayuda educativa a niños, adolescentes y jóvenes. Esta asociación es una forma excelente de proporcionar apoyo académico y oportunidades de aprendizaje en la comunidad 👧🏼👦🏻`,
        img: cultural7
      },
      {
        id: "Clases-folcloricas",
        title: "Clases de folclore  “Sabaout”",
        text: `La Fundación Lemuel ofrece clases de folclore "Sabahot"💃 donde niños, adolescentes y jóvenes pueden sumergirse en la rica cultura argentina a través de la danza. Esta iniciativa no solo promueve el aprendizaje del folclore, sino que también fomenta el orgullo y la apreciación de las tradiciones locales. Es una oportunidad emocionante para conectar con la identidad cultural y disfrutar de la expresión artística a través de la danza folclórica argentina 👧🏼👦🏻`,
        img: cultural8
      },
      {
        id: "Mes-rosa",
        title: "Mes Rosa",
        text: `Fundación Lemuel organiza encuentros durante el "Mes Rosa" 🎀 para concientizar sobre el cáncer de mama. La participación de profesionales de la salud 👩‍⚕️👨‍⚕️brinda información valiosa a la comunidad, y compartir un agasajo después de las disertaciones es un toque especial que hace que estos eventos sean aún más acogedores.`,
        img: cultural9
      }
    ]
  },
  // Datos de las tarjetas de la sección "Espiritual"
  {
    title: "Espiritual",
    paragraph: "Encuentros grupales de fortaleza",
    cards: [
      {
        id: "I.B.M.-Instituto-Biblico-M.E.D.E.A",
        title: "I.B.M. - Instituto Biblico M.E.D.E.A",
        text: `Descripción breve de I.B.M. - Instituto Biblico M.E.D.E.A`,
        img: espiritual3
      },
      {
        id: "Viernes-de-Casas-de-oracion",
        title: "Casas de oración 🏡💗",
        text: `✅Seguimos rodeando Caleta Olivia. 
          <p>💡Se iluminan los barrios: 📍René Favaloro. 📍Rotary 23. 📍Miramar. 📍Unión.</p>
          <p>📖 Isaías 56:7 yo los llevaré a mi santo monte, y los recrearé en mi casa de oración; sus holocaustos y sus sacrificios serán aceptos sobre mi altar; porque mi casa será llamada casa de oración para todos los pueblos.</p>`,
        img: religion3
      },
      {
        id: "Desarrollo-juvenil",
        title: "Desarrollo juvenil",
        text: `Descripción breve de Desarrollo juvenil`,
        img: espiritual5
      },
      {
        id: "Retiro-de-jovenes",
        title: "Retiro de jóvenes",
        text: `Descripción breve de retiro de jóvenes`,
        img: espiritual6
      },
      {
        id: "culto-de-niños",
        title: "🎊 culto de niños 👶🏻👧🏽🧑🏼",
        text: `El día sábado 23 de diciembre se celebra un hermoso culto de niños, dónde cada heredero del rey llevaron diferentes servicios adelante, donde también se hizo entrega de certificados a todos los niños que forman parte del D.I.N (Departamento de Instrucción al Niño).
          <p>Glorioso lo vivido, dónde llegaron familias completas a recibir el gran regalo de Dios 🎁 nuestra salvación por medio de 𝐉𝐞𝐬𝐮𝐬𝐜𝐫𝐢𝐬𝐭𝐨 ✝️.</p> 
          <p>📖 Pero Jesús dijo: Dejad a los niños venir.</p>`,
        img: religion4
      }
    ]
  },
  // Datos de las tarjetas de la sección "Construcción"
  {
    title: "Construcción",
    paragraph: "",
    cards: [
      {
        id: "Cn",
        title: "",
        active: true,
        text: "",
        img: construccion1
      },
      {
        id: "Cn",
        title: "",
        active: true,
        text: "",
        img: construccion2
      },
      {
        id: "Cn",
        title: "",
        active: true,
        text: "",
        img: construccion3
      },
      {
        id: "Cn",
        title: "",
        active: true,
        text: "",
        img: construccion4
      },
      {
        id: "Cn",
        title: "",
        active: true,
        text: "",
        img: construccion5
      },
      {
        id: "Cn",
        title: "",
        active: true,
        text: "",
        img: construccion6
      },
      {
        id: "Cn",
        title: "",
        active: true,
        text: "",
        img: construccion7
      },
      {
        id: "Cn",
        title: "",
        active: true,
        text: "",
        img: construccion8
      },
      {
        id: "Cn",
        title: "",
        active: true,
        text: "",
        img: construccion9
      },
      {
        id: "Cn",
        title: "",
        active: true,
        text: "",
        img: construccion10
      }
    ]
  }
];

export default sections;
