import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
// import "./Vastu.css";
import VastuImage from "../../assets/img/vastu/vastu-for-home.jpg";
import LogoaddImage from "../../assets/img/Logo-animation.gif";

export default function Vastu({
    title,
    banner,
    date,
    views,
    content
}) {
    return (
        <div className="container py-4 Vastu-page">
            <Breadcrumb />
            {/* ================= BIG FEATURE BANNER ================= */}
            <Link to="/innervastu1" className="article-link">
                <div className="feature-banner mb-4">
                    <img
                        src={VastuImage}
                        alt={title}
                        className="w-100 feature-img img_brightness"
                    />
                    <div className="feature-text">
                        <span className="tag">Vastu</span>
                        <h1 className="feature-title">Vastu for Home: 15 Essential Tips for YourNew House</h1>
                        <p className="feature-meta text-white">
                            November  15, 2025
                        </p>
                    </div>
                </div>
            </Link>
            {/* ================= ROW: 2 MEDIUM POSTS + SIDEBAR ================= */}
            <div className="row">
                <div className="col-lg-8">
                </div>
                {/* ================= RIGHT SIDEBAR ================= */}
                <div className="col-lg-4 pe-lg-0  d-none d-lg-block">
                    <div className="add_section sticky-top">
                        <div className="logo_Add mb-4 ">
                            <img src={LogoaddImage} alt="Vastu" className=" add-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
