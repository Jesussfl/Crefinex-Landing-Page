import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./SplashScreen.css";

function SplashScreen() {
  return (
    <div className="section-loader">
      <img src="/logo-crefinex-white.svg" alt="" />
      <ThreeDots color="#fff" height={36} />
    </div>
  );
}

export default SplashScreen;
