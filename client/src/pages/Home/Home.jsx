import React, { useState, useEffect } from "react";
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

// import { google } from "googleapis";
// import { auth } from "google-auth-library";
function Home() {
  // const [title, setTitle] = useState("");

  // useEffect(() => {
  //   const client = new google.auth.JWT(CLIENT_EMAIL, null, PRIVATE_KEY, [
  //     "https://www.googleapis.com/auth/spreadsheets.readonly",
  //   ]);
  //   client.authorize((err) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       const sheets = google.sheets({ version: "v4", auth: client });
  //       sheets.spreadsheets.values.get(
  //         {
  //           spreadsheetId: SPREADSHEET_ID,
  //           range: "A1",
  //         },
  //         (err, res) => {
  //           if (err) {
  //             console.log(err);
  //           } else {
  //             setTitle(res.data.values[0][0]);
  //           }
  //         }
  //       );
  //     }
  //   });
  // }, []);
  return (
    <div className="home">
      <Navbar />
      <Header />
      <SectionAnimation />
      <SectionCourses />
      <SectionEducation />
      <SectionAboutUs />
      <SectionAnimation />
      <SectionResources />
      <SectionLocation />
      {/* <SectionSubscribe /> */}
      <Footer />
    </div>
  );
}

export default Home;
