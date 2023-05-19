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
import ReactPlayer from "react-player";
function Home() {
   return (
      <div className="home">
         <FloatButton />
         <Navbar />
         <Header />
         <SectionIntroduction />
         <SectionScolarships />
         <SectionMarquee />
         <ReactPlayer
            width="96%"
            height="73vh"
            style={{ borderRadius: "18px" }}
            loop={true}
            url="https://www.youtube.com/watch?v=RtYYi0S9vIY"
         />
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
