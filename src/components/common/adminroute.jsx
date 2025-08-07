import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  return isAuthenticated && role === "admin" ? children : <Navigate to="/shopSphere/" replace />;
}
