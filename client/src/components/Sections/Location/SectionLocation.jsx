import React, { useState, useEffect } from "react";
import "./SectionLocation.css";
import { loadSheetData } from "../../../api/googleSheetAPI";

function SectionLocation() {
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.gapi.load("client", () => {
      loadSheetData("Ubicacion", "A2").then((loadedData) => {
        console.log(loadedData);
        setLocation(loadedData);
        setIsLoading(false);
      });
    });
  }, []);
  return (
    <div className="section-location">
      <div className="copys-location">
        <p className="body-large">Nuestra Ubicación</p>
        <h6>{location}</h6>
      </div>
      <div className="map">
        <iframe
          style={{ width: "100%", height: "100%", borderRadius: "20px" }}
          className="gmap_iframe"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Crefinex maracay&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
}

export default SectionLocation;
