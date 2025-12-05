import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/img/mumbai-homes-logo.png";
import "./Header.css";


export default function Header() {

  useEffect(() => {
    const navLinks = document.querySelectorAll("#mainMenu .nav-link");
    const menu = document.getElementById("mainMenu");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (menu.classList.contains("show")) {
          menu.classList.remove("show"); 
        }
      });
    });
  }, []);

  return (
    <header className="mh-header border-bottom bg-white py-lg-2 p-0">
      <div className="container-fluid">

        {/* Mobile Logo + Toggle */}
        <nav className="navbar navbar-light d-flex d-lg-none px-0 mobile-nav">
          <Link className="navbar-brand m-0" to="/">
            <img src={Logo} alt="Logo" className="mobile-logo" />
          </Link>

          <button
            className="navbar-toggler mobile-toggle collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
        </nav>

        {/* Desktop Logo */}
        <div className="mh-logo text-center d-none d-lg-block mb-3">
          <Link to="/">
            <img src={Logo} alt="Mumbai Homes Logo" className="desktop-logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="navbar navbar-expand-lg navbar-light justify-content-center p-0">

          <button
            className="navbar-toggler d-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center menu-wrapper pt-1"
            id="mainMenu"
          >
            <ul className="navbar-nav gap-2 text-uppercase small mt-3 mt-lg-0">

              <li className="nav-item">
                <NavLink to="/builder"
                  className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}>
                  Builder
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/celebrity-homes"
                  className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}>
                  Celebrity Homes
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/connectivity"
                  className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}>
                  Connectivity
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/infrastructure"
                  className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}>
                  Infrastructure
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/insurance"
                  className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}>
                  Insurance
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/interiors"
                  className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}>
                  Interiors
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/locality-insight"
                  className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}>
                  Locality Insights
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/property-buying-guides"
                  className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}>
                  Property Buying Guides
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/property-news"
                  className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}>
                  Property News
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/vastu"
                  className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}>
                  Vastu
                </NavLink>
              </li>

            </ul>
          </div>
        </nav>

      </div>
    </header>
  );
}
