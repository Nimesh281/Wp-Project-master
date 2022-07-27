import React from "react";
import "../CSS/Footer2.css";
import footer from '../images/footer.png'

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          <img
            src={footer}
            alt=""
          />
          
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
