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
    const headerData = {
      Titulo: "Mejora el futuro financiero de tus hijos con nosotros",
      Subtitulo:
        "¡Aprender finanzas nunca fue tan divertido! Únete a Crefinex y enseña a tus hijos habilidades financieras que les durarán toda la vida.",
    };
    const coursesData = [
      {
        Titulo: "Finanzas para adolescentes",
        Descripcion:
          "Este curso está diseñado para jóvenes de entre 14 y 18 años que desean aprender cómo manejar su dinero y cómo tomar decisiones financieras inteligentes. Con sesiones interactivas y divertidas, nuestros instructores enseñarán a los participantes sobre presupuestos, ahorro, inversión y más",
      },
      {
        Titulo: "Creciendo financieramente desde pequeños",
        Descripcion:
          "Para niños y niñas de entre 8 y 12 años, este curso les enseñará los conceptos básicos de finanzas de una manera divertida y accesible. Desde el valor del dinero hasta cómo establecer metas financieras y cómo ahorrar, nuestros instructores altamente capacitados ayudarán a los jóvenes a tener una base sólida para una vida financiera exitosa.",
      },
      {
        Titulo: "Educacion financiera para padres",
        Descripcion:
          "¿Quieres aprender cómo enseñar a tus hijos sobre finanzas de una manera efectiva? Este curso está diseñado para padres y tutores que desean mejorar sus propias habilidades financieras para poder transmitir estos conocimientos a sus hijos. Aprenderás sobre finanzas personales, presupuestos familiares, inversión y más.",
      },
    ];
    const resourcesData = [
      {
        Id: "1",
        Titulo: "Inteligencia Emocional - Educación Financiera",
        Descripcion:
          "Este libro forma parte de nuestra serie sobre educación financiera para niños, niñas y adolescentes. Cuenta con muchas ilustraciones y actividades prácticas para todo",
      },
      {
        Id: "2",
        Titulo: "Finanzas Personales - Educación Financiera",
        Descripcion:
          "Este libro forma parte de nuestra serie sobre educación financiera para niños, niñas y adolescentes. Cuenta con muchas ilustraciones y actividades prácticas para todo",
      },
      {
        Id: "3",
        Titulo: "El Dinero - Educación Financiera",
        Descripcion:
          "Este libro forma parte de nuestra serie sobre educación financiera para niños, niñas y adolescentes. Cuenta con muchas ilustraciones y actividades prácticas para todo",
      },
      {
        Id: "4",
        Titulo: "El Ahorro - Educación Financiera",
        Descripcion:
          "Este libro forma parte de nuestra serie sobre educación financiera para niños, niñas y adolescentes. Cuenta con muchas ilustraciones y actividades prácticas para todo",
      },
      {
        Id: "5",
        Titulo: "El Banco - Educación Financiera",
        Descripcion:
          "Este libro forma parte de nuestra serie sobre educación financiera para niños, niñas y adolescentes. Cuenta con muchas ilustraciones y actividades prácticas para todo",
      },
    ];
    const locationData = [
      {
        Ubicacion:
          "Nuestra dirección es Avenida Bolívar - Oeste, en el Centro Comercial Pacífico, donde nos encontrarás en el sexto piso, a tan solo 50 metros del C.C. Parque Aragua. ¡Estamos justo al lado del colegio de contadores públicos! ¡Ven a visitarnos!",
      },
    ];
    setHeaderData(headerData);
    setCoursesData(coursesData);
    setResourcesData(resourcesData);
    setLocationData(locationData);
    setIsLoading(false);
    // async function fetchData() {
    //   window.gapi.load("client", async () => {
    //     // const headerData = await loadSheetData("Cabecera", "A:B");
    //     // const coursesData = await loadSheetData("Cursos", "A:D");
    //     // const resourcesData = await loadSheetData("Recursos", "A:C");
    //     // const locationData = await loadSheetData("Ubicacion", "A:B");
    //   });
    // }

    // fetchData();
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
