// UserStatus.js
import React from "react";
import { useContext } from "react";
import { UserContext } from "../hooks/UserContext";

const UserStatus = () => {
  const { user } = useContext(UserContext);

  return <div>{user ? <p>当前用户：{user}</p> : <p>未登录</p>}</div>;
};

export default UserStatus;
