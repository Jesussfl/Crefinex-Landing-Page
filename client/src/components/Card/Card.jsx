import React from "react";
import "./Card.css";
import { motion } from "framer-motion";
function Card(props) {
  return (
    <div className="card">
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      <div className="content">
        <p className="headline">{props.title}</p>
        <p className="description">{props.description}</p>
        <div className="tags">
          <div className="tag"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
