import React, { useState, useEffect } from "react";

export default function FeetToCm() {
  const [feet, setFeet] = useState("");
  const [result, setResult] = useState(null);

  const FEET_TO_CM = 30.48; // 1 ft = 30.48 cm

  useEffect(() => {
    if (!feet || feet <= 0) {
      setResult(null);
      return;
    }

    const cm = feet * FEET_TO_CM;
    setResult(parseFloat(cm.toFixed(2))); // clean output
  }, [feet]);

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-2">Feet to Centimeter Converter</h2>
      <hr />

      <p className="text-muted">
        1 Foot = <strong>30.48 Centimeters</strong> <br />
        Centimeter = Feet × 30.48
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
            placeholder="Enter value in Feet"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
          />
        </div>

        {/* Result */}
        {result !== null && (
          <div className="alert alert-success mt-3 mb-0">
            <strong>{feet}</strong> ft = <strong>{result}</strong> cm
          </div>
        )}
      </div>
    </div>
  );
}
