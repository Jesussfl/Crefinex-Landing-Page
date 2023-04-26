import { useState } from "react";
import "./CarouselFramer.css";
import { motion, AnimatePresence } from "framer-motion";
import useMeasure from "react-use-measure";
import { Card } from "../index";

export function CarouselFramer({ data }) {
  const [currentItem, setIndex] = useState(1);
  const [ref, { width }] = useMeasure();
  const [tuple, setTuple] = useState([null, currentItem]); // [prev, current]

  if (tuple[1] !== currentItem) {
    setTuple([tuple[1], currentItem]);
  }
  const getPrevIndex = () => {
    return (currentItem - 1 + data.length) % data.length;
  };
  const getNextIndex = () => {
    return (currentItem + 1) % data.length;
  };
  const prev = tuple[0];
  let direction = 0;
  if (prev !== null) {
    const dist = (currentItem - prev + data.length) % data.length;
    if (dist <= data.length / 2) {
      direction = 1;
    } else {
      direction = -1;
    }
  }
  const prevClick = () => {
    setIndex(getPrevIndex());
  };
  const nextClick = () => {
    setIndex(getNextIndex());
  };
  const displayedElements = [
    data[getPrevIndex()],
    data[currentItem],
    data[getNextIndex()],
  ];

  return (
    <div className="carousel-section">
      <div className="carousel-buttons">
        <button onClick={prevClick}>Prev</button>
        <button onClick={nextClick}>Next</button>
      </div>
      <div className="carousel-wrapper">
        <div ref={ref} className="carousel-container">
          <AnimatePresence custom={{ direction, width }}>
            {displayedElements.map((card, index) => (
              <motion.div
                className="carousel-item"
                key={card.Titulo}
                variants={variants}
                custom={{ direction, width }}
                initial={
                  index == 0 || index == displayedElements.length - 1
                    ? "enter"
                    : ""
                }
                animate={`positionA${index}`}
                exit={index == 0 || displayedElements.length - 1 ? "exit" : ""}
                transition={{ duration: 0.5 }}
                style={{ gridArea: `A${index}` }}
                layout
              >
                {<Card title={card.Titulo} description={card.Descripcion} />}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

let variants = {
  enter: ({ direction, width }) => ({
    x: direction * width,
  }),
  center: { x: 0 },
  exit: ({ direction, width }) => ({
    x: direction * -width,
  }),
  initialLeft: {
    x: -200,
    scale: 0.9,
  },
  initialRight: {
    x: 200,
    scale: 0.9,
  },
  positionA0: {
    x: 0,
    scale: 0.9,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 0.85,
  },
  hoverMiddle: {
    scale: 1.0,
  }, // this fixes it!
  positionA1: {
    scale: 1,
    x: 0,
  },
  positionA2: {
    x: 0,
    scale: 0.9,
    transition: {
      duration: 0.5,
    },
  },
};
