import React, { useState, useEffect } from "react";

export default function CentToSquareFeet() {
  const [cent, setCent] = useState("");
  const [result, setResult] = useState(null);

  const CENT_TO_SQFT = 435.6; // 1 Cent = 435.6 sq ft

  useEffect(() => {
    if (!cent || cent <= 0) {
      setResult(null);
      return;
    }

    const sqft = cent * CENT_TO_SQFT;
    setResult(parseFloat(sqft.toFixed(2))); // clean output
  }, [cent]);

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-2">Cent to Square Feet Converter</h2>
      <hr />

      <p className="text-muted">
        1 Cent = <strong>435.6 Square Feet</strong> <br />
        Square Feet = Cent × 435.6
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
            placeholder="Enter value in Cent"
            value={cent}
            onChange={(e) => setCent(e.target.value)}
          />
        </div>

        {/* Result */}
        {result !== null && (
          <div className="alert alert-success mt-3 mb-0">
            <strong>{cent}</strong> Cent = <strong>{result}</strong> Sq Ft
          </div>
        )}
      </div>
    </div>
  );
}
