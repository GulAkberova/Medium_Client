import React from 'react'
import blogs from "../userblogs/userblogs.module.css";

function UserBlogsFilter() {
  return (
    <>
     <section className={blogs.blogsFilter_big_div}>
      <h3>Discover more of what matters to you</h3>
      <div className={blogs.blogsFilter_mini_div}>
        <a>Programming</a>
        <a>Data Science</a>
        <a>Programming</a>
        <a>Prog</a>
        <a>Programming</a>
        <a>Prog</a>
        <a>Data Science</a>
        <a>Prog</a>

      </div>
     


    </section>
    </>
  )
}

export default UserBlogsFilter