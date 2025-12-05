import React from "react";
import { Link } from "react-router-dom"
import "./Footer.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="footer-dark pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* LEFT COLUMN */}
          <div className="col-lg-3 mb-4">
            <h4 className="footer-title">Mumbai Homes Blogs</h4>
            <p className="footer-text">
              We bring you the best Premium WordPress-style themes that are perfect for news,
              magazines, and blogs. Stay informed with our financial insights.
            </p>


          </div>

          {/* MIDDLE COLUMN */}
          <div className="col-lg-6 mb-4">
            <h5 className="footer-title">Categories</h5>

            <div className="row">
              <div className="col-4">
                <ul className="footer-links">
                  <li><Link to="/builder">Builder</Link></li>
                  <li><Link to="/infrastructure">Infrastructure</Link></li>
                  <li><Link to="/locality-insight">Locality Insights</Link></li>
                </ul>
              </div>

              <div className="col-4">
                <ul className="footer-links">
                  <li><Link to="/vastu">Vastu</Link></li>
                  <li><Link to="/celebrity-homes">Celebrity Homes</Link></li>
                  <li><Link to="/insurance">Insurance</Link></li>
                </ul>
              </div>
              <div className="col-4">
                <ul className="footer-links">
                   <li><Link to="/property-buying-guides">Property Buying Guides</Link></li>
                  <li><Link to="/property-news">Property News</Link></li>
                  <li><Link to="/interiors">Interiors</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-3 mb-4">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-mail">
              <i className="bi bi-envelope"></i>
              &nbsp; mumbaihomesnow@gmail.com
            </p>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <hr className="footer-line" />
        <div className="row"> 
          <div className="col-lg-6 text-left footer-copy">
            © {new Date().getFullYear()} Mumbai Homes Blogs. All rights reserved.
          </div>
          {/* Social Icons */}
          <div className="col-lg-6 footer-social ">
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-youtube"></i></a>
          </div>

        </div>

      </div>
    </footer>
  );
}
