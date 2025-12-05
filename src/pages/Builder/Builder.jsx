import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BuilderImage from "../../assets/img/builder/top-10-builders-in-mumbai.jpg";
import Builder1Image from "../../assets/img/builder/best-builders-for-construction-quality.jpeg";
import Builder2Image from "../../assets/img/builder/Top-Builders-Delivering-Projects-On-Time.jpg";
import LogoaddImage from "../../assets/img/Logo-animation.gif";

export default function Builder({
    title,
    banner,
    date,
    views,
    content
}) {
    return (
        <div className="home-page">
            <div className="container py-4 Builder-page">
                <Breadcrumb />
                {/* ================= BIG FEATURE BANNER ================= */}
                {/*--------------- inner Builder1 ---------------------*/}
                <Link to="/inner-builder1" className="article-link">
                    <div className="feature-banner mb-4">
                        <img
                            src={BuilderImage}
                            alt={title}
                            className="w-100 feature-img img_brightness" />
                        <div className="feature-text">
                            <span className="tag">Builder</span>
                            <h1 className="feature-title">Top 10 Builders in Mumbai.</h1>
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
                            {/* Builders Known for Quality */}
                            <div className="col-md-6">
                                {/*--------------- inner Builder 2 ---------------------*/}
                                <Link to="/inner-builder2" className="article-link">
                                    <div className="medium-box card position-relative">
                                        <div className="img-wrapper position-relative">
                                            <img src={Builder1Image} className="card-img-top" alt="" />
                                            <span className="img-tag top-left">Builder</span>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Best Builders Known for Quality Construction in Mumbai</h5>
                                            <p>Introduction Mumbai, the financial hub of India, is a bustling city with……</p>
                                            <p className="small text-muted">November 15, 2025</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* Builders Delivering Projects */}
                            <div className="col-md-6">
                                {/*--------------- inner Builder 3 ---------------------*/}
                                <Link to="/inner-builder3" className="article-link">
                                    <div className="medium-box card position-relative">
                                        <div className="img-wrapper position-relative">
                                            <img src={Builder2Image} className="card-img-top" alt="" />
                                            <span className="img-tag top-left">Builder</span>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Top Builders Delivering Projects On Time</h5>
                                            <p>In the dynamic world of real estate, where dreams are produced by…</p>
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
                                <img src={LogoaddImage} alt="Builder" className=" add-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
