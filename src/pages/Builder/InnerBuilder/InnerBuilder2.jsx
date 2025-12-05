import React from "react";
// import "./inner_builder1.css";
import BuilderImage from "../../../assets/img/builder//top-10-builders-in-mumbai.jpg";
import LogoaddImage from "../../../assets/img/Logo-animation.gif";

export default function InnerBuilder2() {
    const today = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="container py-4 inner_builder1-page p-lg-0">

            {/* Title */}
            <h1 className="inner_page-title">
                Best Builders Known for Quality Construction in Mumbai
            </h1>


            {/* Main Content */}
            <div className="row">

                {/* LEFT CONTENT */}
                <div className="col-lg-8">
                    <div className="all_innerBuilder2">
                        {/* Banner Image */}
                        <div className="srk-banner mb-4">
                            <img src={BuilderImage} alt="Builder" className="w-100 srk-banner-img" />
                        </div>
                        <div className="top-builders-mumbai">
                            <h3>Introduction</h3>
                            <p>
                                Mumbai, the financial hub of India, is a bustling city with vibrant
                                neighbourhoods and a breathtaking skyline. These are the best builders
                                who have changed the city's landscape and are the driving force behind
                                urban evolution. A carefully selected list of the top 10 builders in
                                Mumbai is presented in this article; several names stand out due to
                                their reputation for high-quality construction, project portfolio,
                                experience, and client satisfaction.
                            </p>

                            <h3>Reputable builders known for quality construction in Mumbai</h3>
                            <p>
                                Many real estate developers in Mumbai are renowned for their quality
                                construction, timely project delivery, and customer-centric approaches.
                                Here are some of the top builders in Mumbai known for quality
                                construction, along with examples of their projects:
                            </p>

                            <h4>Rustomjee Constructions</h4>
                            <p>
                                Mr. Boman Irani developed Rustomjee in 1995, believing that ideas are
                                the foundation of buildings. Bricks and mortar are simply building blocks,
                                while concepts transform houses into living spaces and offices into
                                innovation hubs. Their strong planning and vision bring these ideas to
                                life. Rustomjee has become one of Mumbai’s leading developers due to its
                                timely delivery and high-quality construction.
                                <br />
                                <strong>Top-selling projects:</strong> Rustomjee Uptown Urbania Lavie,
                                Rustomjee Crescent, Urban Woods (Dombivli), Rustomjee Balmoral,
                                Rustomjee 180 Bay View (Matunga), Rustomjee Prive BKC, Rustomjee Aden BKC.
                            </p>

                            <h4>Lodha Group</h4>
                            <p>
                                Known for magnificent housing projects and iconic townships such as
                                Lodha Palava in Dombivli and The World Towers in South Mumbai. Lodha
                                focuses heavily on design excellence, craftsmanship, and premium
                                materials.
                            </p>

                            <h4>Godrej Properties</h4>
                            <p>
                                Known for innovation, sustainability, and trusted brand value. Their
                                portfolio includes both affordable and luxury housing such as Godrej
                                Nest (Kandivali) and Godrej Bliss (Kandivali). They emphasize eco-friendly
                                practices like green buildings and energy-efficient solutions.
                            </p>

                            <h4>Shapoorji Pallonji Group</h4>
                            <p>
                                A global conglomerate with over 150 years of experience, known for quality
                                and sustainable large-scale developments across residential, commercial,
                                and industrial sectors. Notable project: Shapoorji Pallonji Joyville New Tower.
                            </p>

                            <h4>Oberoi Realty</h4>
                            <p>
                                A premium developer known for luxury residential, commercial, and
                                hospitality projects across Mumbai. Examples include Oberoi Splendor
                                (Andheri) and Oberoi Esquire (Goregaon East). They focus on modern
                                architecture and superior construction quality.
                            </p>

                            <h4>Hiranandani Developers</h4>
                            <p>
                                Renowned for creating integrated townships with high-quality infrastructure,
                                unique architecture, and sustainable planning. Projects include Hiranandani
                                Highland in Powai. They specialise in luxury living and township development.
                            </p>

                            <h4>The Wadhwa Group</h4>
                            <p>
                                With a legacy spanning over five decades, The Wadhwa Group is known for
                                on-time delivery, strong design principles, and quality construction.
                                Popular project: Wadhwa TW Gardens (Kandivali East).
                            </p>

                            <h4>L&amp;T Realty</h4>
                            <p>
                                The real estate arm of Larsen &amp; Toubro, known for premium residential,
                                commercial, and retail developments. L&amp;T Emerald Isle (Powai) is one
                                of their flagship projects. They emphasize modern urban living, wellness,
                                and sustainability.
                            </p>

                            <h4>Kalpataru Group</h4>
                            <p>
                                With more than 55 years of expertise, Kalpataru has set global benchmarks
                                in real estate design and quality. They have received numerous
                                international awards and are known for ethical business practices and
                                customer satisfaction.
                            </p>

                            <h4>Runwal Group</h4>
                            <p>
                                A prominent name since 1978, known for trust, innovation, and customer
                                focus. They have delivered 65+ projects, including landmark residential
                                developments and commercial centres like R City Mall. Runwal Group uses
                                modern technology and contributes heavily to social initiatives.
                            </p>

                            <h4>Piramal Realty</h4>
                            <p>
                                Known for premium residential and commercial projects focused on
                                architecture, sustainability, and community living. They collaborate
                                with world-class architects. Notable projects include Piramal Mahalaxmi
                                and Piramal Aranya.
                            </p>

                            <h3>Conclusion</h3>
                            <p>
                                When choosing a builder, consider their track record of successful projects,
                                customer reviews, legal compliance, and financial stability. Seeking advice
                                from credible sources can also help in making a confident and informed
                                property investment decision.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="col-lg-4 pe-lg-0 d-none d-lg-block">

                    <div className="add_section sticky-top">
                        <div className="logo_Add mb-4 ">
                            <img src={LogoaddImage} alt="adds Rustomjee" className=" add-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
