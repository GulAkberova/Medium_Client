import React from 'react'
import blogs from "../userblogs/userblogs.module.css";
import blogs1 from "../../assets/images/blogs1.png";
import trend1 from "../../assets/images/trend1.jpeg";
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
function WriterBlogsForYou() {
  let auth = useSelector((state) => state.authReducer);
  console.log("isauth", auth.userposts);
  return (
    <>
     {
      auth.userposts && auth.userposts.map((i,key)=>(
        <div className={blogs.blogs_mini_div} key={key}>
        <div className={blogs.blogs_mini_text}>
          <div className={blogs.blogs_mini_text_img}>
          <img src={`http://localhost:5000/assets/${i.userPicturePath}`} />
            <span>{i.firstName}</span>
          </div>
          <h2><Link to={`/home/${i._id}`}>{i.title}</Link></h2>
          <p>{i.description.slice(0,80)}...</p>
          <div className={blogs.blogs_mini_text_read}>
            <div>
            <span> <Moment format="DD/MM/YYYY">{i.createdAt}</Moment></span>.
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>
        </div>
        <div className={blogs.blogs_mini_img}>
        <img src={`http://localhost:5000/assets/${i.picturePath}`} />
        </div>
      </div>

      ))
     }
     
      
      </>
  )
}

export default WriterBlogsForYou