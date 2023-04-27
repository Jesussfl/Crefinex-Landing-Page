import React from "react";
import "./Modal.css";
import { RiCloseFill } from "react-icons/ri";
import { motion } from "framer-motion";
import LazyLoad from "react-lazy-load";
import { Button } from "../Buttons/Button";
const Modal = ({ data, close }) => {
  const { Titulo, Descripcion, Precio } = data;

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

  return (
    <motion.div
      className="modal"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <LazyLoad className="modal__image-container">
        <motion.img
          className="modal__image"
          alt="real estate mansion"
          src="/images/course1.jpg"
          variants={imageVariants}
        ></motion.img>
      </LazyLoad>
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <h4 className="modal__title">{Titulo}</h4>
          <h5 className="modal__price">{Precio}</h5>
        </motion.div>

        <motion.div
          className="modal__row"
          variants={modalRowVariants}
        ></motion.div>
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description body-medium">{Descripcion}</p>
        </motion.div>
        <motion.div className="modal__actions">
          {" "}
          <Button
            text="Cancelar"
            style={{ backgroundColor: "var(--base-500)" }}
          ></Button>
          <Button text="Adquirir"></Button>
        </motion.div>
        <motion.div
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <RiCloseFill color="var(--base-500)" className="modal__close-icon" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
