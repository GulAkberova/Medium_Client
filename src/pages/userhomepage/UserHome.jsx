import React from 'react'
import Blogs from '../../components/blogs/Blogs'
import BlogsFilter from '../../components/blogsFilter/BlogsFilter'
import UserBlogs from '../../components/userblogs/UserBlogs'
import UserBlogsFilter from '../../components/userblogsFilter/UserBlogsFilter'
import home from './userhome.module.css'
function UserHome() {
  return (
    <>
          <div className={home.home_blogs_div_block}>
          <UserBlogs/>
          <UserBlogsFilter/>
      </div>
   
      </>
  )
}

export default UserHome