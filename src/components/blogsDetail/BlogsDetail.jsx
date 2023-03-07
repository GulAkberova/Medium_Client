import React from 'react'
import detail from '../../pages/blogdetailpage/blogdetail.module.css'
import trend1 from '../../assets/images/trend1.jpeg'
import blogs1 from '../../assets/images/blogs1.png'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPost } from '../../slice';
import Comments from '../../pages/commentpage/Comments';
import Moment from 'react-moment';
function BlogsDetail({detailPost}) {

  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen1(true);

  let auth = useSelector((state) => state.authReducer);
  const loggedInUserId=auth.user._id
  // const myObject = new Object();
  // myObject["firstname"] = "Gareth";
  // myObject["lastname"] = "Simpson";
  // myObject["age"] = 21;
  // console.log(myObject)
  // const isLiked=Boolean(detailPost.likes[loggedInUserId])
  const myLike=detailPost.likes
  // console.log(Object.keys(myLike).length)
  // const likeCount=Object.keys(myLike).length;
  // console.log(likeCount)
// console.log("logged",detailPost)
  // console.log(detailPost._id)
  let dispatch= useDispatch()
  let id=detailPost._id
  // console.log("id",id)
  const sendGetRequest = async () => {
    
    const response = await fetch(`http://localhost:5000/post/${detailPost._id}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    console.log(updatedPost)
    dispatch(setPost({ post: updatedPost }));
  }
   
  const handleLiked=()=>{
    sendGetRequest()

  }
  console.log(detailPost.likes)

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
        <li onClick={()=>handleLiked()}><i className={ detailPost.likes ? "fa-solid fa-thumbs-up" :"fa-regular fa-thumbs-up"}></i> 17</li>
        <li>|</li>
        <li  onClick={handleOpen}><i className="fa-regular fa-comment"></i></li>
        <li>|</li>
        <li>...</li>
      </ul>
</div>
<Comments open={open1} setOpen={setOpen1} detailPost={detailPost}/>

    
    </>
  )
}

export default BlogsDetail