import React from 'react'
import { NavLink } from 'react-router-dom'
import trend1 from '../../assets/images/trend1.jpeg'
import detail from '../../pages/blogdetailpage/blogdetail.module.css'

function BlogsWriter({detailPost}) {
  console.log(detailPost)
  return (
    <>
    <div className={detail.blogs_writer_bigdiv}>
      <img src={trend1}/>
      <h3><NavLink to='/writer'>dvgf</NavLink></h3>
      <span>9.4k Followers</span>
      <p>Design exceptional UX for beautiful websites and products with online collaborative tools</p>
      <div>
        <button className={detail.blogs_writer_btn1}>Follow</button>
        <button className={detail.blogs_writer_btn2}>Mail</button>
      </div>

    </div>
    </>
  )
}

export default BlogsWriter