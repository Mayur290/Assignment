import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://media.istockphoto.com/photos/girl-at-doctors-appointment-using-an-asthma-inhaler-picture-id1158514531?k=6&m=1158514531&s=612x612&w=0&h=v-c1n1gT0bRlSvjuGQ5Sm3zq11zRaoyQkbheyXeUQj0=")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 class="banner_description">
          Diagnosis & Monitoring of airway diseases in the Era of Social
          Distancing
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">WATCH NOW</button>
        </div>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
