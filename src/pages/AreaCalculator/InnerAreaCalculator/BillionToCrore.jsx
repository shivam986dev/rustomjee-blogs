import React, { useState, useEffect } from "react";

export default function BillionToCrore() {
    const [billion, setBillion] = useState("");
    const [result, setResult] = useState(null);

    const BILLION_TO_CRORE = 100;

    useEffect(() => {
        if (!billion || billion <= 0) {
            setResult(null);
            return;
        }

        setResult(parseFloat(billion * BILLION_TO_CRORE));
    }, [billion]);

    return (
        <div className="container py-5">

            <h2 className="fw-bold mb-2">Billion to Crore Converter</h2>
            <hr />
            <p className="text-muted">
                1 Billion = <strong>100 Crore</strong>
            </p>
            <div
                className="p-4 bg-white rounded mx-auto"
                style={{
                    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                }}
            >
                {/* Input */}
                <div className="input-group input-group-lg mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Billion value"
                        value={billion}
                        onChange={(e) => setBillion(e.target.value)}
                    />
                </div>

                {/* Result */}
                {result !== null && (
                    <div className="alert alert-success mt-3 mb-0">
                        <strong>{billion}</strong> Billion = <strong>{result}</strong> Crore
                    </div>
                )}
            </div>
            <div className="all_content">
                <h3>How to Convert Billion to Crore?</h3>
                <p>One billion is a naturally occurring number. A billion is equal to 1,000,000,000 in numbers. Every day, we employ tens, hundreds, thousands, ten thousand, and lakhs. However, because the term “billion” is rarely used, most of us are uninformed of the number of zeros in one billion or its value.
                    One billion rupees is equivalent to 10,000 lakhs in Indian rupees. Read on to learn everything you need to know about 1 billion to crore.</p>
                <h3>How Much Does a Billion Really Cost?</h3>
                <p>In Indian rupees, a billion is written as 1000,000,000. The table below illustrates what one billion Indian rupees is worth.</p>
                <div className="table-responsive mt-4">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <td className="text-center"><strong>Billion</strong></td>
                                <td className="text-center"><strong>Indian Rupees Value</strong></td>
                            </tr>

                            <tr>
                                <td className="text-center">1 Billion</td>
                                <td className="text-center">1,000,000,000</td>
                            </tr>

                            <tr>
                                <td className="text-center">1.2 Billion</td>
                                <td className="text-center">1,200,000,000</td>
                            </tr>

                            <tr>
                                <td className="text-center">5 Billion</td>
                                <td className="text-center">5,000,000,000</td>
                            </tr>

                            <tr>
                                <td className="text-center">10 Billion</td>
                                <td className="text-center">10,000,000,000</td>
                            </tr>

                            <tr>
                                <td className="text-center">50 Billion</td>
                                <td className="text-center">50,000,000,000</td>
                            </tr>

                            <tr>
                                <td className="text-center">100 Billion</td>
                                <td className="text-center">100,000,000,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>How Many Zeros in a Billion?</h3>
                <p>In a billion, there are nine (9) zeros. <br />
                    1 billion Equals 1,000,000,000 <br />
                    The graph below will help you understand the place value of each zero.</p>
                <div className="table-responsive mt-4">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <td className="text-center">Ten Crores</td>
                                <td className="text-center">Crores</td>
                                <td className="text-center">Ten Lakhs</td>
                                <td className="text-center">Lakhs</td>
                                <td className="text-center">Ten Thousand</td>
                                <td className="text-center">Thousand</td>
                                <td className="text-center">Hundreds</td>
                                <td className="text-center">Tens</td>
                                <td className="text-center">Ones</td>
                            </tr>
                            <tr>
                                <td className="text-center">10,00,00,000</td>
                                <td className="text-center">1,00,00,000</td>
                                <td className="text-center">10,00,000</td>
                                <td className="text-center">1,00,000</td>
                                <td className="text-center">10,000</td>
                                <td className="text-center">1000</td>
                                <td className="text-center">100</td>
                                <td className="text-center">10</td>
                                <td className="text-center">1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>What is a Crore?</h3>
                <p>The Indian numbering system is used to represent huge numbers throughout the Indian subcontinent. In Indian English, the phrases lakh (1,000) and crore (1,000,000,000) are often used to denote big numbers in the system. The shorthand for crore is ‘cr’.</p>
                <h3>Relationship Between 1 Billion in Crores</h3>
                <h3>As indicated in the table above, one billion crores equals 100 crores, while ten billion crores equals 100 crores. To put it another way, if someone asks how many crores are in a billion, you can say 100 crores. In crores, 100 billion is equal to 10,000 crores. To convert billions to crores, refer to the table below:</h3>
                <p>Conversion Table for One Billion in Crores</p>
                <div className="table-responsive mt-4">
                    <table className="table table-bordered table-striped">
                        <tbody>

                            <tr>
                                <td className="text-center"><strong>Billion</strong></td>
                                <td className="text-center"><strong>Billion in Crores</strong></td>
                            </tr>

                            <tr>
                                <td className="text-center">1 Billion</td>
                                <td className="text-center">100 Crores</td>
                            </tr>

                            <tr>
                                <td className="text-center">1.2 Billion</td>
                                <td className="text-center">120 Crores</td>
                            </tr>

                            <tr>
                                <td className="text-center">5 Billion</td>
                                <td className="text-center">500 Crores</td>
                            </tr>

                            <tr>
                                <td className="text-center">10 Billion</td>
                                <td className="text-center">1000 Crores</td>
                            </tr>

                            <tr>
                                <td className="text-center">50 Billion</td>
                                <td className="text-center">5000 Crores</td>
                            </tr>

                            <tr>
                                <td className="text-center">100 Billion</td>
                                <td className="text-center">10000 Crores</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Examples of Converting Billion to Crores</h3>
                <p>Understanding how to turn one billion rupees into crores, lakhs, and hundreds is crucial. The methods for converting one billion to rupees are as follows.</p>
                <p><strong>Question 1:</strong> What is 100 billion in crores?  <br />
                    <strong>Answer:</strong> 100 billion is worth 10000 crores.</p>

                <p>As a result, the one billion rupees to crores calculation is as follows: <br />
                    1,000,000,000 X 1 = 1,000,000,000<br />
                    4,000,000,000 is sometimes known as 400 crores.<br />
                    400 X 75 = 30,000 crores is the value of 4 billion rupees.</p>

                <p><strong>Question 2:</strong> How much is 10 billion in crores? <br />
                    <strong>Answer:</strong> A billion dollars is equivalent to one hundred crores.
                    As a result, 10 billion is 10 X 100 crores or 1000 crores.
                    10 billion in crores would be 1000 crores.</p>

                <p><strong>Question 3:</strong> How much is 20 billion in crores?<br />
                    <strong>Answer: </strong>We know that 1 billion equals 100 crores.  As a result, 20 billion is 20 x 100 crores. 200 crores = 2 billion
                    As a result, 20 billion in crores is 2000 crores.</p>
                <p><strong>How Do I Convert 1 Billion to Crore?</strong> <br />
                    The dollar is a widely accepted currency. To convert dollars into rupees, we must first calculate their worth in India. The value of the dollar in India varies depending on the country’s economic situation. The billion to crore converter demonstrates how to convert 1 billion USD into Indian rupees:</p>
                <p>Dollar Rate x 1,000,000,000 = 1 billion dollars in rupees <br />
                    For example, if the current dollar rate is 73 rupees, one billion rupees equals:<br />
                    73 (Dollar Rate) x 1 billion (1,000,000,000) Equals 73,00,00,00,000 Indian Rupees<br />
                    The above-mentioned billion to crore converter can be used to calculate any value.</p>
                <h3>Difference Between 1 Billion and Crore</h3>
                <div className="table-responsive mt-4">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <td className="text-center"><strong>Comparison Points</strong></td>
                                <td className="text-center"><strong>Billion</strong></td>
                                <td className="text-center"><strong>Crore</strong></td>
                            </tr>
                            <tr>
                                <td className="text-center">Meaning</td>
                                <td>
                                    A billion is expressed as <strong>1,000,000,000</strong> or ten to the power nine (10⁹).
                                </td>
                                <td>
                                    A crore, koti, or karor in the Indian Numbering System represents ten million, or 10,000,000, and 107 in scientific notation, which is equivalent to 100 lakhs. The acronym ‘Cr’ stands for a crore.
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">Symbol</td>
                                <td>
                                    <strong>B</strong> (also written as <strong>b</strong> or <strong>bn</strong>)
                                </td>
                                <td>
                                    Abbreviated as <strong>Cr</strong>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">Relationship</td>
                                <td>
                                    Multiply the billion value by <strong>100</strong> to get crores.
                                </td>
                                <td>
                                    Multiply the crore value by <strong>0.01</strong> to get billion.
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">Billion to Crore Conversion Formula</td>
                                <td>
                                    <strong>1 Billion = 1,000,000,000</strong>
                                </td>
                                <td>
                                    <strong>Multiply by 0.01</strong>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">Example</td>
                                <td>
                                    <strong>6 Billion = 600 Crores</strong>
                                    <br />Thus, 6 billion is equivalent to 600 crores.
                                </td>
                                <td>
                                    <strong>6 Crores = 0.06 Billion</strong>
                                    <br />Thus, 6 crore is equivalent to 0.06 billion.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Mathematical Definition of an Indian System.</h3>
                <p>The Indian Number or Numerical method is India’s writing method for expressing numerical quantities. In other terms, it is the mathematical code for the Indian Numeral System, which represents a certain set of numbers using consonant symbols or digits.</p>
                <p>Let us consider the number 229 as an example. This number has two instances of the digit 2. They all hold various values. We separate them by specifying their place value, which is defined as a digit’s numerical value in relation to its position in a number. The leftmost two have a place value of hundreds, and the middle one has a place value of 10.|</p>
                <p>Digits in the Indian numeral system are assigned place values of one, ten, hundreds, thousands, ten thousand, lakh, ten lakh, crore, and so on.</p>
                <p className="mb-1">Each digit of the number 10,77,33,995 has the following place values:</p>
                <ul>
                    <li>5 – Ones</li>
                    <li>9 – Tens</li>
                    <li>9 – Hundreds</li>
                    <li>3 – Thousands</li>
                    <li>3 – Ten Thousand</li>
                    <li>7 – Lakhs</li>
                    <li>7 – Ten Lakhs</li>
                    <li>0 – Crores</li>
                    <li>1 – Ten Crores</li>
                </ul>

                <h3>Their relationship is:</h3>
                <p className="mb-1">1 hundred = 10 tens  </p>
                <ul>
                    <li>1 thousand = 10 hundred = 100 tens</li>
                    <li>1 lakh = 100 thousand = 1000 hundreds</li>
                    <li>1 crore = 100 lakhs = 10,000 thousand</li>
                </ul>


                <h3>Mathematical Definition of an International System.</h3>
                <p>In this mathematical language, numerals are separated by periods or groups. The majority of countries have adopted and utilise the international standard of expressing numbers. In this type of enumeration, we frequently utilise the numbers one, ten, thousands, ten thousand, hundred thousand, millions, and ten million.</p>
                <p className="mb-1">The international numeral system gives digit place values to ones, tens, hundreds, thousands, ten thousand, hundred thousand, millions, and so on. The place values for each digit of the number 13,789,235 are:</p>
                <ul>
                    <li>5 – Ones</li>
                    <li>3 – Tens</li>
                    <li>2 – Hundred</li>
                    <li>9 – Thousands</li>
                    <li>8 – Ten Thousand</li>
                    <li>7 – Hundred Thousands</li>
                    <li>3 – Million</li>
                    <li>1 – Ten Million</li>
                </ul>
                <h3 className="mb-1">The relationship between them is:</h3>
                <ul>
                    <li>1 hundred = 10 tens</li>
                    <li>1 thousand = 10 hundred = 100 tens</li>
                    <li>1 million = 1000 thousand</li>
                    <li>1 billion = 1000 million</li>
                </ul>
                <h3>Area Calculator (Converter)</h3>
                <p>A land area calculator is an effective tool for converting one unit to another. Land measures vary throughout India. The simplest way to determine the equivalent unit of the local name for the unit is to use a land calculator.</p>
            </div>
        </div>
    );
}
