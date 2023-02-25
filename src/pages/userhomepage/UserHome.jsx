import React from 'react'
import Blogs from '../../components/blogs/Blogs'
import BlogsFilter from '../../components/blogsFilter/BlogsFilter'
import UserBlogs from '../../components/userblogs/UserBlogs'
import UserBlogsFilter from '../../components/userblogsFilter/UserBlogsFilter'
import detail from '../blogdetailpage/blogdetail.module.css'
function UserHome() {
  return (
    <>
          <div className={detail.detail_bigdiv}>
          <div className={detail.detail_blogs}>
          <UserBlogs/>
          </div>
   <div className={detail.detail_writer}>
   <UserBlogsFilter/>
   </div>


      </div>
   
      </>
  )
}

export default UserHome