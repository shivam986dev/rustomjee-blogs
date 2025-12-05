import React from "react";
// import "./inner_builder1.css";
import ConnectivityImage from "../../../assets/img/connectivity/unnamed.jpg";
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
                Mumbai Metro 2025-2026: Map, Route, Stations List, Lines, News
            </h1>


            {/* Main Content */}
            <div className="row">

                {/* LEFT CONTENT */}
                <div className="col-lg-8">
                    <div className="all_innerbanner">
                        {/* Banner Image */}
                        <div className="all_banner mb-4">
                            <img src={ConnectivityImage} alt="img" className="w-100 all_banner_img" />
                        </div>
                        <div className="top-builders-mumbai">
                            <p>The Mumbai Metro is the Maharashtra government’s ambitious and vast development project. Once
                                fully operating, the Mumbai metro will offer citizens smooth, inexpensive, and extensive
                                connectivity options. The Mumbai Metro project is being implemented by the Mumbai Metropolitan
                                Development Authority (MMRDA). However, the Mumbai Metro Rail Corporation Limited (MMRCL)
                                manages a subterranean length of the Mumbai Metro, known as Mumbai Metro Line 3 (MML-3).</p>
                            <p>The Maharashtra government began building the Mumbai metro project in 2006 in response to the
                                already overburdened Mumbai local rail system. However, due to delays in land acquisition,
                                environmental clearances, and project approvals, only one line of the Mumbai Metro is
                                operational: Versova-Andheri-Ghatkopar.</p>
                            <p>Metro 2A, Mumbai Metro Line 3, and Metro Line 7 are among the metro routes approaching
                                completion, with safety trials currently underway. The remaining Mumbai Metro lines are at
                                varying phases of construction. In this essay, we’ll go over Mumbai metro routes, lines,
                                stations, and corridor data.</p>
                            <h3>Mumbai Metro Route Map</h3>
                            <p>The majority of Mumbai Metro lines are under development and will be completed in phases. The
                                broad route chart of the Mumbai Metro is as follows:</p>
                            <div className="post-image-container image-fit-contain">
                                <img class="show-on-mobile img-fluid"
                                    src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-3-2.png "
                                    alt="" />
                            </div>
                            <h3>Mumbai Metro Lines: Stations, Corridors, and Connections</h3>
                            <p>Currently, the Mumbai Metro Lines can be categorized into three broad categories:</p>
                            <p>Operational Metro Lines</p>
                            <p>Under Construction Metro Lines</p>
                            <p>Proposed/Approved Metro Lines</p>
                            <h3>The Mumbai Metro lines can be summarised as follows:</h3>

                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>
                                        <tr>
                                            <td className="text-center">
                                                <p>Metro Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Colour Code</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Metro route</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Total Length (in Km)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Number of Stations</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Construction Status</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-1</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Blue Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>
                                                    <a
                                                        href="https://mumbaihomesnow.com/mumbai-versova-ghatkopar-metro-route-map-stations-more-mumbai-line-1-blue-line/">
                                                        <strong>Versova</strong>
                                                    </a> – Andheri – Ghatkopar
                                                </p>
                                            </td>
                                            <td className="text-center">
                                                <p>11.4 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>12</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Operational</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-2A</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Yellow Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Dahisar (E) to DN Nagar</p>
                                            </td>
                                            <td className="text-center">
                                                <p>18.60 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>17</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Partially-Operational</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-2B</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Yellow Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>DN Nagar to Mandale</p>
                                            </td>
                                            <td className="text-center">
                                                <p>23.64 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>22</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Under Construction</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-3</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Aqua Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Cuffe Parade -BKC- SEEPZ- Aarey Colony</p>
                                            </td>
                                            <td className="text-center">
                                                <p>33.50 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>27</p>
                                            </td>
                                            <td className="text-center">
                                                <p>The first phase is operational between BKC and Aarey. Other stations are
                                                    underconstruction</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-4</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Green Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Wadala to Kasarawadavali</p>
                                            </td>
                                            <td className="text-center">
                                                <p>32.32 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>32</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Under Construction</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-4A</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Green Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Kasarvadavali – Gaimukh (Extension of Line-4)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>2.88 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>2</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Under Construction</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-5</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Orange Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Thane – Bhiwandi – Kalyan</p>
                                            </td>
                                            <td className="text-center">
                                                <p>24.95 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>17</p>
                                            </td>
                                            <td className="text-center">
                                                <p>12.811 km Under Construction; Rest on Hold</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-6</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Pink Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Swami Samarth Nagar – Vikhroli</p>
                                            </td>
                                            <td className="text-center">
                                                <p>15.18 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>13</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Under Construction</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-7</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Red Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Dahisar (E) – Andheri (E)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>16.5 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>14</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Partially-Operational</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-7A</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Red Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Andheri (E) – CSI Airport (Extension of Line-7)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>3.17 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>2</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Under Construction</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-8</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Gold Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>CSIA – NMIA (Airport Connector)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>35 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>7</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Proposed Line</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-9</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Red Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Dahisar (E) – Mira Bhayander (Extension of Line-7)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>11.38 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>8</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Under Construction</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-10</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Green Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Gaimukh – Shivaji Chowk (Mira Road)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>9.20 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>4</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Approved Line</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-11</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Green Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Wadala – Chhatrapati Shivaji Maharaj Terminus</p>
                                            </td>
                                            <td className="text-center">
                                                <p>12.77 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>10</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Proposed</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-12</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Orange Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Kalyan to Taloja (Extension of Line-5)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>20.7 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>17</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Proposed</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-13</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Purple Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Shivaji Chowk (Mira Road) to Virar</p>
                                            </td>
                                            <td className="text-center">
                                                <p>23 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>20</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Proposed</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line-14</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Magenta Line</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Kanjurmarg to Badlapur</p>
                                            </td>
                                            <td className="text-center">
                                                <p>45 Km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>40</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Proposed</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <h3>Versova to Ghatkopar Metro Map</h3>
                            <p>The Versova Ghatkopar Metro Route, also known as the Blue Line metro, comprises 12 stations,
                                including Versova, D.N. Nagar, Azad Nagar, Andheri, Western Express Highway, Chakala, Airport
                                Road, Marol Naka, Saki Naka, Asalpha, Jagruti Nagar, and Ghatkopar. These stations were intended
                                to provide convenient access to major residential neighbourhoods, commercial districts, and
                                transportation hubs.</p>
                            <p>The line begins at Versova and ends at Ghatkopar. Azad Nagar, Chakala (JB Nagar), and Saki Naka
                                are the interchange stations for Yellow Line 2, Red Line 7, and the planned Aqua Line 3.</p>
                            <div className="post-image-container image-fit-contain">
                                <img class="show-on-mobile img-fluid"
                                    src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-26.png "
                                    alt="" />
                            </div>
                            <h3>Blue Line Mumbai Metro, or Versova to Ghatkopar Metro Stations.</h3>
                            <p>Mumbai Metro 1’s Blue Line has the following metro stations:</p>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>

                                        <tr>
                                            <td className="text-center">
                                                <p><strong>Station Name</strong></p>
                                            </td>
                                            <td className="text-center">
                                                <p><strong>Connectivity</strong></p>
                                            </td>
                                            <td className="text-center">
                                                <p><strong>Distance from Versova</strong></p>
                                            </td>
                                            <td className="text-center">
                                                <p><strong>Distance from Ghatkopar</strong></p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Versova</p>
                                            </td>
                                            <td className="text-center">
                                                <p>None</p>
                                            </td>
                                            <td className="text-center">
                                                <p>0 km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>10.821 km</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>DN Nagar</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Yellow Line 2</p>
                                            </td>
                                            <td className="text-center">
                                                <p>0.955 km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>9.866 km</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Azad Nagar</p>
                                            </td>
                                            <td className="text-center">
                                                <p>None</p>
                                            </td>
                                            <td className="text-center">
                                                <p>1.751 km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>9.07 km</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Andheri</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Western Line, (via Andheri railway station)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>3.111 km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>7.71 km</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Western Express Highway</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Red Line 7</p>
                                            </td>
                                            <td className="text-center">
                                                <p>4.118 km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>6.703 km</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Chakala (JB Nagar)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>None</p>
                                            </td>
                                            <td className="text-center">
                                                <p>5.382 km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>5.439 km</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Airport Road</p>
                                            </td>
                                            <td className="text-center">
                                                <p>None</p>
                                            </td>
                                            <td className="text-center">
                                                <p>6.107 km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>4.714 km</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Marol Naka</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Aqua Line 3</p>
                                            </td>
                                            <td className="text-center">
                                                <p>6.705 km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>4.116 km</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Saki Naka</p>
                                            </td>
                                            <td className="text-center">
                                                <p>None</p>
                                            </td>
                                            <td className="text-center">
                                                <p>7.78 km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>3.041 km</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Asalpha</p>
                                            </td>
                                            <td className="text-center">
                                                <p>None</p>
                                            </td>
                                            <td className="text-center">
                                                <p>8.903 km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>1.918 km</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Jagruti Nagar</p>
                                            </td>
                                            <td className="text-center">
                                                <p>None</p>
                                            </td>
                                            <td className="text-center">
                                                <p>9.765 km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>1.056 km</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Ghatkopar</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Central Line (via Ghatkopar railway station)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>10.821 km</p>
                                            </td>
                                            <td className="text-center">
                                                <p>0 km</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <h3>Station Facilities along the Versova-Ghatkopar Metro Route</h3>
                            <p>Reliance Metro Line 1 has 12 stops on three levels, accessible via stairs, escalators and lifts.
                                The second-level platforms have a maximum separation of 85 mm between train doors. The stations
                                include 100 staircases (at least four in each), 45 lifts and 95 escalators.</p>
                            <div className="post-image-container image-fit-contain">
                                <img class="show-on-mobile img-fluid"
                                    src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-1-1.png "
                                    alt="" />
                            </div>
                            <p>Wi-Fi access is accessible at all twelve stations. There are no parking facilities on Line 1, and
                                the Ghatkopar station is connected to the western side of the Ghatkopar railway station via a
                                footbridge.</p>
                            <p>As part of the Station Area Traffic Improvement Scheme (SATIS), the MMRDA relocated all bus and
                                taxi stands 40-50 metres from the stations in order to alleviate traffic congestion and
                                restricted pedestrian movement.</p>
                            <h3>The table includes a list of services and facilities available at all Reliance Metro stations:
                            </h3>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>

                                        <tr>
                                            <td className="text-center">
                                                <p><strong>Service</strong></p>
                                            </td>
                                            <td className="text-center">
                                                <p><strong>Description</strong></p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Escalators</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Escalators connect the concourse and platform levels, as well as the road
                                                    level to the concourse. All travellers can utilise the escalators.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Elevators</p>
                                            </td>
                                            <td className="text-center">
                                                <p>The metro stations contain lifts that are specifically developed for senior
                                                    citizens, pregnant women and passengers with special needs.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Tactile Path</p>
                                            </td>
                                            <td className="text-center">
                                                <p>There are tactile walkways to aid visually challenged passengers.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Ramps</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Wheelchair travellers can utilise the ramps to easily reach the lifts.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Wheelchairs</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Wheelchairs are available on-demand at all stations. This addresses the
                                                    demands of commuters.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>First Aid</p>
                                            </td>
                                            <td className="text-center">
                                                <p>All Reliance Metro stations offer first aid services.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Washrooms</p>
                                            </td>
                                            <td className="text-center">
                                                <p>There are separate restrooms for women and men. There are also washrooms for
                                                    passengers with disabilities.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Water Coolers</p>
                                            </td>
                                            <td className="text-center">
                                                <p>All stations provide drinking water.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Passenger Information Display System (PIDS)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>The information display system gives real-time data on train service,
                                                    timetables, and disruptions.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Passenger Announcement System (PAS)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Announcements are made to passengers via announcement systems.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Signages</p>
                                            </td>
                                            <td className="text-center">
                                                <p>All metro stations include signage that provides information regarding
                                                    routes, layouts, utilities, entry, and exits.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Customer Care</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Customer service desks are available in metro stations where passengers can
                                                    seek assistance or information.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>F&amp;B Facilities</p>
                                            </td>
                                            <td className="text-center">
                                                <p>There are a variety of food and beverage kiosks at metro stations.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Convenience Stores</p>
                                            </td>
                                            <td className="text-center">
                                                <p>There are convenience stores in the metro station.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Passenger Help Point (PHP)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>There are passenger assistance points on the platform. Commuters can use this
                                                    to call the station controller in an emergency.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Bank ATM</p>
                                            </td>
                                            <td className="text-center">
                                                <p>ATMs from various banks are available in metro stations.</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <h3>Mumbai Metro: Operational Metro Lines</h3>
                            <p>Most of the Mumbai Metro Corridors are in various phases of construction. As of March 2022, just
                                one line of the Mumbai Metro, the Versova-Andheri-Ghatkopar or Blue Line, was operational. Here
                                is a full breakdown of the Mumbai Metro’s many corridors.</p>
                            <h3>Mumbai Metro Line 1: Blue Line along Versova-Andheri-Ghatkopar route</h3>
                            <p>According to Mumbai Metropolitan Region Development Authority authorities, the metro on Mumbai
                                Metro Line 1 has begun operating at an increased speed of 80 kmph, up from 65 kmph. With
                                increased passenger capacity, the metro makes 18 extra trips per day.</p>
                            <p>Status – Operational</p>
                            <p>Length- 11.4 km</p>
                            <p>Number of stations- 12</p>
                            <div className="post-image-container image-fit-contain">
                                <img class="show-on-mobile img-fluid"
                                    src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-4-2.png"
                                    alt="" />
                            </div>
                            <p>Mumbai Metro Stations Line 1</p>
                            <p>Mumbai Metro Line 1 passes along the following route and contains the following stations:</p>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>

                                        <tr>
                                            <td className="text-center">
                                                <p>Sr. No</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line 1 Stations</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>1</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Versova</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>2</p>
                                            </td>
                                            <td className="text-center">
                                                <p>D N Nagar</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>3</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Azad Nagar</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>4</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Andheri</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>5</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Western Express Highway (WEH)</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>6</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Chakala</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>7</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Airport Road</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>8</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Marol Naka</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>9</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Saki Naka</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>10</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Asalpha</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>11</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Jagruti Nagar</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>12</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Ghatkopar</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <p>The Mumbai Metro’s Line 1 from Versova to Ghatkopar cost an estimated Rs 4,300 crore to build.
                                Line 1 of the Mumbai Metro is completely elevated. Currently, it is operated by Mumbai Metro One
                                Operation Pvt Ltd.</p>
                            <h3>Mumbai Metro: Approved/Under Construction Metro Lines</h3>
                            <p>The following Mumbai metro lines are currently under construction and in various phases of
                                development.</p>
                            <p><strong>Mumbai Metro Line 2 (2A and 2B): Yellow Line From Dahisar to Mandale</strong></p>
                            <p>Status: Under Construction</p>
                            <p>Length- 42 km</p>
                            <p>Number of stations- 37 (2A-17, 2B-20)</p>
                            <p><strong>Mumbai Metro Stations Line 2</strong></p>
                            <p>Mumbai Metro Lines 2A and 2B pass through the following route and contain the following stations:
                            </p>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>

                                        <tr>
                                            <td className="text-center">
                                                <p><strong>Sr. No</strong></p>
                                            </td>
                                            <td className="text-center">
                                                <p><strong>Mumbai Metro Line 2A Stations</strong></p>
                                            </td>
                                            <td className="text-center">
                                                <p><strong>Mumbai Metro Line 2B Stations</strong></p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>1</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Dahisar East</p>
                                            </td>
                                            <td className="text-center">
                                                <p>ESIC Nagar</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>2</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Upper Dahisar Station (Anand Nagar)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Prem Nagar</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>3</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Kandarpada (Rushi Sankul)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Indira Nagar</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>4</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Mandapeshwar (IC Colony)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Nanavati Hospital</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>5</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Eksar (LIC Colony)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Khira Nagar</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>6</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Borivali West (Don Bosco)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Saraswat Nagar</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>7</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Pahadi Eksar (Shimpoli, Shimpawali)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>National College</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>8</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Kandivali West (Mahavir Nagar)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Bandra Metro</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>9</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Dahanukarwadi (Kamraj Nagar)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>ITO Bandra Kurla Complex</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>10</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Valnai (Charkop)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>IL&amp;FS, Bandra Kurla Complex (BKC)</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>11</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Malad West</p>
                                            </td>
                                            <td className="text-center">
                                                <p>MTNL, Bandra Kurla Complex (BKC)</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>12</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Lower Malad (Kasturi Park)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>SG Barve Marg</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>13</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Pahadi Goregaon (Bangur Nagar)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Kurla East</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>14</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Goregaon West</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Eastern Express Highway (EEH)</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>15</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Oshiwara (Adarsh Nagar)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Chembur</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>16</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Lower Oshiwara (Shastri Nagar)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Diamond Garden</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>17</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Andheri West (D.N. Nagar)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Shivaji Chowk</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>18</p>
                                            </td>
                                            <td className="text-center">
                                                <p></p>
                                            </td>
                                            <td className="text-center">
                                                <p>BSNL</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>19</p>
                                            </td>
                                            <td className="text-center">
                                                <p></p>
                                            </td>
                                            <td className="text-center">
                                                <p>Mankhurd</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>20</p>
                                            </td>
                                            <td className="text-center">
                                                <p></p>
                                            </td>
                                            <td className="text-center">
                                                <p>Mandala</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>


                            <p>The yellow line is one of the longest on the Mumbai Metro network. It’s been broken into two
                                parts. Line 2A connects Dahisar East Station to D N Nagar, whereas Line 2B connects ESIC Nagar
                                to Mandale area.</p>
                            <p>Yellow line 2A is approximately 18.5 kilometres long, while yellow line 2B is more than 23
                                kilometres. The Yellow Line is being developed in many phases at a cost of more than Rs 17,000
                                crore. Interestingly, Line 2 will be a fully elevated metro network.</p>
                            <p>On January 19, 2023, Prime Minister Narendra Modi inaugurated Metro Line 2A. The queue will be
                                available to the public on January 20, 2023. It has decreased traffic on the Western Express
                                Highway and Link Road while spanning the approximately 18.6-kilometer route between Dahisar East
                                to DN Nagar in Andheri West.</p>
                            <h3>Mumbai Metro Line 3 Route: Aqua-Line from Cuffe Parade to Aarey Colony.</h3>
                            <div className="post-image-container image-fit-contain">
                                <img class="show-on-mobile img-fluid"
                                    src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-2-2.png "
                                    alt="" />
                            </div>
                            <p><strong>Status :</strong> Under Construction</p>
                            <p><strong>Length–</strong> 33.5 km</p>
                            <p><strong>Number of stations–</strong> 27 stations (26 underground and 1 at-grade)</p>
                            <p>The Mumbai Metro Line 3 (also known as the Colaba-Bandra-SEEPZ Line) is an underground rail line.
                                The 33.5-kilometer route connects Cuffe Parade and Aarey Colony via 27 stations.</p>
                            <p><strong>Key Details</strong></p>
                            <p>The Mumbai Metro Line 3 is jointly owned and operated by the Government of India and Maharashtra
                                on a 50-50 basis.</p>
                            <p>The Mumbai Metro Line 3 is scheduled to be completed in 2024, with the first phase connecting
                                Mumbai’s financial areas, including Colaba, Bandra Kurla Complex (BKC), and Aarey.</p>
                            <p>The Mumbai Metro Line 3 features subterranean stations with concourses 10-14 metres below ground
                                level and platforms 18-20 metres below ground level, therefore mobile connectivity may be an
                                issue for commuters. MMRC has so contracted ACES India Pvt Ltd to supply In-Building Solutions.
                            </p>
                            <p>On October 8, Mumbai Metro 3 conducted a trial run between MIDC and Vidyanagari metro stations.
                            </p>
                            <p><strong>Latest Update:</strong></p>
                            <p>Operations between the Bandra Kurla Complex (BKC) and the Aarey metro station on Mumbai Metro
                                Line 3 began on October 7, 2024.</p>
                            <p>In one month of operation, Mumbai Metro Line 3 saw 600,000 users, with an average of 20,000
                                commuters every day.</p>
                            <p>The Mumbai Metro Rail Corporation (MMRC) has received the final rake from Alstom for the Mumbai
                                Metro section 3 Colaba-Bandra-Seepz section.</p>
                            <p>The MMRC currently has all of the rakes required to start Phase I of the line between Aarey and
                                the Bandra-Kurla Complex. Rake trials will take place in mid-November 2023, following which CMRS
                                will inspect the network.</p>
                            <h3>Mumbai Metro Stations Line 3</h3>
                            <p>Mumbai Metro Line 3, often known as the Aqua Line, would run from South Mumbai’s Cuffe Parade to
                                North Aarey Colony. The Aqua Line’s network will include the following stations:</p>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>

                                        <tr>
                                            <td className="text-center">
                                                <p>Sr. No</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Mumbai Metro Stations List Line 3 (Aqua Line)</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>1</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Cuffe Parade</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>2</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Vidhan Bhawan</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>3</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Churchgate station</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>4</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Hutatma Chowk Station</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>5</p>
                                            </td>
                                            <td className="text-center">
                                                <p>CST Station</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>6</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Kalbadevi</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>7</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Girgaon Station</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>8</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Grant Road</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>9</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Mumbai Central</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>10</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Mahalaxmi</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>11</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Science Museum Station</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>12</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Acharya Atrey Chowk</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>13</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Worli</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>14</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Siddhivinayak Temple</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>15</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Dadar</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>16</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Shitladevi Temple</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>17</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Dharavi</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>18</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Bandra Kurla Complex (BKC)</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>19</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Vidyanagri</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>20</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Santa Cruz Station</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>21</p>
                                            </td>
                                            <td className="text-center">
                                                <p>CSIA Terminal 1 (Domestic Airport)</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>22</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Sahar Road</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>23</p>
                                            </td>
                                            <td className="text-center">
                                                <p>CSIA Terminal 2 (International Airport)</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>24</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Marol Naka</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>25</p>
                                            </td>
                                            <td className="text-center">
                                                <p>MIDC Station</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>26</p>
                                            </td>
                                            <td className="text-center">
                                                <p>SEEPZ</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>27</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Aarey Colony (At-grade)</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>The Aqua line, which passes via both CST station and the International Airport of Mumbai, will be
                                one of Mumbai Metro’s most essential metro lines once operational.</p>
                            <h3>Fare of Mumbai Metro Line 3</h3>
                            <p>The first phase of the Mumbai Metro is already running, with ticket prices ranging from INR 10 to
                                50. One-way tickets between Aarey and BKC cost INR 50 and cover a distance of 12.26 km.</p>
                            <h3>Mumbai Metro Line 4: Green Line, Wadala to Kasarvadavali</h3>
                            <p>Status: Under Construction</p>
                            <p>Length- 33.3 km</p>
                            <p>Number of stations- 32 stations</p>
                            <h3>Mumbai Metro Stations Line 4</h3>
                            <p>Mumbai Metro Line 4 (Green Line) would operate from Wadala to Aarey Colony. The Mumbai Metro’s
                                Greenline will pass through the stations listed below.</p>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>

                                        <tr>
                                            <td className="text-center" colSpan={8}>
                                                <p><strong>Stations on Green Line 4 of Mumbai Metro</strong></p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Kasarvadavali</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Vijay Garden</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Dongripada</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Tikuji-ni-wadi</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Manpada (Thane)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Kapurbawdi</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Majiwada</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Cadbury Junction</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Mahapalika Marg</p>
                                            </td>
                                            <td className="text-center">
                                                <p>RTO Thane</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Teen Haath Naka (Thane)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Mulund Naka</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Mulund Fire Station</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Sonapur</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Shangrila</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Bhandup</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Bhandup Mahapalika</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Naval Housing</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Gandhi Nagar</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Surya Nagar</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Vikhroli</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Godrej Company</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Shreyas Cinema</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Laxmi Nagar</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Pant Nagar</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Garodia Nagar</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Amar Mahal Junction</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Siddarth Colony</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Suman Nagar</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Anik Nagar Depot</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Wadala Truck Terminal</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Bhakti Park Wadala</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <p>In addition to the stations indicated above on the Mumbai Metro’s Green Line 4, two more stations
                                are planned along the route. The planned stations are Gowniwada and Gaimukh. The overall project
                                cost of Greenline 4 (including 4A) exceeds Rs 15,500 crore.</p>
                            <h3>Mumbai Metro Line 5: Orange Line from Thane, Bhiwandi, and Kalyan</h3>
                            <p><strong>Status :</strong> Under Construction</p>
                            <p><strong>Length–</strong> 25 km</p>
                            <p><strong>Number of stations–</strong> 17 stations</p>
                            <p>Mumbai Metro Stations Line 5</p>
                            <p>Mumbai Metro Line 5, also known as the Orange Line, will stretch from Thane City to Kalyan. The
                                Mumbai Metro’s orange line will go through the following stations.</p>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>

                                        <tr>
                                            <td className="text-center">
                                                <p>Kalyan APMC</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Kalyan Station</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Sahajanand Chowk</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Durgadi Fort</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Kon Gaon</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Gove Gaon MIDC</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Rajnouli Village</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Temghar</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Gopal Nagar</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Bhiwandi</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Dhamankar Naka</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Anjur Phata</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Purna</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Kalher</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Kasheli</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Balkumbh Naka</p>
                                            </td>
                                            <td className="text-center">
                                                <p></p>
                                            </td>
                                            <td className="text-center">
                                                <p></p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <p>The Mumbai Metro’s Orange Line 5 would cost an estimated Rs 8,417 crore. The orange line will be
                                totally elevated and cover a span of 25 kilometers. To increase connectivity, Orange Line 5 will
                                connect to Metro Line 4 on the Wadala-Thane route and Metro Line 11 between Taloja and Kalyan.
                            </p>
                            <h3>Mumbai Metro Line 6: Pink Line on Lokhandwala -Jogeshwari-Kanjurmarg</h3>
                            <p><strong>Status :</strong> Under Construction</p>
                            <p><strong>Length-</strong> 14.5 km</p>
                            <p>Number of stations</p>
                            <p>13 stations</p>
                            <h3>Mumbai Metro Stations Line 6</h3>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>

                                        <tr>
                                            <td className="text-center">
                                                <p><strong>Sr. No.</strong></p>
                                            </td>
                                            <td className="text-center">
                                                <p><strong>Mumbai Metro Line 6 Stations List</strong></p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>1</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Swami Samarth Nagar (Lokhandwala)</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>2</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Adarsh Nagar</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>3</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Jogeshwari West</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>4</p>
                                            </td>
                                            <td className="text-center">
                                                <p>JVLR Junction</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>5</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Shyam Nagar</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>6</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Mahakali Caves</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>7</p>
                                            </td>
                                            <td className="text-center">
                                                <p>SEEPZ Village</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>8</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Saki Vihar Road</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>9</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Rambaug (Powai)</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>10</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Powai Lake</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>11</p>
                                            </td>
                                            <td className="text-center">
                                                <p>IIT Powai</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>12</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Kanjurmarg West</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>13</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Vikhroli EEH</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <p>Mumbai Metro Line 6, often known as the Pink Line, will connect Swami Samarth Nagar with the
                                Kanjurmarg route. The majority of the Pink Line will be fully elevated along the
                                Jogeshwari-Vikhroli Link Road. The entire project will cost an estimated Rs 6716 crore.</p>
                            <h3>Mumbai Metro Line 7 & 7A: Red Line from Dahisar East to Mumbai Airport</h3>
                            <p><strong>Status:</strong> Under Construction</p>
                            <p><strong>Length–</strong> 33.5 km</p>
                            <p><strong>Number of stations–</strong> 16 stations</p>
                            <h3>Mumbai Metro Stations Line 7</h3>
                            <p>The Red Line of the Mumbai Metro will have the following stations:</p>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>

                                        <tr>
                                            <td className="text-center" colSpan={3}>
                                                <p><strong>Mumbai Metro Stations Red Line (7 &amp; 7A)</strong></p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Dahisar East</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Ovaripada</p>
                                            </td>
                                            <td className="text-center">
                                                <p>National Park</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Devipada</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Magathane</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Mahindra and Mahindra</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Bandongri</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Kurar Village</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Dindoshi</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Aarey Road Junction</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Mahanand (Goregaon East)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>JVLR Junction</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>Shankarwadi/Mogarpada</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Andheri East (Gundavali)</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Airport Colony (7A)</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">
                                                <p>CSMIA T2 (7A)</p>
                                            </td>
                                            <td className="text-center">
                                                <p></p>
                                            </td>
                                            <td className="text-center">
                                                <p></p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <p>The total length of the Red line will be more than 33.5 kilometres. The red line, which connects
                                Mumbai’s international airport, would be extremely advantageous to commuters from all around
                                Mumbai.</p>
                            <p>On January 19, 2023, Prime Minister Narendra Modi opened Metro Line 7. The queue opened to the
                                public on January 20, 2023. It has decreased traffic on the Western Express Highway and Link
                                Road while covering the approximately 16.5-kilometer stretch between Andheri East and Dahisar
                                East.</p>
                            <h3>Mumbai Metro Line 8: Gold Line from CSIA to NMIA (Airport Connector)</h3>
                            <p>The Gold Line, one of the most ambitious and futuristic metro lines ever built, would connect
                                Mumbai International Airport to Navi Mumbai Airport. The approximate length of this connectivity
                                project is more than Rs 15,000 crore. The Gold Line metro route will include more than 8 stops.
                            </p>
                            <h3>Mumbai Metro Line 9: Red Line from Dahisar East to Mira-Bhayander (Under Construction)</h3>
                            <p>Metro Line 9 of the Mumbai Metro is an extension of Line 7. The Red Line 9 would connect Dahisar
                                East and Mumbai’s Bhayander area.</p>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>
                                        <tr>
                                            <td className="text-center" colSpan={4}>
                                                <p><strong>Mumbai Metro Red Line 9 Stations</strong></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>Dahisar East</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Pandhurang Wadi</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Amar Palace</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Zankar Company</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <p>Sai Baba Nagar</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Deepak Hospital</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Shaheed Bhagat Singh Garden</p>
                                            </td>
                                            <td className="text-center">
                                                <p>Subhash Chandra Bose Station</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>This Mumbai metro section will include more than eight stations, all of which will be elevated.
                                The total cost of the red line length is anticipated to be approximately Rs 6,518 crore.</p>
                            <h3>Mumbai Metro Line 10,11 (Extension of Red Line 4)</h3>
                            <p>Mumbai Metro Lines 10 and 11 are extensions of the Mumbai Metro Line 4. The projected Red Line 10
                                will connect Gaimukh to Shivaji Chowk on Mira Road. It will be a 9-kilometer route with 9 metro
                                stations in total. Metro Line 10 will cost around Rs 5,000 crore to build.</p>
                            <p>Similarly, Red Line 11 will connect Wadala to SPM Chowk near the Gateway of India in Mumbai. This
                                line will be 17.5 kilometres long and will have around 15 metro stations. This section would be
                                built at an estimated cost of Rs 16,000 crore.</p>
                            <h3>Mumbai Metro Line 11 – Approved</h3>
                            <p>On September 3, 2025, Maharashtra’s Cabinet approved the development of Mumbai Metro Line 11. It
                                is an expansion of line four. Here’s some information about it.</p>
                            <p><strong>Project Approval and Cost</strong></p>
                            <p>The project’s estimated cost is roughly INR 23,488 crore. The Mumbai Metropolitan Region
                                Development Authority (MMRDA) is in charge of implementing the Mumbai Metro Line 11 project.</p>
                            <p><strong>Project Details and Route</strong></p>
                            <p>This proposed metro corridor is 17.51 kilometres long and will connect Wadala to the Gateway of
                                India. The longest portion of the route, approximately 13 kilometres, will be built underground.
                                The final 4.3 kilometres will be developed as an elevated portion.</p>
                            <p>The route has been realigned from its initial plan. It will now travel through several notable
                                South Mumbai monuments. These include the Flora Fountain and the Fort. The realignment of Metro
                                Line 11 will benefit travellers by making commuting more convenient. The line will feature
                                around 14 stations. </p>
                            <p><strong>Funding and Connectivity</strong></p>
                            <p>The central government will very certainly provide financial backing for the project. This will
                                take the shape of INR 1,338 crore as equity and INR 917 crore as an interest-free loan. The
                                state government will cover the loan.</p>
                            <p>When the Mumbai Metro Line 11 is completed, it would provide nonstop connectivity from beginning
                                to end. It will also include an interchange point for Metro Line 3 at CSMT and Metro Line 4 at
                                Wadala. It will greatly reduce congestion on suburban trains and arterial roadways.</p>
                            <p><strong>Mumbai Metro Line 12: Orange Line</strong></p>
                            <p>This Mumbai Metro section will be built as an expansion of Mumbai Metro Line 5 (the Orange Line).
                                Line 12 will connect the cities of Kalyan and Taloja. This route will provide last-mile
                                connectivity throughout the Mumbai Metropolitan Region.</p>
                            <p><strong>Mumbai Metro Line 13: Purple Line</strong></p>
                            <p>This metro line will connect the Virar region to Mira Bhayander. The section will be more over 23
                                kilometres long and will cost Rs 6900 crore. It will be called the Purple Line Metro. The number
                                of stations along the course is yet to be determined.</p>
                            <p><strong>Mumbai Metro Line 14: Magenta Line</strong></p>
                            <p>Mumbai Metro Line 14 is a metro section that connects Kanjurmarg to the Vikhroli neighbourhood of
                                Mumbai. It would stretch to the Ambernath-Badlapur region, connecting Mumbai with areas beyond
                                Thane. The stretch’s estimated cost is Rs 18,000. Previously, the anticipated cost was Rs13,500
                                crore.</p>
                            <p>The metro route has been accepted by IIT Bombay. The authorised officials have been ordered to
                                create an environmental impact report for the route. The Detailed Project Report will be created
                                once the route has been cleared via ecologically sensitive locations such as Flamingo Sanctuary
                                and Thane Creek.</p>
                            <p>The Detailed Project Report for the metro route will be submitted to the state government for
                                further approval. Once approved, construction on the Mumbai Metro Line 14 will begin within a
                                year. The Metro route is expected to improve connection between Mumbai and its suburbs.</p>
                            <h3>Deadlines for New and Existing Mumbai Metro Lines</h3>
                            <p>The construction of various Mumbai Metro lines is currently underway. See the details below.</p>
                            <p>The Mumbai Metro Line 9 (Red Line Mumbai Metro) segment from Dahisar to Kashigaon is scheduled to
                                begin operations in December 2025. The metro line’s construction is now 98% complete.</p>
                            <p>By the end of 2025, the Mumbai Metro Line 2B (Yellow Line Mumbai Metro) section from Mandale to
                                Diamond Garden will be operational. The metro line’s construction is approximately 78% complete.
                                The trial runs are currently under progress.</p>
                            <p>Mumbai Metro Line 3 (Aqua Line) had began service between Cuffe Parade and Aarey</p>
                            <p>The segment between Gaimukh and Cadbury Junction is expected to be operational in early 2026. The
                                metro stretch’s construction is approximately 84% complete.</p>
                            <h3>Navi Mumbai Metro</h3>
                            <p>The City and Industrial Development Corporation (CIDCO) is implementing and overseeing the Navi
                                Mumbai metro project, which is part of the area’s rapid transit system. The Navi Mumbai Metro
                                would have 20 stations along its 23-kilometer span. The complete project will cost Rs. 4,163
                                crore.</p>
                            <h3>Mumbai Water Metro</h3>
                            <p>Kochi Metro Rail Limited has filed a feasibility report for the building of a water metro in
                                Mumbai, Maharashtra. The water metro ferry system will serve the whole Mumbai metropolitan
                                region. It will comprise several water bodies and creeks in the area, including Thane, Vaitarna,
                                Vasai, Panvel, Manori, and Karanja. The project’s anticipated cost will be Rs.2,500 crore.</p>
                            <p>According to the research, the Mumbai Water Metro will feature 29 destinations and ten lines,
                                covering more than 250 km of waterway in the region. The paper was presented at a high-level
                                meeting headed by Nitish Rane, Maharashtra’s Ports and Fisheries Minister, on June 17, 2025.
                                Several KMRL officials were also present at the conference.</p>
                            <p>Kochi Metro Rail Limited is expected to be tasked with preparing the Mumbai Water Metro Detailed
                                Project Report, given its experience with the Kochi project. Minister Nitish Rane has asked
                                authorised officials to continue implementing the Water Metro in Mumbai and submit a development
                                plan within three months. The Mumbai Water Metro Project is expected to be launched in 2026.</p>
                            <h3>Mumbai Metro Frequency</h3>
                            <p>Mumbai Metro conducts 398 weekly trips on average per day, with a service frequency of 3-4
                                minutes during peak hours and 7-8 minutes during off-peak hours.</p>
                            <h3>Ridership Details of Mumbai Metro</h3>
                            <p>On September 27th, 2023, the Mumbai Metro established a daily ridership record with 4,79,333
                                people. It is the metro system’s largest single-day ridership.</p>
                            <p>Prior to the pandemic, Mumbai Metro had an average weekday ridership of 4,40,000 to 4,50,000
                                commuters. However, the pandemic forced a brief pause in activities that lasted 211 days, from
                                March 22nd to October 18th, 2020.</p>
                            <p>The metro system commenced operations on October 19th, 2020, with unique strategies such as:</p>
                            <p>pillar poster campaign.</p>
                            <p>a society’s contact program</p>
                            <p>Promote digital payments for commuter convenience to promote ridership.</p>
                            <p>By the end of the fiscal year 2020-2021, daily ridership had surpassed 2,000,000.</p>
                            <p>Ridership has been increasing since April 2022, and will exceed 4,00,000 by the conclusion of the
                                fiscal year.</p>
                            <h3>Types of Tickets on the Mumbai Metro</h3>
                            <p>Tokens and Smart Cards are provided to passengers by the Mumbai Metro.</p>
                            <p><strong>Tokens </strong></p>
                            <p>A token is a pre-paid ticket that passengers can buy for a single travel. It is good for one day,
                                from the time of purchase to the conclusion of business hours.</p>
                            <p>Once you’ve joined the system (tapped the token in the paid area), you must leave the same
                                station within 20 minutes or the destination station within 75 minutes.
                            </p>
                            <p><strong>Paper Ticket</strong></p>
                            <p>Paper tickets are an excellent choice for people who want a more traditional method of purchasing
                                tickets. </p>
                            <p>The ticket is pre-paid and good for single or return trips between a predetermined number of
                                stations listed on the pricing chart.</p>
                            <p>It is intended for occasional metro riders and is valid for one business day until the conclusion
                                of operational hours on that day.</p>
                            <p>It is vital to note that the voyage must begin within two hours of purchase.</p>
                            <p><strong>Mobile QR Code Ticket</strong></p>
                            <p>Commuters can use their mobile phones as tickets by scanning QR codes. This feature is available
                                on the PayTM and Ridlr apps, and “Skiiip Q” allows commuters to reserve their tickets online,
                                saving them time and the trouble of purchasing paper tickets.</p>
                            <p><strong>Smart Card</strong></p>
                            <p>You can buy a smart card at any Mumbai Metro station’s Customer Care counter. You must pay a Rs.
                                50 security deposit and then recharge it with an extra Rs. 100/200/300/500 or 1000.</p>
                            <p>Each time you tap your card on the exit gate, the cost of your journey (from one station to
                                another) is subtracted from it.</p>
                            <p>The token is ideal for infrequent travellers, while a Smart Card is the best option for
                                individuals who travel frequently.</p>
                            <p><strong>One Card</strong></p>
                            <p>Mumbai One Card allows you to make payments through the OneCard app. One Card is a convenient
                                payment option that can be used for everything from UPI and Debit Cards to Net Banking.</p>
                            <p>The transition to adopting the Mumbai One Card delivers benefits such as:</p>
                            <p>convenient for commuting.</p>
                            <p>Greener environment by decreasing the use of paper tickets.</p>
                            <p><strong>Whatsapp-based Ticket</strong></p>
                            <p>MMMOCL, or Maha Mumbai Metro Operations Limited, has developed Whatsapp-based ticketing to make
                                it easier for users to pay metro tickets. With this facility in place, Mumbai metro passengers
                                would have convenient access to ticket booking services.</p>
                            <p>The existing Mumbai Metro smartphone app will include a Whatsapp ticket booking option.
                                Passengers can also use their smartphones to book tickets by sending a ‘Hi’ Whatsapp message to
                                the mobile number 8652635500.</p>
                            <p>According to the administration, the ticketing scheme applies to all Mumbai Metro lines and
                                stations. It is projected to provide convenience to the overall travel experience of Mumbai
                                metro travellers.</p>
                            <p>Whatsapp-based ticketing provides commuters with many payment alternatives to choose from. There
                                will be no charges for UPI transactions. However, there will be a convenience fee for credit
                                card transactions.</p>
                            <p><strong>Mumbai 1 Smart Card</strong></p>
                            <p>In April 2025, the Maharashtra government introduced the Mumbai 1 Smart Card, which can be used
                                to purchase metro, monorail, public bus, and suburban rail tickets.</p>
                            <p><strong>Features of Mumbai 1 Smart Card</strong></p>
                            <p>The Mumbai 1 Smart card can be used on Mumbai Metro Lines 1, 2A, and 7.</p>
                            <p>The Mumbai 1 Smart Card will be co-branded with the State Bank and the Mumbai Metropolitan Region
                                Development Authority (MMRDA).</p>
                            <p>The card has prepaid features, including contactless payments with a tap-to-go capability and
                                stored money that may be used at several stations.</p>
                            <p>The card’s validity will be printed on the card.</p>
                            <p>To further security, the Mumbai 1 Smart Card will include chip protection.</p>
                            <p>You can reserve a single ticket from point A to point B.</p>
                            <p>It will help save time because there will be no need to wait in large lines.</p>
                            <p>If the card is lost or destroyed, a replacement card will be provided for a cost of INR 100.</p>
                            <h3>Smart Bands for Ticketless Travel in Mumbai Metro</h3>
                            <p>Maha Metro will begin using smart bands as a new payment method for transit. These smart bands
                                will improve traveler convenience by avoiding them from standing in long lines to get a ticket.
                            </p>
                            <p>These bands will now be implemented on Metro line 2A, which runs from D.N. Nagar to Dahisar, as
                                well as Mumbai Metro line 7, which runs from Andheri East to Dahisar. In April, these smart
                                bands were launched in Mumbai Metro One, also known as the Reliance Metro from Versova to
                                Ghatkopar.</p>
                            <p>Maha Metro is launching these payment bands, also known as wearable gadgets, in collaboration
                                with the National Payments Corporation of India (NPCI) and State Bank of India. These bracelets
                                will allow users to store money and also include recharging options for adding money. Commuters
                                will just have to scan these bands against the Automatic Fare Collection (AFC) gates at metro
                                stations.</p>
                            <h3>How to Recharge a Mumbai Metro Card Online?</h3>
                            <p>You can rapidly recharge your Mumbai Metro card via the Reliance Metro website or a digital
                                payment app such as Google Pay, Paytm, etc. Here’s a step-by-step guide for recharging your
                                Mumbai metro card:</p>
                            <p><strong>Reliance Mumbai Metro</strong></p>
                            <p>To recharge your Mumbai metro card online via the website, follow the steps below:</p>
                            <p>Step 1: Go to The Reliance Mumbai Metro website https://www.reliancemumbaimetro.com/index.</p>
                            <p>Step 2: Click on Instacharge and enter your card number, recharge amount, name, address, email
                                ID, and mobile number. Please enter Captcha</p>
                            <p>Step 3: Click Confirm</p>
                            <p>Step 4: Now, enter the amount and make the payment using a credit card, debit card, or UPI ID.
                            </p>
                            <p>Now, you can use the card once payment is successfully done.</p>
                            <p><strong>Digital Payment Application- Paytm</strong></p>
                            <p>To recharge your Mumbai metro card online via the website, follow the steps below:</p>
                            <p>Step 1: Open the Paytm application on your phone</p>
                            <p>Step 2: Click on Metro from the All Services section, then click on Mumbai Metro</p>
                            <p>Step 3: Select Smart Card Recharge and enter the card number</p>
                            <p>Step 4: Now, click on Proceed</p>
                            <p>Step 5: Make the payment using a credit card, debit card or Paytm wallet balance</p>
                            <h3>Mumbai One App: Mumbai Metro Mobile App</h3>
                            <p>The Mumbai Metro Rail Authority plans to introduce a mobile application called Mumbai One app
                                before the end of 2025. The mobile application will assist commuters in booking QR code tickets
                                and finding information about all Mumbai Metro lines.</p>
                            <h3>Mumbai Metro: Contact Information</h3>
                            <p>For any further information, you can contact at the following location or send a mail to the
                                supplied mail id:</p>
                            <p>Office Address: Mumbai Metro Rail Corporation Limited, 202, 2nd Floor and 801 & 803, 8th Floor,
                                Hallmark Business Plaza, Opp. Gurunanak Hospital, Sant Dnyaneshwar Marg, Bandra (East), Mumbai –
                                400 051</p>
                            <p>E-mail Address: contact@mmrcl.com</p>
                            <h3>Summarizing: Mumbai Metro</h3>
                            <p>The Mumbai Metro provides a connectivity solution for the city’s growing population and rapid
                                development. Once completely operating, the Mumbai metro is providing inhabitants with a rapid,
                                cost-effective, and seamless form of transportation & Boom in Mumbai’s Real Estate</p>
                            <h3>FAQ’S</h3>
                            <p><strong>Is metro available in Mumbai?</strong></p>
                            <p>Yes, one metro line is functioning in Mumbai, while others are under construction.</p>
                            <p><strong>Is Mumbai metro Public or private?</strong></p>
                            <p>The Mumbai Metro project is being constructed through a Public-Private Partnership (PPP).</p>
                            <p><strong>Is the Mumbai metro underground?</strong></p>
                            <p>The Mumbai Metro is both underground and elevated.</p>
                            <p><strong>How many stations does Mumbai Metro Line 3 have?</strong></p>
                            <p>There are 27 stations on Mumbai Metro Line 3.</p>
                            <p><strong>Is Mumbai Metro fully operational?</strong></p>
                            <p>No, the Mumbai Metro isn’t fully operating. Some of metro routes are under construction.</p>
                            <p><strong>When did Mumbai Metro begin operations ?</strong></p>
                            <p>Mumbai Metro began operating on June 8, 2014.</p>
                            <p><strong>Can I buy Mumbai Metro ticket online?</strong></p>
                            <p>You can purchase Mumbai Metro tickets online using the Mumbai Metro smartphone app. You may
                                easily purchase QR code tickets and Tickets through the Mumbai One app.</p>
                            <p><strong>Which metro line is being constructed in New Mumbai?</strong></p>
                            <p>MMRDA is constructing the Navi Mumbai metro line, which will connect Old and New Mumbai.</p>
                            <p><strong>What is the average fare on the Mumbai Metro ?</strong></p>
                            <p>The average Mumbai Metro fare is Rs 10 for 3 km and Rs 50 for 30 km.</p>
                            <p><strong>Has Metro Line 7 started in Mumbai?</strong></p>
                            <p>On April 2, 2022, a portion of Mumbai Metro Line 7 was opened, connecting Dahisar East and Aarey.
                                On January 19, 2023, another stretch of Metro Line 7 opened, connecting Aarey to Gundavli.
                                Another segment of Line 7 from Bhayander to Dahisar is currently under development. It is part
                                of the Red Line 9.</p>
                            <p><strong>Has the Belapur Metro started ?</strong></p>
                            <p>Mumbai Metro Line 1 from Belapur to Pendhar opened on November 17, 2023.</p>
                            <p><strong>Does Thane have a metro ?</strong></p>
                            <p>The Thane Integral Ring Metro route was approved by the central government in August 2024. It
                                will have one circular route and 22 stations, totalling 29 kilometres of mass rapid transit
                                system. The project was reconfigured as a conventional metro line in 2023.</p>
                            <p><strong>Which is the largest metro station in Mumbai ?</strong></p>
                            <p>The Bandra Kurla Complex (BKC) is Asia’s largest metro station. This is the first underground
                                metro line in Mumbai.</p>
                            <p><strong>Is Mumbai Metro driverless ?</strong></p>
                            <p>Mumbai Metro Line 2 and Line 7 will have driverless trains.</p>
                            <p><strong>How can I book Mumbai Metro ticket using Whatsapp?</strong></p>
                            <p>Send a ‘Hi’ message to the mobile number 8652635500 to start the Whatsapp ticket booking
                                procedure.</p>
                            <p><strong>Is the first phase of Mumbai Metro Line 3 operational?</strong></p>
                            <p>On October 7, 2024, Mumbai Metro Line 3 began operations between Bandra Kurla Complex (BKC) and
                                Aarey.</p>
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
    );
}