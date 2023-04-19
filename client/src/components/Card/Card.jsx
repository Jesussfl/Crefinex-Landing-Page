import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="card">
      <div className="image">
        <img src="" alt="" />
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
