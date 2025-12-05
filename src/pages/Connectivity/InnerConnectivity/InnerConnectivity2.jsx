import React from "react";
// import "./inner_builder1.css";
import Connectivity1Image from "../../../assets/img/connectivity/versova-metro.png";
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
                Mumbai Versova Ghatkopar Metro Route: Map, Stations & More | Mumbai Line 1 – Blue Line
            </h1>


            {/* Main Content */}
            <div className="row">

                {/* LEFT CONTENT */}
                <div className="col-lg-8">
                    <div className="all_innerbanner">
                        {/* Banner Image */}
                        <div className="all_banner mb-4">
                            <img src={Connectivity1Image} alt="img" className="w-100 all_banner_img" />
                        </div>
                        <div className="top-builders-mumbai">
                            <p>The Versova Ghatkopar Metro Route (also known as Mumbai Metro Line 1) connects the city’s centre and western suburbs. Line 1 of the Mumbai Metro is already fully operational, and it was one of the city’s initial lines. Find out more about Versova Andheri Ghatkopar Metro, popularly known as the Reliance Metro.</p>
                            <p>The Versova-Ghatkopar Metro Route is one of Mumbai’s most popular routes. It is sometimes referred to as the Mumbai Metro Line 1 or Blue Line. The route starts in Versova, a coastal suburb in the west, and terminates in Ghatkopar, the city’s eastern half. The line includes 12 stations and is one of the longest lines on the Mumbai Metro. The Mumbai Metro Line 1 is the city’s first metro line, having opened on June 8, 2014, and has since become a popular mode of transportation for Mumbai residents and visitors.</p>
                            <p>This blog delves into the overview, map, stations, connectivity, and other aspects of the Versova Ghatkopar Metro</p>
                            <h3>Overview: Blue Line Mumbai Metro or Versova-Ghatkopar Metro Route</h3>
                            <p>The Versova Ghatkopar Metro Route is part of the Mumbai Metro and connects Versova and Ghatkopar. It is a rapid transit system run by the Mumbai Metropolitan Region Development Authority. The construction cost was roughly Rs. 4,321 crores, and it was administered by Metro One Operation Pvt Ltd (MOOPL) on a five-year contract.</p>
                            <p>Mumbai Metro One Private Limited (Mumbai Metro 1) is the special purpose vehicle formed to carry out the project, with Reliance Infrastructure having 69% of MMOPL’s equity share capital, MMRDA holding 26%, and Veolia Transport holding the remaining 5% ownership.</p>
                            <p>Versova Ghatkopar Metro Route has the world’s eighth highest passenger density and India’s sharpest curve. The line features 64 curves, with the steepest curve reaching 107 meters, making it a difficult engineering achievement. The 11.40-kilometer-long line, with 12 stations, is the longest in the Mumbai Metro network.</p>
                            <p>Mumbai’s public transit system relies heavily on the Versova Ghatkopar Metro Route. Thousands of people utilise it every day to travel. It connects the western and eastern parts of the city, making it a convenient and efficient route to go around town.</p>
                            <h3>Versova to Ghatkopar Metro Key Details</h3>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>

                                        <tr>
                                            <td className="text-center"><p><strong>Status</strong></p></td>
                                            <td className="text-center"><p>Operational</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>Other Names</strong></p></td>
                                            <td className="text-center">
                                                <p>Mumbai Metro Line 1, Blue Line Mumbai Metro, Reliance Metro</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>Owner</strong></p></td>
                                            <td className="text-center">
                                                <p>Reliance Infrastructure Limited, MMRDA Mumbai Metropolitan Region Development Authority</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>Line number</strong></p></td>
                                            <td className="text-center"><p>1</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>Termini</strong></p></td>
                                            <td className="text-center"><p>Versova, Ghatkopar</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>Connecting lines</strong></p></td>
                                            <td className="text-center">
                                                <p>Yellow Line 2, Aqua Line 3, &amp; Red Line 7</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>No of Stations</strong></p></td>
                                            <td className="text-center"><p>12</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>Type</strong></p></td>
                                            <td className="text-center"><p>Rapid transit</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>System</strong></p></td>
                                            <td className="text-center"><p>Mumbai Metro</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>Operator</strong></p></td>
                                            <td className="text-center">
                                                <p>Mumbai Metro One Private Limited (Mumbai Metro 1)</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>Depot</strong></p></td>
                                            <td className="text-center"><p>Four Bungalows</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>Line length</strong></p></td>
                                            <td className="text-center"><p>10.81 km</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>Track length</strong></p></td>
                                            <td className="text-center"><p>11.40 km</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>Number of tracks</strong></p></td>
                                            <td className="text-center"><p>2</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>Character</strong></p></td>
                                            <td className="text-center"><p>Elevated</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p><strong>Operating speed</strong></p></td>
                                            <td className="text-center"><p>80 km/h (50 mph)</p></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <h3>Versova to Ghatkopar Metro Map</h3>
                            <p>The Versova Ghatkopar Metro Route, also known as the Blue Line metro, comprises 12 stations, including Versova, D.N. Nagar, Azad Nagar, Andheri, Western Express Highway, Chakala, Airport Road, Marol Naka, Saki Naka, Asalpha, Jagruti Nagar, and Ghatkopar. These stations were intended to provide convenient access to major residential neighbourhoods, commercial districts, and transportation hubs.</p>
                            <p>The line begins at Versova and ends at Ghatkopar. Azad Nagar, Chakala (JB Nagar), and Saki Naka are the interchange stations for Yellow Line 2, Red Line 7, and the planned Aqua Line 3.</p>
                            <div className="post-image-container image-fit-contain">
                                <img class="show-on-mobile img-fluid" src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-26.png " alt="" />
                            </div>
                            <h3>Blue Line Mumbai Metro, or Versova to Ghatkopar Metro Stations.</h3>
                            <p>Mumbai Metro 1’s Blue Line has the following metro stations:</p>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>

                                        <tr>
                                            <td className="text-center"><p><strong>Station Name</strong></p></td>
                                            <td className="text-center"><p><strong>Connectivity</strong></p></td>
                                            <td className="text-center"><p><strong>Distance from Versova</strong></p></td>
                                            <td className="text-center"><p><strong>Distance from Ghatkopar</strong></p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Versova</p></td>
                                            <td className="text-center"><p>None</p></td>
                                            <td className="text-center"><p>0 km</p></td>
                                            <td className="text-center"><p>10.821 km</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>DN Nagar</p></td>
                                            <td className="text-center"><p>Yellow Line 2</p></td>
                                            <td className="text-center"><p>0.955 km</p></td>
                                            <td className="text-center"><p>9.866 km</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Azad Nagar</p></td>
                                            <td className="text-center"><p>None</p></td>
                                            <td className="text-center"><p>1.751 km</p></td>
                                            <td className="text-center"><p>9.07 km</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Andheri</p></td>
                                            <td className="text-center"><p>Western Line, (via Andheri railway station)</p></td>
                                            <td className="text-center"><p>3.111 km</p></td>
                                            <td className="text-center"><p>7.71 km</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Western Express Highway</p></td>
                                            <td className="text-center"><p>Red Line 7</p></td>
                                            <td className="text-center"><p>4.118 km</p></td>
                                            <td className="text-center"><p>6.703 km</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Chakala (JB Nagar)</p></td>
                                            <td className="text-center"><p>None</p></td>
                                            <td className="text-center"><p>5.382 km</p></td>
                                            <td className="text-center"><p>5.439 km</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Airport Road</p></td>
                                            <td className="text-center"><p>None</p></td>
                                            <td className="text-center"><p>6.107 km</p></td>
                                            <td className="text-center"><p>4.714 km</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Marol Naka</p></td>
                                            <td className="text-center"><p>Aqua Line 3</p></td>
                                            <td className="text-center"><p>6.705 km</p></td>
                                            <td className="text-center"><p>4.116 km</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Saki Naka</p></td>
                                            <td className="text-center"><p>None</p></td>
                                            <td className="text-center"><p>7.78 km</p></td>
                                            <td className="text-center"><p>3.041 km</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Asalpha</p></td>
                                            <td className="text-center"><p>None</p></td>
                                            <td className="text-center"><p>8.903 km</p></td>
                                            <td className="text-center"><p>1.918 km</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Jagruti Nagar</p></td>
                                            <td className="text-center"><p>None</p></td>
                                            <td className="text-center"><p>9.765 km</p></td>
                                            <td className="text-center"><p>1.056 km</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Ghatkopar</p></td>
                                            <td className="text-center"><p>Central Line (via Ghatkopar railway station)</p></td>
                                            <td className="text-center"><p>10.821 km</p></td>
                                            <td className="text-center"><p>0 km</p></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <h3>Station Facilities along the Versova-Ghatkopar Metro Route</h3>
                            <p>Reliance Metro Line 1 has 12 stops on three levels, accessible via stairs, escalators and lifts. The second-level platforms have a maximum separation of 85 mm between train doors. The stations include 100 staircases (at least four in each), 45 lifts and 95 escalators.</p>
                            <div className="post-image-container image-fit-contain">
                                <img class="show-on-mobile img-fluid" src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-1-1.png " alt="" />
                            </div>
                            <p>Wi-Fi access is accessible at all twelve stations. There are no parking facilities on Line 1, and the Ghatkopar station is connected to the western side of the Ghatkopar railway station via a footbridge.</p>
                            <p>As part of the Station Area Traffic Improvement Scheme (SATIS), the MMRDA relocated all bus and taxi stands 40-50 metres from the stations in order to alleviate traffic congestion and restricted pedestrian movement.</p>
                            <h3>The table includes a list of services and facilities available at all Reliance Metro stations:</h3>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>

                                        <tr>
                                            <td className="text-center"><p><strong>Service</strong></p></td>
                                            <td className="text-center"><p><strong>Description</strong></p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Escalators</p></td>
                                            <td className="text-center">
                                                <p>Escalators connect the concourse and platform levels, as well as the road level to the concourse. All travellers can utilise the escalators.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Elevators</p></td>
                                            <td className="text-center">
                                                <p>The metro stations contain lifts that are specifically developed for senior citizens, pregnant women and passengers with special needs.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Tactile Path</p></td>
                                            <td className="text-center">
                                                <p>There are tactile walkways to aid visually challenged passengers.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Ramps</p></td>
                                            <td className="text-center">
                                                <p>Wheelchair travellers can utilise the ramps to easily reach the lifts.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Wheelchairs</p></td>
                                            <td className="text-center">
                                                <p>Wheelchairs are available on-demand at all stations. This addresses the demands of commuters.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>First Aid</p></td>
                                            <td className="text-center">
                                                <p>All Reliance Metro stations offer first aid services.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Washrooms</p></td>
                                            <td className="text-center">
                                                <p>There are separate restrooms for women and men. There are also washrooms for passengers with disabilities.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Water Coolers</p></td>
                                            <td className="text-center">
                                                <p>All stations provide drinking water.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Passenger Information Display System (PIDS)</p></td>
                                            <td className="text-center">
                                                <p>The information display system gives real-time data on train service, timetables, and disruptions.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Passenger Announcement System (PAS)</p></td>
                                            <td className="text-center">
                                                <p>Announcements are made to passengers via announcement systems.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Signages</p></td>
                                            <td className="text-center">
                                                <p>All metro stations include signage that provides information regarding routes, layouts, utilities, entry, and exits.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Customer Care</p></td>
                                            <td className="text-center">
                                                <p>Customer service desks are available in metro stations where passengers can seek assistance or information.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>F&amp;B Facilities</p></td>
                                            <td className="text-center">
                                                <p>There are a variety of food and beverage kiosks at metro stations.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Convenience Stores</p></td>
                                            <td className="text-center">
                                                <p>There are convenience stores in the metro station.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Passenger Help Point (PHP)</p></td>
                                            <td className="text-center">
                                                <p>There are passenger assistance points on the platform. Commuters can use this to call the station controller in an emergency.</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Bank ATM</p></td>
                                            <td className="text-center">
                                                <p>ATMs from various banks are available in metro stations.</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <h3>Mumbai Blue Line Metro Train Facilities</h3>
                            <p>Reliance Metro trains include the following features and facilities:</p>
                            <p>All the trains are air-conditioned.</p>
                            <p>A four-coach train can accommodate approximately 1500 commuters, whereas a six-coach train may accommodate up to 2250.</p>
                            <p>The train has a stainless steel body with fire-retardant interiors.</p>
                            <p>Metro trains allow passengers to converse with the driver.</p>
                            <p>There are specific spaces on the train for riders who use wheelchairs.</p>
                            <p>The metro trains contain black boxes that record all critical information.</p>
                            <h3>Mumbai Metro Blue Line Metro Timings</h3>
                            <p>Trains will begin service at 5:30 a.m. from Versova and Ghatkopar stations, with the final train departing Versova at 11:25 p.m. and Ghatkopar at 11:50 p.m. On weekdays (Monday through Friday), the time between trains is 3.5 minutes during peak hours, gradually increasing to 7 minutes during non-peak hours. However, the train schedule changes depending on the amount of commuters on Saturdays, Sundays, and public holidays. Timings are subject to change. Please contact the customer service counter for the most recent information.</p>
                            <h3>Versova to Ghatkopar Metro Fare</h3>
                            <p>The Mumbai Metro Line 1 operates on a distance-based fare structure, with fares ranging from 10 to 40 rupees. The fare is computed according on the distance travelled. The metro fare is computed using an automatic fare collection (AFC) system, in which passengers scan their smart cards or tokens at entry and exit locations to determine their fare.</p>
                            <p>The Mumbai Metro Line 1 includes a user-friendly ticketing system with a variety of ticketing alternatives for travellers. The system incorporates smart cards, paper tickets, and a mobile ticketing system that allows users to buy tickets online or via the WhatsApp e-ticketing system, which will be introduced in 2022.</p>
                            <h3>Metro Line 1 Ticketing Options</h3>
                            <p>WhatsApp E-tickets: The e-ticketing system supports “no-radius” booking, allowing users to buy tickets from the comfort of their own homes. To book e-tickets via WhatsApp, follow these steps:</p>
                            <p>Begin a conversation with the Mumbai Metro One phone number (91 9670008889) by saying “Hi”.</p>
                            <p>Within 5 minutes, you will be sent an e-ticket booking link.</p>
                            <p>To maintain contactless transactions, open the WhatsApp chat and navigate to the E-ticket gateway page.</p>
                            <p>Choose your journey route and type (single or return).</p>
                            <p>Choose from multiple payment options.</p>
                            <p>Once you have paid, you will receive a metro E-ticket to your WhatsApp number.</p>
                            <p>Click the link to open the E-ticket.</p>
                            <p>Scan the E-ticket at any AFC or touchpoint to start your journey.</p>
                            <p>On April 10, 2024, Mumbai Metro introduced a new ticketing system for the Versova – Andheri – Ghatkopar metro 1 line in the form of a QR coded Tap wristband. This method allows passengers to scan their QR-coded wristbands at the automated fare collection gate. Commuters can purchase this at the ticketing counter in the same manner they buy the card. Wristbands are available at all Mumbai Metro Line 1 stations.</p>
                            <h3>Ridership Details of Mumbai Metro Blue Line</h3>
                            <p>Since its debut on June 8, 2014, the Mumbai Metro Line, also known as the Blue Line Mumbai Metro (Versova-Andheri-Ghatkopar), has carried 90 crore people. According to MMOPL, the Mumbai Metro Line 1 has exceeded 10 lakh commuters per year and will reach an astonishing 90 crore ridership by December 2, 2023.</p>
                            <p>The Blue Line Mumbai Metro transports around 4.6 lakh commuters on weekdays, with 408 trips each day. It has a service frequency of about 3.5 minutes during peak hours and 8 minutes during off-peak times.</p>
                            <p>The top three routes are</p>
                            <p>Andheri to Ghatkopar</p>
                            <p>Andheri to Sakinaka</p>
                            <p>Ghatkopar to Marol Naka</p>
                            <p>The top three stations in terms of footfall are Ghatkopar, Andheri, and Sakinaka.</p>
                            <p>Versova Ghatkopar Mumbai. Metro is also one of the busiest corridors. It offers alternate and speedier travel options via the Andheri-Kurla road, which is one of the most congested due to the large number of corporate offices and hotels.</p>
                            <h3>Mumbai Metro Line 1: Future Expansion Plans</h3>
                            <p>In the near future, development plans for the Versova Ghatkopar metro line envision a seamless connection of the metro network. It specifically covers the extension of the Mumbai Metro’s Blue Line 1A. The extension will be approximately 3.02 kilometres long. The extension extends up to Navi Mumbai International Airport (NMIA). The extension will pass through the Sagarsangam Interchange Station. This will provide travellers with direct metro access to both the Mumbai and Navi Mumbai airports.</p>
                            <p>Mumbai Metro intends to further integrate Line 1, the Blue Line, with other major metro lines now under development. It aims to cover 300 km of operable metro network by 2030.</p>
                            <p>The interchanges planned for Mumbai Metro Line 1 include one with Line 2, which connects Dahisar to DN Nagar. Another planned interchange is with Mumbai Metro Line 7 from Dahisar to Gundavali.</p>
                            <p>Mumbai Metro officials anticipate enhancements to Andheri as part of the Western railway suburban corridor integration project.</p>
                            <h3>Contract Details for the Versova-Andheri-Ghatkopar Metro Routes</h3>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>

                                        <tr>
                                            <td className="text-center"><p><strong>Package</strong></p></td>
                                            <td className="text-center"><p><strong>Awarded</strong></p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Civil Works – Viaduct</p></td>
                                            <td className="text-center"><p>Simplex Infrastructure Ltd</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Civil Works – Stations</p></td>
                                            <td className="text-center"><p>Sew Infrastructure Ltd</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Civil Works – Special Bridges</p></td>
                                            <td className="text-center"><p>Sew Infrastructure Ltd</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Civil Works – Depot Earthworks</p></td>
                                            <td className="text-center"><p>Shyam Narayan &amp; Bros</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Rolling stock</p></td>
                                            <td className="text-center"><p>CSR Puzhen</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Signalling system</p></td>
                                            <td className="text-center"><p>Siemens</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Power Supply Traction &amp; SCADA ABB</p></td>
                                            <td className="text-center"><p>ABB</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>E&amp;M</p></td>
                                            <td className="text-center"><p>ABB</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Communication system</p></td>
                                            <td className="text-center"><p>Thales</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Trackwork</p></td>
                                            <td className="text-center"><p>VNC Rail One</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Automatic Fare Collection</p></td>
                                            <td className="text-center"><p>Indra</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Escalators</p></td>
                                            <td className="text-center"><p>Schindler</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Elevators</p></td>
                                            <td className="text-center"><p>OTIS</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Depot Machinery &amp; Plant</p></td>
                                            <td className="text-center"><p>Awarded to various suppliers</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>Depot Civil Works</p></td>
                                            <td className="text-center"><p>Ahluwalia Contracts (India) Ltd.</p></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <h3>Versova-Andheri-Ghatkopar Metro Route Contact Information</h3>
                            <p>There are customer service counters at each of Reliance Metro’s 12 stations. These counters are staffed from the first service in the morning until the last metro service at night.</p>
                            <p>Customers and commuters may contact the metro at:</p>
                            <p>Call: +91 22 30310900</p>
                            <p>WhatsApp Care: +91 9930310900</p>
                            <p>Email: customercare@reliancemumbaimetro.com</p>
                            <h3>Mumbai Versova-Ghatkopar Metro Line 1: Impact on Real Estate</h3>
                            <p>Building a metro line always has a favourable impact on property prices, whether residential or commercial. The Mumbai Metro Line 1 of the Mumbai Versova Ghatkopar metro line was one of the first to be built in Mumbai.</p>
                            <p>Residential areas along the Versova Ghatkopar line experienced an increase in property prices. The Mumbai Metro Line 1’s better connectivity is one of the primary reasons of property price increases.</p>
                            <p>Ghatkopar and Andheri have seen major price increases in both residential and business regions. Furthermore, property prices in Andheri’s suburbs, like as Marol, have risen. Marol has seen an increase in both home sales and rental costs.</p>
                            <p>Similarly, JB Nagar, another close locality on the Versova-Ghatkopar Metro Line, has seen an increase in prices. In reality, residential property prices in JB Nagar have risen sharply since January 22.</p>
                            <h3>Residential Projects Near the Versova-Ghatkopar Metro Route</h3>
                            <p>Rustomjee Ocean Vista Versova – Rustomjee Ocean Vista – Luxury 4BHK Homes in Versova, Mumbai, Discover your dream house at Rustomjee Ocean Vista in Versova, Mumbai. Enjoy big 4BHK apartments with stunning ocean views, providing both comfort and luxury in a premium location.</p>
                            <p>Kalpataru Aura – Spread across 9 acres, it offers 2 and 2.5 BHK apartments with all modern amenities such as a clubhouse, swimming pool, manicured gardens, and more. The project includes 1224 units spread over many high-rise buildings.</p>
                            <p>Oberoi Sky Gardens – This property has four BHK flats. The property features a lawn, pool, clubhouse, and running track. It features 96 flats spread throughout a 30-story building.</p>
                            <p>Rustomjee Ashiana Juhu – Experience the pinnacle of luxurious living at Rustomjee Ashiana in Juhu. Thoughtfully designed 3 and 4 BHK flats/apartments provide a luxurious living environment, replete with private decks to enjoy life’s better moments!</p>
                            <h3>Wrapping Up the Versova-Ghatkopar Metro Route</h3>
                            <p>The Versova-Ghatkopar Metro Route is one of the most important lines in the Mumbai Metro network. The line is approximately 11.4 kilometers long and provides a handy means of transportation throughout the city. Most trains on this line have air conditioning, CCTV cameras and automatic doors. It also connects to several other lines in the city and is a low-cost mode of transportation. Furthermore, the Versova-Ghatkopar Metro Route exemplifies the government’s efforts to modernize the city’s public transportation infrastructure.</p>
                            <p>If you want an expedient method to tour Mumbai, use the Reliance Metro Route.</p>
                            <h3>FAQ’S</h3>
                            <p>How many stations are there on the Versova Ghatkopar metro route?</p>
                            <p>The Versova-Ghatkopar metro route has 12 stations, including Versova, D.N. Nagar, Azad Nagar, Andheri, WEH, Chakala, Airport Road, Marol Naka, Saki Naka, Asalpha, Jagruti Nagar, and Ghatkopar.</p>
                            <p>What is the total length of the Versova Ghatkopar metro route?</p>
                            <p>The Versova Ghatkopar metro route spans around 11.4 km.</p>
                            <p>What is the frequency of trains on the Versova Ghatkopar metro route?</p>
                            <p>Trains run every 3.5 minutes during peak hours on weekdays (Monday through Friday), gradually increasing to 8 minutes during off-peak hours. The train frequency varies according to the amount of commuters on Saturdays, Sundays, and public holidays.</p>
                            <p>Is there a parking facility available at the stations on the Versova Ghatkopar metro route?</p>
                            <p>Due to space limits, there are no parking facilities at the Versova-Ghatkopar metro stations.</p>
                            <p>What is the metro fare on Versova Ghatkopar metro route?</p>
                            <p>The Mumbai Metro Line 1 uses a distance-based fare structure, with fares ranging from 10 to 40 rupees. The fare is computed according on the distance travelled.</p>
                            <p>How much time does it take to reach from Versova to Ghatkopar through Mumbai metro Line 1 ?</p>
                            <p>It takes 21 minutes to get from Versova to Ghatkopar via Mumbai Metro Line 1.</p>
                            <p>Is Mumbai Metro Line 1 and line 2A connected ?</p>
                            <p>Yes, the DN Nagar station on Line 1 connects Mumbai Metro Lines 1 and 2A.</p>
                            <p>Is Andheri station on Mumbai Metro Line 1 connected to the railway station?</p>
                            <p>Yes, the Andheri station on Mumbai Metro line 1 is linked to the Andheri Railway station via a footbridge.</p>
                            <p>What is another name for Versova Ghatkopar Metro Route?</p>
                            <p>The Versova Ghatkopar Metro Route is also known as Mumbai Metro Line 1 or Blue Line. It is also known as the Reliance Metro.</p>
                            <p>Which are the interchange stops on the Versova Ghatkopar Metro Route?</p>
                            <p>The Versova Ghatkopar route connects DN Nagar with Line 2, Andheri Railway Station with Western Railway, Marol Naka with Line 3, and Ghatkopar with Central Railway.</p>
                            <p>What is the line colour of Mumbai Metro Line 1?What is the line colour of Mumbai Metro Line 1?</p>
                            <p>Mumbai Metro Line 1 is delegated as the Blue Line.</p>
                            <p>Are the stations on Mumbai Metro Line 1 Versova-Ghatkopar Route elevated or underground?</p>
                            <p>Mumbai Metro Line 1, the Versova-Ghatkopar route, is elevated and connects the Eastern and Western suburbs to the Western and Central Railways.</p>
                            <p>What time does the metro operate on Mumbai Metro Line 1?</p>
                            <p>The Mumbai Metro Blue Line operates from 6 a.m. to 11 p.m.</p>
                            <p>What is the total cost of Mumbai Metro Line 1?</p>
                            <p>The Mumbai Metro Blue Line was built for an estimated cost of Rs 4,321 crore.</p>
                            <p>When did the Versova-Ghatkopar metro route start?</p>
                            <p>The Versova-Ghatkopar metro line opened on June 8, 2014.</p>

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
