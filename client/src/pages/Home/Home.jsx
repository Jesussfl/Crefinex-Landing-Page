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

import CustomCursor from "../../components/CustomCursor/CustomCursor";
import CustomCursorManager from "../../components/CustomCursor/context/manager";

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
            const coursesData = await loadSheetData("Cursos", "A:G");
            const resourcesData = await loadSheetData("Recursos", "A:F");
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
         <CustomCursorManager>
            <CustomCursor />
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
            <section
               className="section__vacancy"
               style={{
                  maxWidth: "1024px",
                  borderRadius: "20px",
                  height: "480px",
                  backgroundImage:
                     "url(https://ik.imagekit.io/jeflr/Crefinex-Landing-Page/Covers/Banner-vacancy.jpg?updatedAt=1683126922322)",
                  backgroundSize: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
               }}></section>
            <SectionSubscribe />
            <Footer />
         </CustomCursorManager>
      </div>
   );
}

export default Home;
