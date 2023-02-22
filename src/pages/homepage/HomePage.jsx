import React from "react";
import home from './homepage.module.css'
import Hero from "../../components/hero/Hero";
import Trend from "../../components/trend/Trend";
import Blogs from "../../components/blogs/Blogs";
import BlogsFilter from "../../components/blogsFilter/BlogsFilter";

function HomePage() {
  return (
    <>
      <Hero />
      <Trend/>
      <div className={home.home_blogs_div}>
       
          <Blogs/>
          <BlogsFilter/>
        

      </div>
    </>
  );
}

export default HomePage;
