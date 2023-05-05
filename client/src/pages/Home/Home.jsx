import "./Home.css";
import React, { memo } from "react";

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

import { loadSheetData } from "../../services/googleSheetAPI";
import { useQuery } from "react-query";

const Home = memo(function Home() {
   const { isLoading, data } = useQuery("data", getData);

   if (isLoading || !data) {
      return <SplashScreen />;
   }

   return (
      <div className="home">
         <FloatButton />
         <Navbar />
         <Header data={data.headerData} />
         <SectionIntroduction />
         <SectionScolarships />
         <SectionMarquee />
         <SectionCourses data={data.coursesData} />
         <SectionEducation />
         <SectionAboutUs />
         <SectionResources data={data.resourcesData} />
         <SectionContactUs data={data.locationData} />
         <SectionSubscribe />
         <Footer />
      </div>
   );
});

async function getData() {
   await gapi.load("client");
   const headerData = await loadSheetData("Cabecera", "A:B");
   const coursesData = await loadSheetData("Cursos", "A:G");
   const resourcesData = await loadSheetData("Recursos", "A:F");
   const locationData = await loadSheetData("Ubicacion", "A:B");
   return {
      headerData,
      coursesData,
      resourcesData,
      locationData,
   };
}

export default Home;
