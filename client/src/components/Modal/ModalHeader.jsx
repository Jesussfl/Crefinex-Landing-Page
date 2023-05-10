import React from "react";
import { motion } from "framer-motion";
import "./ModalHeader.css";
import { Rate } from "../index";
function ModalHeader({ title, description, price }) {
   return (
      <motion.div className="modal__row" variants={modalRowVariants}>
         <h5 className="modal__title">{title}</h5>
         <motion.div className="modal__description-wrapper" variants={modalRowVariants}>
            <p className="modal__description body-medium">{description}</p>
         </motion.div>
         <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "1rem" }}>
            <div className="modal__tag">
               <p className="modal__price headline">{price}</p>
            </div>
            <Rate />
         </div>
      </motion.div>
   );
}
const modalRowVariants = {
   open: { opacity: 1, x: 0 },
   closed: { opacity: 0, x: "10%" },
};
export default ModalHeader;
