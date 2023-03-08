import React, { useEffect, useState } from 'react'
import blogs from "../userblogs/userblogs.module.css";
import blogs1 from "../../assets/images/blogs1.png";
import trend1 from "../../assets/images/trend1.jpeg";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { data } from 'api/data';
import axios from 'axios';
import Moment from 'react-moment'
import { savedAdd } from 'slice';
function ProfileHome() {
    let auth = useSelector((state) => state.authReducer);
    // console.log("isauth", auth.user._id);
  const dispatch=useDispatch()

   const [profile,setProfile]=useState([])
   useEffect(() => {
   
    const sendGetRequest = async () => {
    try {
        const resp = await axios.get(`http://localhost:5000/post/${auth.user._id}/post`);
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
    <div>


{
      profile.length ? profile.map((i,key)=>(
        <div className={blogs.blogs_mini_div} key={key}>
        <div className={blogs.blogs_mini_text}>
          <div className={blogs.blogs_mini_text_img}>
            <img src={`http://localhost:5000/assets/${ auth.user.picturePath}`} />
            <span>{i.firstName}</span>
          </div>
          <h2><Link to={`/home/${i._id}`}>{i.title}</Link></h2>
          <p>{i.description.slice(0,50)}...</p>
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

      )): <p>Data yox</p>
     }
    </div>
  )
}

export default ProfileHome