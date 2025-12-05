import React, { useState, useEffect } from "react";

export default function CentimeterToFeet() {
  const [cm, setCm] = useState("");
  const [result, setResult] = useState(null);

  const CM_TO_FEET = 30.48; // 1 ft = 30.48 cm

  useEffect(() => {
    if (!cm || cm <= 0) {
      setResult(null);
      return;
    }

    const feet = cm / CM_TO_FEET;
    setResult(parseFloat(feet.toFixed(4))); // clean output
  }, [cm]);

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-2">Centimeter to Feet Converter</h2>
      <hr />

      <p className="text-muted">
        1 Foot = <strong>30.48 Centimeters</strong> <br />
        Feet = Centimeters ÷ 30.48
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
            placeholder="Enter value in Centimeters"
            value={cm}
            onChange={(e) => setCm(e.target.value)}
          />
        </div>

        {/* Result */}
        {result !== null && (
          <div className="alert alert-success mt-3 mb-0">
            <strong>{cm}</strong> cm = <strong>{result}</strong> ft
          </div>
        )}
      </div>
    </div>
  );
}
