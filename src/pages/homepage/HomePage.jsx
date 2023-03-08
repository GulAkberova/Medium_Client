import React from "react";
import home from './homepage.module.css'
import Hero from "../../components/hero/Hero";
import Trend from "../../components/trend/Trend";
import Blogs from "../../components/blogs/Blogs";
import BlogsFilter from "../../components/blogsFilter/BlogsFilter";
import detail from "../blogdetailpage/blogdetail.module.css";
import blogs from '../../components/userblogs/userblogs.module.css'

function HomePage() {
  return (
    <>
      <Hero />
      <Trend/>
      <div className={home.home_blogs_div_block}>
          {/* <Blogs/>
          <BlogsFilter/> */}
           <div className={detail.detail_blogs}>
      <div className={blogs.blogs_big_div}>
      <Blogs/>

</div>


        </div>
        <div className={detail.detail_writer}>
      <BlogsFilter/> 
        </div>
      </div>
      <div className={home.home_blogs_div_none}>
         <BlogsFilter/>
          <Blogs/>
         
      </div>
    </>
  );
}

export default HomePage;
