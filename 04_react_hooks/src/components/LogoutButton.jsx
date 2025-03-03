// LogoutButton.js
import React from "react";
import { useContext } from "react";
import { UserContext } from "../hooks/UserContext";

const LogoutButton = () => {
  const { logout } = useContext(UserContext);

  return <button onClick={logout}>登出</button>;
};

export default LogoutButton;
