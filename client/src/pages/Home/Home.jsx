import React, { useState, useEffect } from "react";
//Styles
import "./Home.css";

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

//Methods
import { loadSheetData } from "../../services/googleSheetAPI";

//Uncomment this if you want to use default data

// import {
//   headerData,
//   coursesData,
//   resourcesData,
//   locationData,
// } from "../../constants/data";

function Home() {
   const [headerData, setHeaderData] = useState([]);
   const [coursesData, setCoursesData] = useState([]);
   const [resourcesData, setResourcesData] = useState([]);
   const [locationData, setLocationData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      async function loadWebsiteData() {
         gapi.load("client", async () => {
            const headerData = await loadSheetData("Cabecera", "A:B");
            const coursesData = await loadSheetData("Cursos", "A:F");
            const resourcesData = await loadSheetData("Recursos", "A:D");
            const locationData = await loadSheetData("Ubicacion", "A:B");

            setHeaderData(headerData);
            setCoursesData(coursesData);
            setResourcesData(resourcesData);
            setLocationData(locationData);
            setIsLoading(false);
         });
      }

      loadWebsiteData();
   }, []);

   //Render
   if (isLoading) {
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
         <SectionCourses data={coursesData} />
         <SectionEducation />
         <SectionAboutUs />
         <SectionResources data={resourcesData} />
         <SectionContactUs data={locationData} />
         <SectionSubscribe />
         <Footer />
      </div>
   );
}

export default Home;
