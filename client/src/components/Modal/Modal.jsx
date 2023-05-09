import React, { useEffect, useRef } from "react";
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
import { BookList } from "../List/CourseList";
import { useLocation, useParams } from "react-router-dom";
import { getDataFromContext, useDataContext } from "../../context/DataContext";
import ModalWhoSection from "./ModalWhoSection";

const Modal = () => {
   const modalRef = useRef(null);
   useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
         document.body.style.overflow = "unset";
      };
   }, []);
   function handleScroll() {
      const isMobile = window.innerWidth <= 768;
      const scrollTop = modalRef.current.scrollTop;
      const maxScrollTop =
         modalRef.current.scrollHeight - modalRef.current.clientHeight;
      const value = (maxScrollTop - scrollTop) / maxScrollTop;
      if (value < 0.9 && !isMobile) {
         modalRef.current.style.width = "100%";
         modalRef.current.style.height = "100%";
         modalRef.current.style.borderRadius = "0px";
      }
      if (value > 0.9 && !isMobile) {
         modalRef.current.style.width = "90%";
         modalRef.current.style.height = "90%";
         modalRef.current.style.borderRadius = "24px";
      }
   }
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
         onWheel={handleScroll}
         ref={modalRef}
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
               {Tipo == "curso" ? <CourseList /> : <BookList />}
            </motion.div>

            {/* For what to learn */}
            <motion.div className="modal__row" variants={modalRowVariants}>
               <h6>¿Qué se aprenderá?</h6>
               <p>
                  Los conocimientos básicos cómo manejar las finanzas
                  personales, planificando y estableciendo metas, valorando la
                  importancia que tiene la toma de decisiones para el logro de
                  sus objetivos. Practicar los hábitos de ahorro como base
                  fundamental para invertir y mejorar su calidad de vida
                  personal y familiar.
               </p>
            </motion.div>

            {/* Who is this course for */}
            <motion.div className="modal__row" variants={modalRowVariants}>
               <ModalWhoSection />
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
