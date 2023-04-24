import React, { useState, useEffect } from "react";
//Styles
import "./Home.css";

import {
  SplashScreen,
  Navbar,
  Header,
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
import { loadSheetData } from "../../api/googleSheetAPI";

function Home() {
  //States
  const [headerData, setHeaderData] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const [resourcesData, setResourcesData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Refs
  useEffect(() => {
    async function fetchData() {
      window.gapi.load("client", async () => {
        const headerData = await loadSheetData("Cabecera", "A:B");
        const coursesData = await loadSheetData("Cursos", "A:D");
        const resourcesData = await loadSheetData("Recursos", "A:C");
        const locationData = await loadSheetData("Ubicacion", "A:B");

        setHeaderData(headerData);
        setCoursesData(coursesData);
        setResourcesData(resourcesData);
        setLocationData(locationData);
        setIsLoading(false);
      });
    }

    fetchData();
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
      <SectionMarquee />
      <SectionCourses data={coursesData} />
      <SectionEducation />
      <SectionAboutUs />
      <SectionResources data={resourcesData} />
      <SectionContactUs data={locationData} />

      <div style={{ width: "100%" }}>
        <SectionSubscribe />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
