import { useState } from "react";
import "./CarouselFramer.css";
import { motion, AnimatePresence } from "framer-motion";
import useMeasure from "react-use-measure";
import { Card } from "../index";

export function CarouselFramer({ data }) {
  const elements = [1, 2, 3, 4, 5, 6, 7];
  const [currentItem, setIndex] = useState(1);
  const [ref, { width }] = useMeasure();
  const [tuple, setTuple] = useState([null, currentItem]); // [prev, current]

  if (tuple[1] !== currentItem) {
    setTuple([tuple[1], currentItem]);
  }

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
    setIndex((currentItem - 1 + data.length) % data.length);
  };
  const nextClick = () => {
    setIndex((currentItem + 1) % data.length);
  };
  const displayedElements = [
    data[(currentItem - 1 + data.length) % data.length],
    data[currentItem],
    data[(currentItem + 1) % data.length],
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
                initial={index == 0 || index == 2 ? "enter" : ""}
                animate={
                  index == 0
                    ? "firstPosition"
                    : index == 1
                    ? "secondPosition"
                    : "thirdPosition"
                }
                exit={index == 0 || index == 2 ? "exit" : ""}
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
  firstPosition: {
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
  secondPosition: {
    scale: 1,
    x: 0,
  },
  thirdPosition: {
    x: 0,
    scale: 0.9,
    transition: {
      duration: 0.5,
    },
  },
};
