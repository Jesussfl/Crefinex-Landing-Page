import React, { useState } from "react";
import "./Navbar.css";
import NavItem from "../NavItem/NavItem";
import { Button } from "../Buttons/Button";
import { HambergerMenu } from "iconsax-react";
import {
  RiFacebookCircleFill,
  RiYoutubeFill,
  RiInstagramFill,
} from "react-icons/ri";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="center">
      <div className="left-side ">
        <img
          src={`${showMenu ? "logo-crefinex-white.svg" : "logo-crefinex.svg"}`}
        ></img>
      </div>
      <div className={`right-side ${showMenu ? "opened" : ""}`}>
        <div className={`links ${showMenu ? "links-menu-opened" : ""}`}>
          <NavItem text="Inicio"></NavItem>
          <NavItem text="Nuestros Cursos"></NavItem>
          <NavItem text="¿Quiénes somos?"></NavItem>
          <NavItem text="Recursos"></NavItem>
          <NavItem text="Ubicación"></NavItem>
        </div>
        <div className="actions">
          <button>Contáctanos</button>
        </div>
        <div
          className={`social-networks ${
            showMenu ? "social-networks-opened" : ""
          }`}
        >
          <p className="body-large">Nuestras Redes</p>
          <div className="buttons">
            <NavItem
              address="https://www.facebook.com/crefinex"
              leftIcon={<RiFacebookCircleFill size={36} />}
            ></NavItem>
            <NavItem
              address="https://www.youtube.com/channel/UCjo_nLbwWx63oDbAvv2Q2sw"
              leftIcon={<RiYoutubeFill size={36} />}
            ></NavItem>
            <NavItem
              address="https://www.instagram.com/crefinex/"
              leftIcon={<RiInstagramFill size={36} />}
            ></NavItem>
            <NavItem
              address="https://www.tiktok.com/@yismaryariass?lang=es"
              leftIcon={
                <img src="images/tiktok_fill.svg" style={{ width: "30px" }} />
              }
            ></NavItem>
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className={`menu ${showMenu ? "opened-elements" : ""}`}
      >
        <HambergerMenu variant="Bold" size={36} />
      </div>
    </nav>
  );
}

export default Navbar;
