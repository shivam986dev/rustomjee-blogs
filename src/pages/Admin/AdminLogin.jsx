import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const ADMIN_USER = "admin";
  const ADMIN_PASS = "admin123";

  const handleLogin = (e) => {
    e.preventDefault();

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      localStorage.setItem("adminLoggedIn", "true");

      Swal.fire({
        title: "Login Successful",
        text: "Welcome, Admin!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1500);
    } else {
      Swal.fire({
        title: "Error",
        text: "Invalid username or password",
        icon: "error",
      });
    }
  };

  return (
    <div className="login-container">

      {/* INTERNAL CSS */}
      <style>{`
      *{
      background: #ecececff;
      }
      form{
      background: #ffffff;
      }
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
        //   background: linear-gradient(135deg, #1b3c74, #4c78c8);
          padding: 20px;
        }

        .login-card {
          background: #ffffff;
          padding: 35px;
          width: 100%;
          max-width: 420px;
          border-radius: 14px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          animation: fadeIn 0.7s ease-in-out;
        }

        .login-title {
          font-size: 26px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
          color: #000000ff;
          background: #ffffff;
        }

        .login-input {
          width: 100%;
          padding: 12px 14px;
          margin-bottom: 18px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          font-size: 15px;
          outline: none;
          transition: 0.3s;
        }

        .login-input:focus {
          border-color: #1b3c74;
          box-shadow: 0 0 5px rgba(27, 60, 116, 0.4);
        }

        .login-btn {
          width: 100%;
          padding: 12px;
          background: #000000ff;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .login-btn:hover {
          background: #222222ff;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 480px) {
          .login-card {
            padding: 25px;
          }
          .login-title {
            font-size: 22px;
          }
        }
      `}</style>

      <div className="login-card">
        <h2 className="login-title">Admin Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
