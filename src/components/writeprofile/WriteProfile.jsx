import { data } from 'api/data'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { setFollow, setFriends, setUnFollow } from "../../slice";
import detail from '../../pages/blogdetailpage/blogdetail.module.css'
import axios from 'axios';
function WriteProfile(props) {
    const [check, setCheck]=useState(false)
    const [followed, setFollowed]=useState(false)
    const dispatch=useDispatch()
    let auth = useSelector((state) => state.authReducer);
    const[writeprofile, setWriteProfile]=useState([])
    useEffect(()=>{
    console.log('usereeer',props.detailPost)

        data.getById('users',props.detailPost.userId)
        .then(res=>{
            setWriteProfile(res)

        })
        .catch(err=>{
            console.log(err)
        })


    },[])
    


    const handleFollow=(id)=>{
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
  sendGetRequest()
  console.log(auth.friend)
        // const followUserId=auth.user._id   
        //     if(check){
        //       data.getByPost1(`users/unfollow`,{id,followUserId})
        //       .then((res)=>{
        //          dispatch(setFollow({id,followUserId}))
      
        //         setCheck(false)
        //       }).catch((err) => console.log(err));
        //     }
        //     else{
        //       data.getByPost1(`users/follow`,{id,followUserId})
        //       .then((res)=>{
        //         dispatch(setFollow({id,followUserId}))
        //         setCheck(true)
        //       }).catch((err) => console.log(err));
        //     }
            

      }

    
  return (
    <>
     <div className={detail.detail_writer}>
   <div className={detail.blogs_writer_bigdiv}>
   <img src={`https://medium-test.vercel.app/assets/${props.detailPost.userPicturePath}`}/>
   <h3><Link to={`/writer/${props.detailPost.userId}`}>{props.detailPost.firstName}</Link></h3>
   {/* <span>{writeprofile.followers.length} Followers</span> */}
   {/* <span><b>{writeprofile.following.length}</b> Followers</span> */}
   <p>{props.detailPost.occupation}</p>

        
         
    </div>
      <div>
        <button className={detail.blogs_writer_btn1} onClick={()=>handleFollow(props.detailPost.userId)}>{check ? <p>Following</p> : <p>Follow</p>}</button>
        <button className={detail.blogs_writer_btn2}>Mail</button>
      </div>
      {/* <div>
        <h3>Following</h3>

      </div> */}

    </div>
    
    </>
  )
}

export default WriteProfile