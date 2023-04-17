import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";

function NavItem(props) {
  const path = window.location.pathname;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Link
        to={props.address}
        className={props.address === path ? "nav-item active" : "nav-item"}
        onClick={props.onClick}
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
