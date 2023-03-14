import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink, useParams } from 'react-router-dom'
import { data } from '../../api/data';
import trend1 from '../../assets/images/trend1.jpeg'
import detail from '../../pages/blogdetailpage/blogdetail.module.css'

function BlogsWriter() {
  const param=useParams()
  console.log(param,'param arkadas')
  const [detailPost, setDetailPost]=useState([])
  useEffect(() => {
    data.getById("post", param.id).then((res) => {
      setDetailPost(res)
    });
  }, []);
  console.log(detailPost.firstName)
let id=detailPost.userId
  return (
    <>
    <div className={detail.blogs_writer_bigdiv}>
      <img src={trend1}/>
      {/* <h3><Link to={`/writer/`}></Link></h3> */}
      <h2>{detailPost.firstName}</h2>
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