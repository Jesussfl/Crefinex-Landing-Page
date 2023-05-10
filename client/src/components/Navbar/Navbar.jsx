import React, { useState, useRef } from "react";
import "./Navbar.css";
import NavItem from "../NavItem/NavItem";
import { Button } from "../index";
import { HambergerMenu } from "iconsax-react";
import { RiFacebookCircleFill, RiYoutubeFill, RiInstagramFill } from "react-icons/ri";
import { handleScrollTo } from "../../controllers/scroller";
import { useInView } from "framer-motion";
function Navbar() {
   const ref = useRef();
   const inView = useInView(ref);
   const [showMenu, setShowMenu] = useState(false);
   const [activeIndex, setActiveIndex] = useState(0);

   const handleMenuClick = () => {
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
         setShowMenu((prevState) => !prevState);
         !showMenu ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "scroll");
      }
   };

   return (
      <nav ref={ref} className="center">
         <div
            className="left-side"
            style={{
               opacity: inView ? 1 : 0,
               transform: inView ? "translateX(0)" : "translateX(-200px)",
               transition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
            }}>
            <img src={`/logo-crefinex${showMenu ? "-white" : ""}.svg`} alt="Crefinex logo" />
         </div>
         <div
            className={`right-side ${showMenu ? "opened" : ""}`}
            style={{
               opacity: inView ? 1 : 0,
               transform: inView ? "translateX(0)" : "translateX(200px)",
               transition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
            }}>
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
               <Button onClick={() => handleScrollTo("courses", 0)} text="Explorar Cursos"></Button>
            </div>
            <div className={`social-networks ${showMenu ? "social-networks-opened" : ""}`}>
               <p className="body-large">Nuestras Redes</p>
               <div className="buttons">
                  {socialNetworks.map((item, index) => (
                     <NavItem key={index} address={item.address} leftIcon={item.leftIcon} />
                  ))}
               </div>
            </div>
         </div>
         <div onClick={handleMenuClick} className={`menu ${showMenu ? "opened-elements" : ""}`}>
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
      text: "Libros",
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
      leftIcon: <img src="/images/tiktok_fill.svg" alt="TikTok icon" style={{ width: "30px" }} />,
   },
];

export default Navbar;
