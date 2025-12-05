import React, { useState, useEffect } from "react";

export default function MeterToCentimeter() {
  const [meter, setMeter] = useState("");
  const [result, setResult] = useState(null);

  const METER_TO_CM = 100; // 1 meter = 100 centimeters

  useEffect(() => {
    if (!meter || meter <= 0) {
      setResult(null);
      return;
    }

    const cm = meter * METER_TO_CM;
    setResult(parseFloat(cm.toFixed(2))); // clean output
  }, [meter]);

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-2">Meter to Centimeter Converter</h2>
      <hr />

      <p className="text-muted">
        1 Meter = <strong>100 Centimeters</strong> <br />
        Centimeter = Meter × 100
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
            placeholder="Enter value in Meters"
            value={meter}
            onChange={(e) => setMeter(e.target.value)}
          />
        </div>

        {/* Result */}
        {result !== null && (
          <div className="alert alert-success mt-3 mb-0">
            <strong>{meter}</strong> m = <strong>{result}</strong> cm
          </div>
        )}
      </div>
    </div>
  );
}
