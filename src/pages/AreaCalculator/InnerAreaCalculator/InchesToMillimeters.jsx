import React, { useState, useEffect } from "react";

export default function InchesToMillimeters() {
  const [inch, setInch] = useState("");
  const [result, setResult] = useState(null);

  const INCH_TO_MM = 25.4; // 1 inch = 25.4 mm

  useEffect(() => {
    if (!inch || inch <= 0) {
      setResult(null);
      return;
    }

    const mm = inch * INCH_TO_MM;
    setResult(parseFloat(mm.toFixed(4))); // clean output
  }, [inch]);

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-2">Inches to Millimeters Converter</h2>
      <hr />

      <p className="text-muted">
        1 Inch = <strong>25.4 Millimeters</strong> <br />
        Millimeter = Inches × 25.4
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
            placeholder="Enter value in Inches"
            value={inch}
            onChange={(e) => setInch(e.target.value)}
          />
        </div>

        {/* Result */}
        {result !== null && (
          <div className="alert alert-success mt-3 mb-0">
            <strong>{inch}</strong> in = <strong>{result}</strong> mm
          </div>
        )}
      </div>
    </div>
  );
}
