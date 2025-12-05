import React, { useState, useEffect } from "react";

export default function KilogramsToPound() {
  const [kg, setKg] = useState("");
  const [result, setResult] = useState(null);

  const KG_TO_POUND = 2.20462; // 1 kg = 2.20462 pounds

  useEffect(() => {
    if (!kg || kg <= 0) {
      setResult(null);
      return;
    }

    const pound = kg * KG_TO_POUND;
    setResult(parseFloat(pound.toFixed(4))); // clean output
  }, [kg]);

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-2">Kilograms to Pounds Converter</h2>
      <hr />

      <p className="text-muted">
        1 Kilogram = <strong>2.20462 Pounds</strong> <br />
        Pounds = Kilograms × 2.20462
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
            placeholder="Enter value in Kilograms"
            value={kg}
            onChange={(e) => setKg(e.target.value)}
          />
        </div>

        {/* Result */}
        {result !== null && (
          <div className="alert alert-success mt-3 mb-0">
            <strong>{kg}</strong> kg = <strong>{result}</strong> lbs
          </div>
        )}
      </div>
    </div>
  );
}
