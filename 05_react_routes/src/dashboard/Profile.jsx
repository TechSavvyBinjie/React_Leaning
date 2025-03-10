import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import AppRoutes from "../routes";
import "../css/Profile.css";
const Profile = () => {
  return (
    <div className="profile-container">
      <nav className="nav-sidebar">
        <ul className="nav-links">
          <li>
            <NavLink
              to="fans"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              fans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="follow"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              follow
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
