import React from "react";
import detail from "../blogdetailpage/blogdetail.module.css";
import blogs from "../../components/userblogs/userblogs.module.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UserBlogsFilter from "../../components/userblogsFilter/UserBlogsFilter";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { savedAdd } from "slice";
function Save() {
  

  let auth = useSelector((state) => state.authReducer);
  console.log('saveeed arkadassss',auth.saved)
  const dispatch=useDispatch()

  const handleSaved=(item)=>{
    dispatch(savedAdd(item))
   
   }

  return (
    <>
     {
     auth.saved.length ? auth.saved.map((i,key)=>(
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
            <i onClick={()=>handleSaved(i)} class= {
              auth.saved.includes(i) ? "fa-solid fa-bookmark" :"fa-regular fa-bookmark"}></i>
          </div>
        </div>
        <div className={blogs.blogs_mini_img}>
        <img src={`http://localhost:5000/assets/${i.picturePath}`} />

        </div>
      </div>

      )):<p>Data yox</p>
     }
    </>
  );
}

export default Save;
