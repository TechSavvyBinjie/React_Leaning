import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

export default App;
