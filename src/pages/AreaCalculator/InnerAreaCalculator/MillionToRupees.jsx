import React, { useState, useEffect } from "react";

export default function MillionToRupees() {
  const [million, setMillion] = useState("");
  const [result, setResult] = useState(null);

  const MILLION_TO_RUPEES = 1000000; // 1 Million = 10,00,000 Rupees

  useEffect(() => {
    if (!million || million <= 0) {
      setResult(null);
      return;
    }

    const rupees = million * MILLION_TO_RUPEES;
    setResult(parseFloat(rupees.toLocaleString("en-IN"))); // Indian formatting
  }, [million]);

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-2">Million to Rupees Converter</h2>
      <hr />

      <p className="text-muted">
        1 Million = <strong>10,00,000 Rupees</strong> <br />
        Rupees = Million × 10,00,000
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
            placeholder="Enter value in Million"
            value={million}
            onChange={(e) => setMillion(e.target.value)}
          />
        </div>

        {/* Result */}
        {result && (
          <div className="alert alert-success mt-3 mb-0">
            <strong>{million}</strong> Million = 
            <strong> ₹ {result}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
