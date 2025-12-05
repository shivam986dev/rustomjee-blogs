import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
// import "./Interior.css";
import InteriorImage from "../../assets/img/interior/b248650c-ec4c-4fca-a7d7-67bafe10a1a4.png";
import Interior1Image from "../../assets/img/interior/How-to-Make-Your-Apartment-Smell-Good.png";
import Interior2Image from "../../assets/img/interior/pop-up-designs.png";
import LogoaddImage from "../../assets/img/Logo-animation.gif";

export default function Interior({
    title,
    banner,
    date,
    views,
    content
}) {
    return (
        <div className="container py-4 Interior-page">
            <Breadcrumb />
            {/* ================= BIG FEATURE BANNER ================= */}
            <Link to="/innerinterior1" className="article-link">
                <div className="feature-banner mb-4">
                    <img
                        src={InteriorImage}
                        alt={title}
                        className="w-100 feature-img img_brightness"
                    />
                    <div className="feature-text">
                        <span className="tag">Interior</span>
                        <h1 className="feature-title">Best 3 BHK House Plans: 20+ Designs for Modern Homes</h1>
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
                        {/* Interiors Known for Quality */}
                        <div className="col-md-6">
                            <Link to="/innerinterior2" className="article-link">
                                <div className="medium-box card position-relative">
                                    <div className="img-wrapper position-relative">
                                        <img src={Interior1Image} className="card-img-top" alt="" />
                                        <span className="img-tag top-left">Interior</span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">How to Make Your Apartment Smell Good</h5>
                                        <p>Your home should not only look beautiful, but also smell great! A…</p>
                                        <p className="small text-muted">November 15, 2025</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* Interiors Delivering Projects */}
                        <div className="col-md-6">
                            <Link to="/innerinterior3" className="article-link">
                                <div className="medium-box card position-relative">
                                    <div className="img-wrapper position-relative">
                                        <img src={Interior2Image} className="card-img-top" alt="" />
                                        <span className="img-tag top-left">Interior</span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Over 60 latest POP ceiling designs for hall 2025 – 2026</h5>
                                        <p>False POP ceilings can be used to cover plain ceilings or disguise…</p>
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
                            <img src={LogoaddImage} alt="Interior" className=" add-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
