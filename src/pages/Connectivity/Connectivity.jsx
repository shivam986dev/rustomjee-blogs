import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
// import "./Connectivity.css";
import ConnectivityImage from "../../assets/img/connectivity/versova-metro.png";
import Connectivity1Image from "../../assets/img/connectivity/unnamed.jpg";
import LogoaddImage from "../../assets/img/Logo-animation.gif";

export default function Connectivity({
    title,
    banner,
    date,
    views,
    content
}) {
    return (
        <div className="container py-4 Connectivity-page">
            <Breadcrumb />
            {/* ================= BIG FEATURE BANNER ================= */}
            {/* innerconnectivity1 */}
            <Link to="/innerconnectivity2" className="article-link">
                <div className="feature-banner mb-4">
                    <img
                        src={ConnectivityImage}
                        alt={title}
                        className="w-100 feature-img img_brightness" />
                    <div className="feature-text">
                        <span className="tag">Connectivity</span>
                        <h1 className="feature-title">Mumbai Versova Ghatkopar Metro Route: Map, Stations & More | Mumbai Line 1 – Blue Line</h1>
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
                            {/* innerconnectivity2 */}
                            <Link to="/innerconnectivity1" className="article-link">
                                <div className="medium-box card position-relative">
                                    <div className="img-wrapper position-relative">
                                        <img src={Connectivity1Image} className="card-img-top" alt="" />
                                        <span className="img-tag top-left">Connectivity</span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Best Connectivitys Known for Quality Construction in Mumbai</h5>
                                        <p>The Mumbai Metro is the Maharashtra government’s ambitious and vast development project.…</p>
                                        <p className="small text-muted">November 15, 2025</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* ================= RIGHT SIDEBAR ================= */}
                <div className="col-lg-4 pe-lg-0  d-none d-lg-block">
                    <div className="add_section sticky-top">
                        <div className="logo_Add mb-4 ">
                            <img src={LogoaddImage} alt="Connectivity" className=" add-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
