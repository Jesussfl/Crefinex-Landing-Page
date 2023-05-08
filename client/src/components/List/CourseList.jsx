import "./CourseList.css";
import React from "react";
import { List } from "../index";
import { Clock, Wifi, Calendar, VideoSquare } from "iconsax-react";
function CourseList() {
   return (
      <div className="course__details">
         <div className="details__row">
            <List
               icon={<Wifi variant="Bold" />}
               title="Curso 100% Online"
               description="Empieza ahora y aprende en línea"
            />
            <List
               title="Horario Flexible"
               icon={<Calendar variant="Bold" />}
               description="Establece fechas limites segun tus necesidades"
            />
         </div>
         <div className="details__row">
            <List
               icon={<Clock variant="Bold" />}
               title="2 meses de duración"
               description="4 horas por semana sugeridas"
            />
            <List
               icon={<VideoSquare variant="Bold" />}
               title="Videos Pre-grabados"
               description="Los puedes ver en cualquier momento del dia"
            />
         </div>
      </div>
   );
}

export default CourseList;
