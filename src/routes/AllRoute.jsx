import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import PrivateLayout from "../layout/PrivateLayout";
import PublicLayout from "../layout/PublicLayout";
import BlogDetailPage from "../pages/blogdetailpage/BlogDetailPage";
import HomePage from "../pages/homepage/HomePage";
import Login from "../pages/loginpage/Login";
import Register from "../pages/registerpage/Register";
import Save from "../pages/savedpage/Save";
import UserHome from "../pages/userhomepage/UserHome";
import Writer from "../pages/writerpage/Writer";

function AllRoute() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Route>

        <Route element={<PrivateLayout />} >
          <Route path='/home' element={<UserHome/>} />
          <Route path="/blogsdetail" element={<BlogDetailPage/>}/>
          <Route path="/writer" element={<Writer/>}/>
          <Route path="/save" element={<Save/>}/>
          <Route path="/register" element={<Register/>}/>


        </Route>
      </Routes>
    </>
  );
}

export default AllRoute;
