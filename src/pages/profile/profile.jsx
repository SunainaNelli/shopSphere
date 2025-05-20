import React from "react";
import { useSelector } from "react-redux";
import "./profile.css"; // Assuming you have a CSS file for styling

export default function Profile() {
  const { user, role } = useSelector((state) => state.auth);

  return (
    <div className="profile-page">
      <h2>👤 Your Profile</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {role}</p>
      </div>
    </div>
  );
}
