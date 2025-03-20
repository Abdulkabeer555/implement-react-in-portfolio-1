import React from 'react';
import '../../assets/css/style.css';
import Logo from '../../assets/images/main_images/Logo.png'

// FooterWidget Component - for reusable sections
const FooterWidget = ({ title, children }) => {
  return (
    <div className="footer-widget menu-widget">
      <h5 className="footer-heading">{title}</h5>
      {children}
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="main-footer bg-blue text-white pt-75">
      <div className="container">
        <div className="row justify-content-between">
          {/* Footer Left Content */}
          <div className="col-lg-6 col-sm-12 col-12">
            <div className="footer-widget about-widget">
              <div className="footer-logo">
                <a href="index.html">
                  <img src={Logo} alt="Logo" />
                </a>
              </div>

              <p className="pt-4 pb-0">
                Welcome to Jinnah Public School, where education meets excellence. Our mission is to nurture young minds and empower students to succeed academically, socially, and personally.
              </p>

              <div className="live-btn">
                <button className="btn btn-primary chat-btn"  style={{ marginTop: '10px' }}>
                  <i className="fa fa-comment" aria-hidden="true"></i> Start Live Chat
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="col-lg-2 col-md-12 col-sm-4 col-6">
            <FooterWidget title="Other Services">
              <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About Us</a></li>
                <li><a href="./courses.html">Courses</a></li>
                <li><a href="./event.html">Events</a></li>
                <li><a href="./contact.html">Contact Us</a></li>
              </ul>
            </FooterWidget>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <FooterWidget title="Quick Links">
              <ul className="unorderd_list">
                <li><a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-square-facebook" id="icon"></i> Facebook</a></li>
                <li><a href="https://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin" id="icon"></i> Linkedin</a></li>
                <li><a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram" id="icon"></i> Instagram</a></li>
                <li><a href="https://www.googleplus.com" target="_blank"><i className="fa-brands fa-google-plus-g" id="icon"></i> Google Plus</a></li>
                <li><a href="https://www.youtube.com" target="_blank"><i className="fa-brands fa-youtube" id="icon"></i> Youtube</a></li>
              </ul>
            </FooterWidget>
          </div>

          {/* Contact Details */}
          <div className="col-lg-2 col-md-3 col-sm-4">
            <FooterWidget title="Contact Details">
              <ul className="unorderd_list">
                <li><a href="#"><i className="fa-solid fa-phone" id="icon"></i> (855) 415-3467</a></li>
                <li><a href="mailto:info@octawebdesign.com"><i className="fa-solid fa-envelope" id="icon"></i> Jinnahpublicschool</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </FooterWidget>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright-area bg-dark-blue rel">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-inner">
                <p>Copyright © 2025 Jinnah Public School</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Top Button */}
        <button className="scroll-top scroll-to-target" data-target="html">
          <span className="fas fa-angle-double-up"></span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
