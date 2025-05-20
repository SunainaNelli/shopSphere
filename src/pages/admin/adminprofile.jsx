// src/pages/admin/AdminProfile.jsx
import React from "react";
import { useSelector } from "react-redux";

export default function AdminProfile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="admin-profile">
      <h1>Admin Profile</h1>
      <div className="profile-card">
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>
    </div>
  );
}
