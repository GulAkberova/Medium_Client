import React, { useEffect, useState } from 'react'
import blogs from "../userblogs/userblogs.module.css";
import blogs1 from "../../assets/images/blogs1.png";
import trend1 from "../../assets/images/trend1.jpeg";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Moment from 'react-moment';
import { savedAdd } from 'slice';
import Skeleton from 'react-loading-skeleton'
function UserBlogsForYou() {
  let auth = useSelector((state) => state.authReducer);
  const dispatch=useDispatch()
  const [profile,setProfile]=useState([])
  useEffect(() => {
  
   const sendGetRequest = async () => {
   try {
       const resp = await axios.get(`http://localhost:5000/post/`);
       console.log(resp.data);
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
          <h2><Link to={`/home/${i._id}`}>{i.title || <Skeleton />}</Link></h2>
          <p>{i.description.slice(0,80)}...</p>
          <div className={blogs.blogs_mini_text_read}>
            <div>
            <span> <Moment format="DD/MM/YYYY">{i.createdAt}</Moment></span>.

            </div>
            <i onClick={()=>handleSaved(i)} class= {
              auth.saved.includes(i) ? "fa-solid fa-bookmark" :"fa-regular fa-bookmark"}></i>
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

export default UserBlogsForYou