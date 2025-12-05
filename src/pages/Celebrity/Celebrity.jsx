import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./Celebrity.css";
import CelebrityImage from "../../assets/img/celebrity-homes/antilia.png";
import Celebrity1Image from "../../assets/img/celebrity-homes/virat-kohlis-house.webp";
import Celebrity2Image from "../../assets/img/srk-mannat/srk-mannat-940x560-2.jpeg";
import Celebrity3Image from "../../assets/img/celebrity-homes/Vijay-Verma-Home-in-Juhu-940x560-1-768x458.png";
import LogoaddImage from "../../assets/img/Logo-animation.gif";

export default function Celebrity({
    title,
    banner,
    date,
    views,
    content
}) {
    return (
        <div className="home-page">
            <div className="container py-4 celebrity-page">
                <Breadcrumb />
                {/* ================= BIG FEATURE BANNER ================= */}
                <Link to="/mukeshambani" className="article-link">
                    <div className="feature-banner mb-4">
                        <img
                            src={CelebrityImage}
                            alt={title}
                            className="w-100 feature-img img_brightness"
                        />
                        <div className="feature-text">
                            <span className="tag">Celebrity Homes</span>
                            <h1 className="feature-title">Mukesh Ambani’s Antilia: Inside Asia’s most opulent residence, at $2 billion.</h1>
                            <p className="feature-meta text-white">
                                October 15, 2025
                            </p>
                        </div>
                    </div>
                </Link>
                {/* ================= ROW: 2 MEDIUM POSTS + SIDEBAR ================= */}
                <div className="row">
                    {/* LEFT 2 MEDIUM BOXES */}
                    <div className="col-lg-8">
                        <div className="row g-4">
                            {/* Virat Kohli */}
                            <div className="col-md-6">
                                <Link to="/viratkohli" className="article-link">
                                    <div className="medium-box card position-relative">
                                        <div className="img-wrapper position-relative">
                                            <img src={Celebrity1Image} className="card-img-top" alt="" />
                                            <span className="img-tag top-left">Celebrity Homes</span>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Virat Kohli House</h5>
                                            <p>Virat Kohli House Virat Kohli’s residence in Mumbai is as lavish as…</p>
                                            <p className="small text-muted">October 15, 2025</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* Shahrukh khan */}
                            <div className="col-md-6">
                                <Link to="/shahrukh-khan" className="article-link">
                                    <div className="medium-box card position-relative">
                                        <div className="img-wrapper position-relative">
                                            <img src={Celebrity2Image} className="card-img-top" alt="" />
                                            <span className="img-tag top-left">Celebrity Homes</span>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Mannat, Shahrukh Khan House: Price, Inside Tour, Address</h5>
                                            <p>Learn Everything About Mannat House: Shahrukh Khan, the King Khan of Bollywood,…</p>
                                            <p className="small text-muted">September 11, 2025</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* Vijay Varma */}
                            <div className="col-md-6">
                                <Link to="/vijayverma" className="article-link">
                                    <div className="medium-box card position-relative">
                                        <div className="img-wrapper position-relative">
                                            <img src={Celebrity3Image} className="card-img-top" alt="" />
                                            <span className="img-tag top-left">Celebrity Homes</span>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Actor Vijay Verma’s Juhu Home</h5>
                                            <p>Vijay Varma describes himself as a homebody. Away from the overstimulated movie…</p>
                                            <p className="small text-muted">September 11, 2025</p>
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
                                <img src={LogoaddImage} alt="Mannat" className=" add-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
