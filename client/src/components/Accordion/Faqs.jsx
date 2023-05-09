import React from "react";
import { AccordionItem } from "../index";
import "./Faqs.css";
import { useDataContext } from "../../context/DataContext";
function Faqs({ faqType }) {
   const { faqsOnline, faqsOnSite } = useDataContext();
   console.log(faqType, faqsOnline, faqsOnSite);
   return (
      <>
         <h6>Preguntas Frecuentes</h6>
         <ul className="faqs__container">
            {faqType === "online"
               ? faqsOnline.map((faq) => (
                    <AccordionItem key={faq.id} faq={faq} />
                 ))
               : faqsOnSite.map((faq) => (
                    <AccordionItem key={faq.id} faq={faq} />
                 ))}
         </ul>
      </>
   );
}

export default Faqs;
