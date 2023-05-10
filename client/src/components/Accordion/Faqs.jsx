import React from "react";
import { AccordionItem } from "../index";
import "./Faqs.css";
import { useDataContext } from "../../context/DataContext";
import { motion } from "framer-motion";
function Faqs({ faqType }) {
   const { faqsOnline, faqsOnSite } = useDataContext();
   console.log(faqType, faqsOnline, faqsOnSite);
   return (
      <motion.div variants={faqsVariants}>
         <h6>Preguntas Frecuentes</h6>
         <ul className="faqs__container">
            {faqType === "online"
               ? faqsOnline.map((faq) => <AccordionItem key={faq.Id} faq={faq} />)
               : faqsOnSite.map((faq) => <AccordionItem key={faq.Id} faq={faq} />)}
         </ul>
      </motion.div>
   );
}
const faqsVariants = {
   open: { opacity: 1, x: 0 },
   closed: { opacity: 0, x: "10%" },
};
export default Faqs;
