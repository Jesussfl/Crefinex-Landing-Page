import React from "react";
import { TextField, Button } from "../../components/index";
import { ArrowLeft2 } from "iconsax-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
function Checkout() {
   const navigate = useNavigate();
   const backClick = () => {
      navigate("/inicio");
   };

   return (
      <div className="checkout__body">
         <div className="checkout__form-container">
            <div className="checkout__form-row">
               <span>
                  <motion.div
                     whileHover={{ scale: 1 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={backClick}
                     className={`checkout__back-button`}>
                     <ArrowLeft2 size={28} color="#fff" variant="Bold" />
                  </motion.div>
                  <h1>Información de Compra</h1>
               </span>
               <p className="headline">
                  Tu Información estará segura con nosotros. Ver políticas de
                  privacidad
               </p>
            </div>
            <form action="submit" className="checkout__form">
               <TextField
                  type="text"
                  label="Primer Nombre"
                  placeholder="Primer Nombre"
                  name="primerNombre"
                  className="checkout__input-name"
               />
               <TextField
                  type="text"
                  label="Primer Apellido"
                  placeholder="Primer Apellido"
                  name="primerApellido"
                  className="checkout__input-lastName"
               />
               <TextField
                  type="text"
                  label="Dirección del domicilio (opcional)"
                  placeholder="Dirección"
                  name="direccion"
                  className="checkout__input-address span2"
               />
               <TextField
                  type="text"
                  label="Casa, apartamento, suite, etc. (opcional)"
                  placeholder="Apto, casa, etc."
                  name="casa"
                  className="checkout__input-house span2"
               />
               <TextField type="text" label="Estado" placeholder="Estado" />
               <TextField
                  type="text"
                  label="Código Postal"
                  placeholder="Código"
                  name="codigoPostal"
                  className="checkout__input-postalCode"
               />
               <TextField
                  type="text"
                  label="Ciudad"
                  placeholder="ciudad"
                  className="span-2"
               />
               <TextField
                  type="phone"
                  label="Teléfono"
                  placeholder="teléfono"
                  name="telefono"
                  className="checkout__input-phone span2"
               />
               <div className="checkout__button-container">
                  <Button
                     type="submit"
                     className="checkout__button"
                     text="Continuar"
                     style={{ width: "100%" }}
                  />
               </div>
            </form>
         </div>

         <div className="checkout__summary">
            <div className="checkout__summary-title">
               <h3>Tu Compra</h3>

               <div className="divider"></div>
            </div>
            <div className="checkout__summary-row imageContainer">
               <div className="checkout__summary-product">
                  <img
                     src="https://ik.imagekit.io/jeflr/Crefinex-Landing-Page/Books/book-inteligencia-emocional.jpg?updatedAt=1682950192667"
                     className="checkout__summary-image"
                  />
                  <h5>Nombre del Producto</h5>
               </div>
               <h5>$0.00</h5>
            </div>
            <div className="divider"></div>
            <div className="checkout__summary-wrapper">
               <div className="checkout__summary-row"></div>
               <div className="checkout__summary-row">
                  <h5>Subtotal:</h5>
                  <h5>$0.00</h5>
               </div>
               <div className="divider"></div>
               <div className="checkout__summary-row">
                  <h5>{"Total (Incluye Iva):"}</h5>
                  <h5>$0.00</h5>
               </div>
               <div className="divider"></div>
            </div>
         </div>
      </div>
   );
}

export default Checkout;
