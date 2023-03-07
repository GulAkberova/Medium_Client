import Test from "pages/reglogtest/Test";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import PrivateLayout from "../layout/PrivateLayout";
import PublicLayout from "../layout/PublicLayout";
import BlogDetailPage from "../pages/blogdetailpage/BlogDetailPage";
import Comments from "../pages/commentpage/Comments";
import HomePage from "../pages/homepage/HomePage";
import Login from "../pages/loginpage/Login";
import Profile from "../pages/profilepage/Profile";
import UserHome from "../pages/userhomepage/UserHome";
import Write from "../pages/writepage/Write";
import Writer from "../pages/writerpage/Writer";

function AllRoute() {
  let auth = useSelector((state) => state.authReducer);
  // console.log("isauth", auth.token);
  return (
    <>
      <Routes>
        {!auth.token ? (
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<Test />} />

            {/* <Route path="/login" element={<Login />} /> */}
          </Route>
        ) : (
          <Route element={<PrivateLayout />}>
            <Route path="/home" element={<UserHome />} />
            <Route path="/home/:id" element={<BlogDetailPage />} />
            <Route path="/writer/:id" element={<Writer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/write" element={<Write />} />
            <Route path="/comments" element={<Comments />} />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default AllRoute;
