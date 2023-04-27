import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";

function NavItem(props) {
  const path = window.location.pathname;
  const handleClick = () => {
    props.onClick();
    if (props.onClick !== undefined) {
      props.onClickActive();
      props.onClickMenu();
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        to={props.address}
        className={props.active ? "nav-item active" : "nav-item"}
        onClick={props.onClick}
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        {props.leftIcon ? <i>{props.leftIcon}</i> : ""}
        {props.text}
        {props.rightIcon ? <i>{props.rightIcon}</i> : ""}
      </Link>
      <div className="indicator"></div>
    </div>
  );
}

export default NavItem;
