import React, { useState } from "react";
import "./Navbar.css";
import NavItem from "../NavItem/NavItem";
import { Button } from "../index";
import { HambergerMenu } from "iconsax-react";
import {
  RiFacebookCircleFill,
  RiYoutubeFill,
  RiInstagramFill,
} from "react-icons/ri";
import { handleScrollTo } from "../../controllers/scroller";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMenuClick = () => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      setShowMenu((prevState) => !prevState);
    }
  };

  return (
    <nav className="center">
      <div className="left-side">
        <img
          src={`/logo-crefinex${showMenu ? "-white" : ""}.svg`}
          alt="Crefinex logo"
        />
      </div>
      <div className={`right-side ${showMenu ? "opened" : ""}`}>
        <div className={`links ${showMenu ? "links-menu-opened" : ""}`}>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              text={item.text}
              onClick={item.onClick}
              active={activeIndex === index}
              onClickActive={() => setActiveIndex(index)}
              onClickMenu={handleMenuClick}
            />
          ))}
        </div>
        <div className="actions">
          <Button
            onClick={() => handleScrollTo("courses", 0)}
            text="Explorar Cursos"
          ></Button>
        </div>
        <div
          className={`social-networks ${
            showMenu ? "social-networks-opened" : ""
          }`}
        >
          <p className="body-large">Nuestras Redes</p>
          <div className="buttons">
            {socialNetworks.map((item, index) => (
              <NavItem
                key={index}
                address={item.address}
                leftIcon={item.leftIcon}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        onClick={handleMenuClick}
        className={`menu ${showMenu ? "opened-elements" : ""}`}
      >
        <HambergerMenu variant="Bold" size={36} />
      </div>
    </nav>
  );
}
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

const socialNetworks = [
  {
    address: "https://www.facebook.com/crefinex",
    leftIcon: <RiFacebookCircleFill size={36} />,
  },
  {
    address: "https://www.youtube.com/channel/UCjo_nLbwWx63oDbAvv2Q2sw",
    leftIcon: <RiYoutubeFill size={36} />,
  },
  {
    address: "https://www.instagram.com/crefinex/",
    leftIcon: <RiInstagramFill size={36} />,
  },
  {
    address: "https://www.tiktok.com/@yismaryariass?lang=es",
    leftIcon: (
      <img
        src="images/tiktok_fill.svg"
        alt="TikTok icon"
        style={{ width: "30px" }}
      />
    ),
  },
];

export default Navbar;
