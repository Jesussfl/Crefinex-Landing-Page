import React from "react";
import { Star1 } from "iconsax-react";

function Rate() {
   return (
      <div
         className="rate__container"
         style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
         }}>
         <Star1 color="yellow" variant="Bold" />
         <Star1 color="yellow" variant="Bold" />
         <Star1 color="yellow" variant="Bold" />
         <Star1 color="yellow" variant="Bold" />
         <Star1 color="yellow" variant="Bold" />
         <p
            style={{
               color: "var(--base-700)",
               fontSize: "0.9rem",
               margin: "0",
            }}>
            5.0
         </p>
         <p
            style={{
               color: "var(--base-400)",
               fontSize: "0.8rem",
               margin: "0",
            }}>
            100
         </p>
      </div>
   );
}

export default Rate;
