import "./Modal.css";
import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import LazyLoad from "react-lazy-load";

import { ModalCloseButton, ModalActions, ModalHeader, CourseList, Faqs } from "../index";
import { BookList } from "../List/CourseList";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../context/DataContext";
import ModalWhoSection from "./ModalWhoSection";
import ModalContentSection from "./ModalContentSection";
import ModalCertificationSection from "./ModalCertificationSection";

const Modal = () => {
   const { coursesData, booksData } = useDataContext();
   const { id, type } = useParams();
   const modalRef = useRef(null);
   const { Titulo, Descripcion, Precio, LinkDeCompra, Imagen, Contenido } = type == "curso" ? coursesData[id - 1] : booksData[id - 1];

   useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
         document.body.style.overflow = "unset";
      };
   }, []);

   return (
      <motion.div
         className="modal"
         variants={modalVariants}
         onClick={(e) => e.stopPropagation()}
         ref={modalRef}
         onWheel={() => handleScroll(modalRef)}
         layout>
         <div className="modal__left-container">
            <LazyLoad className="modal__image-container">
               <motion.img className="modal__image" alt="real estate mansion" src={Imagen} variants={imageVariants}></motion.img>
            </LazyLoad>
         </div>
         <motion.div className="modal__info" variants={modalInfoVariants}>
            {/* Header */}
            <ModalHeader title={Titulo} description={Descripcion} price={Precio} />

            <ModalActions type={type} title={Titulo} link={LinkDeCompra} price={Precio} />
            {/* Benefits */}
            {type == "curso" ? <CourseList /> : <BookList />}

            {/* Content */}
            <ModalContentSection type={type} content={Contenido} />

            {type == "curso" && <ModalCertificationSection />}
            {/* Who is this course for */}
            <ModalWhoSection type={type} content={Descripcion} />

            {/* FAQS */}
            {type == "curso" ? <Faqs type={type} modality={coursesData[id - 1].Modalidad} /> : <Faqs type={type} />}
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

// const modalRowVariants = {
//    open: { opacity: 1, x: 0 },
//    closed: { opacity: 0, x: "10%" },
// };

function handleScroll(modalRef) {
   const isMobile = window.innerWidth <= 768;
   const scrollTop = modalRef.current.scrollTop;
   const maxScrollTop = modalRef.current.scrollHeight - modalRef.current.clientHeight;
   const value = (maxScrollTop - scrollTop) / maxScrollTop;
   if (value < 0.9 && !isMobile) {
      modalRef.current.style.width = "100%";
      modalRef.current.style.height = "100%";
      modalRef.current.style.borderRadius = "0px";
      modalRef.current.style.padding = "24px 124px";
      document.querySelector(".modal__left-container").style.flex = "0 1 0%";
      document.querySelector(".modal__info").style.flex = "0 1 100%";
   }
   if (value > 0.8 && !isMobile) {
      modalRef.current.style.padding = "0px ";

      modalRef.current.style.width = "90%";
      modalRef.current.style.height = "90%";
      modalRef.current.style.borderRadius = "24px";
      document.querySelector(".modal__left-container").style.flex = "0 1 40%";
      document.querySelector(".modal__info").style.flex = "0 1 60%";
   }
}
export default Modal;
