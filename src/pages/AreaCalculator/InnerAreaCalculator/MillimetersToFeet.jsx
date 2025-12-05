import React, { useState, useEffect } from "react";

export default function MillimetersToFeet() {
  const [mm, setMm] = useState("");
  const [result, setResult] = useState(null);

  const MM_TO_FEET = 304.8; // 304.8 mm = 1 foot

  useEffect(() => {
    if (!mm || mm <= 0) {
      setResult(null);
      return;
    }

    const feet = mm / MM_TO_FEET;
    setResult(parseFloat(feet.toFixed(4))); // clean rounded output
  }, [mm]);

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-2">Millimeters to Feet Converter</h2>
      <hr />

      <p className="text-muted">
        1 Foot = <strong>304.8 Millimeters</strong> <br />
        Feet = Millimeters ÷ 304.8
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
            placeholder="Enter value in Millimeters"
            value={mm}
            onChange={(e) => setMm(e.target.value)}
          />
        </div>

        {/* Result */}
        {result !== null && (
          <div className="alert alert-success mt-3 mb-0">
            <strong>{mm}</strong> mm = <strong>{result}</strong> ft
          </div>
        )}
      </div>
    </div>
  );
}
