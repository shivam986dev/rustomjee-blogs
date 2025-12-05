import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
// import "./PropertyNews.css";
import PropertyNewsImage from "../../assets/img/property-news/secproertynews-300x156.png";
import PropertyNews1Image from "../../assets/img/property-news/866ac4fce19296b07dbe9198820cbbd1w-c586980953srd-w928_q80.png";
import LogoaddImage from "../../assets/img/Logo-animation.gif";

export default function PropertyNews({
    title,
    banner,
    date,
    views,
    content
}) {
    return (
        <div className="container py-4 PropertyNews-page">
            <Breadcrumb />
            {/* ================= BIG FEATURE BANNER ================= */}
            <Link to="/innerpropertynews1" className="article-link">
            <div className="feature-banner mb-4">
                <img
                    src={PropertyNewsImage}
                    alt={title}
                    className="w-100 feature-img img_brightness"
                />
                <div className="feature-text">
                    <span className="tag">Property News</span>
                    <h1 className="feature-title">What Does a Fed Rate Cut Mean for Mortgage Rates?</h1>
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
                            <Link to="/innerpropertynews2" className="article-link">
                                <div className="medium-box card position-relative">
                                    <div className="img-wrapper position-relative">
                                        <img src={PropertyNews1Image} className="card-img-top" alt="" />
                                        <span className="img-tag top-left">Property News</span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Jennifer Lawrence quietly offloads her Beverly Hills home</h5>
                                        <p>Actress Jennifer Lawrence is renowned for strictly guarding her privacy, and it…</p>
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
                            <img src={LogoaddImage} alt="PropertyNews" className=" add-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
