import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";

export default function CommentsAdmin() {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");

  const loadComments = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/comments");
      const data = await res.json();
      setComments(data);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to load comments", "error");
    }
  };

  useEffect(() => {
    loadComments();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This comment will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`http://localhost:5000/api/comments/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      Swal.fire("Deleted!", data.message, "success");
      loadComments();
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to delete comment", "error");
    }
  };

  const filteredComments = comments.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.name?.toLowerCase().includes(q) ||
      c.email?.toLowerCase().includes(q) ||
      c.comment?.toLowerCase().includes(q)
    );
  });

  // ================= DOWNLOAD EXCEL =================
  const downloadExcel = () => {
    if (comments.length === 0) {
      Swal.fire("No Data", "Download karne ke liye koi data nahi hai", "warning");
      return;
    }

    const excelData = comments.map((item) => ({
      ID: item.id,
      Comment: item.comment,
      Name: item.name,
      Email: item.email,
      Website: item.website || "-",
      Date: item.createdAt ? new Date(item.createdAt).toLocaleString() : "-",
    }));

    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, "Comments");
    XLSX.writeFile(wb, "comments-data.xlsx");

    Swal.fire("Success", "Excel file downloaded!", "success");
  };

  return (
    <div className="admin-container">

      {/* INTERNAL CSS */}
      <style>{`
        .admin-container {
          padding: 20px;
          background: #f4f6fa;
          min-height: 100vh;
        }

        .admin-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .admin-title {
          font-size: 24px;
          font-weight: 700;
          color: #1b3c74;
        }

        .admin-search {
          border-radius: 10px;
          padding: 10px;
          border: 1px solid #cbd5e1;
        }

        .btn-download {
          background: #16a34a;
          color: white;
          padding: 8px 15px;
          border-radius: 8px;
          border: none;
          margin-right: 10px;
        }

        .btn-download:hover {
          background: #0f7a35;
        }

        .badge-style {
          background: #1b3c74;
          padding: 8px 14px;
          border-radius: 8px;
          color: white;
        }

        thead {
          background: #1b3c74;
          color: white;
        }

        tbody tr:hover {
          background: #eef4ff;
        }

        /* MOBILE VIEW */
        @media (max-width: 768px) {
          table thead {
            display: none;
          }

          table tbody tr {
            display: block;
            margin-bottom: 15px;
            background: #fff;
            padding: 15px;
            border-radius: 12px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          }

          table tbody td {
            display: flex;
            justify-content: space-between;
            padding: 8px;
            border-bottom: 1px solid #eee;
          }

          table tbody td:last-child {
            border-bottom: none;
          }

          table tbody td::before {
            content: attr(data-label);
            font-weight: bold;
          }

          .btn-danger {
            width: 100%;
          }
        }
      `}</style>

      <div className="admin-card">

        {/* TITLE & BUTTONS */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="admin-title">Admin Dashboard</h2>

          <div>
            <button className="btn-download" onClick={downloadExcel}>
              Download Excel
            </button>

            <span className="badge-style">Total: {comments.length}</span>
          </div>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          className="form-control admin-search mb-3"
          placeholder="Search comments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* TABLE */}
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th>Comment</th>
                <th>Name / Email</th>
                <th>Website</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredComments.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">No comments found.</td>
                </tr>
              ) : (
                filteredComments.map((c) => (
                  <tr key={c.id}>
                    <td data-label="ID">{c.id}</td>
                    <td data-label="Comment">
                      <small>{c.comment}</small>
                    </td>
                    <td data-label="Name / Email">
                      <strong>{c.name}</strong>
                      <br />
                      <small>{c.email}</small>
                    </td>
                    <td data-label="Website">
                      {c.website ? (
                        <a href={c.website} target="_blank" rel="noreferrer">{c.website}</a>
                      ) : (
                        <span className="text-muted">-</span>
                      )}
                    </td>
                    <td data-label="Date">
                      {c.createdAt ? new Date(c.createdAt).toLocaleString() : "-"}
                    </td>
                    <td data-label="Action">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(c.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}
