import React, { useState, memo } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Overlay, Modal } from "../index";
import LazyLoad from "react-lazy-load";

import "./Card.css";
import { useNavigate } from "react-router-dom";

export const Card = memo(function Card(props) {
   const [open, setOpen] = useState(false);
   const navigate = useNavigate();
   const openModal = () => {
      navigate("/inicio/cursos");
      document.body.style.overflow = "hidden";
      setOpen(true);
   };

   const closeModal = () => {
      navigate("/inicio");
      document.body.style.overflow = "scroll";

      setOpen(false);
   };
   return (
      <>
         <motion.div
            className="card"
            onClick={openModal}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
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
                        style={{ backgroundColor: "var(--base-500)" }}>
                        Presencial
                     </div>
                  </div>
               </div>
            </div>
         </motion.div>
         <AnimatePresence>
            {open && (
               <Overlay close={closeModal}>
                  <Modal
                     data={props.data}
                     image={props.image}
                     close={closeModal}
                  />
               </Overlay>
            )}
         </AnimatePresence>
      </>
   );
});

export default Card;
