import React, { useState } from 'react'
import detail from '../../pages/blogdetailpage/blogdetail.module.css'
import trend1 from '../../assets/images/trend1.jpeg'
import blogs1 from '../../assets/images/blogs1.png'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { liked, savedAdd, setPost } from '../../slice';
import Comments from '../../pages/commentpage/Comments';
import Moment from 'react-moment';
import { data } from 'api/data';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function BlogsDetail({detailPost}) {

  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen1(true);


  const[checkLike,setCheckLike]=useState(false)  
  const[testLike,setTestLike]=useState(false)  
  // const [like, setLike] = useState(detailPost.likes.length);

  let auth = useSelector((state) => state.authReducer);
  const loggedInUserId=auth.user._id
  const myLike=detailPost.likes
  let dispatch= useDispatch()
 
  // const sendGetRequest = async () => {
    
  //   const response = await fetch(`http://localhost:5000/post/${detailPost._id}/like`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ userId: loggedInUserId }),
  //   });
  //   const updatedPost = await response.json();
  //   console.log(updatedPost)
  //   dispatch(setPost({ post: updatedPost }));
  // }
  let id=detailPost._id
  let userId=detailPost.userId
  console.log(detailPost.likes)
   
  const handleLiked=(id,userId)=>{
   if(checkLike){
    data.getByPut(`/post/${id}/dislike`, { userId })
    .then((res) => {
      dispatch(liked(userId))
      setCheckLike(false);
      toast.error("Dislike", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    .catch((err) => {
      console.log(err);
    });

   }else{
   data.getByPost1(`/post/${id}/like`,{userId})
   .then((res) => {
    setCheckLike(true);
    dispatch(liked(userId))
    toast.success("Like", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
   
  })
  .catch((err) => {
    console.log(err);
  });
   }

   if(auth.like.includes(userId)){
   setTestLike(false)
   console.log(testLike,'testLike')

   }else{
    setTestLike(true)
   console.log(testLike,'testLike')

   }
  //  setLike(checkLike ? like - 1 : like + 1);
  }
  console.log(auth.like.length,'length')

  return (
    <>


    <div className={detail.blog_writer_header}>
       <div className={detail.blog_writer_header_img}>
       

       <img src={`http://localhost:5000/assets/${detailPost.userPicturePath}`} />
      
      <div>
        <h3>{detailPost.firstName} {detailPost.lastName}</h3>
        <span> <Moment format="DD/MM/YYYY">{detailPost.createdAt}</Moment></span>.
      </div>
       </div>
      
      <div className={detail.blog_writer_header_icon}>
     <ul>
      <li>
      <i class="fa-brands fa-facebook"></i>

      </li>
      <li>
      <i class="fa-brands fa-instagram"></i>

      </li>
      <li>
      <i class="fa-brands fa-linkedin"></i>

      </li>
      <li>
      <i class="fa-brands fa-youtube"></i>
      </li>
     </ul>
     {/* <i onClick={()=>handleSaved(detailPost)} className= {
              auth.saved.includes(detailPost) ? "fa-solid fa-bookmark" :"fa-regular fa-bookmark"}></i> */}
      </div>


    </div>
    <div className={detail.blog_detail_header}>
      <h1>{detailPost.title}</h1>
       <p>{detailPost.description}</p>
      
      <div className={detail.blog_detail_header_img}>
      <img src={`http://localhost:5000/assets/${detailPost.picturePath}`} />

      </div>
    </div>
    <div className={detail.follow_div}>
      <ul>
        <li onClick={()=>handleLiked(id,userId)}><i className={ auth.like.includes(auth.user._id) ? "fa-solid fa-thumbs-up" :"fa-regular fa-thumbs-up"}></i> 17</li>
        <li>|</li>
        <li  onClick={handleOpen}><i className="fa-regular fa-comment"></i></li>
       
      </ul>
</div>
<Comments open={open1} setOpen={setOpen1} detailPost={detailPost}/>

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

export default BlogsDetail