import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

 
  return (
  <nav className="breadcrumb-box mb-3">
    <Link to="/">Home</Link>

    {pathnames.map((value, index) => {
      const route = "/" + pathnames.slice(0, index + 1).join("/");
      const isLast = index === pathnames.length - 1;

      return (
        <span key={index} className={isLast ? "active-item" : ""}>
          {" / "}
          <Link to={route}>
            {value.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </Link>
        </span>
      );
    })}
  </nav>
);


}
