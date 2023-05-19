import "./Home.css";
import React from "react";
import { Outlet } from "react-router-dom";
import {
   Navbar,
   Header,
   SectionIntroduction,
   SectionScolarships,
   SectionAboutUs,
   SectionMarquee,
   SectionCourses,
   SectionEducation,
   SectionResources,
   SectionContactUs,
   SectionSubscribe,
   Footer,
   FloatButton,
} from "../../components";

function Home() {
   return (
      <div className="home">
         <FloatButton />
         <Navbar />
         <Header />
         <SectionIntroduction />
         <SectionScolarships />
         <SectionMarquee />
         <SectionCourses />
         <SectionEducation />
         <SectionAboutUs />
         <SectionResources />
         <SectionContactUs />
         <SectionSubscribe />
         <Footer />
         <Outlet />
      </div>
   );
}

export default Home;
