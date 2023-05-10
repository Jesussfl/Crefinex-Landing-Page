import "./Home.css";
import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";

import {
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
import { useDataContext } from "../../context/DataContext";
const Home = memo(function Home() {
   const { isLoading, data } = useQuery("data", useDataContext());

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
         <SectionResources data={data.booksData} />
         <SectionContactUs data={data.locationData} />
         <SectionSubscribe />
         <Footer />
         <Outlet />
      </div>
   );
});

export default Home;
