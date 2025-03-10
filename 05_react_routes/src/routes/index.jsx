import React from "react";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Home from "../pages/home";
import DashBoard from "../dashboard/DashBoard";
import Profile from "../dashboard/Profile";
import Setting from "../dashboard/Setting";
import Follow from "../dashboard/Follow";
import Fans from "../dashboard/Fans";
import Book from "../dashboard/book";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import NavBar from "../commponents/NavBar";
import BlogList from "../commponents/BlogList";
import BlogDetail from "../commponents/BlogDetail";

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/book/:bookId" element={<Book bookId="123" />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/dashboard" element={<DashBoard />}>
          <Route index element={<Profile />}></Route>
          <Route path="profile" element={<Profile />}>
            <Route path="fans" element={<Fans />}></Route>
            <Route path="follow" element={<Follow />}></Route>
          </Route>
          <Route path="setting" element={<Setting />}></Route>
        </Route>
        <Route path="/blog/:blogIndex" element={<BlogDetail />}></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
