import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../features/auth/authSlice";
import "./header.css";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { isAuthenticated, user, role } = useSelector((state) => state.auth); 
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const iconRef = useRef();
  const [bounce, setBounce] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    if (isAuthenticated) {
      setBounce(true);
      const timer = setTimeout(() => setBounce(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  
  return (
    <header className="header">
      <nav className="nav-container">
        <ul className="nav-left">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>

        <div className="nav-right">
          <Link to="/cart" className="cart-link">
            <FaShoppingCart size={20} />
            {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
          </Link>
          {isAuthenticated && (
            
          <div
            className="profile-dropdown"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
             <div className={`user-icon-wrapper ${bounce ? "pulse-user-icon" : ""}`} ref={iconRef}>
        <FaUser />
      </div>

            {dropdownOpen && (
              <div className="dropdown-menu">
                {role === "admin" && <Link to="/admin">Dashboard</Link>}
                <Link to="/profile">Profile</Link>
                <Link to="/checkout">Checkout</Link>
                
                <button onClick={handleLogout} className="logout-button">Logout</button>
              </div>
            )}
          </div>
            )}
            {!isAuthenticated && <Link to="/login" className="login-link">Login</Link>}
        </div>
      </nav>
    </header>
  );
}
