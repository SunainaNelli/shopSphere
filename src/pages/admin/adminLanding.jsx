// src/pages/admin/AdminProfile.jsx
import { Link } from "react-router-dom";
import './adminLanding.css'; // Import your CSS file for styling

export default function AdminLanding() {
  return (
    <div className="admin-profile p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, Admin 👋</h1>
      <p className="mb-4 text-gray-600">Manage your store:</p>
      <ul className="space-y-3">
        <li>
          <Link
            to="/admin/inventory"
            className="text-blue-600 hover:underline font-medium"
          >
            📦 Inventory Management
          </Link>
        </li>
        {/* future links:
            <li><Link to="/admin/orders">📑 Orders</Link></li>
            <li><Link to="/admin/users">👥 Users</Link></li> 
        */}
      </ul>
    </div>
  );
}
