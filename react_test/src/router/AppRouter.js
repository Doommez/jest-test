import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import UsersDetailsPage from "../pages/UsersDetailsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "src/pages/ErrorPage";
import Users from "src/users/Users";
import HelloWorld from "../pages/HelloWorld";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UsersDetailsPage />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path={'/hello'} element={<HelloWorld />} />
    </Routes>
  );
};

export default AppRouter;
