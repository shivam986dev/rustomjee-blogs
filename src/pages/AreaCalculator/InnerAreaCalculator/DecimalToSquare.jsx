import React, { useState, useEffect } from "react";

export default function DecimalToSquareFeet() {
  const [decimal, setDecimal] = useState("");
  const [result, setResult] = useState(null);

  const DECIMAL_TO_SQFT = 435.6; // 1 Decimal = 435.6 sq ft

  useEffect(() => {
    if (!decimal || decimal <= 0) {
      setResult(null);
      return;
    }

    const sqft = decimal * DECIMAL_TO_SQFT;
    setResult(parseFloat(sqft.toFixed(2))); // clean output
  }, [decimal]);

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-2">Decimal to Square Feet Converter</h2>
      <hr />

      <p className="text-muted">
        1 Decimal = <strong>435.6 Square Feet</strong> <br />
        Square Feet = Decimal × 435.6
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
            placeholder="Enter value in Decimal"
            value={decimal}
            onChange={(e) => setDecimal(e.target.value)}
          />
        </div>

        {/* Result */}
        {result !== null && (
          <div className="alert alert-success mt-3 mb-0">
            <strong>{decimal}</strong> Decimal = <strong>{result}</strong> Sq Ft
          </div>
        )}
      </div>
    </div>
  );
}
