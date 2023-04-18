import React from "react";
import Header from "../../components/Sections/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import SectionAnimation from "../../components/Sections/Animation/SectionAnimation";
import SectionAboutUs from "../../components/Sections/AboutUs/SectionAboutUs";
import SectionCourses from "../../components/Sections/Courses/SectionCourses";
import SectionLocation from "../../components/Sections/Location/SectionLocation";
import SectionResources from "../../components/Sections/Resources/SectionResources";
import SectionEducation from "../../components/Sections/Education/SectionEducation";
import SectionSubscribe from "../../components/Sections/Subscribe/SectionSubscribe";
import Footer from "../../components/Sections/Footer/Footer";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <SectionAnimation />
      <SectionCourses />
      <SectionEducation />
      {/* <SectionAboutUs /> */}
      {/* <SectionAnimation /> */}
      {/* <SectionResources /> */}
      {/* <SectionLocation /> */}
      {/* <SectionSubscribe /> */}
      <Footer />
    </div>
  );
}

export default Home;
