// src/pages/Login.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    const userData = {
      name: role === "admin" ? "Admin User" : "Regular User",
      email: `${role}@myshop.com`,
      role: role,
    };

    dispatch(login({ user: userData, role }));
    role === 'admin' ? navigate('/admin') : navigate('/') ;// or "/admin" if admin
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <p>Select login type:</p>
      <button onClick={() => handleLogin("user")}>Login as User</button>
      <button onClick={() => handleLogin("admin")}>Login as Admin</button>
    </div>
  );
}
