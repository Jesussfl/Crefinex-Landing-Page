import "./CourseList.css";
import React from "react";
import { List } from "../index";
import { Clock, Wifi, Calendar, VideoSquare } from "iconsax-react";
import { motion } from "framer-motion";
function CourseList() {
   return (
      <motion.div className="course__details" variants={detailsVariants}>
         <div className="details__row">
            <List
               icon={<Wifi variant="Bold" />}
               title="Curso 100% Online para que puedas aprender desde cualquier lugar"
               description="Nuestro curso de educación financiera para niños está disponible en línea, lo que significa que tus hijos pueden aprender sobre finanzas desde cualquier lugar. ¡No importa si están en casa o de viaje, siempre tendrán acceso al curso!"
            />
            <List
               title="Horario flexible para que puedas adaptarlo a tus necesidades"
               icon={<Calendar variant="Bold" />}
               description="Entendemos que tienes un horario ocupado, por lo que hemos diseñado nuestro curso con flexibilidad en mente. Puedes establecer fechas límite según tus necesidades y trabajar en el curso a tu propio ritmo. ¡Aprende sobre finanzas sin sacrificar tu tiempo!"
            />
         </div>
         <div className="details__row">
            <List
               icon={<Clock variant="Bold" />}
               title="Dos meses de duración con 4 horas por semana sugeridas"
               description="Nuestro curso de educación financiera para niños tiene una duración de dos meses con cuatro horas por semana sugeridas. Es un tiempo razonable que les permitirá aprender sobre finanzas de manera efectiva sin abrumarlos. ¡Dales a tus hijos una ventaja financiera en solo dos meses!"
            />
            <List
               icon={<VideoSquare variant="Bold" />}
               title="Videos pre-grabados para que puedas verlos en cualquier momento del día"
               description="Hemos preparado una serie de videos pre-grabados para complementar el contenido del curso. Puedes verlos en cualquier momento del día que sea más conveniente para ti y tus hijos. ¡Aprende sobre finanzas de una manera más visual y efectiva con nuestros videos pre-grabados!"
            />
         </div>
      </motion.div>
   );
}
export function BookList() {
   return (
      <motion.div className="course__details" variants={detailsVariants}>
         <div className="details__row">
            <List
               icon={<Wifi variant="Bold" />}
               title="Actividades interactivas para aprender sobre finanzas de manera divertida"
               description="Nuestros libros de educación financiera no solo incluyen información relevante sobre el mundo de las finanzas, sino también actividades interactivas que mantendrán a tus hijos entretenidos mientras aprenden. ¡Aprender sobre finanzas nunca ha sido tan divertido!"
            />
            <List
               title="Libros bellamente ilustrados con personajes y escenarios divertidos que los niños adorarán"
               icon={<Calendar variant="Bold" />}
               description="En Crefinex creemos que el aprendizaje debe ser divertido y emocionante, y por eso hemos creado libros bellamente ilustrados con personajes y escenarios divertidos que captarán la atención de tus hijos. ¡Deja que la imaginación de tus hijos vuele mientras aprenden sobre finanzas!"
            />
         </div>
         <div className="details__row">
            <List
               icon={<Clock variant="Bold" />}
               title="Enseña a tus hijos hábitos financieros saludables desde temprana edad"
               description="Nuestros libros de educación financiera están diseñados para ayudar a tus hijos a desarrollar hábitos financieros saludables desde temprana edad. Con nuestros libros, tus hijos aprenderán cómo ahorrar, invertir y gastar su dinero de manera inteligente. ¡Invierte en el futuro de tus hijos y dales una ventaja financiera desde temprano!"
            />
            <List
               icon={<VideoSquare variant="Bold" />}
               title="Ilustraciones y Mapas que facilitan el aprendizaje de conceptos financieros"
               description="Hemos diseñado nuestras ilustraciones y dibujos de manera cuidadosa para que sean claros y fáciles de entender. Los niños pueden aprender sobre finanzas de una manera visual y lúdica, lo que les ayudará a retener mejor los conceptos financieros más importantes. ¡Permite que tus hijos aprendan sobre finanzas de una manera divertida y efectiva!"
            />
         </div>
      </motion.div>
   );
}

const detailsVariants = {
   open: { opacity: 1, x: 0 },
   closed: { opacity: 0, x: "10%" },
};
export default CourseList;
