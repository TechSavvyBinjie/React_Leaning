import React from "react";
import Login from "../dashboard/Login";
import AppRoutes from "../routes/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Login1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
};

export default Login1;
