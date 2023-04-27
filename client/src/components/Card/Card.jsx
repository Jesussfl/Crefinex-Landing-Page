import React from "react";
import "./Card.css";
import { motion } from "framer-motion";
import { Button } from "../index";
import LazyLoad from "react-lazy-load";
export function Card(props) {
  return (
    <div className="card">
      <LazyLoad height={256} offset={200} className="image">
        <img src={props.image} alt="" style={{ height: "130%" }} />
      </LazyLoad>
      <div className="content">
        <p className="headline">{props.title}</p>
        <p className="description">{props.description}</p>
        <div className="tags">
          <div className="tag">{props.price}</div>
          <div className="tag" style={{ backgroundColor: "var(--base-500)" }}>
            presencial
          </div>
        </div>
        <Button text="Adquirir" />
      </div>
    </div>
  );
}

export function CardLarge(props) {
  return (
    <article className="card">
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
    </article>
  );
}

export default Card;
