import NotFound from "pages/notfoundpage/NotFound";
import Test from "pages/reglogtest/Test";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
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
 const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        {!auth.token ? (
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Test />} />
            <Route path="*" element={<NotFound/>}></Route>

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
