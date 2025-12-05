import React from "react";
import { Link } from "react-router-dom";

export default function AreaCalculator() {
    const tools = [
        "Acre to Bigha Converter",
        "Bigha to Acre Converter",
        "Billion To Crore Converter",
        "Cent to Square Feet Converter",

        "Centimeter to Feet Converter",
        "Centimeters to Inches Converter",
        "Decimal to Square Feet Converter",
        "Feet to Cm Converter",

        "Feet To Inches Converter",
        "Feet to Meter Converter",
        "Inches to Cm Converter",
        "Inches to Feet Converter",

        "Inches To Millimeters Converter",
        "Kilograms to Pound Converter",
        "Meter to Centimeter Converter",
        "Millimeters to Feet Converter",

        "Millimeters to Inches Converter",
        "Million to Rupees Converter",
        "Square Feet to Gaj Converter",
    ];

    // Convert title → slug
    const createSlug = (text) =>
        text.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");

    return (
        <div className="container py-5">
            <h1 className="text-center fw-bold mb-3">Area Calculator</h1>
            <p className="text-center w-100 w-md-75 mx-auto mb-5 area-subtitle">
                A land area calculator is a useful tool for converting one unit to another.
                Land measurements vary across India. If you want to find the equivalent unit
                of the local term for the unit, the simplest method is to use a land calculator.
            </p>
            <div className="row g-3 justify-content-center mt-4">
                {tools.map((item, i) => (
                    <div className="col-md-3 col-sm-6" key={i}>
                        <Link
                            to={`/area/${createSlug(item)}`}
                            className="area-btn w-100 d-block text-center"
                        >
                            {item}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
