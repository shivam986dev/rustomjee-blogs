import React, { useState, useEffect } from "react";

export default function MillimetersToInches() {
  const [mm, setMm] = useState("");
  const [result, setResult] = useState(null);

  const MM_TO_INCH = 25.4; // 25.4 mm = 1 inch

  useEffect(() => {
    if (!mm || mm <= 0) {
      setResult(null);
      return;
    }

    const inches = mm / MM_TO_INCH;
    setResult(parseFloat(inches.toFixed(4))); // clean rounded output
  }, [mm]);

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-2">Millimeters to Inches Converter</h2>
      <hr />

      <p className="text-muted">
        1 Inch = <strong>25.4 Millimeters</strong> <br />
        Inches = Millimeters ÷ 25.4
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
            <strong>{mm}</strong> mm = <strong>{result}</strong> inches
          </div>
        )}
      </div>
    </div>
  );
}
