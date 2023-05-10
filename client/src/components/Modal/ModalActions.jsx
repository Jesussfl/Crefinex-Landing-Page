import React from "react";
import { motion } from "framer-motion";
import { RiWhatsappFill, RiBankCardFill } from "react-icons/ri";
import { Button } from "../index";
import "./ModalActions.css";
function ModalActions({ type, title, link, price }) {
   return (
      <div>
         <p>Formas de Pago</p>
         <motion.div className="modal__actions">
            <Button
               href={`https://api.whatsapp.com/send?phone=+58-0424-3151580&text=Hola%21%20me%20gustaria%20adquirir%20el%20${type}%20de%20${title}`}
               rightIcon={<RiWhatsappFill />}
               text="Consulta"
               style={{ backgroundColor: "#25d366" }}
            />
            <Button text={`Tarjeta (${price})`} href={link} helper={"No valido para venezolanos"} rightIcon={<RiBankCardFill />} />
         </motion.div>
      </div>
   );
}

export default ModalActions;
