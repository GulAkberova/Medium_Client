import React from 'react'
import blogs from "../userblogs/userblogs.module.css";
import blogs1 from "../../assets/images/blogs1.png";
import trend1 from "../../assets/images/trend1.jpeg";
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
function UserBlogsForYou() {
  let auth = useSelector((state) => state.authReducer);
  console.log("isauth", auth.posts);
  return (
    <>
     {
      auth.posts && auth.posts.map((i,key)=>(
        <div className={blogs.blogs_mini_div} key={key}>
        <div className={blogs.blogs_mini_text}>
          <div className={blogs.blogs_mini_text_img}>
            <img src={trend1} />
            <span>{i.firstName}</span>
          </div>
          <h2><Link to={`/home/${i._id}`}>{i.description}</Link></h2>
          <p>{i.description
}</p>
          <div className={blogs.blogs_mini_text_read}>
            <div>
            <span>15 Feb</span>.&nbsp; <span>4min read</span>
            <button>Google</button>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>
        </div>
        <div className={blogs.blogs_mini_img}>
          <img src={blogs1} />
        </div>
      </div>

      ))
     }
     
      
      </>
  )
}

export default UserBlogsForYou