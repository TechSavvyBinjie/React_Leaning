// UserContext.js
import React, { useState } from "react";
import { UserContext } from "../hooks/UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === "admin" && password === "123") {
      setUser(username);
    } else {
      alert("用户名或密码错误");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
