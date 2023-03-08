import React,{ useEffect, useState } from "react";
import blogs from "./blogs.module.css";
import blogs1 from "../../assets/images/blogs1.png";
import trend1 from "../../assets/images/trend1.jpeg";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Moment from 'react-moment';
import { savedAdd } from 'slice';
import detail from "../../pages/blogdetailpage/blogdetail.module.css";
import Skeleton from 'react-loading-skeleton'
function Blogs() {
  let auth = useSelector((state) => state.authReducer);
  console.log(auth.user)
  const dispatch=useDispatch()
  const [profile,setProfile]=useState([])
  useEffect(() => {
  
   const sendGetRequest = async () => {
   try {
       const resp = await axios.get(`http://localhost:5000/post/`);
      resp.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
       setProfile(resp.data)

   } catch (err) {
       // Handle Error Here
       console.error(err);
   }
};

sendGetRequest();
 }, []);

 const handleSaved=(item)=>{
  dispatch(savedAdd(item))
 
 }
  return (
  <>
   {
     profile && profile.map((i,key)=>(
        <div className={blogs.blogs_mini_div} key={key}>
        <div className={blogs.blogs_mini_text}>
          <div className={blogs.blogs_mini_text_img}>
          <img src={`http://localhost:5000/assets/${i.userPicturePath || <Skeleton />}`} />

            <span>{i.firstName || <Skeleton/>}</span>
          </div>
          <h2><Link to={`/login`}>{i.title || <Skeleton />}</Link></h2>
          <p>{i.description.slice(0,80)}...</p>
          <div className={blogs.blogs_mini_text_read}>
            <div>
            <span> <Moment format="DD/MM/YYYY">{i.createdAt}</Moment></span>.

            </div>
           <Link to='/login'> <i  class= {
             "fa-regular fa-bookmark"}></i></Link>
          </div>
        </div>
        <div className={blogs.blogs_mini_img}>
        <img src={`http://localhost:5000/assets/${i.picturePath}`} />

        </div>
      </div>

      ))
     }
  
  </>
  );
}

export default Blogs;
