import React from "react";
import "./Modal.css";
import { RiCloseFill, RiWhatsappFill, RiBankCardFill } from "react-icons/ri";
import { motion } from "framer-motion";
import LazyLoad from "react-lazy-load";
import { Button } from "../index";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getDataFromContext } from "../../context/DataContext";
const Modal = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const { id } = useParams();
   const data = getDataFromContext(location, id);
   const { Titulo, Descripcion, Precio, LinkDeCompra, Tipo, Imagen } = data;

   const closeModal = () => {
      navigate("/inicio");
      document.body.style.overflow = "scroll";
   };

   return (
      <motion.div
         className="modal"
         variants={modalVariants}
         onClick={(e) => e.stopPropagation()}
         layout>
         <LazyLoad className="modal__image-container">
            <motion.img
               className="modal__image"
               alt="real estate mansion"
               src={Imagen}
               variants={imageVariants}></motion.img>
         </LazyLoad>
         <motion.div className="modal__info" variants={modalInfoVariants}>
            <motion.div className="modal__row" variants={modalRowVariants}>
               <h5 className="modal__title">{Titulo}</h5>
               <div className="modal__tag">
                  <p className="modal__price headline">{Precio}</p>
               </div>
               <motion.div
                  className="modal__description-wrapper"
                  variants={modalRowVariants}>
                  <p className="modal__description body-medium">
                     {Descripcion}
                  </p>
               </motion.div>
            </motion.div>

            <motion.div className="modal__actions">
               {" "}
               <Button
                  href={`https://api.whatsapp.com/send?phone=+58-0424-3151580&text=Hola%21%20me%20gustaria%20adquirir%20el%20${Tipo}%20de%20${Titulo}`}
                  rightIcon={<RiWhatsappFill />}
                  text="Pedirlo por whatsapp"
                  style={{ backgroundColor: "#25d366" }}
               />
               <Button
                  text="Adquirir por tarjeta"
                  href={LinkDeCompra}
                  helper={"No valido para venezolanos"}
                  rightIcon={<RiBankCardFill />}
               />
            </motion.div>
         </motion.div>
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
      </motion.div>
   );
};
const modalVariants = {
   open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
   },
   closed: { opacity: 0 },
};

const imageVariants = {
   open: { opacity: 1, y: "0vh" },
   closed: { opacity: 0, y: "-10vh" },
};

const modalInfoVariants = {
   open: { opacity: 1, transition: { staggerChildren: 0.2 } },
   closed: { opacity: 0 },
};

const modalRowVariants = {
   open: { opacity: 1, x: 0 },
   closed: { opacity: 0, x: "10%" },
};
export default Modal;
