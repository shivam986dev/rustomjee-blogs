import React, { useState, useEffect } from "react";

export default function FeetToInches() {
  const [feet, setFeet] = useState("");
  const [result, setResult] = useState(null);

  const FEET_TO_INCH = 12; // 1 foot = 12 inches

  useEffect(() => {
    if (!feet || feet <= 0) {
      setResult(null);
      return;
    }

    const inches = feet * FEET_TO_INCH;
    setResult(parseFloat(inches.toFixed(2)));
  }, [feet]);

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-2">Feet to Inches Converter</h2>
      <hr />

      <p className="text-muted">
        1 Foot = <strong>12 Inches</strong> <br />
        Inches = Feet × 12
      </p>

      <div
        className="p-4 bg-white rounded mx-auto"
        style={{
          boxShadow: "0 6px 20px rgba(0,0,0,0.12)"
        }}
      >
        {/* Input */}
        <div className="input-group input-group-lg mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter value in Feet"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
          />
        </div>

        {/* Result */}
        {result !== null && (
          <div className="alert alert-success mt-3 mb-0">
            <strong>{feet}</strong> ft = <strong>{result}</strong> inches
          </div>
        )}
      </div>
    </div>
  );
}
