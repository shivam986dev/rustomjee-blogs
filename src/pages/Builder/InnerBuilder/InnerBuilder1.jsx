import React from "react";
// import "./inner_builder1.css";
import BuilderImage from "../../../assets/img/builder/top-10-builders-in-mumbai.jpg";
import LogoaddImage from "../../../assets/img/Logo-animation.gif";

export default function InnerBuilder1() {
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
                    Top 10 Builders in Mumbai
                </h1>


                {/* Main Content */}
                <div className="row">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-8">
                        <div className="all_innerBuilder1">
                            {/* Banner Image */}
                            <div className="srk-banner mb-4">
                                <img src={BuilderImage} alt="Builder" className="w-100 srk-banner-img" />
                            </div>
                            <div className="top-builders-mumbai">
                                <h3>Introduction</h3>
                                <p>
                                    Mumbai, India's financial centre, is a booming metropolis with a stunning
                                    skyline and dynamic neighbourhoods. Urban transformation is driven by
                                    imaginative real estate developers who have altered the city's landscape.
                                    This article features a carefully curated list of top 10 builders in
                                    Mumbai; several names stand out based on factors like experience, project
                                    portfolio, customer satisfaction, and reputation for quality construction.
                                </p>

                                <h3>List Of Top 10 Builders &amp; Developers in Mumbai</h3>

                                {/* 1) Rustomjee Constructions */}
                                <section>
                                    <h3>1) Rustomjee Constructions (Keystone Realtors)</h3>
                                    <p>
                                        Rustomjee was founded in 1995 by Mr. Boman Irani on the belief that
                                        concepts form the foundation of constructions. Bricks and mortar are
                                        simply the building blocks that make them feasible. Ideas transform
                                        offices into innovation hubs and houses into living spaces, but what use
                                        are ideas without planning and vision? These ideas are what bring
                                        Rustomjee&apos;s design ideals to life. The same values motivate the
                                        company to invent, discover, and provide new lifestyle possibilities.
                                        Rustomjee has foreshadowed the rise of intelligent design and
                                        environmentally friendly building technology from its inception. Through
                                        a range of projects, it has met and exceeded international requirements.
                                        Millions of square feet of Mumbai are currently being converted into
                                        gated communities, upmarket townships, stand-alone landmarks, and
                                        commercial areas as a result of this commitment to excellence. Rustomjee
                                        has become one of Mumbai&apos;s leading developers, thanks to its timely
                                        project delivery and high-quality construction. Rustomjee has been a
                                        popular choice for Mumbai residents looking to buy a home, and NRIs like
                                        Rustomjee as an investment.
                                    </p>

                                    <h4>Rustomjee&apos;s top-selling projects in Mumbai are:</h4>
                                    <ul>
                                        <li>Rustomjee Uptown Urbania Lavie</li>
                                        <li>Rustomjee Crescent</li>
                                        <li>Rustomjee Balmoral</li>
                                        <li>Urban Woods by Rustomjee Dombivli</li>
                                        <li>Rustomjee 180 Bay View, Matunga</li>
                                        <li>Rustomjee Prive BKC</li>
                                        <li>Rustomjee Aden BKC</li>
                                    </ul>
                                </section>

                                {/* 2) Lodha Group */}
                                <section>
                                    <h3>2) Lodha Group</h3>
                                    <p>
                                        Macrotech Developers, formerly known as Lodha Developers, or Lodha, is
                                        one of Mumbai&apos;s major real estate firms. It was started in 1980 by
                                        Mangal Prabhat Lodha. It has built residential and commercial properties
                                        in Thane, Hyderabad, Pune, Mumbai, and London.
                                    </p>

                                    <h4>In Mumbai, some of their completed projects include:</h4>
                                    <ul>
                                        <li>Lodha Bel Air</li>
                                        <li>Lodha Bellagio</li>
                                        <li>Lodha Bellevue</li>
                                    </ul>
                                </section>

                                {/* 3) Oberoi Realty */}
                                <section>
                                    <h3>3) Oberoi Realty</h3>
                                    <p>
                                        Oberoi Realty Ltd., founded in 1980, is a Mumbai-based real estate
                                        development firm. It focuses on advances in luxury housing, business,
                                        retail, social infrastructure, and hospitality. Oberoi Realty owns more
                                        than sixty residential and commercial developments in Andheri, Borivali,
                                        Goregaon, Juhu, Kandivali, and Goregaon.
                                    </p>

                                    <h4>In Mumbai, some of their completed projects include:</h4>
                                    <ul>
                                        <li>Oberoi Enigma</li>
                                        <li>Oberoi Eternia</li>
                                        <li>Oberoi Sky City</li>
                                    </ul>
                                </section>

                                {/* 4) Godrej Properties */}
                                <section>
                                    <h3>4) Godrej Properties</h3>
                                    <p>
                                        Mumbai is the corporate headquarters of Godrej Properties Limited, an
                                        Indian real estate developer. Adi Godrej oversaw the company&apos;s
                                        foundation in 1990. It is a subsidiary of Godrej Industries Limited.
                                        Currently, the company is working on projects totaling more than 89.7
                                        million square feet.
                                    </p>

                                    <h4>In Mumbai, some of their completed projects include:</h4>
                                    <ul>
                                        <li>Godrej Bliss</li>
                                        <li>Godrej Five Gardens</li>
                                        <li>Godrej Ascend</li>
                                    </ul>
                                </section>

                                {/* 5) K Raheja Corp */}
                                <section>
                                    <h3>5) K Raheja Corp</h3>
                                    <p>
                                        K Raheja Corp is an Indian real estate developer that owns malls,
                                        hotels, and commercial and residential complexes around the country. It
                                        is India&apos;s second-largest commercial developer and owns the brands
                                        Mindspace, Commerzone, Crossword Bookshops, and Shoppers Stop. K Raheja
                                        Corp also operates Mindspace Office Parks, a real estate investment
                                        trust under the Mindspace brand.
                                    </p>

                                    <h4>In Mumbai, some of their completed projects include:</h4>
                                    <ul>
                                        <li>Raheja Imperia</li>
                                        <li>K Raheja Ascencio</li>
                                        <li>K Raheja Modern Vivarea</li>
                                    </ul>
                                </section>

                                {/* 6) L&T Realty */}
                                <section>
                                    <h3>6) L&amp;T Realty</h3>
                                    <p>
                                        L&amp;T Realty Limited develops real estate. Its main headquarters is in
                                        Mumbai, Maharashtra, and it has a strong presence in Bangalore, Chennai,
                                        and Mumbai. The company works on a variety of projects, including retail,
                                        corporate offices, entertainment and recreational facilities, and
                                        residential complexes. L&amp;T Realty not only develops its own projects
                                        but also collaborates with a number of respected builders.
                                    </p>

                                    <h4>In Mumbai, some of their completed projects include:</h4>
                                    <ul>
                                        <li>L&amp;T 77 Crossroads</li>
                                        <li>L&amp;T Emerald Isle</li>
                                        <li>L&amp;T Rejuve 360</li>
                                    </ul>
                                </section>

                                {/* 7) Runwal Realty */}
                                <section>
                                    <h3>7) Runwal Realty</h3>
                                    <p>
                                        Runwal Group, founded in 1978, is a leading real estate developer in the
                                        country. The organization has an exceptional track record of over 50
                                        completed projects, a 40-year existence, and a portfolio of over 65
                                        projects. The Runwal Group is well-known in Mumbai for its innovative
                                        R-City and R-Mall complexes, as well as being a pioneer in mall building
                                        outside of residential projects.
                                    </p>

                                    <h4>In Mumbai, some of their completed projects include:</h4>
                                    <ul>
                                        <li>Runwal 25 Hour Life</li>
                                        <li>Runwal Bliss</li>
                                        <li>Runwal Codename Enchanted</li>
                                    </ul>
                                </section>

                                {/* 8) Hiranandani Developers */}
                                <section>
                                    <h3>8) Hiranandani Developers</h3>
                                    <p>
                                        The Hiranandani Group, founded in 1978 by Niranjan and Surendra
                                        Hiranandani, is a leading real estate developer in India, with projects
                                        completed in Hyderabad, Bengaluru, Chennai, and Mumbai. The company has
                                        expanded into the energy, hospitality, healthcare, and education
                                        sectors. In July 2020, the group&apos;s subsidiary Yotta Infrastructure
                                        opened the world&apos;s second-largest data centre, Yotta NM1, at its
                                        Integrated Yotta Data Centre Park in Navi Mumbai.
                                    </p>

                                    <h4>In Mumbai, a few of their finished projects include:</h4>
                                    <ul>
                                        <li>Hiranandani Empress Hill</li>
                                        <li>Hiranandani Estate Solitaire</li>
                                        <li>Hiranandani Estate Falcon</li>
                                    </ul>
                                </section>

                                {/* 9) Prestige Group */}
                                <section>
                                    <h3>9) Prestige Group</h3>
                                    <p>
                                        Over the last ten years, the Prestige Group has established itself as
                                        one of India&apos;s leading and most successful real estate developers
                                        by making a permanent impact on all asset classes. CMD Irfan Razack
                                        inspired the 1986 leap, which was organised by his brothers Rezwan and
                                        Noaman Razack. Over time, the company has evolved into a wide range of
                                        related and unconnected services, all of which are led by qualified
                                        professionals. Prestige Fashions (P) Ltd. and Morph Design Company (MDC)
                                        offer a wide range of services, including interior design work that
                                        redefines elegance and sophistication in men&apos;s formal clothing.
                                        Furthermore, they are the only developers in South India that can boast
                                        such a diversified portfolio, which includes retail, residential,
                                        commercial, leisure, and hospitality.
                                    </p>

                                    <h4>In Mumbai, a few of their finished projects include:</h4>
                                    <ul>
                                        <li>Prestige Bellanza</li>
                                        <li>Prestige Jasdan Classic</li>
                                        <li>Prestige Daffodils</li>
                                    </ul>
                                </section>

                                {/* 10) Piramal Realty */}
                                <section>
                                    <h3>10) Piramal Realty</h3>
                                    <p>
                                        Piramal Realty, India&apos;s top developer, was created in 2012 as the
                                        Piramal Group&apos;s real estate development arm. There is currently 15
                                        million square feet of residential and commercial space under
                                        construction in and around Mumbai. Two of the world&apos;s most notable
                                        private equity investors invested $235 million in 2015 to acquire a
                                        minority stake in the company. Piramal Realty aspires to be the industry
                                        leader in residential and commercial real estate design, quality, safety,
                                        and customer focus. Piramal Realty&apos;s developments are cutting-edge
                                        and modern, emphasizing a more intuitive notion of luxury that values
                                        art, culture, community life, nature, greenery, space, light, and
                                        ventilation.
                                    </p>

                                    <h4>In Mumbai, a few of their finished projects include:</h4>
                                    <ul>
                                        <li>Piramal Aranya</li>
                                        <li>Piramal Mahalaxmi</li>
                                        <li>Piramal Revanta</li>
                                    </ul>
                                </section>

                                <h3>Conclusion</h3>
                                <p>
                                    Whether your ideal home is an opulent condominium, a comfortable apartment,
                                    or a large family home, we are here to help you make your dreams come
                                    true.
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
        </div>
    );
}
