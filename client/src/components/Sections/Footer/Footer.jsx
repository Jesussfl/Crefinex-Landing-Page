import React from "react";
import "./Footer.css";
import NavItem from "../../NavItem/NavItem";

import {
  RiFacebookCircleFill,
  RiYoutubeFill,
  RiInstagramFill,
} from "react-icons/ri";
function Footer() {
  return (
    <div className="footer">
      <div className="info">
        <div className="logoAndInfo">
          <img src="/logo-crefinex-white.svg" alt="" />
          <p>Creciendo Financieramente Exitosos</p>
          <a href="">
            <img src="" alt="" />
            crefinex@gmail.com
          </a>
          <a href="">
            <img src="" alt="" />
            0243 - 232 - 6703
          </a>
          <a href="">
            <img src="" alt="" />
            Centro Comercial Pacífico
          </a>
        </div>
        <div className="sections">
          <p className="headline">Secciones</p>
          <a href="">Inicio</a>
          <a href="">Nuestros Cursos</a>
          <a href="">¿Quiénes Somos?</a>
          <a href="">Recursos</a>
          <a href="">Ubicación</a>
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
            leftIcon={<RiFacebookCircleFill size={24} />}
          ></NavItem>
          <NavItem
            text="Youtube"
            address="https://www.youtube.com/channel/UCjo_nLbwWx63oDbAvv2Q2sw"
            leftIcon={<RiYoutubeFill size={24} />}
          ></NavItem>
          <NavItem
            text="Instagram"
            address="https://www.instagram.com/crefinex/"
            leftIcon={<RiInstagramFill size={24} />}
          ></NavItem>
          <NavItem
            text="TikTok"
            address="https://www.tiktok.com/@yismaryariass?lang=es"
            leftIcon={
              <img src="images/tiktok_fill.svg" style={{ width: "20px" }} />
            }
          ></NavItem>
        </div>
      </div>
      <div className="divider"></div>

      <div className="rights">
        <p className="callout">Diseñado por jesus</p>
        <p className="callout">Todos los derechos reservados</p>
      </div>
    </div>
  );
}

export default Footer;
