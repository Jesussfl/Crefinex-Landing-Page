import React from "react";
import ParallaxTextEffect from "../../Animations/ParallaxTextEffect";
import "./SectionMarquee.css";

function SectionMarquee() {
  return (
    <section className="marquee-section">
      <ParallaxTextEffect baseVelocity={-1}>
        Creciendo Financiera-mente Exitosos Creciendo Financiera-mente Exitosos
      </ParallaxTextEffect>
      <ParallaxTextEffect baseVelocity={1}>
        Educación Financiera Educación Financiera Educación Financiera
      </ParallaxTextEffect>
    </section>
  );
}

export default SectionMarquee;
