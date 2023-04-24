import React, { useState, useEffect } from "react";
//Styles
import "./Home.css";

import {
  SplashScreen,
  Navbar,
  Header,
  SectionIntroduction,
  SectionAboutUs,
  SectionMarquee,
  SectionCourses,
  SectionEducation,
  SectionResources,
  SectionTestimonials,
  SectionFAQs,
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "56px",
          marginTop: "-64px",
        }}
      >
        <SectionIntroduction />
      </div>
      <SectionMarquee />
      <SectionCourses data={coursesData} />
      <SectionEducation />
      <SectionAboutUs />
      <section>more about us</section>
      <section>Image</section>
      <section
        style={{
          height: "456px",
          backgroundImage: "url('/images/books.jpg')",
          backgroundRepeat: "no-repeat",
        }}
      ></section>
      <SectionResources data={resourcesData} />
      <SectionTestimonials />
      <SectionFAQs />
      <SectionContactUs data={locationData} />

      <div style={{ width: "100%" }}>
        <SectionSubscribe />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
