import axios from "axios";
import WriteProfile from "components/writeprofile/WriteProfile";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { data } from "../../api/data";
import BlogsDetail from "../../components/blogsDetail/BlogsDetail";
import BlogsWriter from "../../components/blogsWriter/BlogsWriter";
import { setFollow, setFriends, setUnFollow } from "../../slice";
import detail from './blogdetail.module.css'
function BlogDetailPage() {
  const param=useParams()
  const dispatch=useDispatch()
  let auth = useSelector((state) => state.authReducer);
  const [detailPost, setDetailPost]=useState([])
  useEffect(() => {
    data.getById("post", param.id).then((res) => {
      console.log(res,'reeeeeees')
      setDetailPost(res)
    });
  }, []);
let id=detailPost.userId
// console.log(id,'iddddddddddddddddddddddddd')

// ___________________________________________-------------------

// const[writeprofile, setWriteProfile]=useState([])

// useEffect(()=>{

//     data.getById('users',id)
//     .then((res)=>{
//         setWriteProfile(res)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })


// },[])
// console.log('writeeeeeer', writeprofile)

// ___________________________________________________________


// const isFriend=auth.user.friends.find((friend)=>friend._id === id)

  // const sendGetRequest = async () => {
  //   try {
  //       const resp = await axios.patch(`http://localhost:5000/users/${auth.user._id}/${id}`);
  //       // console.log(resp.data);
  //       dispatch(setFriends({friends:resp.data}))
    

  //   } catch (err) {
  //       // Handle Error Here
  //       console.error(err);
  //   }
  // }

 

  return <> 
  <section className={detail.detail_bigdiv}>
   <div className={detail.detail_blogs}>
   <button className={`${detail.blogs_writer_btn1} ${detail.blogs_follow}`}>Follow</button>

   <BlogsDetail detailPost={detailPost}/>

   </div>
   {/* <div className={detail.detail_writer}>
   <div className={detail.blogs_writer_bigdiv}>
   <img src={`http://localhost:5000/assets/${detailPost.userPicturePath}`}/>
   <h3><Link to={`/writer/${id}`}>{detailPost.firstName}</Link></h3>
   <p>{detailPost.occupation}</p>

        
         
    </div>
      <div>
        <button className={detail.blogs_writer_btn1} onClick={()=>handleFollow(id)}>{check ? <p>Following</p> : <p>Follow</p>}</button>
        <button className={detail.blogs_writer_btn2}>Mail</button>
      </div>

    </div> */}
 <WriteProfile detailPost={detailPost}/>

 
 

  </section>

  
  
  </>;
}

export default BlogDetailPage;
