// import React, { useState } from "react";

// export default function StampDutyCalculator() {
//   const [propertyValue, setPropertyValue] = useState("");
//   const [isWoman, setIsWoman] = useState(false);
//   const [result, setResult] = useState(null);

//   const calculateStampDuty = () => {
//     if (!propertyValue || propertyValue <= 0) {
//       alert("Please enter a valid property value");
//       return;
//     }

//     let stampDuty = (propertyValue * 6) / 100;
//     if (isWoman) stampDuty = (propertyValue * 5) / 100;

//     setResult(stampDuty.toFixed(2));
//   };

//   return (
//     <div className="container py-5">
//       <h1 className="mb-4 fw-bold">Stamp Duty Calculator</h1>

//       <div className="p-4 rounded shadow bg-white">

//         {/* Input + Button Row */}
//         <div className="row g-3 align-items-center">

//           {/* Input */}
//           <div className="col-md-9">
//             <input
//               type="number"
//               className="form-control form-control-lg"
//               placeholder="Enter Property Value (in Rupees)"
//               value={propertyValue}
//               onChange={(e) => setPropertyValue(e.target.value)}
//             />
//           </div>

//           {/* Button Right Side */}
//           <div className="col-md-3 text-md-end">
//             <button
//               className="btn btn-dark btn-lg w-100"
//               onClick={calculateStampDuty}
//             >
//               Calculate
//             </button>
//           </div>

//         </div>

//         {/* Checkbox */}
//         <div className="form-check mt-3">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             id="womanCheck"
//             checked={isWoman}
//             onChange={() => setIsWoman(!isWoman)}
//           />
//           <label className="form-check-label" htmlFor="womanCheck">
//             Buyer is a Woman (1% Concession)
//           </label>
//         </div>

//         {/* Result */}
//         {result && (
//           <div className="alert alert-secondary mt-4">
//             <h4 className="mb-0">Stamp Duty Payable: ₹ {result}</h4>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import Banner from "../../assets/img/Desk Logo.gif";

export default function StampDutyCalculator() {
    const [propertyValue, setPropertyValue] = useState("");
    const [isWoman, setIsWoman] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (!propertyValue || propertyValue <= 0) {
            setResult(null);
            return;
        }

        let stampDuty = (propertyValue * 6) / 100;
        if (isWoman) stampDuty = (propertyValue * 5) / 100;

        setResult(stampDuty.toFixed(2));
    }, [propertyValue, isWoman]); // instant update on change

    return (
        <div className="container py-5">
            <h1 className="mb-4 fw-bold">Stamp Duty Calculator</h1>

            <div className="p-4 rounded shadow bg-white">

                {/* Input */}
                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Enter Property Value (in Rupees)"
                        value={propertyValue}
                        onChange={(e) => setPropertyValue(e.target.value)}
                    />
                </div>

                {/* Checkbox */}
                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="womanCheck"
                        checked={isWoman}
                        onChange={() => setIsWoman(!isWoman)}
                    />
                    <label className="form-check-label" htmlFor="womanCheck">
                        Buyer is a Woman (1% Concession)
                    </label>
                </div>

                {/* Instant Result */}
                {result !== null && (
                    <div className="alert alert-secondary mt-3">
                        <h4 className="mb-0">Stamp Duty Payable: ₹ {result}</h4>
                    </div>
                )}
            </div>
            <h1 className="mt-5 mb-4" >How to Calculate Stamp Duty in Maharashtra?</h1>
            <p>Stamp duty is a government tax charged when buying or transferring property in Maharashtra.
                It is mandatory for all property buyers and makes the document legally valid.
                Stamp duty varies depending on buyer type (male or female), property type, and location.</p>
            <h3>What is Stamp Duty?</h3>
            <p>Stamp duty is a tax collected by the government on property transactions. Once paid, the
                document becomes legal proof of ownership. Without stamp duty, a property purchase cannot
                be registered.</p>
            <h4>Importance of Stamp Duty</h4>
            <ul>
                <li>Provides legal proof of property ownership</li>
                <li>  Mandatory for registering property</li>
                <li> Prevents future property disputes</li>
                <li> Generates revenue for government development</li>
            </ul>
            <h3>Stamp Duty Rates in Maharashtra (Latest)</h3>
            <p>Below are the current stamp duty rates for residential properties in Maharashtra:</p>

            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <tbody>

                        <tr>
                            <td className="text-center">
                                <p><strong>Buyer Type</strong></p>
                            </td>
                            <td className="text-center">
                                <p><strong>Stamp Duty</strong></p>
                            </td>
                            <td className="text-center">
                                <p><strong>Metro Cess / LBT</strong></p>
                            </td>
                            <td className="text-center">
                                <p><strong>Total Payable</strong></p>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center"><p>Male Buyer</p></td>
                            <td className="text-center"><p>5%</p></td>
                            <td className="text-center"><p>1%</p></td>
                            <td className="text-center"><p>6%</p></td>
                        </tr>

                        <tr>
                            <td className="text-center"><p>Female Buyer</p></td>
                            <td className="text-center"><p>4%</p></td>
                            <td className="text-center"><p>1%</p></td>
                            <td className="text-center"><p>5%</p></td>
                        </tr>

                        <tr>
                            <td className="text-center"><p>Joint Purchase (Male + Female)</p></td>
                            <td className="text-center"><p>5%</p></td>
                            <td className="text-center"><p>1%</p></td>
                            <td className="text-center"><p>6%</p></td>
                        </tr>

                        <tr>
                            <td className="text-center"><p>Joint Purchase (Female + Female)</p></td>
                            <td className="text-center"><p>4%</p></td>
                            <td className="text-center"><p>1%</p></td>
                            <td className="text-center"><p>5%</p></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <h3>What Qualifies as Residential Property?</h3>
            <ul>
                <li>Apartments & flats</li>
                <li>Bungalows</li>
                <li>Row houses</li>
                <li>Residential plots</li>
                <li>Redevelopment units</li>
            </ul>
            <p><strong>Note:</strong> Women’s discount does NOT apply to commercial or industrial properties.</p>
            <h3>Relationship Between Stamp Duty and Property Value</h3>
            <p>The stamp duty amount depends on the property’s agreement value. Higher value means higher duty.</p>
            <h3>Formula:</h3>
            <p>Stamp Duty = Property Value × Applicable Rate %</p>
            <p><strong>Rates:</strong></p>
            <ul>
                <li>Men: 6%</li>
                <li>Women: 5%</li>
            </ul>
            <h3>How to Calculate Stamp Duty in Maharashtra</h3>
            <p>Use the following formulas:</p>

            <p> Men Stamp Duty = Property Value × 0.06 <br />
                Women Stamp Duty = Property Value × 0.05 </p>
            <h3>Examples of Stamp Duty Calculation</h3>
            <h4>Example 1: Property Value = ₹50,00,000</h4>
            <p><strong>Men:</strong></p>
            <p className="mb-0"> ₹50,00,000 × 0.06 = ₹3,00,000</p>

            <p className="mb-0"><strong> Women:</strong></p>
            <p>₹50,00,000 × 0.05 = ₹2,50,000</p>

            <h3>Example 2: Property Value = ₹75,00,000</h3>
            <p className="mb-0"><strong>Men:</strong></p>
            <p> ₹75,00,000 × 0.06 = ₹4,50,000</p>

            <p className="mb-0"><strong> Women:</strong></p>
            <p>₹75,00,000 × 0.05 = ₹3,75,000</p>

            <h3>Example 3: Property Value = ₹1,00,00,000 (1 Cr)</h3>
            <p className="mb-0"><strong>Men:</strong></p>
            <p>₹1,00,00,000 × 0.06 = ₹6,00,000</p>

            <p className="mb-0"><strong> Women:</strong></p>
            <p>₹1,00,00,000 × 0.05 = ₹5,00,000</p>
            <h3>Difference Between Male & Female Stamp Duty</h3>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <tbody>

                        <tr>
                            <td className="text-center">
                                <p><strong>Parameter</strong></p>
                            </td>
                            <td className="text-center">
                                <p><strong>Male</strong></p>
                            </td>
                            <td className="text-center">
                                <p><strong>Female</strong></p>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center"><p>Total Rate</p></td>
                            <td className="text-center"><p>6%</p></td>
                            <td className="text-center"><p>5%</p></td>
                        </tr>

                        <tr>
                            <td className="text-center"><p>Discount</p></td>
                            <td className="text-center"><p>No</p></td>
                            <td className="text-center"><p>Yes (1%)</p></td>
                        </tr>

                        <tr>
                            <td className="text-center"><p>Applicable On</p></td>
                            <td className="text-center"><p>Residential Properties</p></td>
                            <td className="text-center"><p>Residential Properties</p></td>
                        </tr>

                        <tr>
                            <td className="text-center"><p>Joint Ownership</p></td>
                            <td className="text-center"><p>No Discount</p></td>
                            <td className="text-center"><p>All buyers must be women</p></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <h3>Where is Stamp Duty Used?</h3>
            <ul>
                <li>Sale deed registration</li>
                <li>Gift deed transfer</li>
                <li>Property transfer</li>
                <li>Home loan processing</li>
                <li> Conveyance deed</li>
                <li>Redevelopment agreements</li>
            </ul>
            <h3>Current Use of Stamp Duty in Maharashtra</h3>
            <p>Stamp duty ensures legal ownership of property. It is required for:</p>
            <p><strong>In summary:</strong> Maharashtra charges 6% stamp duty for men and 5% for women.
                This discount significantly reduces the cost of purchasing residential property for women.</p>
        </div>
    );
}
