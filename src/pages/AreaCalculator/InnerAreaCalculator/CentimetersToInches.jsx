import React, { useState, useEffect } from "react";

export default function CentimetersToInches() {
  const [cm, setCm] = useState("");
  const [result, setResult] = useState(null);

  const CM_TO_INCH = 2.54; // 1 inch = 2.54 cm

  useEffect(() => {
    if (!cm || cm <= 0) {
      setResult(null);
      return;
    }

    const inches = cm / CM_TO_INCH;
    setResult(parseFloat(inches.toFixed(4))); // clean output
  }, [cm]);

  return (
    <div className="container py-5">

      {/* Heading */}
      <h2 className="fw-bold mb-2">Centimeters to Inches Converter</h2>
      <hr />

      {/* Formula Text */}
      <p className="text-muted">
        1 Inch = <strong>2.54 Centimeters</strong> <br />
        Inches = Centimeters ÷ 2.54
      </p>

      {/* Main Box */}
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
            <strong>{cm}</strong> cm = <strong>{result}</strong> inches
          </div>
        )}
      </div>
    </div>
  );
}
