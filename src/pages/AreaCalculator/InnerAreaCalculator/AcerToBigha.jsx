import React, { useState, useEffect } from "react";

export default function AcreToBigha() {
    const [acre, setAcre] = useState("");
    const [result, setResult] = useState(null);

    const ACRE_TO_BIGHA = 1.613;

    useEffect(() => {
        if (!acre || acre <= 0) {
            setResult(null);
            return;
        }

        setResult((acre * ACRE_TO_BIGHA).toFixed(4));
    }, [acre]);

    return (
        <div className="container py-5">

            {/* Heading */}
            <h2 className="fw-bold mb-2">Acre to Bigha Converter</h2>
            <hr />
            {/* Formula Text */}
            <p className="text-muted">
                1 Acre is equal to <strong>1.613 Bigha</strong>.
            </p>
            {/* Main White Box */}
            <div className="p-4 bg-white rounded shadow-lg mx-auto" style={{ boxShadow: "0 3px 15px rgba(1, 1, 0, 0.73)" }} >
                {/* Input Row */}
                <div className="input-group input-group-lg mb-3">
                    <input type="number" className="form-control" placeholder="Enter Acre value" value={acre} onChange={(e) => setAcre(e.target.value)} />
                    {/* <button className="btn btn-dark"> Convert</button> */}
                </div>

                {/* Result */}
                {result !== null && (
                    <div className="alert alert-success mt-3 mb-0">
                        <strong>{acre}</strong> Acre = <strong>{result}</strong> Bigha
                    </div>
                )}
            </div>
            <div className="all_content my-5">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr><td className="text-center"><strong>Acre</strong></td><td className="text-center"><strong>Bigha</strong></td></tr>
                            <tr><td className="text-center">1 Acre to Bigha</td><td className="text-center">1.613</td></tr>
                            <tr><td className="text-center">2 Acre to Bigha</td><td className="text-center">3.227</td></tr>
                            <tr><td className="text-center">3 Acre to Bigha</td><td className="text-center">4.84</td></tr>
                            <tr><td className="text-center">4 Acre to Bigha</td><td className="text-center">6.453</td></tr>
                            <tr><td className="text-center">5 Acre to Bigha</td><td className="text-center">8.067</td></tr>
                            <tr><td className="text-center">6 Acre to Bigha</td><td className="text-center">9.68</td></tr>
                            <tr><td className="text-center">7 Acre to Bigha</td><td className="text-center">11.293</td></tr>
                            <tr><td className="text-center">8 Acre to Bigha</td><td className="text-center">12.907</td></tr>
                            <tr><td className="text-center">9 Acre to Bigha</td><td className="text-center">14.52</td></tr>
                            <tr><td className="text-center">10 Acre to Bigha</td><td className="text-center">16.133</td></tr>
                            <tr><td className="text-center">11 Acre to Bigha</td><td className="text-center">17.747</td></tr>
                            <tr><td className="text-center">12 Acre to Bigha</td><td className="text-center">19.36</td></tr>
                            <tr><td className="text-center">13 Acre to Bigha</td><td className="text-center">20.973</td></tr>
                            <tr><td className="text-center">14 Acre to Bigha</td><td className="text-center">22.587</td></tr>
                            <tr><td className="text-center">15 Acre to Bigha</td><td className="text-center">24.20</td></tr>
                            <tr><td className="text-center">16 Acre to Bigha</td><td className="text-center">25.813</td></tr>
                            <tr><td className="text-center">17 Acre to Bigha</td><td className="text-center">27.427</td></tr>
                            <tr><td className="text-center">18 Acre to Bigha</td><td className="text-center">29.04</td></tr>
                            <tr><td className="text-center">19 Acre to Bigha</td><td className="text-center">30.653</td></tr>
                            <tr><td className="text-center">20 Acre to Bigha</td><td className="text-center">32.267</td></tr>
                        </tbody>
                    </table>
                </div>
                <h3>How to Convert Acre to Bigha ?</h3>
                <p>The conversion from acre to bigha is a very simple process. All you have to do is multiply 1.613 by the unit. For instance, you have to multiply 5 by 1.613 in order to convert 5 acres to bigha.</p>
                <p>Therefore, 5 acres = 5X1.613 = 8.067 bigha                </p>
                <p>Here are a few more widely used metrics for one acre.</p>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr><td className="text-center">1 Acre</td><td className="text-center">43,560 Square Feet (sq. ft)</td></tr>
                            <tr><td className="text-center">1 Acre</td><td className="text-center">4,047 Square Meters (sq. m)</td>                            </tr>
                            <tr><td className="text-center">1 Acre</td><td className="text-center">0.404 Hectares</td></tr>
                            <tr><td className="text-center">1 Acre</td><td className="text-center">4,840 Square Yards (sq. yds)</td></tr>
                            <tr><td className="text-center">1 Acre</td><td className="text-center">40 Guntha</td></tr>
                            <tr><td className="text-center">1 Acre</td><td className="text-center">19.93 Grounds</td></tr>
                            <tr><td className="text-center">1 Acre</td><td className="text-center">100.02 Cent</td></tr>
                        </tbody>
                    </table>
                </div>
                <h3>Acre to Bigha Formula & Example</h3>
                <p>The following formula can be used to convert Acre to Bigha, and it is quite simple:</p>
                <p>Bigha = Acre X 1.613334802</p>
                <p>Here are some examples of conversions from Acre to Bigha.</p>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr><td className="text-center"><strong>Acre</strong></td><td className="text-center"><strong>Calculation</strong></td><td className="text-center"><strong>Bigha</strong></td></tr>
                            <tr><td className="text-center">10 Acre</td><td className="text-center">10 × 1.613</td><td className="text-center">16.133 Bigha</td></tr>
                            <tr><td className="text-center">20 Acre</td><td className="text-center">20 × 1.613</td><td className="text-center">32.267 Bigha</td></tr>
                            <tr><td className="text-center">50 Acre</td><td className="text-center">50 × 1.613</td><td className="text-center">80.667 Bigha</td></tr>
                            <tr><td className="text-center">75 Acre</td><td className="text-center">75 × 1.613</td><td className="text-center">121.00 Bigha</td></tr>
                            <tr><td className="text-center">100 Acre</td><td className="text-center">100 × 1.613</td><td className="text-center">161.333 Bigha</td></tr>
                            <tr><td className="text-center">1000 Acre</td><td className="text-center">1000 × 1.613</td><td className="text-center">1613.335 Bigha</td></tr>
                        </tbody>
                    </table>
                </div>
                <h3>About Acre</h3>
                <p>One of the oldest units used to measure land worldwide is the acre, which was first used in the imperial system of units. An area that is one furlong long and four rods wide can also be described as an acre.</p>
                <p>An acre of land can be measured in a variety of ways, including circles, rectangles, and even pentagons. One acre of land can be any length or width as long as it doesn’t exceed 43,560 square feet in total area.</p>
                <p>For example, sixteen tennis courts could be built on a one-acre plot of land.</p>
                <h3>The History of Acre</h3>
                <p>The Old English word aecer, which means open fields, is where the word “acre” originates.</p>
                <p>The origin of the term “acre” is an intriguing tale. One acre was approximately the amount of land that one man could plough with two oxen during the Middle Ages.</p>
                <p>For example, it was considered that a man owned 3 acres of land if he used a pair of oxen to plough his entire field in 3 days without assistance from anyone else.</p>
                <p>Tillable land and its measurements also served as the foundation for the terms chain and furlong. </p>
                <p><strong>Look into this.</strong></p>
                <p>A tool that both sexes use to direct livestock during field preparation is the ox-goad. Ox-goads were usually about 51/2 yards long in the past.                </p>
                <h3>Dimensions of Acre</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr><td className="text-center"><strong>1 Acre</strong></td><td className="text-center"><strong>Equivalent Unit</strong></td></tr>
                            <tr><td className="text-center">1 Acre</td><td className="text-center">43,560 Square Feet</td></tr>
                            <tr><td className="text-center">1 Acre</td><td className="text-center">4,047 Square Meters</td></tr>
                            <tr><td className="text-center">1 Acre</td><td className="text-center">0.4047 Hectares</td></tr>
                            <tr><td className="text-center">1 Acre</td><td className="text-center">4,840 Square Yards</td></tr>
                            <tr><td className="text-center">1 Acre</td><td className="text-center">1/640th of a Square Mile</td></tr>
                        </tbody>
                    </table>
                </div>
                <h3>About Bigha</h3>
                <p>Bigha, also known as Beegha, is a widely used unit of measurement in Bangladesh, Nepal, and parts of India. Bigha is interesting because, unofficially, it has different meanings in different regions of the nation.</p>
                <p className="mb-1">For instance, in Assam, 1 bigha = 14400 sq. ft = 0.33 acre</p>
                <p className="mb-1">In Himachal Pradesh, 4 bigha = 1 acre</p>
                <p className="mb-1">In parts of Punjab and Haryana, 2 bigha = 1 acre</p>
                <p className="mb-1"> In West Bengal, 1 bigha = 1/3rd of an acre</p>
                <p>In Bangladesh, 1 bigha = 0.33 acre</p>
                <p>According to the above formula, the correct standardization is 1 bigha = 0.62 acres. <br />
                    If you’re doing a calculation locally, though, first find out what 1 bigha means in your community before doing the calculation.</p>
                <h3>Difference Between Acre and Bigha</h3>
                <p>These are a few common distinctions between bigha and acre that you should be aware of.</p>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr><td className="text-center"><strong>Acre</strong></td><td className="text-center"><strong>Bigha</strong></td></tr>
                            <tr>
                                <td className="text-center">Acre is used in the Imperial and US Customary systems.</td>
                                <td className="text-center">Bigha is a customary land measurement unit used in Bangladesh, Nepal, and India.</td>
                            </tr>
                            <tr>
                                <td className="text-center">The United States, British Commonwealth nations, and South Asian countries like India & Sri Lanka widely use Acre.</td>
                                <td className="text-center">Bigha is used by people in Bangladesh, Nepal, India, and Fiji Hindi–speaking regions.</td>
                            </tr>
                            <tr>
                                <td className="text-center"><strong>1 Acre = 1.613 Bigha</strong></td>
                                <td className="text-center"><strong>1 Bigha = 0.62 Acre</strong></td>
                            </tr>
                            <tr>
                                <td className="text-center">1 Acre = 43,560 sq. ft</td>
                                <td className="text-center">1 Bigha = 26,910.66 sq. ft</td>
                            </tr>
                            <tr>
                                <td className="text-center">Acre is a globally standardized and consistent unit.</td>
                                <td className="text-center">Bigha varies across Indian states; its value is not standardized.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Dimensions of Bigha</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <td className="text-center"><strong>1 Bigha</strong></td>
                                <td className="text-center"><strong>Equivalent Unit</strong></td>
                            </tr>
                            <tr>
                                <td className="text-center">1 Bigha</td>
                                <td className="text-center">2,990 sq yd</td>
                            </tr>
                            <tr>
                                <td className="text-center">1 Bigha</td>
                                <td className="text-center">2,500 sq mt</td>
                            </tr>
                            <tr>
                                <td className="text-center">1 Bigha</td>
                                <td className="text-center">1.04 Ground</td>
                            </tr>
                            <tr>
                                <td className="text-center">1 Bigha</td>
                                <td className="text-center">0.62 Acre</td>
                            </tr>
                            <tr>
                                <td className="text-center">1 Bigha</td>
                                <td className="text-center">2.30 Guntha</td>
                            </tr>
                            <tr>
                                <td className="text-center">1 Bigha</td>
                                <td className="text-center">26,910.66 Sq ft</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <p>In summary, understanding how to convert an acre to a bigha is crucial when purchasing, selling, or managing land and plots in India. You must be precisely aware of how to convert bigha measures into acres because certain regions of the country may speak in them. To make conversions simple, use this acre to bigha calculator.</p>
                <p>The bank might ask you to state the entire area value in various units if you’re trying to apply for a loan to purchase land or want to mortgage your current land. Once more, this calculator will assist you in determining the correct values without error.</p>
                <p>The accepted worldwide unit of measurement for area is the acre. You can also convert bigha to acres with ease if you are accustomed to discussing plot areas in bighas. </p>
                <p>You can use the, Mumbai Homes Now acre to bigha calculator to ensure that the valuations are accurate.</p>
                <h3>Area Calculator (Converter)</h3>
                <p>A land area calculator is a useful tool for converting one unit to another. Land measurements vary across India. If you want to find the equivalent unit of the local term for the unit, the simplest method is to use a land calculator.</p>
            </div>
        </div>
    );
}
