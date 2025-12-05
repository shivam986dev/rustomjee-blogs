import React, { useState, useEffect } from "react";

export default function BighaToAcre() {
    const [bigha, setBigha] = useState("");
    const [result, setResult] = useState(null);
    const BIGHA_TO_ACRE = 0.625;

    useEffect(() => {
        if (!bigha || bigha <= 0) {
            setResult(null);
            return;
        }

        // Remove trailing zeros
        setResult(parseFloat(bigha * BIGHA_TO_ACRE));
    }, [bigha]);

    return (
        <div className="container py-5">

            <h2 className="fw-bold mb-2">Bigha to Acre Converter</h2>
            <hr />

            <p className="text-muted">
                1 Bigha is equal to <strong>0.625 Acre</strong>.
            </p>

            <div
                className="p-4 bg-white rounded mx-auto"
                style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.12)" }}
            >
                <div className="input-group input-group-lg mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Bigha value"
                        value={bigha}
                        onChange={(e) => setBigha(e.target.value)}
                    />
                </div>

                {result !== null && (
                    <div className="alert alert-success mt-3 mb-0">
                        <strong>{bigha}</strong> Bigha = <strong>{result}</strong> Acre
                    </div>
                )}
            </div>
            <div className="all_content">
                <h3>Bigha to Acre Conversions</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <tbody>

                            <tr>
                                <td className="text-center"><strong>Bigha</strong></td>
                                <td className="text-center"><strong>Acre</strong></td>
                            </tr>

                            <tr><td className="text-center">1 Bigha to Acre</td><td className="text-center">0.625</td></tr>
                            <tr><td className="text-center">2 Bigha to Acre</td><td className="text-center">1.25</td></tr>
                            <tr><td className="text-center">3 Bigha to Acre</td><td className="text-center">1.875</td></tr>
                            <tr><td className="text-center">4 Bigha to Acre</td><td className="text-center">2.50</td></tr>
                            <tr><td className="text-center">5 Bigha to Acre</td><td className="text-center">3.124</td></tr>
                            <tr><td className="text-center">6 Bigha to Acre</td><td className="text-center">3.749</td></tr>
                            <tr><td className="text-center">7 Bigha to Acre</td><td className="text-center">4.374</td></tr>
                            <tr><td className="text-center">8 Bigha to Acre</td><td className="text-center">4.999</td></tr>
                            <tr><td className="text-center">9 Bigha to Acre</td><td className="text-center">5.624</td></tr>
                            <tr><td className="text-center">10 Bigha to Acre</td><td className="text-center">6.249</td></tr>
                            <tr><td className="text-center">11 Bigha to Acre</td><td className="text-center">6.874</td></tr>
                            <tr><td className="text-center">12 Bigha to Acre</td><td className="text-center">7.499</td></tr>
                            <tr><td className="text-center">13 Bigha to Acre</td><td className="text-center">8.123</td></tr>
                            <tr><td className="text-center">14 Bigha to Acre</td><td className="text-center">8.748</td></tr>
                            <tr><td className="text-center">15 Bigha to Acre</td><td className="text-center">9.373</td></tr>
                            <tr><td className="text-center">16 Bigha to Acre</td><td className="text-center">9.998</td></tr>
                            <tr><td className="text-center">17 Bigha to Acre</td><td className="text-center">10.623</td></tr>
                            <tr><td className="text-center">18 Bigha to Acre</td><td className="text-center">11.248</td></tr>
                            <tr><td className="text-center">19 Bigha to Acre</td><td className="text-center">11.873</td></tr>
                            <tr><td className="text-center">20 Bigha to Acre</td><td className="text-center">12.498</td></tr>

                        </tbody>
                    </table>
                </div>
                <h3>How to Convert Bigha to Acre?</h3>
                <p>Bigha to acre conversion is a simple operation. To convert a bigha to an acre, simply multiply it by 0.619. For example, multiplying 5 by 0.619 yields the formula for converting 5 bigha to acres.</p>
                <p>Therefore, 5 bigha = 5 X 0.619 = 3.095 acres.</p>
                <p>Here are some standard criteria for converting one bigha to an acre.</p>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <td className="text-center">1 Bigha</td>
                                <td className="text-center">0.619 Acre</td>
                            </tr>

                            <tr>
                                <td className="text-center">1 Bigha</td>
                                <td className="text-center">24.79 Guntha</td>
                            </tr>

                            <tr>
                                <td className="text-center">1 Bigha</td>
                                <td className="text-center">0.25 Hectare</td>
                            </tr>

                            <tr>
                                <td className="text-center">1 Bigha</td>
                                <td className="text-center">12.35 Ground</td>
                            </tr>

                            <tr>
                                <td className="text-center">1 Bigha</td>
                                <td className="text-center">0.0025 Sq Km</td>
                            </tr>

                            <tr>
                                <td className="text-center">1 Bigha</td>
                                <td className="text-center">0.00096 Sq Mile</td>
                            </tr>

                            <tr>
                                <td className="text-center">1 Bigha</td>
                                <td className="text-center">2508.38 Sq M</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <h3>Bigha to Acre Formula and Example</h3>
                <p>To convert Bigha to Acre, use the following formula, which is pretty simple:</p>
                <p>Acre = Bigha X 0.624884378</p>
                <p>Here are some instances of conversions from Bigha to Acre.</p>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <tbody>

                            <tr>
                                <td className="text-center"><strong>Bigha</strong></td>
                                <td className="text-center"><strong>Calculation</strong></td>
                                <td className="text-center"><strong>Acre</strong></td>
                            </tr>

                            <tr>
                                <td className="text-center">10 Bigha</td>
                                <td className="text-center">10 × 0.625</td>
                                <td className="text-center">6.249 Acre</td>
                            </tr>

                            <tr>
                                <td className="text-center">20 Bigha</td>
                                <td className="text-center">20 × 0.625</td>
                                <td className="text-center">12.498 Acre</td>
                            </tr>

                            <tr>
                                <td className="text-center">50 Bigha</td>
                                <td className="text-center">50 × 0.625</td>
                                <td className="text-center">31.244 Acre</td>
                            </tr>

                            <tr>
                                <td className="text-center">75 Bigha</td>
                                <td className="text-center">75 × 0.625</td>
                                <td className="text-center">46.866 Acre</td>
                            </tr>
                            <tr>
                                <td className="text-center">100 Bigha</td>
                                <td className="text-center">100 × 0.625</td>
                                <td className="text-center">62.488 Acre</td>
                            </tr>
                            <tr>
                                <td className="text-center">1000 Bigha</td>
                                <td className="text-center">1000 × 0.625</td>
                                <td className="text-center">624.884 Acre</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <h3>About Bigha</h3>
                <p>The bigha is one of the traditional measurement units used in the North Indian States. Bigha is used to measure land in the states of Haryana, Punjab, Rajasthan, Madhya Pradesh, Assam, Uttar Pradesh, Bihar, West Bengal, Gujarat, Himachal Pradesh, Jharkhand, and Uttarakhand. Nevertheless, Bigha’s worth differs by state.</p>
                <p>Pucca, also known as pakka bigha, is widely used in Rajasthan and some parts of Uttarakhand, Uttar Pradesh, and Bihar, whereas kuchha bigha was largely used by landlords to manage their rental properties.</p>
                <p>Bigha is an incredibly amazing measurement method. With the exception of Bangladesh and Nepal, the phrase is rarely used outside of Northern India.</p>
                <p>Bigha is an incredibly amazing measurement method. With the exception of Bangladesh and Nepal, the phrase is rarely used outside of Northern India.</p>
                <p>The most common one is 0.619 acres per bigha.</p>
                <p>In West Bengal, however, a bigha may only be 0.33 acres in size.</p>
                <p>In Madhya Pradesh, a bigha is equivalent to approximately 0.27 acres.</p>
                <p>As a result, if you’re using the phrase to describe the size of your land or plot, always check the local conversion value first.</p>
                <p>Pukka bigha is a similar phrase used in various areas of Rajasthan. Kuchha bigha is another extensively used local phrase that you may encounter in Northern India.</p>
                <h3>History of Bigha</h3>
                <p>Bigha is supposed to be derived from the Sanskrit term vigraha, which signifies division. Before British colonial dominance in India, the Bigha land area varied in size. Generally speaking, one bigha was defined as the area that required two ploughs to cultivate.</p>
                <p>After the British established their presence in West Bengal, bigha became a standardised unit of measurement, representing one-third of an acre. However, Bigha’s dimensions remain dissimilar in other parts of India.</p>
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
                <h3>Determine the worth of a single Bigha in various states.</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <tbody>

                            <tr>
                                <td className="text-center"><strong>State</strong></td>
                                <td className="text-center"><strong>In Square Feet</strong></td>
                                <td className="text-center"><strong>In Acre</strong></td>
                            </tr>

                            <tr>
                                <td className="text-center">Haryana</td>
                                <td className="text-center">27,225</td>
                                <td className="text-center">0.25</td>
                            </tr>

                            <tr>
                                <td className="text-center">Punjab</td>
                                <td className="text-center">9,070</td>
                                <td className="text-center">0.25</td>
                            </tr>

                            {/* Rajasthan Row */}
                            <tr>
                                <td className="text-center" rowSpan="2">Rajasthan</td>
                                <td className="text-center">1 Pucca Bigha = 27,225</td>
                                <td className="text-center">1 Pucca Bigha = 0.625</td>
                            </tr>

                            <tr>
                                <td className="text-center">1 Kuchha Bigha = 17,424</td>
                                <td className="text-center">1 Kuchha Bigha = 0.40</td>
                            </tr>

                            <tr>
                                <td className="text-center">Madhya Pradesh</td>
                                <td className="text-center">12,000</td>
                                <td className="text-center">0.27</td>
                            </tr>

                            <tr>
                                <td className="text-center">Assam</td>
                                <td className="text-center">14,400</td>
                                <td className="text-center">0.3306</td>
                            </tr>

                            <tr>
                                <td className="text-center">Uttarakhand</td>
                                <td className="text-center">6,804</td>
                                <td className="text-center">0.20</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <h3>About Acre</h3>
                <p>The acre is one of the oldest units used to measure land around the world, having originated in the imperial system of units. An acre is defined as a length of one furlong and a width of four rods.</p>
                <p>An acre of land can be measured in a number of ways, including circles, rectangles, and pentagons. One acre of land can be any length or breadth as long as the total area is less than 43,560 square feet.</p>
                <p>The acre is one of the most often used units of land measurement in the world. It is included in both the Imperial and customary measurement systems used in the United States. An acre is artistically depicted as a square with one furlong and one chain on each side.</p>
                <p>1 Chain = 66 feet</p>
                <p>1 Furlong = 660 feet</p>
                <h3>Dimensions of Acre</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <td className="text-center"><strong>1 Acre</strong></td>
                                <td className="text-center"><strong>Equivalent Unit</strong></td>
                            </tr>
                            <tr>
                                <td className="text-center">1 Acre</td>
                                <td className="text-center">43,560 Square Feet</td>
                            </tr>
                            <tr>
                                <td className="text-center">1 Acre</td>
                                <td className="text-center">4,047 Square Meters</td>
                            </tr>
                            <tr>
                                <td className="text-center">1 Acre</td>
                                <td className="text-center">0.4047 Hectares</td>
                            </tr>
                            <tr>
                                <td className="text-center">1 Acre</td>
                                <td className="text-center">4,840 Square Yards</td>
                            </tr>
                            <tr>
                                <td className="text-center">1 Acre</td>
                                <td className="text-center">1/640th of a Square Mile</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Area Calculator (Converter)</h3>
                <p>A land area calculator is a useful tool for converting one unit to another. Land measurements vary across India. If you want to find the equivalent unit of the local term for the unit, the simplest method is to use a land calculator.</p>
            </div>
        </div>
    );
}
