import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {

  const navigate = useNavigate();
  const [totalComments, setTotalComments] = useState(0);

  // Fetch Counts
  const loadStats = async () => {
    const res = await fetch("http://localhost:5000/api/comments");
    const data = await res.json();
    setTotalComments(data.length);
  };

  useEffect(() => {
    loadStats();
  }, []);

  // Logout Handler
  const logoutAdmin = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div className="admin-container d-flex">

      {/* Sidebar */}
      <div className="sidebar bg-dark text-white p-3" style={{ width: "250px", height: "100vh" }}>
        <h1 className="text-center mb-0">Webzaa</h1>
        <h3 className="mb-4 mt-0 text-center">Admin Panel</h3>

        <ul className="list-unstyled">
          <li className="mb-3">
            <button className="btn btn-outline-light w-100" onClick={() => navigate("/admin/dashboard")}>
              Dashboard
            </button>
          </li>

          <li className="mb-3">
            <button className="btn btn-outline-light w-100" onClick={() => navigate("/admin/comments")}>
              Comments
            </button>
          </li>

          <li className="mt-5">
            <button className="btn btn-danger w-100" onClick={logoutAdmin}>
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content p-4" style={{ flexGrow: 1 }}>
        <h2>Welcome to Admin Dashboard</h2>
        <p className="text-muted">Manage your website from here.</p>

        {/* STATS CARDS */}
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h4>Total Comments</h4>
              <h2 className="text-primary">{totalComments}</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h4>Today's Comments</h4>
              <h2 className="text-success">+{Math.floor(totalComments / 2)}</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h4>Pending Tasks</h4>
              <h2 className="text-danger">3</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
