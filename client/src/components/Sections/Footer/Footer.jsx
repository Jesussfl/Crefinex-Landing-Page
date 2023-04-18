import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="info">
        <div className="logoAndInfo">
          <img src="logo-crefinex-white.svg" alt="" />
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

          <a href="">
            <img src="" alt="" />
            Facebook
          </a>
          <a href="">
            <img src="" alt="" />
            Instagram
          </a>
          <a href="">
            <img src="" alt="" />
            Tiktok
          </a>
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
