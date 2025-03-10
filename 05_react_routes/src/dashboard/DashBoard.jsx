import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import AppRoutes from "../routes";
const DashBoard = () => {
  const location = useLocation();
  const { username } = location.state || {};
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>welcome:{username}</h3>
      <nav>
        <NavLink to="profile" activeClassName="active">
          profile
        </NavLink>
        <NavLink to="setting" activeClassName="active">
          setting
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default DashBoard;
