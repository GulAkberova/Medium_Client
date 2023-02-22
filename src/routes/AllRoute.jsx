import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import PrivateLayout from "../layout/PrivateLayout";
import PublicLayout from "../layout/PublicLayout";
import HomePage from "../pages/homepage/HomePage";
import Login from "../pages/loginpage/Login";

function AllRoute() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Route>

        <Route element={<PrivateLayout />} />
      </Routes>
    </>
  );
}

export default AllRoute;