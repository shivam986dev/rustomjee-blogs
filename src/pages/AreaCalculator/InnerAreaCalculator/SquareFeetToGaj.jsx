import React, { useState, useEffect } from "react";

export default function SquareFeetToGaj() {
  const [sqft, setSqft] = useState("");
  const [result, setResult] = useState(null);

  const SQFT_TO_GAJ = 9; // 1 Gaj = 9 sq ft

  useEffect(() => {
    if (!sqft || sqft <= 0) {
      setResult(null);
      return;
    }

    const gaj = sqft / SQFT_TO_GAJ;
    setResult(parseFloat(gaj.toFixed(4))); // clean rounded output
  }, [sqft]);

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-2">Square Feet to Gaj Converter</h2>
      <hr />

      <p className="text-muted">
        1 Gaj = <strong>9 Square Feet</strong> <br />
        Gaj = Square Feet ÷ 9
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
            placeholder="Enter value in Square Feet"
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
          />
        </div>

        {/* Result */}
        {result !== null && (
          <div className="alert alert-success mt-3 mb-0">
            <strong>{sqft}</strong> sq ft = <strong>{result}</strong> Gaj
          </div>
        )}
      </div>
    </div>
  );
}
