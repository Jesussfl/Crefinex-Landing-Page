import React from "react";
import "./Footer.css";
import NavItem from "../../NavItem/NavItem";
import { handleScrollTo } from "../../../controllers/scroller";

import {
   RiMailFill,
   RiFacebookCircleFill,
   RiYoutubeFill,
   RiInstagramFill,
   RiPhoneFill,
   RiMapFill,
} from "react-icons/ri";
function Footer() {
   const navItems = [
      {
         text: "Inicio",
         onClick: () => handleScrollTo("header", 0),
      },
      {
         text: "Nuestros Cursos",
         onClick: () => handleScrollTo("courses", 0),
      },
      {
         text: "¿Quiénes somos?",
         onClick: () => handleScrollTo("aboutUs", 0),
      },
      {
         text: "Recursos",
         onClick: () => handleScrollTo("resources", 0),
      },
      {
         text: "Ubicación",
         onClick: () => handleScrollTo("contactUs", 0),
      },
   ];
   return (
      <footer className="footer">
         <div className="info">
            <div
               className="logoAndInfo"
               style={{ width: "300px", textAlign: "left" }}>
               <img src="/logo-crefinex-white.svg" alt="" />
               <p>Creciendo Financieramente Exitosos</p>
               <NavItem
                  text="Contacto@crefinex.com"
                  leftIcon={<RiMailFill size={24} />}></NavItem>
               <NavItem
                  text="0243-232-6703"
                  leftIcon={<RiPhoneFill size={24} />}></NavItem>
               <NavItem
                  text="Avenida Bolívar - Oeste, en el Centro Comercial Pacífico, sexto piso, a tan solo 50 metros del C.C. Parque Aragua. "
                  leftIcon={<RiMapFill size={24} />}></NavItem>
            </div>
            <div className="sections">
               <p className="headline">Secciones</p>
               {navItems.map((item, index) => (
                  <NavItem
                     key={index}
                     text={item.text}
                     onClick={item.onClick}
                  />
               ))}
            </div>
            <div className="help">
               <p className="headline">¿Necesitas Ayuda?</p>
               <a href="">Preguntas Frecuentes</a>
               <a href="">Contáctanos</a>
            </div>
            <div className="social-networks">
               <p className="headline">Nuestras Redes</p>

               <NavItem
                  text="Facebook"
                  address="https://www.facebook.com/crefinex"
                  leftIcon={<RiFacebookCircleFill size={24} />}></NavItem>
               <NavItem
                  text="Youtube"
                  address="https://www.youtube.com/channel/UCjo_nLbwWx63oDbAvv2Q2sw"
                  leftIcon={<RiYoutubeFill size={24} />}></NavItem>
               <NavItem
                  text="Instagram"
                  address="https://www.instagram.com/crefinex/"
                  leftIcon={<RiInstagramFill size={24} />}></NavItem>
               <NavItem
                  text="TikTok"
                  address="https://www.tiktok.com/@yismaryariass?lang=es"
                  leftIcon={
                     <img
                        src="/images/tiktok_fill.svg"
                        style={{ width: "20px" }}
                     />
                  }></NavItem>
            </div>
         </div>
         <div className="divider"></div>

         <div className="rights">
            <p className="callout">Diseñado por jesus</p>
            <p className="callout">Todos los derechos reservados</p>
         </div>
      </footer>
   );
}

export default Footer;
