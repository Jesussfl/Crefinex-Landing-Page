import React from "react";
import { motion } from "framer-motion";
import { RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./ModalCloseButton.css";
function ModalCloseButton() {
   const navigate = useNavigate();

   const closeModal = () => {
      navigate("/inicio");
      // document.body.style.overflow = "scroll";
   };
   return (
      <motion.div
         className="modal__close-wrapper"
         whileHover={{ scale: 1.2 }}
         onClick={closeModal}>
         <RiCloseFill
            size={32}
            color="var(--base-500)"
            className="modal__close-icon"
         />
      </motion.div>
   );
}

export default ModalCloseButton;
