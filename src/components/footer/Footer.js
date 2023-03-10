import "./Footer.css";

import React from "react";

import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";


const Footer = () => {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/mateo-cava-57972922a/");
  };
  const handleClick2 = () =>{
    window.open("https://github.com/Matecava")
  }
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Buenos Aires, Morón</p>
              <p>Argentina</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +54 9 11 2707 2260
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Mateo.agustin.cava@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About me</h4>
          <p>
            This is me Mateo Cava. Full Stack web developer. I enjoy programming
            and learn new thing to improve
          </p>
          <div className="social">
            <FaLinkedin onClick={handleClick}
              size={20}
              style={{ color: "#fff", marginRight: "2rem", cursor:"pointer" } }
            />
            <FaGithub onClick={handleClick2}
              size={20}
              style={{ color: "#fff", marginRight: "2rem", cursor:"pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
