import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../dashboard/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 允许登录的用户信息
  const users = [
    { username: "zhangsan", password: "123456" },
    { username: "lisi", password: "abcdef" },
  ];

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      navigate("/dashboard", { state: { username: user.username } });
    } else {
      setError("用户名或密码错误");
    }
  };

  return (
    <div className="login-container">
      <h2>登录页面</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>用户名</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>密码</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="button" onClick={handleLogin}>
          登录
        </button>
      </form>
    </div>
  );
};

export default Login;
