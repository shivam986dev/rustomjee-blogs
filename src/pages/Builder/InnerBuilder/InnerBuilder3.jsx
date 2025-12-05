import React from "react";
// import "./inner_builder1.css";
import BuilderImage from "../../../assets/img/builder/Top-Builders-Delivering-Projects-On-Time.jpg";
import LogoaddImage from "../../../assets/img/Logo-animation.gif";

export default function InnerBuilder3() {
    const today = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="home-page">
            <div className="container py-4 inner_builder1-page p-lg-0">

                {/* Title */}
                <h1 className="inner_page-title">
                    Top Builders Delivering Projects On Time
                </h1>


                {/* Main Content */}
                <div className="row">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-8">
                        <div className="all_innerBuilder3">
                            {/* Banner Image */}
                            <div className="srk-banner mb-4">
                                <img src={BuilderImage} alt="Builder" className="w-100 srk-banner-img" />
                            </div>
                            <div className="top-builders-mumbai">
                                <p>
                                    In the dynamic world of real estate, where dreams are built brick by brick,
                                    one factor remains equally crucial to both homebuyers and investors:
                                    <strong>timely project delivery</strong>. Delays can cause financial stress,
                                    emotional frustration, and loss of trust. On the other hand, builders who
                                    consistently deliver on their promises not only build a strong reputation
                                    but also contribute significantly to the positive growth of the industry.
                                </p>

                                <h3>Below is the list of top builders delivering projects on time</h3>

                                <h4>Rustomjee Constructions</h4>
                                <p>
                                    Founded in 1995 by Mr. Boman Irani, Rustomjee Constructions is known for
                                    delivering projects on time in Mumbai. They are recognized for quality
                                    construction, innovative design, and a strong commitment to customer
                                    satisfaction—making them a preferred choice among homebuyers and investors.
                                </p>

                                <h4>Godrej Properties</h4>
                                <p>
                                    A subsidiary of the Godrej Group, this company is known for high-quality
                                    construction, stability-focused approach, and customer-centric development.
                                    Their portfolio includes luxury homes as well as commercial spaces across
                                    Mumbai and other major cities.
                                </p>

                                <h4>Hiranandani Group</h4>
                                <p>
                                    Established in 1978, the Hiranandani Group is synonymous with premium
                                    township development in India. They specialize in luxury apartments,
                                    penthouses, integrated communities, and high-end commercial spaces.
                                </p>

                                <h4>L&amp;T Realty</h4>
                                <p>
                                    Founded in 2011, L&amp;T Realty is the real estate division of Larsen &amp;
                                    Toubro. With a strong presence in Mumbai, Navi Mumbai, and Bengaluru, the
                                    company is known for modern developments built with engineering excellence.
                                </p>

                                <h4>Prestige Estates Projects Ltd.</h4>
                                <p>
                                    A reputed builder especially in Bengaluru, Prestige Estates focuses on
                                    sustainable practices, green buildings, and innovative architecture across
                                    their residential and commercial projects.
                                </p>

                                <h4>Runwal Group</h4>
                                <p>
                                    A leading real estate developer since 1978, Runwal Group has delivered over
                                    50 projects across residential, commercial, and retail sectors. They are
                                    known for timely delivery and customer-first business practices.
                                </p>

                                <h4>Sobha Group</h4>
                                <p>
                                    Famous for high-end luxury projects, Sobha Group has delivered more than
                                    170 residential and commercial developments. They emphasize fine
                                    craftsmanship and quality execution.
                                </p>

                                <h4>Tata Housing Development Company</h4>
                                <p>
                                    A subsidiary of Tata Sons, Tata Housing is known for ethical business
                                    practices, community-oriented planning, and high-quality construction across
                                    India’s major cities.
                                </p>

                                <h4>Birla Estates</h4>
                                <p>
                                    The real estate division of the Aditya Birla Group, Birla Estates is known
                                    for developing integrated townships and mixed-use commercial spaces with a
                                    strong focus on modern design and sustainability.
                                </p>

                                <h4>Oberoi Realty</h4>
                                <p>
                                    Oberoi Realty specializes in premium residential and commercial developments
                                    within Mumbai. They are known for architectural excellence, luxury living
                                    concepts, and timely project execution.
                                </p>

                                <h4>Shapoorji Pallonji</h4>
                                <p>
                                    Established in 1865, Shapoorji Pallonji is one of India’s oldest
                                    construction conglomerates. Their residential, commercial, and industrial
                                    projects are known for durability and high construction standards.
                                </p>

                                <h4>K Raheja Corp</h4>
                                <p>
                                    A prominent developer since 1956, K Raheja Corp has contributed extensively
                                    to residential complexes, commercial IT parks, malls, and retail spaces.
                                    They emphasize sustainable development and on-time project delivery.
                                </p>

                                <h3>Tips for choosing a builder</h3>
                                <p>
                                    When selecting a builder, it is essential to research their track record
                                    thoroughly. Consider how long they’ve been in business, their ongoing and
                                    completed projects, and customer reviews. Visiting their past developments
                                    can also help you judge the construction quality and reliability. Reliable
                                    references and trusted sources play a key role in making an informed
                                    decision.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="col-lg-4 pe-lg-0  d-none d-lg-block">

                        <div className="add_section sticky-top">
                            <div className="logo_Add mb-4 ">
                                <img src={LogoaddImage} alt="adds Rustomjee" className=" add-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
