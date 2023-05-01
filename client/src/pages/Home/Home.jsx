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
    SectionContactUs,
    SectionSubscribe,
    Footer,
    FloatButton,
} from "../../components";

//Methods
import { loadSheetData } from "../../api/googleSheetAPI";
// import {
//   headerData,
//   coursesData,
//   resourcesData,
//   locationData,
// } from "../../constants/data";

function Home() {
    //States;
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
            <SectionIntroduction />
            <SectionMarquee />
            <SectionCourses data={coursesData} />
            <SectionEducation />
            <SectionAboutUs />
            <section
                style={{
                    height: "456px",
                    width: "100%",
                    backgroundImage: "url('/images/webp/books.webp')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}></section>
            <SectionResources data={resourcesData} />
            <SectionContactUs data={locationData} />
            <SectionSubscribe />
            <Footer />
        </div>
    );
}

export default Home;
