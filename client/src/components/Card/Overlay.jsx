import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Overlay.css";

const Overlay = ({ children }) => {
   const navigate = useNavigate();
   const closeModal = () => {
      navigate(-1);
      document.body.style.overflow = "scroll";
   };
   const variants = {
      open: { backgroundColor: "rgba(0,0,0,0.6)" },
      closed: { backgroundColor: "rgba(0,0,0,0)" },
   };

   return (
      <AnimatePresence>
         <motion.div
            className="overlay"
            onClick={closeModal}
            variants={variants}
            initial={"closed"}
            animate={"open"}
            exit={"closed"}
            key="overlay">
            {children}
         </motion.div>
      </AnimatePresence>
   );
};

export default Overlay;
