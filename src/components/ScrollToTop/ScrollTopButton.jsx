import React, { useEffect, useState } from "react";
import "./ScrollTop.css";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleButton = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleButton);
    return () => window.removeEventListener("scroll", toggleButton);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button className="scroll-btn" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
}
