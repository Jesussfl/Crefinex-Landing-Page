import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../index";

import Overlay from "./Overlay";
import Modal from "./Modal";
import LazyLoad from "react-lazy-load";

import "./Card.css";

export function Card(props) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <motion.div
        className="card"
        onClick={openModal}
        whileHover={{ scale: 1.05 }}
      >
        <div className="card__content">
          <LazyLoad offset={200} className="card__image-container">
            <img
              src={props.image}
              alt=""
              style={{ height: "130%" }}
              className="card__image"
            />
          </LazyLoad>
          <div className="card__details">
            <div className="card__details-row card__texts">
              <p className="headline">{props.title}</p>
              <p className="description">{props.description}</p>
            </div>
            <div className="card__details-row card__tags">
              <div className="tag">{props.price}</div>
              <div
                className="tag"
                style={{ backgroundColor: "var(--base-500)" }}
              >
                Presencial
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
            <Modal data={props.data} close={closeModal} />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
}

export default Card;
