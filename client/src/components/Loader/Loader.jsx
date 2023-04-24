import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <div
      className="loader-bg"
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src="/logo-crefinex.svg" alt="" />
      <ThreeDots color="#7f3dea" height={24} />
    </div>
  );
}

export default Loader;
