import React from "react";
import { motion } from "framer-motion";
import "./ModalHeader.css";
import { Rate } from "../index";
function ModalHeader({ Titulo, Descripcion, Precio }) {
   return (
      <motion.div className="modal__row" variants={modalRowVariants}>
         <h5 className="modal__title">{Titulo}</h5>
         <motion.div
            className="modal__description-wrapper"
            variants={modalRowVariants}>
            <p className="modal__description body-medium">{Descripcion}</p>
         </motion.div>
         <Rate />
         <div className="modal__tag">
            <p className="modal__price headline">{Precio}</p>
         </div>
      </motion.div>
   );
}
const modalRowVariants = {
   open: { opacity: 1, x: 0 },
   closed: { opacity: 0, x: "10%" },
};
export default ModalHeader;
