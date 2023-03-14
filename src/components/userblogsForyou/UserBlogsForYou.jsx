import React, { useEffect, useState } from 'react'
import blogs from "../userblogs/userblogs.module.css";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Moment from 'react-moment';
import { savedAdd } from 'slice';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserBlogsForYou() {
  let auth = useSelector((state) => state.authReducer);
  const dispatch=useDispatch()
  const [profile,setProfile]=useState([])
  const [isLoading, setIsLoading]=useState(false)
  useEffect(() => {
  
   const sendGetRequest = async () => {
    setIsLoading(true)
   try {
       const resp = await axios.get(`http://localhost:5000/post/`);
      resp.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
       setProfile(resp.data)
       setIsLoading(false)

   } catch (err) {
       // Handle Error Here
       console.error(err);
   }
};

sendGetRequest();
 }, []);

 const handleSaved=(item)=>{
  dispatch(savedAdd(item))
  if(auth.saved.includes(item)){
    toast.error("Information not saved", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
   
   
  }else{
    toast.success("Information saved", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
   
  }

 }
  return (
    <>
     {
     !isLoading ? profile.map((i,key)=>(
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

      )) : profile.map((i,key)=>(
        <SkeletonTheme color="#333" highlightColor="#444">
        <div className={blogs.blogs_mini_div} key={key}>
        <div className={blogs.blogs_mini_text}>
          <div className={blogs.blogs_mini_text_img}>
          <Skeleton circle={true} height={30} width={30} />

            <span> <Skeleton height={20} width={40} count={1} /></span>
          </div>
          <h2> <Skeleton height={25} count={1} /></h2>
          <p> <Skeleton height={25}  count={1} /></p>
          <div className={blogs.blogs_mini_text_read}>
            <div>
            <span> <Skeleton height={16} width={30} count={1} /></span>.

            </div>
           
          </div>
        </div>
        <div className={blogs.blogs_mini_img}>
        <Skeleton height={150} width={200} count={1} />

        </div>
      </div>
      </SkeletonTheme>
      ))
   
     }
        <ToastContainer
                  position="top-center"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
      
      </>
  )
}

export default UserBlogsForYou