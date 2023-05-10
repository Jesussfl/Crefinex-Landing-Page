import "./CourseList.css";
import React from "react";
import { List } from "../index";
import { Clock, Wifi, Calendar, VideoSquare } from "iconsax-react";
import { motion } from "framer-motion";
function CourseList() {
   return (
      <motion.div className="course__details" variants={detailsVariants}>
         <div className="details__row">
            <List icon={<Wifi variant="Bold" />} title="Curso 100% Online" description="Empieza ahora y aprende en línea" />
            <List
               title="Horario Flexible"
               icon={<Calendar variant="Bold" />}
               description="Establece fechas limites segun tus necesidades"
            />
         </div>
         <div className="details__row">
            <List icon={<Clock variant="Bold" />} title="2 meses de duración" description="4 horas por semana sugeridas" />
            <List
               icon={<VideoSquare variant="Bold" />}
               title="Videos Pre-grabados"
               description="Los puedes ver en cualquier momento del dia"
            />
         </div>
      </motion.div>
   );
}
export function BookList() {
   return (
      <motion.div className="course__details" variants={detailsVariants}>
         <div className="details__row">
            <List icon={<Wifi variant="Bold" />} title="Actividades Incluidas" description="Empieza ahora y aprende en línea" />
            <List
               title="Ilustraciones y Dibujos"
               icon={<Calendar variant="Bold" />}
               description="Establece fechas limites segun tus necesidades"
            />
         </div>
         <div className="details__row">
            <List icon={<Clock variant="Bold" />} title="Educativo" description="4 horas por semana sugeridas" />
            <List icon={<VideoSquare variant="Bold" />} title="Enseñanza" description="Los puedes ver en cualquier momento del dia" />
         </div>
      </motion.div>
   );
}

const detailsVariants = {
   open: { opacity: 1, x: 0 },
   closed: { opacity: 0, x: "10%" },
};
export default CourseList;
