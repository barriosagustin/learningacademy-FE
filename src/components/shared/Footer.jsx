import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-titles">
            <div className="footer-img">
              <img
                width={200}
                src="src/assets/img/academy-high-resolution-logo-white-transparent.png"
                alt=""
              />
              <p style={{ maxWidth: "300px" }}>
                There are course and event custom post types so you can easily
                create and manage course, events.
              </p>
              <p className="footer-paragraph">
                <LocalPhoneIcon /> +(402) 762 441 83
              </p>
              <p className="footer-paragraph">
                <EmailIcon /> info@echooling.com
              </p>
            </div>
            <div className="footer-aboutus">
              <h3>about us</h3>
              <p className="footer-paragraph">about</p>
              <p className="footer-paragraph">courses</p>
              <p className="footer-paragraph">event</p>
              <p className="footer-paragraph">upload course</p>
            </div>
            <div className="footer-usefullinks">
              <h3>Useful links</h3>
              <p className="footer-paragraph">Browse Library</p>
              <p className="footer-paragraph">Library</p>
              <p className="footer-paragraph">Partners</p>
              <p className="footer-paragraph">News & Blog</p>
            </div>
          </div>
          <hr className="footer-separator" />
          <div className="social-media">
            <div className="logo-section">
              <p>© 2022 Echooling. All Rights Reserved</p>
            </div>
            <div className="social-media-icon">
              <p className="footer-icons">
                Follow us
                <FacebookIcon className="facebook-icon" />
                <InstagramIcon className="facebook-icon" />
                <LinkedInIcon className="facebook-icon" />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
