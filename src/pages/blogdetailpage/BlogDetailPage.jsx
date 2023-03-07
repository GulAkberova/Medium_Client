import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { data } from "../../api/data";
import BlogsDetail from "../../components/blogsDetail/BlogsDetail";
import BlogsWriter from "../../components/blogsWriter/BlogsWriter";
import { setFriends } from "../../slice";
import detail from './blogdetail.module.css'
function BlogDetailPage() {
  const param=useParams()
  const dispatch=useDispatch()
  let auth = useSelector((state) => state.authReducer);
  const [check, setCheck]=useState(false)
  const [detailPost, setDetailPost]=useState([])
  useEffect(() => {
    data.getById("post", param.id).then((res) => {
      setDetailPost(res)
    });
  }, []);
//  console.log(detailPost,'detaaa')
let id=detailPost.userId
const isFriend=auth.user.friends.find((friend)=>friend._id === id)

  const sendGetRequest = async () => {
    try {
        const resp = await axios.patch(`http://localhost:5000/users/${auth.user._id}/${id}`);
        // console.log(resp.data);
        dispatch(setFriends({friends:resp.data}))
    

    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  }

    const handleFollow=()=>{
      setCheck(!check)
      sendGetRequest()
}


  return <> 
  <section className={detail.detail_bigdiv}>
   <div className={detail.detail_blogs}>
   <button className={`${detail.blogs_writer_btn1} ${detail.blogs_follow}`} onClick={()=>handleFollow(id)}>Follow</button>

   <BlogsDetail detailPost={detailPost}/>

   </div>
   <div className={detail.detail_writer}>
   {/* <BlogsWriter detailPost={detailPost}/> */}
   <div className={detail.blogs_writer_bigdiv}>
   <img src={`http://localhost:5000/assets/${detailPost.userPicturePath}`}/>
   <h3><Link to={`/writer/${id}`}>{detailPost.firstName}</Link></h3>
   <p>{detailPost.occupation}</p>

        
         
          </div>
      {/* <span>{detailPost.friends.length} &nbsp;Followers</span> */}
      <div>
        <button className={detail.blogs_writer_btn1} onClick={()=>handleFollow(id)}>{isFriend ? <p>Following</p> : <p>Follow</p>}</button>
        <button className={detail.blogs_writer_btn2}>Mail</button>
      </div>

    </div>
 
 

  </section>

  
  
  </>;
}

export default BlogDetailPage;
