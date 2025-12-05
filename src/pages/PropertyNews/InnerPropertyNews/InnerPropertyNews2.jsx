import React from "react";
// import "./inner_builder1.css";
import PropertyNews1Image from "../../../assets/img/property-news/866ac4fce19296b07dbe9198820cbbd1w-c586980953srd-w928_q80.png";
import LogoaddImage from "../../../assets/img/Logo-animation.gif";

export default function InnerBuilder1() {
    const today = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="container py-4 inner_builder1-page p-lg-0">
            {/* Title */}
            <h1 className="inner_page-title">
                Jennifer Lawrence quietly offloads her Beverly Hills home
            </h1>
            {/* Main Content */}
            <div className="row">
                {/* LEFT CONTENT */}
                <div className="col-lg-8">
                    <div className="all_innerbanner">
                        {/* Banner Image */}
                        <div className="all_banner mb-4">
                            <img src={PropertyNews1Image} alt="img" className="w-100 all_banner_img" />
                        </div>
                        <div className="top-builders-mumbai">
                            <p>Actress Jennifer Lawrence is renowned for strictly guarding her privacy, and it appears that this mindset extends to her real estate transactions.</p>
                            <p>The 35-year-old “Hunger Games” starlet quietly sold a Beverly Hills home for $11 million in an off-market transaction, according to property records, 11 years after purchasing it for $8.2 million.</p>
                            <p>Jennifer Lawrence, who welcomed her second child with husband Cooke Maroney at the end of March, appears to have purchased the five-bedroom, six-bathroom home for her parents, Karen and Gary, according to records, which show that the property was registered to a trust in her father’s name.</p>
                            <p>According to records, the actress, who primarily lives in New York, where her husband was born and reared, purchased the home in October 2014.</p>
                            <p>The mansion appears to have had quite the charm, as it sold for far more than its original asking price of $7.9 million.</p>
                            <div class="post-image-container image-fit-contain">
                                <img class="show-on-desktop img-fluid" src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/propertynews2.png" />
                            </div>
                            <p>At the time, the listing touted the property as a “gorgeous French style home done to the nines following a total designer remodel.”</p>
                            <p>The description stated that the home has a “fabulous living room, dining room, and kitchen with brand new built-in appliances and sparkling white Carrera marble counters.”</p>
                            <p>A “grand, winding staircase” leads up to the home’s second story, which has three bedrooms, including the “decadent” main suite with its own sitting area, balcony, walk-in closet, and sumptuous en suite bathroom.</p>
                            <p>While the residence was described as having four bedrooms, the listing disclosed that two of them had already been converted, one into a “stylish dressing room with a salon vanity and en suite bathroom,” and the other into a sitting space.</p>
                            <p>The entire house had been outfitted with extremely high-end finishes, including “ornate light fixtures, high-end hardware, and brand-new marble and hardwood floors.”</p>
                            <p>“Only the finest, most luxurious finishes complete this stunning and romantic estate,” the description read.</p>
                            <p>Outside, the villa boasted “sophisticated charm” with neatly maintained gardens, a koi-filled lily pond, and an outdoor dining area.</p>
                            <p>While it is unclear why Lawrence chose to sell the property, the sale coincides with a momentous transformation for the actress, who disclosed in April that she had given birth to her second child.</p>
                            <p>Though the “No Hard Feelings” singer has gone to great pains to keep her children out of the spotlight, her second child made news this week when Lawrence was photographed with a keychain that appeared to reveal the newborn’s name.</p>
                            <div class="post-image-container image-fit-contain">
                                <img class="show-on-desktop img-fluid" src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/propertynews3.png&quot;" />
                            </div>
                            <p>According to E! News, the mother of two was photographed walking around New York City with two beaded keychains, one of which featured the name of her first-born son, Cy, who is now three, and the other reading “Louie,” leading many to believe her second child is also a boy with that name.</p>
                            <p>Lawrence’s choice to sell the home appears to have severed her public ties with the West Coast; the Beverly Hills mansion was believed to be her last property in California.</p>
                            <p>Lawrence has primarily lived in New York City for the past few years, having purchased and sold several properties in Manhattan since she and Maroney married in 2019</p>
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
