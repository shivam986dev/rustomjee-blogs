import React from "react";
// import "./inner_builder1.css";
import InfrastructureImage from "../../../assets/img/infrastructure/unnamed-1.png";
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
                Atal Setu
            </h1>


            {/* Main Content */}
            <div className="row">

                {/* LEFT CONTENT */}
                <div className="col-lg-8">
                    <div className="all_innerbanner">
                        {/* Banner Image */}
                        <div className="all_banner mb-4">
                            <img src={InfrastructureImage} alt="img" className="w-100 all_banner_img" />
                        </div>
                        <div className="top-builders-mumbai">
                            <p>The Mumbai Trans Harbour Link, officially designated Atal Bihari Vajpayee Sewri-Nhava Sheva Atal Setu and colloquially known as Atal Setu, is a 21.8 km (13.5 mi) 6-lane grade-separated motorway that connects Mumbai to its satellite megacity, Navi Mumbai. It’s India’s longest ocean ground and the world’s 12th largest ocean ground. The ground starts in Sewri, South Mumbai, spans Thane Creek north of Elephanta Island, and ends at Chirle near Nhava Sheva in Uran Taluka, Navi Mumbai. The route connects to the Mumbai-Pune Motorway in the east and the Coastal route in the west. The 6-lane trace measures 27 measures in range and has two exigency exit lanes, two edge strips, resemblant crash walls, and noise walls on both sides. The design has a total cost of ₹ 17,843 crore ($2.1 billion). The ground has the capacity to carry 70,000 vehicles daily. Construction on the ground began in April 2018 and was inaugurated by Prime Minister Narendra Modi on January 12, 2024.
                            </p>
                            <h3>Overview of Atal Setu</h3>

                            <p>In the 1990s, with the future of the Mumbai Metropolitan Region in mind, the Mumbai Metropolitan Region Development Authority (MMRDA) launched an exploration into how to  palliate Mumbai’s rising business and traffic, as well as the accidents and mishaps that redounded from it. There were previously six islands that connected Mumbai and Navi Mumbai across Thane Creek; however, they are too tiny and old to handle new traffic. As a result, all of them are limited and carrying business above their capacity, dragging the trip between the two  metropolises. As a result, the MMRDA planned to develop a thorough link between the two  metropolises in order to handle increased business and make trips easier, brisker, safer, and less stressful. The idea was submitted to the Maharashtra government for consideration in 2012. The design was approved in 2015 by the Indian government and the Ministry of Road Transport and Highways.Hence, Prime Minister Narendra Modi laid the foundation gravestone for the development of the design on December 24, 2016. originally, it was listed to be completed by 2021. The MMRDA also awarded contracts for the design in November 2017, and work began in April 2018, with completion anticipated 4.5 years later, in 2022. still, because of the COVID- 19 epidemic, the construction was delayed by roughly 8 months and was listed to be completed by August 2023, followed by December 2023. The construction was eventually completed in December 2023 and inaugurated by Prime Minister Narendra Modi on January 12, 2024.
                            </p>
                            <h3>Planning of Atal Setu Bridge</h3>

                            <p>In mid-1962, Wilbur Smith and Associates (WSA) (now CDM Smith) was commissioned to plan transport and traffic in Greater Bombay (now Mumbai). The firm’s report, based on comprehensive investigations done over 18 months, was sent to the Ministry of Road Transport and Highways (MoRTH) on December 19, 1963. Among other projects, the paper advocated the construction of the Uran Bridge, a sea link that would connect Mumbai to the mainland near the village of Uran. However, WSA remained uncertain about the link’s practicality Citing low traffic projections in Uran even in 1981, WSA’s research urged a more in-depth examination of this connection and a wait till the Trans-Thane area developed and more community services were provided to Uran. The Vashi Bridge, which connects Mankhurd in Mumbai to Vashi in Navi Mumbai, opened in 1973.
                            </p>
                            <h3>First Attempt of Atal Setu</h3>

                            <p>The first real attempt to develop the sea link occurred in 2004, when Infrastructure Leasing &amp; Financial Services (IL&amp;FS) proposed a build, own, operate, and transfer (BOOT) model. The Maharashtra State Road Development Corporation (MSRDC) also presented a counter-proposal. However, the Government of Maharashtra rejected the IL&amp;FS plan for unexplained reasons.
                            </p>
                            <h3>Second Attempt of Atal Setu</h3>

                            <p>Another attempt was made in 2005, when the MSRDC requested bids on the project.The bids offered by the Ambani brothers were judged unreasonable.A consortium consisting of the Anil Dhirubhai Ambani Group, Reliance Energy (REL), and Hyundai Engineering &amp; Construction proposed a concession period of nine years and eleven months, compared to Mukesh Ambani’s Sea King Infrastructure’s 75-year proposal. The REL-Hyundai consortium was initially excluded at the technical bid stage because Hyundai did not meet the bid document’s $200 million net worth requirement. However, the consortium contested the disqualification in the Supreme Court, and the Court permitted them 90 days to submit their proposal, which expired on December 15, 2007. The group ultimately won the proposal in February 2008. However, the MSRDC was unsure about the feasibility of the short concession period. The MSRDC thought the concession durations were “unrealistic,” and both proposals were frivolous.
                            </p>
                            <h3>Third Attempt of Atal Setu</h3>

                            <p>The  megacity’s two  structure agencies, the MSRDC and the Mumbai Metropolitan Region Development Authority( MMRDA), under the NCP and Congress, independently, planned to  make the Mumbai Trans Harbour Link( MTHL)  coincidently. The  design went through two failed rounds of extending under the MSRDC and was delayed for about two times( 2009- 2011) until the state government  decided to hand over the responsibility to MMRDA. Following the judgement, the MSRDC requested that MMRDA pay ₹ 25 crore( US$ 3.0 million) for access to the former’s design studies. After the MMRDA was charged with carrying out the MTHL, the MSRDC began expanding the Vashi Bridge by adding six further lanes to relieve business traffic at the Navi Mumbai entry. However, the MMRDA denied the MSRDC’s request to grant  finances for the Vashi Bridge expansion, believing that it would divert some ridership down from the MTHL.
                            </p>
                            <h3>Fourth Attempt of Atal Setu (Sewri-Nhava Shewa)</h3>

                            <p>In August 2011, the MMRDA engaged Arup Consultancy Engineers and KPMG to complete a techno-economic feasibility assessment for the MTHL. The MTHL project was suggested using the public-private partnership (PPP) paradigm. On October 22, 2012, then-Maharashtra Chief Minister Prithviraj Chavan approved the project. According to the Times of India, the MTHL’s delay is “symbolic of all that is wrong with infrastructure planning and implementation in Mumbai”. The newspaper daily further noted that a project being “on the drawing board after more than forty years would be in the realm of fiction in any other country”.
                            </p>
                            <p>On October 23, 2012, the project gained environmental clearance from the Ministry of Environment, Forest, and Climate Change (MoEFCC). The Maharashtra State Road Development Corporation (MSRDC) gained project clearance in March 2005, but the certificate was only valid for 5 years and expired due to delays in the bidding procedure. The ministry specified 11 conditions that the MMRDA had to meet.  Some of the conditions required the MMRDA to install noise barriers, replant five times the number of mangroves destroyed, refrain from dredging or reclamation, use construction equipment with exhaust silencers, and consult with the Bombay Natural History Society to reduce the impact on migratory birds. Environmental activists were opposed to the clearance. They pointed out that there was no public hearing following the second application for environmental clearance. They still believe that the sea link is not allowed as per the new Coastal Regulation Zone (CRZ) notification of 2011. They further argue that the sea link would devastate a vast mudflat and mangrove tract between Sewri and Nhava Sheva, which is home to migrating species such as flamingos.  Nonetheless, the MMRDA approved a plan to build sound barriers on the bridge so that it does not disturb the flamingo habitat in Sewri.  The Department of Atomic Energy (DAE) directed MMRDA to build a six-kilometer-long view barrier to block the view of the Bhabha Atomic Research Centre (BARC).  The MTHL gained coastal regulation zone permission from the MoEFCC on July 19, 2013.
                            </p>
                            <p>On October 31, 2012, the Department of Economic Affairs (DEA) approved the MTHL in principle.  The DEA suggested providing ₹1,920 crore (US$230 million) with a 35-year concession period for the project.  In the first meeting between MMRDA and DEA officials in September 2012, the ministry requested that the sea link be treated as a road and the projected concession period be reduced from 45 to 30 years. They also predicted a 15% internal rate of return on the project.  However, the MMRDA requested a higher charge since they felt the project was extremely dangerous.  The internal rate of return of 17% was agreed upon.  The termination clause in the concession agreement takes effect 30 years into the concession period. The MMRDA can trigger the clause under certain instances, such as when capacity exceeds expectations.  The conditions will be revisited in the twentieth year of the concession agreement.  The DEA is the first step in the three-tier clearance procedure to get viability gap funding (VGF) for the project. The initiative must also be approved by an empowered committee and, lastly, the Finance Minister. On November 9, 2012, the State Government issued a state-support agreement and toll notification for the project.  The empowered committee approved VGF for MTHL on December 12, 2012.  P. Chidambaram, the then-Finance Minister, approved the project on January 18, 2013.
                            </p>
                            <p>The Jawaharlal Nehru Port Trust (JNPT) requested that the MMRDA build the MTHL at a height of 51 metres, rather than the original 25 metres, with a span of 300 metres to suit its expansion plans for its fifth container terminal and to allow safe passage of larger vessels. MMRDA stated that a height of 51 metres would be too expensive. However, MMRDA officials have stated a willingness to raise the bridge’s height to 31-35 metres. On January 8, 2012, Milind Murli Deora, the then-Minister of Shipping and MP from South Mumbai, assured reporters that JNPT would provide a No Objection Certificate (NOC) to the state government to proceed with the project.
                            </p>
                            <p>In May 2012, the MMRDA selected five consortiums for the project: Cintra-SOMA-Srei and Gammon Infrastructure Projects Ltd.-OHL, concessions G.S. Engineering, GMR Infrastructure-L&amp;T Ltd.-Samsung C&amp;T Corporation, IRB Infrastructure Developers Ltd.-Hyundai, and Tata Realty and Infrastructure Ltd.-Autostrade Indian Infrastructure Development Pvt. Ltd.-Vinci Concessions Development Pvt. Ltd. None of the five qualified firms submitted bids by the project’s deadline, which was extended to August 5. On July 31, 2013, IRB-Hyundai announced their withdrawal from the bidding process, citing “the government’s apathy and unfriendly attitude towards investors wanting to develop capital-intensive infrastructure projects”. Following the collapse of the procurement, the MMRDA opted to abandon the PPP approach and construct the project on a cash contract basis.
                            </p>
                            <p>In January 2013, the Government of India sanctioned ₹1,920 crore (US$230 million) to cover a 20% viability gap for the MTHL project.  Under the public-private partnership (PPP) model proposed for the project, the state government would invest the same amount as the central government, with the developer winning the auction covering the remaining 60%. The concession duration would have lasted 35 years, including 5 years for construction. However, the consortia nominated for the project were concerned that the intended and currently under-construction Navi Mumbai International Airport, which was badly delayed, would account for 15-20% of the MTHL’s expected traffic.  The MMRDA has established a provision for the national government to provide a shortfall loan if traffic falls 20% short of expectations.
                            </p>                            <h3 class="wp-block-heading">Switch from PPP to EPC model</h3>
                            <p>In August 2013, the MMRDA opted to abandon the PPP approach for the project and instead execute it on an engineering, procurement, and construction (EPC) basis. Subsequently, the Japan International Cooperation Agency (JICA) expressed interest in funding the initiative. In January 2014, Ashwini Bhide, the then-MMRDA extra metropolitan commissioner, told The Indian Express that the state government had submitted a formal request to the DEA seeking clearance to receive funds from JICA. In June 2014, Business Line stated that the Jawaharlal Nehru Port Trust had agreed to acquire a stake in the project.
                            </p>
                            <p>The project faced a major setback in April 2015, when the MoEFCC’s forest advisory committee (FAC) refused approval, citing concerns about the project’s impact on existing mangroves and the flamingo population. The project requires ministry approval because it will impact 38 hectares of protected mangrove forests and 8.8 hectares of forest land on the Navi Mumbai end. The sea link’s beginning position threatens an estimated 20,000-30,000 lesser and greater flamingos, as well as mangrove habitat. The Sewri mudflats are home to 150 bird species and are designated a “Important Bird Area”.  The FAC directed the state government to provide a study report on the project’s impact on the flamingo population, and suggested that the government seek assistance from either the Bombay Natural History Society (BNHS) or the Wildlife Institute of India, Dehradun, to perform the research. The MMRDA would bear the expense of the study, and it would also be required to provide safeguards to ensure that the flamingos at Sewri are not disturbed.
                            </p>
                            <p>On April 17, 2015, Nitin Gadkari, the Minister of Road Transport and Highways, declared that he preferred the construction of an underwater tunnel over a sea link. Gadkari argued that the tunnel would be less expensive than a bridge (using the example of a tunnel in Belgium) and would be more aesthetically pleasing because a sea link would hinder the city’s shoreline.  However, Gadkari underlined that the Government of India will accept the state government’s final judgement on this topic. Following a visit to China, Maharashtra’s then-chief minister, Devendra Fadnavis, said on May 20, 2015, that the China Communications Construction Company (CCCC) has expressed interest in the MTHL project. According to Fadnavis, the CCCC plans to complete the project within 3-4 years of its appointment and will grant 2% concessional finance.
                            </p>
                            <p>The Maharashtra Coastal Zone Management Authority cleared the project in November 2015.  In January 2016, the Forest Advisory Committee (FAC) awarded forest clearance, while the Experts’ Appraisal Committee (EAC) of the MoEFCC approved CRZ clearance to the project. The CRZ requires the MMRDA to spend at least ₹ 335 crore on an “environment management program.”The following month, Fadnavis declared that the project had gotten all necessary approvals.
                            </p>
                            <p>In February 2016, JICA agreed to lend the state government 80% of the project’s total cost at an annual interest rate of 1–1.4 percent.The MMRDA will bear 1.2% of the project’s costs, with the state government covering the remainder.Because JICA refused to lend directly to the state government, the Union Government acted as guarantor of the loan. As part of the agreement between JICA and the state government, two rescue lanes will be added to the proposed MTHL plan, and a 4 km portion of the bridge will be built as a steel-only structure rather than the previously planned cement and concrete bridge. Using steel on this stretch will increase the project cost by ₹4000 crores. JICA formally approved the financial agreement on May 9, 2016, and the MMRDA started the bidding process the next day. The MTHL gained final environmental certification from the State Forest Department in May 2017.
                            </p>
                            <h3>Tendering</h3>

                            <p>The MMRDA has issued a request for qualifications (RFQ) for civil construction of three packages: a 10.38-kilometer (6.45 mi) bridge section across Mumbai Bay and the Sewri interchange (₹6,600 crore), a 7.807-kilometer (4.851 mi) bridge section across Mumbai Bay and Shivaji Nagar, near the Gavan interchange (₹4,900 crore), and a 3.613-kilometer (2.245 mi) viaduct with interchanges at SH-52, SH-54, and NH-4B near Chirle, Navi Mumbai. The MMRDA received 11 pre-qualification proposals for the first two packages and 17 bids for the third. The agency noted that a single party would not be granted both the first and second packages simultaneously, but any other combination of the three packages would be acceptable. The MMRDA hired a consortium led by AECOM Asia Co. Ltd, Padeco India Pvt. Ltd, Dar Al-Handasah, and T. Y. Lin International as the general consultant for the project on 26 November 2016. According to U.P.S. Madan, the then Metropolitan Commissioner of the MMRDA, the general consultants appointed for the MTHL project would engage in a variety of activities, including assisting MMRDA in organizing pre-bid meetings, examining bid documents, obtaining various permissions from government and semi-government agencies, examining concept designs, monitoring project construction, and ensuring work quality, among other things.
                            </p>
                            <p>According to U.P.S. Madan, the then Metropolitan Commissioner of the MMRDA, the general consultants appointed for the MTHL project would engage in a variety of activities, including assisting MMRDA in organizing pre-bid meetings, examining bid documents, obtaining various permissions from government and semi-government agencies, examining concept designs, monitoring project construction, and ensuring work quality, among other things.
                            </p>
                            <p>The MMRDA filed for security clearance from the Union Ministry of Home Affairs to begin construction near the Bhabha Atomic Research Centre, the Mumbai Port Trust, and the Jawaharlal Nehru Port Trust. These institutions have restricted areas protected by the Official Secrets Act. The MMRDA also provided the identities of all enterprises that bid on the project to the Home Ministry. The ministry will issue clearance following negotiations with other ministries, including the Ministry of External Affairs and intelligence agencies.The Home Ministry denied security clearance to a bid from China Railway Major Bridge Engineering Group, a joint venture with Gayatri Projects Limited, as well as a consortium of IL&amp;FS Engineering Limited and Ranjit Buildcon Limited. Both consortiums were later disqualified from the bidding process by the MMRDA. The MMRDA noted that the Home Ministry had not presented the agency with an official justification for refusing security clearance. On July 18, IL&amp;FS Engineering filed an appeal against the ruling at the Bombay High Court. The Court allowed IL&amp;FS to submit its bid, subject to a final determination from the Court.
                            </p>
                            <p>The MMRDA received proposals from 17 of the 29 shortlisted contractors by the final bid submission date of July 19, 2017.  The government indicated that it will take one month to perform technical evaluations of bids and award contracts. On November 9, 2017, the MMRDA awarded contracts to a consortium of Larsen &amp; Toubro (L&amp;T) and Japan’s IHI Corporation, a consortium of Daewoo and Tata Projects (TPL), and L&amp;T itself to build the Sewri side of the sea bridge, the Navi Mumbai side of the sea bridge, and the bridge portion on land towards Chirle, respectively. The contracts between the MMRDA and the L&amp;T-IHI Corporation consortium were officially signed on December 27, 2017. L&amp;T received ₹7,637.3 crore (US$900 million) for the 10.38 km package 1, and ₹1,013.79 crore (US$120 million) for the 3.61 km package 3.  Daewoo and Tata Projects secured a contract for 7.807 km package 2 at a later date, costing ₹5,612.61 crore (US$660 million).
                            </p>
                            <p>The MMRDA solicited bids for Package 4 in September 2021.  The tender calls for the design, supply, installation, testing, and commissioning of an intelligent transport system, toll management, highway and bridge street lighting, electrical work, toll plaza construction, and administrative facilities.  A joint venture between Strabag Infrastructure &amp; Safety Solutions GmbH and Strabag AG, controlled by Austrian construction business Strabag, was granted the ₹427 crore (US$51 million) contract for Package 4.
                            </p>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <tbody>

                                        <tr>
                                            <td><p><strong>Package</strong></p></td>
                                            <td><p><strong>Length</strong></p></td>
                                            <td><p><strong>Details</strong></p></td>
                                            <td><p><strong>Contractor(s)</strong></p></td>
                                            <td><p><strong>Cost</strong></p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>1</p></td>
                                            <td className="text-center"><p>10.38 km</p></td>
                                            <td>
                                                <p>
                                                    Bridge portion across Thane Creek, and the Sewri{" "}
                                                    <a href="https://en.wikipedia.org/wiki/Interchange_(road)#T_and_Y_interchanges" target="_blank" rel="noopener noreferrer">
                                                        Y-interchange
                                                    </a>.
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <a href="https://en.wikipedia.org/wiki/Larsen_%26_Toubro" target="_blank" rel="noopener noreferrer">
                                                        Larsen &amp; Toubro
                                                    </a>{" "}
                                                    and{" "}
                                                    <a href="https://en.wikipedia.org/wiki/IHI_Corporation" target="_blank" rel="noopener noreferrer">
                                                        IHI Corporation
                                                    </a>
                                                </p>
                                            </td>
                                            <td><p>₹7,637.3 crore (US$900 million)</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>2</p></td>
                                            <td className="text-center"><p>7.807 km</p></td>
                                            <td>
                                                <p>
                                                    Bridge portion across Thane Creek, and the Shivaji Nagar{" "}
                                                    <a href="https://en.wikipedia.org/wiki/Cloverleaf_interchange" target="_blank" rel="noopener noreferrer">
                                                        cloverleaf interchange
                                                    </a>.
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <a href="https://en.wikipedia.org/wiki/Tata_Projects" target="_blank" rel="noopener noreferrer">
                                                        Tata Projects
                                                    </a>{" "}
                                                    Limited and{" "}
                                                    <a href="https://en.wikipedia.org/wiki/Daewoo_E%26C" target="_blank" rel="noopener noreferrer">
                                                        Daewoo E&amp;C
                                                    </a>
                                                </p>
                                            </td>
                                            <td><p>₹5,612.61 crore (US$660 million)</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>3</p></td>
                                            <td className="text-center"><p>3.613 km</p></td>
                                            <td>
                                                <p>
                                                    Viaducts and interchanges that connect MTHL with State Highways 52 and
                                                    54 and National Highway 4B at Chirle.
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <a href="https://en.wikipedia.org/wiki/Larsen_%26_Toubro" target="_blank" rel="noopener noreferrer">
                                                        Larsen &amp; Toubro
                                                    </a>
                                                </p>
                                            </td>
                                            <td><p>₹1,013.79 crore (US$120 million)</p></td>
                                        </tr>

                                        <tr>
                                            <td className="text-center"><p>4</p></td>
                                            <td className="text-center"><p>—</p></td>
                                            <td>
                                                <p>
                                                    <a href="https://en.wikipedia.org/wiki/Intelligent_transport_system" target="_blank" rel="noopener noreferrer">
                                                        Intelligent transport system
                                                    </a>
                                                    , toll management, street lighting, electrical works, toll plazas, and
                                                    administrative buildings.
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <a href="https://en.wikipedia.org/wiki/Strabag" target="_blank" rel="noopener noreferrer">
                                                        Strabag
                                                    </a>
                                                </p>
                                            </td>
                                            <td><p>₹526 crore (US$62 million)</p></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <h3>Land acquisition for Atal Setu</h3>

                            <p>The project required 130 hectares of land. The City and Industrial Development Corporation (CIDCO) provided 88 hectares. The remaining acreage was privately owned. According to MMRDA authorities, land owners received the same compensation package as those involved in the Navi Mumbai International Airport project. The project affected three hundred and twenty structures in Sewri, 250 of which were residential.The MMRDA assisted resettlement to the affected population by supplying housing in Kanjurmarg or Kurla.  The majority decided to relocate to Kanjurmarg. The MMRDA compensated 1,500 fisherman with ₹6 lakh (US$7,100) each due to the project’s construction. In October 2016, the MMRDA agreed to pay MbPT ₹1000 crores in increments over 30 years as rent for using their land to construct ramps for the MTHL on the Mumbai side. The MMRDA obtained 27.2 hectares of land on the Sewri side of the MbPT, with 15.17 hectares temporarily utilised for the casting yard.
                            </p>
                            <p>The MMRDA used drones to conduct survey work for the MTHL. The drones were outfitted with 360-degree cameras that provided up to 3 mm accuracy. Aerial surveys require less time than ordinary surveys, are more accurate, and help defend against bogus compensation claims. More than 1,000 boreholes were dug to investigate the stratum. The MMRDA began performing a geological study for the project on January 15, 2018. The project work affected 1,635 trees, of which 753 were felled and the remaining 882 were transplanted in different sites. The majority of the afflicted trees were found in Sewri and Vakola.
                            </p>
                            <h3>Metro Line</h3>

                            <p>In 2010, the MMRDA commissioned Rail India Technical and Economic Service (RITES) to write a detailed project report (DPR) for the Mumbai Trans Harbour Metro Rail Link (MTHMRL), a proposal to construct a dual-track metro line beneath the MTHL’s vehicle lanes. The 49-kilometer metro line was designed to connect Prabhadevi and Dushmi, which are around 20 kilometers from Chirle.The metro line was to be extended to the proposed Navi Mumbai International Airport and linked to the Navi Mumbai Metro’s Ranjanpada-Seawoods-Kharkopar and Mumbai Metro’s Sewri-Prabhadevi corridors, respectively. However, the MMRDA abandoned plans for the metro line in 2012 and decided to construct simply a road bridge. An MMRDA official indicated that a thorough assessment revealed that creating the foundation for the bridge with accommodations for two metro lines will increase costs rather than reduce them. As a result, it would be conceivable to build a separate bridge for the metro in the future. Another reason mentioned was that the Navi Mumbai International Airport and the Mumbai Metro’s Sewri-Prabhadevi section were still far from completed.
                            </p>
                            <p>In June 2021, the MMRDA announced that it was reconsidering the potential of installing metro lines along the MTHL.  According to an official, additional building on the MTHL for the metro line would be unnecessary because only the rails would need to be built. The Worli-Sewri subterranean metro corridor, part of Mumbai Metro’s Line 3 (Aqua Line), is currently under construction. The Sewri metro station will connect the MTHL by access pathways, linking it to Navi Mumbai. In September 2021, the MMRDA announced that, regardless of the decision on metro lines, two lanes on the MTHL will be dedicated to a bus rapid transit system.  The agency hired a consultant to assess whether metro lines may be built on the MTHL in January 2022. The study’s draft report, which was submitted in April 2022, concluded that the MTHL’s existing pillars could not handle the load of a metro system.  S.V.R. Srinivas, then Metropolitan Commissioner of the MMRDA, claimed that the agency was looking into remedies, such as improving the load bearing capability of the pillars, before making a final decision.
                            </p>
                            <h3>Construction of Atal Setu</h3>

                            <p>The MTHL is 21.8 kilometres long, incorporating a 16.5-kilometer sea bridge and 5.5-kilometer land viaducts at either end of the bridge. It was erected in three pieces. The bridge’s construction required 165,000 tonnes of reinforcement steel, 96,250 tonnes of structural steel, and 830,000 cubic metres of concrete. The bridge incorporates India’s first use of orthotropic decks. The bridge’s unique steel decks allow for larger spans than standard girders. The bridge included 70 orthotropic decks, which required around 96,250 tonnes of steel. The steel spans weigh up to 2,600 tonnes and account for 4.7 kilometres of the bridge’s length, while the remainder is made up of 60-metre-long concrete spans weighing up to 130 tonnes each. This 4.7-kilometer segment is located at the MTHL’s highest point and features a 180-meter-long steel bridge, the longest in India. The MTHL’s shortest steel span measures 110 meters. The MMRDA chose steel spans for these portions to avoid the need to build pillars to support the bridge, which would impede ship traffic in the area.
                            </p>
                            <p>Only roughly 3% of the bridge structure was constructed on-site, including the foundations and pouring cement over metal girders.The remainder of the bridge was prefabricated and delivered to the building site for installation.The orthotropic deck components were made in Japan, Myanmar, Taiwan, and Vietnam and sent to Karanja Port in Uran for assembly. The decks were transported to the building site by barge and took approximately 3 days to install in place. A programmed self-propelled transporter loaded the deck onto the barge, then computer-controlled jacks installed it on the bridge within a 5 mm accuracy band.Larsen &amp; Toubro’s Kattupalli Shipyard manufactured the barge that transported the decks expressly for the MTHL project. The bridge’s concrete segment is made up of around 12,000 precast concrete boxes from a casting yard.The concrete parts were combined to form 60-meter-long spans, which were then put on the bridge’s pillars via a mobile gantry. To support the bridge’s weight, the MTHL’s foundations are 47 metres deep at its deepest points. The bridge’s foundation was laid using an automated girder launching technology, which was the first time it had been employed in India. The Reverse Circulation Drilling (RCD) construction technology was also used for the first time in India to prevent migratory bird disturbances.
                            </p>
                            <p>The MMRDA projected that the building work will result in 115,419 man-months of employment. The MTHL’s construction involved about 14,000 personnel.Contractors worked around the clock in three 8-hour shifts.Expert consultants from ten different nations, including Brazil, Denmark, Japan, South Korea, Switzerland, the United Kingdom, the United States, and some Middle Eastern and Eastern countries, worked on various areas of the project.Prime Minister Narendra Modi placed the project’s foundation stone on December 24, 2016. The construction of the MTHL began on April 24, 2018, with engineers gathering soil samples for testing at each area where piers will be built in Nhava Sheva.R. A. Rajeev, then MMRDA Metropolitan Commissioner, claimed on October 28, 2018, that around 9% of the project work had been finished.The MTHL’s first pier was completed at Sewri on May 18, 2019. The MMRDA reported that pre-segment casting work, which is a prelude to the superstructure for bridge deck construction, began on August 7.Each segment of the viaduct weighs 75 tonnes and measures 14.8 x 3.32 x 3.85 meters. Over 10,000 similar pieces have been produced.The segments were constructed at two precast segment yards, one on the Mumbai side and the other on the Navi Mumbai side. The first segment was built on the Sewri side, roughly 6 kilometers into the sea. MMRDA officials announced the completion of pre-casting work on August 9. Officials also reported that they had finished the construction of 270 permanent piles, 177 of which were in the sea. The agency had also finished the construction of a temporary access bridge about 2 kilometers in length.
                            </p>
                            <p>The casting for the first portion of Package 3 of the project began on September 12, 2019. On the same day, MMRDA authorities announced that 20% of the overall project work had been accomplished. The first girder for the MTHL, weighing 1,000 tonnes, was launched on January 15, 2020, marking the start of its first span.  The COVID-19 epidemic caused delays in the project’s timeline. Prior to the pandemic, around 5,000 personnel had been employed on the project, but this had been reduced to approximately 2,000 by June 2020. By June 2020, an estimated 27% of the total project work had been completed, with 35.29% finished by November 2020. On December 2, 2020, the BMC Tree Authority granted the MMRDA permission to remove 454 trees and transplant an additional 550 trees for the MTHL project. The MMRDA announced that it would also plant 2,000 trees in Vasai to make up for the loss. The organisation estimated that 40% of the entire project work would be finished by the end of June 2021. In August 2021, the Public Relations Office of Eknath Shinde, then Minister of State for Urban Development and Public Works, said that 52% of the project work had been finished. It further stated that 8,189 workers and labourers were currently deployed on the building site, with about 8 months of work days lost due to the COVID-19 pandemic.
                            </p>
                            <p>On April 11, 2022, the MMRDA claimed that it had finished 76% of the total project work.  On September 15, 2022, Maharashtra’s Chief Minister, Eknath Shinde, declared that 84% of the project work had been finished. The longest orthotropic deck, 180 metres long and weighing 2,400 MT, was launched on November 2, 2022. Installation of car crash barriers on the MTHL commenced on December 26, 2022. The barriers have a total height of 1,550 mm, including a 900 mm concrete block and a 650 mm steel rail. The barriers meet the International Standard EN 1317 certification for road restraining systems. The MMRDA had planned to add a 5-foot-tall wall as a crash barrier but decided against it to prevent disrupting views from the sea link. The first of five composite steel girder spans, weighing 130 MT and 40 meters long, connecting the MTHL to the Eastern Freeway in Sewri, was installed on February 20, 2023. On March 4, 2023, the then-MMRDA commissioner, S.V.R. Srinivas, reported that the segment casting work for Package 2 was finished, and 93% of the whole project work had been completed.
                            </p>
                            <p>The steel deck span that connects Packages 1 and 2 over the sea was placed on June 21, 2023, completing end-to-end connectivity on the bridge’s right side.On June 25, 2023, an MMRDA official indicated that no construction work would be done on the stretch of the bridge over the sea during the monsoon season for safety concerns. On June 28, 2023, the state cabinet voted to rename the MTHL after former Prime Minister Atal Bihari Vajpayee. According to a memorandum from the cabinet meeting, 95% of the MTHL work had been finished. The building work was completed in December 2023, with the only remaining duties being load testing, divider painting, and system testing. Prime Minister Narendra Modi inaugurated the MTHL and opened it to the public on January 12, 2024.
                            </p>
                            <h3>Noise and Vision Barriers of Atal Setu</h3>

                            <p>The MMRDA has constructed noise and vision barriers along a 6-kilometer segment of the MTHL.  The vision barriers are designed to obscure the view of the Bhabha Atomic Research Centre (BARC) from the MTHL, while the noise barriers are intended to safeguard the migration of flamingos and migratory birds on the Sewri mudflats. The MMRDA also stated that it would designate roughly 2 km of the MTHL on the Sewri side as a “silent zone,” as well as schools and other sensitive locations on the Navi Mumbai side. Silencers were installed on construction equipment used throughout the project to mitigate the potential impact of noise on migratory birds such as flamingos. The project used reverse circulation drilling, which reduces noise and speeds up building in maritime environments.
                            </p>
                            <h3>Traffic management and safety measures of Atal Setu</h3>

                            <p>As an access-controlled road, the MTHL employs the Advanced Traffic Management System (ATMS), a centralized system that enables operators to monitor and manage traffic, incidents, and emergency responses in real time. In addition, the Intelligent Transportation Management System (ITMS) is present to coordinate with the ATMS in a systematic manner. The bridge has gained international attention for its innovative traffic management technologies.
                            </p>
                            <p>Two-wheelers and three-wheelers, as well as animal-drawn carriages and slow-moving vehicles, are not permitted to enter the Trans Harbour Link, as they are on the Bandra-Worli Sea Link, Coastal Road and Eastern Freeway for safety reasons. Although pedal and electric bicycles are also outlawed, there are no signs or written warnings to enforce the ban; yet, riders can be penalised by law enforcement notwithstanding the lack of restrictions under the Motor Vehicles Act. [160] To avert fatalities, the Mumbai Police Traffic Division has implemented a speed limit of 100 km/h (62 mph). Furthermore, stopping on the bridge is prohibited except in emergencies, breakdowns, or when pulled over by police authorities.
                            </p>
                            <h3>Technology and other features</h3>

                            <p>The structural steel used in the bridge is approximately 120,000 tonnes, which is sufficient to support the construction of four Howrah Bridges.  More than 830,000 cubic metres of concrete were utilised to cast the bridge’s structures, which is six times the amount used to build the Statue of Unity. The amount of reinforced steel utilised is 17 times greater than that used in the Eiffel Tower. The bridge is made of corrosion-resistant materials to survive weather changes, high wind speeds, tides, and natural disasters such as earthquakes and cyclones.  It can withstand earthquakes of up to 6.5 magnitude, allowing the bridge to last for more than a hundred years.  Using Japanese technology, 70 spans of Orthotropic Steel Decks (OSDs) ranging in length from 65 to 180 meters and weighing up to 2,800 metric tonnes were installed across Thane Creek.
                            </p>
                            <p>In addition, a Comprehensive Surveillance System (CSS) employs a network of high-definition CCTV cameras strategically placed along the route.  The Speed Violation Detection System (SVDS) has been implemented to police speed limits and provide improved road safety for commuters.  A Video Incident Detection System (VIDS) for quickly detecting and responding to incidents and disasters has been deployed.There are Emergency Calling Boxes (ECBs) on the bridge that allow commuters to communicate directly with emergency services.  Additionally, Variable Message Display (VMD) devices have been built to efficiently communicate and offer real-time information to commuters.
                            </p>
                            <h3>Environmental safety and Sustainability measures of Atal Setu Bridge (Nhava Shewa)</h3>

                            <p>The roads on both sides of the bridge are surfaced with stone matrix asphalt (SMA), which contains a high ratio of crushed, durable stone aggregates and a specialist asphalt binder.  SMA extends pavement life by 20-30% because to its great resilience to temperature changes, better adhesion between stone aggregate and bitumen, reduced traffic noise, excellent skid resistance, and improved road surface marker visibility. The surface will remain perfectly smooth and undamaged regardless of weather conditions. When the SMA pavements reach the end of their service life, they will be completely recyclable, helping to keep the environment clean. The carbon impact from automobile emissions will also be greatly reduced by a few hundred thousand tonnes, as vehicles will traverse the bridge at a maximum speed of 100 km/h (62 mph).
                            </p>
                            <p>Environmentalists expressed fear that the bridge’s illumination would disrupt marine life at night. To address the issue, engineers built 1,212 customised light poles that will illuminate only the carriageways, with no luminous spill into the sea, so benefiting marine life. The Bombay Natural History Society (BNHS) has awarded the bridge and MMRDA a sustainability accreditation for their environmentally friendly and sustainable practices.
                            </p>
                            <h3>Connectivity of Atal Setu</h3>

                            <p>The MTHL operates three interchanges at Sewri, Shivajinagar near Ulwe, and Chirle.
                            </p>
                            <h3>Sewri interchange</h3>

                            <p>The MMRDA constructed a 1.5-kilometer cloverleaf interchange on a 27-acre plot leased from the Mumbai Port Trust, east of Sewri railway station.   The loop is made up of two lanes that branch off the MTHL and connect to the Eastern Freeway, the at-grade Messant route, and the proposed Sewri-Worli elevated road.   The elevated road between Sewri and Worli will connect the Coastal Road (near Worli Seaface), Rafi Ahmed Kidwai Marg, and Acharya Donde Marg.
                            </p>
                            <h3>Sewri–Worli connector</h3>

                            <p>The Sewri-Worli connector, also known as the Sewri-Worli elevated corridor (SWEC), will connect the Bandra-Worli Sea Link and the under-construction Coastal Road to the MTHL. [184]  It will be a four-lane cable-stayed bridge that is 17 meters wide and 4.512 kilometres long, with a height of 27 meters [185]. [186]  The Sewri-Worli connector will start at Sewri (East), cross the Eastern Freeway, the Harbour Line, Rafi Ahmed Kidwai Marg, Acharya Donde Marg, the existing flyover at Ambedkar Road, the Elphinstone Bridge in Parel, and the flyover at Senapati Bapat Marg before passing through Kamgar Nagar and Dr Annie Besant Road and ending at Narayan Hardikar Marg in Worli.  Ramps will connect the Sewri-Worli elevated corridor to Rafi Ahmed Kidwai Marg, west of Sewri railway station, and Acharya Donde Marg at the Mumbai Port Trust.
                            </p>
                            <p>The Sewri-Worli link was first suggested by the MMRDA in 2012 or 2013.  The project is expected to cost ₹517 crore (equivalent to ₹826 crore or US$98 million in 2023) and be completed within four years. The MMRDA received bids from five businesses to build the Sewri-Worli link. They included Simplex Infrastructures Ltd., Larsen &amp; Toubro, Hindustan Construction Company (HCC), Gammon India, and National Construction Company (NCC).  Simplex Infrastructures Ltd. submitted the lowest proposal (approximately 16-17% below the project’s expected cost), followed by Larsen &amp; Toubro (14% below the reserve price). In April 2016, DNA claimed that the project had been scrapped after being put “on hold” in 2015.  There was no budgeted allocation for the project in the 2015-16 fiscal year, and the MMRDA has no future intentions to build the connector.  In 2017, the agency issued tenders for ₹1,276 crore (US$150 million). Aside from delays, the cost rise was due to some significant design revisions. The intended link will be built using a steel superstructure rather than cement, as originally planned. The MMRDA has considered connecting the Sewri-Worli connector to Dr. Rafi Ahmed Kidwai Marg, west of Sewri railway station, and Acharya Donde Marg at the Mumbai Port Trust.  Furthermore, the agency plans to destroy the current single-tier road overbridge at Prabhadevi railway station and replace it with a new two-tier bridge.  The agency later halted plans for the connector due to delays in the MTHL project.
                            </p>
                            <p>The MMRDA issued new tenders for the project in July 2020. The project gained approval from the Maharashtra Coastal Zone Management Authority (MCZMA) on July 7, 2020, and the Maharashtra State Environment Impact Assessment Authority (SEIAA) on September 8, 2020. J. Kumar Infraprojects Ltd. was granted the contract for the Sewri-Worli link in November 2020. The project is expected to cost around ₹1,051.86 crore (US$120 million). Construction began on January 13, 2021.  On February 21, 2021, the project’s foundation stone was set by Maharashtra’s then-chief minister, Uddhav Thackeray. 25.77% of the project’s work had been completed by November 2022. By January 2024, 50% of the work had been finished.  It is slated to open in the end of 2024.
                            </p>
                            <h3>Shivajinagar interchange</h3>

                            <p>The Shivajinagar interchange connects the MTHL to the Navi Mumbai International Airport, the Jawaharlal Nehru Port, and local highways. It was built to connect Ulwe immediately to the MTHL via the projected Ulwe Coastal Road. Once the planned route is built, it will connect to this junction in Shivajinagar.
                            </p>
                            <h3>Chirle interchange</h3>

                            <p>The Chirle interchange connects the MTHL to the Mumbai-Pune Motorway and gives access to JNPT and Panvel. By linking the NH-348 at this location, it connects the MTHL to the motorway.  However, to establish a direct link with the motorway and reduce increasing traffic demand and congestion to and from Pune, the MTHL will be extended from this interchange to near the under-construction Navi Mumbai International Airport, which is also proposed to be connected via an airport connector road.
                            </p>
                            <h3>Real Estate Boom After Atal Setu Bridge</h3>

                            <p>This engineering marvel has had a considerable impact on <h3><a href="https://www.rustomjee.com/">real estate developments</a></h3> and property prices in the communities surrounding the Atal Setu bridge. The bridge has also considerably helped the real estate industry in Navi Mumbai and nearby districts such as Panvel, which have seen major increases in property prices and demand since the bridge’s opening.
                            </p>
                            <p>Better connectivity has also resulted in new residential developments along the Thane-Belapur route and the Mumbai-Pune motorway. According to industry estimates, nearly 7,000 units were sold in Navi Mumbai within the first quarter following the bridge’s opening.
                            </p>
                            <h3>Faster Commute Eases Living</h3>

                            <p>The new bridge has drastically decreased travel time between the two cities, benefiting daily commuters. Many residents who commute to and from work many times every week have benefited greatly.
                            </p>
                            <p>A regular commuter points out that the identical trip on public transit would have taken nearly three hours longer. The bridge has cut travel time to just 35 to 40 minutes, making life much easier.
                            </p>
                            <p>According to real estate experts, the shorter commute provides the comfort of faster travel while also relieving the physical and mental stress associated with long daily trips between the two cities. The ease of travel boosts people’s productivity, gives them more time for family and leisure, and improves their general quality of life.
                            </p>
                            <h3>Property Prices Surge Across Mumbai and Navi Mumbai</h3>

                            <p>As connectivity boosted Mumbai &amp; Navi Mumbai’s prospects and livability, property values rose rapidly in most areas.
                            </p>
                            <p>Property values in Navi Mumbai increased by 15-20% within three months of the bridge’s opening. Prices in areas such as Kharghar and Ulwe have risen by about 30% since mid-2023, reaching Rs 8500 per square foot.
                            </p>                        </div>
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
