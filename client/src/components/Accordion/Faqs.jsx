import { useState, useEffect } from "react";
import { AccordionItem } from "../index";
import "./Faqs.css";
import { useDataContext } from "../../context/DataContext";
import { motion } from "framer-motion";
function Faqs({ type, modality }) {
   const [faqType, setFaqType] = useState([]);
   const { faqsOnline, faqsOnSite, booksFaqs } = useDataContext();

   useEffect(() => {
      if (type === "curso") {
         modality === "online" ? setFaqType(faqsOnline) : setFaqType(faqsOnSite);
      } else {
         setFaqType(booksFaqs);
      }
   }, []);
   return (
      <motion.div variants={faqsVariants}>
         <h6>Preguntas Frecuentes</h6>
         <ul className="faqs__container">
            {faqType.map((faq) => (
               <AccordionItem key={faq.Id} faq={faq} />
            ))}
         </ul>
      </motion.div>
   );
}
const faqsVariants = {
   open: { opacity: 1, x: 0 },
   closed: { opacity: 0, x: "10%" },
};
export default Faqs;
