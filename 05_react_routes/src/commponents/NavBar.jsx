import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const username = location.state?.username;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-link">
          登录
        </Link>
        <Link to="/home" className="navbar-link">
          首页
        </Link>
        <Link to="/about" className="navbar-link">
          关于
        </Link>
        <Link to="/dashboard" className="navbar-link">
          仪表盘
        </Link>
      </div>
      <div className="navbar-right">
        {username ? (
          <span className="user-info">欢迎, {username}</span>
        ) : (
          <Link to="/" className="navbar-link">
            登录
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
