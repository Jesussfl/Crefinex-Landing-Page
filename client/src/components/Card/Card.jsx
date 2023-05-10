import "./Card.css";
import React, { memo } from "react";

import LazyLoad from "react-lazy-load";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { Button } from "../index";

export const Card = memo(function Card(props) {
   const navigate = useNavigate();
   const openModal = () => {
      const tituloUrl = encodeURIComponent(
         props.title
            .toLowerCase()
            .replace(/[^\w\s]/gi, "")
            .replace(/\s+/g, "-")
      );
      navigate(`${props.type}s/${tituloUrl}/${props.type}/${props.id}`, {
         state: props.data,
      });
   };

   return (
      <>
         <motion.div className="card" onClick={openModal} whileHover={{ scale: 1.05 }}>
            <div className="card__content">
               <LazyLoad offset={200} className="card__image-container">
                  <img src={props.image} alt="" style={{ height: "130%" }} className="card__image" />
               </LazyLoad>
               <div className="card__details">
                  <div className="card__details-row card__texts">
                     <p className="headline">{props.title}</p>
                     <p className="description">{props.description}</p>
                  </div>
                  <div className="card__details-row card__tags">
                     <div className="tag">{props.price}</div>
                     <div className="tag">Presencial</div>
                  </div>
                  <div className="card__details-row">
                     <Button text="Más Información" onClick={openModal} />
                  </div>
               </div>
            </div>
         </motion.div>
      </>
   );
});

export default Card;
