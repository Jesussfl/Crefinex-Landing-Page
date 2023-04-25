import { useState } from "react";
import "./CarouselFramer.css";
import { motion, AnimatePresence } from "framer-motion";
import useMeasure from "react-use-measure";

export function CarouselFramer() {
  const elements = [1, 2, 3, 4, 5, 6];
  const [count, setCount] = useState(1);
  const [ref, { width }] = useMeasure();
  const [tuple, setTuple] = useState([null, count]); // [prev, current]

  if (tuple[1] !== count) {
    setTuple([tuple[1], count]);
  }

  const prev = tuple[0];
  const direction = count > prev ? 1 : -1;

  return (
    <div className="carousel-section">
      <div className="carousel-buttons">
        <button onClick={() => setCount(count - 1)}>Prev</button>
        <button onClick={() => setCount(count + 1)}>Next</button>
      </div>
      <div className="carousel-wrapper">
        <div ref={ref} className="carousel-container">
          <AnimatePresence custom={{ direction, width }}>
            {[count - 1, count, count + 1].map((item, index) => (
              <motion.div
                className="carousel-item"
                key={item}
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
                style={
                  index == 0
                    ? { gridArea: "A0" }
                    : index == 1
                    ? { gridArea: "A1" }
                    : { gridArea: "A2" }
                }
                layout
              >
                {item}
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
    scale: 0.8,
  },
  initialRight: {
    x: 200,
    scale: 0.8,
  },
  firstPosition: {
    x: 0,
    scale: 0.8,
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
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
};
