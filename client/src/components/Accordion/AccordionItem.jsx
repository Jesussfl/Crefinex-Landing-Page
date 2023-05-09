import { useState } from "react";
import { useRef } from "react";
import "./AccordionItem.css";
import { ArrowUp2, ArrowDown2 } from "iconsax-react";
const AccordionItem = ({ faq }) => {
   const [clicked, setClicked] = useState(false);
   const contentEl = useRef();

   const { Pregunta, Respuesta } = faq;

   const handleToggle = () => {
      setClicked((prev) => !prev);
   };

   return (
      <li className={`accordion__item ${clicked ? "active" : ""}`}>
         <button className="accordion__button" onClick={handleToggle}>
            {Pregunta}
            <span className="accordion__control">
               {clicked ? (
                  <ArrowUp2 variant="Bold" />
               ) : (
                  <ArrowDown2 variant="Bold" />
               )}{" "}
            </span>
         </button>

         <div
            ref={contentEl}
            className="accordion__answer-wrapper"
            style={
               clicked
                  ? { height: contentEl.current.scrollHeight }
                  : { height: "0px" }
            }>
            <div className="accordion__answer">{Respuesta}</div>
         </div>
      </li>
   );
};

export default AccordionItem;
