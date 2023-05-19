import "./Home.css";
import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";

import {
   SplashScreen,
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

import { getData } from "../../services/googleSheetAPI";

const Home = memo(function Home() {
   const { isLoading, data: headerData } = useQuery("data", () => getData("Cabecera", "A:B"));

   if (isLoading || !headerData) {
      return <SplashScreen />;
   }
   return (
      <div className="home">
         <FloatButton />
         <Navbar />
         <Header data={headerData} />
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
});

export default Home;
