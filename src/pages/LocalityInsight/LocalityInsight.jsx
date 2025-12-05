import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
// import "./Locality.css";
import LocalityImage from "../../assets/img/locality-insight/borivali-east-or-west-940x559-1-768x457.jpg";
import Locality1Image from "../../assets/img/locality-insight/cost-of-living-in-bangalore-940x560-1-768x458.jpg";
import LogoaddImage from "../../assets/img/Logo-animation.gif";

export default function Locality({
    title,
    banner,
    date,
    views,
    content
}) {
    return (
        <div className="container py-4 Locality-page">
            <Breadcrumb />
            {/* ================= BIG FEATURE BANNER ================= */}
            <Link to="/innerlocalityinsight1" className="article-link">
                <div className="feature-banner mb-4">
                    <img
                        src={LocalityImage}
                        alt={title}
                        className="w-100 feature-img img_brightness"
                    />
                    <div className="feature-text">
                        <span className="tag">Locality</span>
                        <h1 className="feature-title">Borivali East or West, Which Is the Best?</h1>
                        <p className="feature-meta text-white">
                            November  15, 2025
                        </p>
                    </div>
                </div>
            </Link>
            {/* ================= ROW: 2 MEDIUM POSTS + SIDEBAR ================= */}
            <div className="row">
                {/* LEFT 2 MEDIUM BOXES */}
                <div className="col-lg-8">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <Link to="/innerlocalityinsight2" className="article-link">
                                <div className="medium-box card position-relative">
                                    <div className="img-wrapper position-relative">
                                        <img src={Locality1Image} className="card-img-top" alt="" />
                                        <span className="img-tag top-left">Locality</span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Cost of Living in Bangalore (2025-2026): Detailed list of monthly expenses</h5>
                                        <p>October 15, 2025 Bangalore, dubbed the ‘Silicon Valley of India’, is home…</p>
                                        <p className="small text-muted">November 15, 2025</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* ================= RIGHT SIDEBAR ================= */}
                <div className="col-lg-4 pe-lg-0 d-none d-lg-block">
                    <div className="add_section sticky-top">
                        <div className="logo_Add mb-4 ">
                            <img src={LogoaddImage} alt="Locality" className=" add-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
