import React from "react";
// import "./inner_builder1.css";
import PropertyNewsImage from "../../../assets/img/property-news/secproertynews-300x156.png";
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
                What Does a Fed Rate Cut Mean for Mortgage Rates?
            </h1>
            {/* Main Content */}
            <div className="row">
                {/* LEFT CONTENT */}
                <div className="col-lg-8">
                    <div className="all_innerbanner">
                        {/* Banner Image */}
                        <div className="all_banner mb-4">
                            <img src={PropertyNewsImage} alt="img" className="w-100 all_banner_img" />
                        </div>
                 
                            <div className="top-builders-mumbai">
                                <p>In response to rising labour market warning signs, the Federal Reserve is poised to lower its benchmark interest rate for the first time in nine months.</p>
                                <p>Most economists and investors expect Fed Chair Jerome Powell and the rest of the Federal Open Market Committee (FOMC) to lower the central bank’s overnight rate by a quarter point on Wednesday.</p>
                                <p>Mortgage rates have already decreased in anticipation of the shift, with the average 30-year fixed rate dropping to an 11-month low of 6.35% last week.</p>
                                <p>It’s good news for prospective homebuyers, who will benefit from cheaper borrowing costs. However, those who are expecting mortgage rates to decrease any further following the FOMC meeting may be disappointed.</p>
                                <p>This is because financial markets have already priced in three 25-basis-point Fed reductions before the end of the year, as well as three more cuts of the same level by the end of 2026.</p>
                                <div class="post-image-container image-fit-contain">
                                    <img class="show-on-desktop img-fluid" src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/secproertynews1.png" />
                                </div>
                                <p>If the FOMC decision is difficult and split, with dissenting votes opposing the cut, or if policymakers offer forward guidance that differs from market expectations for future rate cuts, mortgage rates may rise in reaction.</p>
                                <p>A similar scenario occurred in September 2024, when mortgage rates fell to a two-year low ahead of the expected Fed rate reduction but then began to rise when it became evident that the Fed cuts would not be as significant as markets anticipated.</p>
                                <p>Although mortgage rates have declined in recent weeks, they have not yet hit the lows of around 6% witnessed in early September 2024, when the federal funds rate was a full percentage point higher than it is now.</p>
                                <p>The Fed does not set mortgage rates directly; instead, they tend to track long-term bond yields. These bond markets are influenced by investor expectations for future Fed policy and financial conditions, such as inflation and government deficits.</p>
                                <p> Lawrence Yun, Chief Economist of the National Association of Realtors®, told reporters last month that increased inflation and concerns about mounting government debt could put upward pressure on mortgage rates, despite Fed easing.</p>
                                <p>“Mortgage rates may not decline, even with the Fed rate cut, if there is high inflation, and also if somehow the Treasury debt issuance becomes large,” said Mr. Powell. “That’s going to prevent the mortgage rate from meaningfully declining.”</p>
                                <h3>Political intrigue surrounds the Fed’s interest rate decision.</h3>
                                <p>President Donald Trump’s public pressure campaign for lower interest rates has called into question the Fed’s long-standing commitment to independence from political pressure or interference.</p>
                                <p>Soon after starting his second administration, Trump began publicly demanding lower interest rates, threatening to fire or sue Powell. Trump has stated that lower mortgage interest rates would allow the government to restructure its vast debt on more favourable terms while also boosting the property market.</p>
                                <p>Powell has resisted, telling Trump at a White House meeting in May that the central bank’s future interest rate decisions will be “based solely on careful, objective, and non-political analysis,” according to a Fed statement.</p>
                                <div class="post-image-container image-fit-contain">
                                    <img class="show-on-desktop img-fluid" src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/secproertynews2.png" />
                                </div>
                                <p>The conflict has heated up in recent weeks, with Trump attempting to remove Lisa Cook from the Federal Reserve Board of Governors over claims of mortgage fraud.</p>
                                <p>Cook, a Biden appointee, had backed Powell’s decision to keep interest rates unchanged when the FOMC last voted on policy in late July. She is currently battling Trump in court and is set to vote on Wednesday, after a judge temporarily delayed the president’s attempt to remove her.</p>
                                <p>The FOMC typically has 12 voting members, but it is now down to 11 after Board of Governors member Adriana Kugler departed unexpectedly and without explanation last month.</p>
                                <p>The resignation of Kugler, a Biden appointee, allows Trump to add a new voter to the FOMC who supports his agenda of loose money.</p>
                                <p>The candidate he has chosen, White House economic adviser Stephen Miran, might be confirmed in a Senate vote on Monday evening, allowing him to attend the FOMC meeting this week.</p>
                                <p>If confirmed, Miran would become the first sitting White House official to serve on the Fed’s board of directors in modern history, breaking with precedent and injecting a new political dimension into the central bank’s governance.</p>
                                <p>Looking Beyond U.S. Real Estate? Discover India Mumbai’s Booming Luxury Market</p>
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
