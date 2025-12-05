import React, { useState, useEffect } from "react";

export default function InchesToCm() {
  const [inch, setInch] = useState("");
  const [result, setResult] = useState(null);

  const INCH_TO_CM = 2.54; // 1 inch = 2.54 cm

  useEffect(() => {
    if (!inch || inch <= 0) {
      setResult(null);
      return;
    }

    const cm = inch * INCH_TO_CM;
    setResult(parseFloat(cm.toFixed(4))); // clean output
  }, [inch]);

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-2">Inches to Centimeter Converter</h2>
      <hr />

      <p className="text-muted">
        1 Inch = <strong>2.54 Centimeters</strong> <br />
        Centimeter = Inches × 2.54
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
            placeholder="Enter value in Inches"
            value={inch}
            onChange={(e) => setInch(e.target.value)}
          />
        </div>

        {/* Result */}
        {result !== null && (
          <div className="alert alert-success mt-3 mb-0">
            <strong>{inch}</strong> in = <strong>{result}</strong> cm
          </div>
        )}
      </div>
    </div>
  );
}
