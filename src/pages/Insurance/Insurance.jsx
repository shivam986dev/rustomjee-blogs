import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
// import "./Insurance.css";
import InsuranceImage from "../../assets/img/insurance/ChatGPT-Image-Sep-18-2025-01_40_52-PM.png";
import LogoaddImage from "../../assets/img/Logo-animation.gif";

export default function Insurance({
    title,
    banner,
    date,
    views,
    content
}) {
    return (
        <div className="container py-4 Insurance-page">
            <Breadcrumb />
            {/* ================= BIG FEATURE BANNER ================= */}
            <Link to="/innerinsurance" className="article-link">
                <div className="feature-banner mb-4">
                    <img
                        src={InsuranceImage}
                        alt={title}
                        className="w-100 feature-img img_brightness"
                    />
                    <div className="feature-text">
                        <span className="tag">Insurance</span>
                        <h1 className="feature-title">The Average Home Insurance Cost in the U.S. for 2025</h1>
                        <p className="feature-meta text-white">
                            November  15, 2025
                        </p>
                    </div>
                </div>
            </Link>
            {/* ================= ROW: 2 MEDIUM POSTS + SIDEBAR ================= */}
            <div className="row">
                <div className="col-lg-8">
                    {/* <div className="row g-4">
                        <div className="col-md-6">
                            <Link to="" className="article-link">
                                <div className="medium-box card position-relative">
                                    <div className="img-wrapper position-relative">
                                        <img src={Insurance1Image} className="card-img-top" alt="" />
                                        <span className="img-tag top-left">Insurance</span>
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title">Best Insurances Known for Quality Construction in Mumbai</h5>
                                        <p>Introduction Mumbai, the financial hub of India, is a bustling city with……</p>
                                        <p className="small text-muted">November 15, 2025</p>
                                    </div>
                                </div>
                            </Link>
                        </div>                      
                    </div> */}
                </div>
                {/* ================= RIGHT SIDEBAR ================= */}
                <div className="col-lg-4 pe-lg-0  d-none d-lg-block">
                    <div className="add_section sticky-top">
                        <div className="logo_Add mb-4 ">
                            <img src={LogoaddImage} alt="Insurance" className=" add-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
