import React, { useState, useEffect } from "react";
import "./Nav.css";
import Notification from "../../static/notification.png";
import Face from "../../static/face.png";
import Dropdown from "../../static/dropdown.png";
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_white"}`}>
      <h2 className="nav_logo">
        med<span>X</span>
      </h2>
      <div className="menu">
        <img
          className="nav_notification"
          src={Notification}
          alt="notification_icon"
        />

        <img className="nav_avatar" src={Face} alt="face_icon" />
        <img className="nav_dropdown" src={Dropdown} alt="dropdown_icon" />
      </div>
    </div>
  );
}

export default Nav;
