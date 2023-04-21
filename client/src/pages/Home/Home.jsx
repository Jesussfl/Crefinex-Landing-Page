import React, { useState, useEffect, useRef } from "react";

//Components
import Navbar from "../../components/Navbar/Navbar";
import { ThreeDots } from "react-loader-spinner";
import { Whatsapp } from "iconsax-react";
//Sections
import Header from "../../components/Sections/Header/Header";
import SectionAnimation from "../../components/Sections/Animation/SectionAnimation";
import SectionAboutUs from "../../components/Sections/AboutUs/SectionAboutUs";
import SectionCourses from "../../components/Sections/Courses/SectionCourses";
import SectionLocation from "../../components/Sections/Location/SectionLocation";
import SectionResources from "../../components/Sections/Resources/SectionResources";
import SectionEducation from "../../components/Sections/Education/SectionEducation";
import SectionSubscribe from "../../components/Sections/Subscribe/SectionSubscribe";
import Footer from "../../components/Sections/Footer/Footer";

//Methods
import { loadSheetData } from "../../api/googleSheetAPI";

//Styles
import "./Home.css";

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
    return (
      <div className="section-loader">
        <img src="/logo-crefinex-white.svg" alt="" />
        <ThreeDots color="#fff" height={36} />
      </div>
    );
  }
  return (
    <div className="home">
      <a
        href="https://api.whatsapp.com/send?phone=0414-4615536&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20Crefinex"
        target="_blank"
        className="whatsapp-btn"
      >
        <Whatsapp variant="Bold" />
      </a>
      <Navbar />
      <Header data={headerData} />
      <section className="marquee-section">
        <SectionAnimation baseVelocity={-1}>
          Creciendo Financiera-mente Exitosos Creciendo Financiera-mente
          Exitosos
        </SectionAnimation>
        <SectionAnimation baseVelocity={1}>
          Educación Financiera Educación Financiera Educación Financiera
        </SectionAnimation>
      </section>
      <SectionCourses data={coursesData} />
      {/* <SectionEducation /> */}
      <SectionAboutUs />
      <SectionResources data={resourcesData} />
      <SectionLocation data={locationData} />
      <div style={{ width: "100%" }}>
        <SectionSubscribe />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
