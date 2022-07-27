import React from "react";
import "../CSS/Footer.css";
// import footer from "./Screenshot 2022-05-31 182800.png"

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          <img
            src="https://img.icons8.com/color/48/undefined/facebook.png"
            alt=""
          />
          <img
            src="https://img.icons8.com/color/48/undefined/google-logo.png"
            alt=""
          />
          <img
            src="https://img.icons8.com/color/48/undefined/telegram-app--v1.png"
            alt=""
          />
          <img
            src="https://img.icons8.com/fluency/48/undefined/instagram-new.png"
            alt=""
          />
          <img src="https://img.icons8.com/fluency/48/undefined/email-open.png" alt=""/>
        </div>
        <div className="footer_bottom_area">
          {" "}
          <p>&#169;Copyright till 2022</p>
          <p>made with ❤️</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
