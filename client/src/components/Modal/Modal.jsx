import React from "react";
import "./Modal.css";
import { motion } from "framer-motion";

import LazyLoad from "react-lazy-load";

import {
   ModalCloseButton,
   ModalActions,
   ModalHeader,
   CourseList,
   Faqs,
} from "../index";

import { useLocation, useParams } from "react-router-dom";
import { getDataFromContext, useDataContext } from "../../context/DataContext";

const Modal = () => {
   const data = useDataContext();
   const location = useLocation();
   const { id } = useParams();

   const productsData = getDataFromContext(location, id, data);

   const { Titulo, Descripcion, Precio, LinkDeCompra, Tipo, Imagen } =
      productsData;

   return (
      <motion.div
         className="modal"
         variants={modalVariants}
         onClick={(e) => e.stopPropagation()}
         layout>
         <div className="modal__left-container">
            <LazyLoad className="modal__image-container">
               <motion.img
                  className="modal__image"
                  alt="real estate mansion"
                  src={Imagen}
                  variants={imageVariants}></motion.img>
            </LazyLoad>{" "}
            <ModalActions
               Tipo={Tipo}
               Titulo={Titulo}
               LinkDeCompra={LinkDeCompra}
               Precio={Precio}
            />
         </div>
         <motion.div className="modal__info" variants={modalInfoVariants}>
            <ModalHeader
               Titulo={Titulo}
               Descripcion={Descripcion}
               Precio={Precio}
            />

            {/* Courses */}
            <motion.div className="modal__row" variants={modalRowVariants}>
               <CourseList />
            </motion.div>

            {/* For what to learn */}
            <motion.div className="modal__row" variants={modalRowVariants}>
               <h6>¿Qué se aprenderá?</h6>
            </motion.div>

            {/* For whose to learn */}
            <motion.div className="modal__row" variants={modalRowVariants}>
               <h6>¿Para quién es este curso?</h6>
            </motion.div>

            {/* FAQS */}

            <motion.div className="modal__row" variants={modalRowVariants}>
               <Faqs faqType={"online"} />
            </motion.div>
         </motion.div>
         <ModalCloseButton />
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
