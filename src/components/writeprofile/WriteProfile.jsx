import { data } from 'api/data'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { setFollow, setFriends, setUnFollow } from "../../slice";
import detail from '../../pages/blogdetailpage/blogdetail.module.css'
function WriteProfile(props) {
    const [check, setCheck]=useState(false)
    const [followed, setFollowed]=useState(false)
    const dispatch=useDispatch()
    let auth = useSelector((state) => state.authReducer);
   
      
    const[writeprofile, setWriteProfile]=useState([])
    useEffect(()=>{
        data.getById('users',props.detailPost.userId)
        .then(res=>{
            setWriteProfile(res)
        })
        .catch(err=>{
            console.log(err)
        })


    },[])
    
console.log(writeprofile,'writeeeee')
    const handleFollow=(id)=>{
        const followUserId=auth.user._id

        console.log('id',id,'follow', followUserId)
      
      
            if(check){
              data.getByPost1(`users/unfollow`,{id,followUserId})
              .then((res)=>{
                 dispatch(setUnFollow({id}))
      
                setCheck(false)
              }).catch((err) => console.log(err));
            }
            else{
              data.getByPost1(`users/follow`,{id,followUserId})
              .then((res)=>{
                dispatch(setFollow({id}))
                setCheck(true)
              }).catch((err) => console.log(err));
            }
            

            // sendGetRequest()
      }

    //   if(writeprofile.includes(auth.user._id)){
    //     setFollowed(true)
    //   }else{
    //     setFollowed(false)
    //   }

    
  return (
    <>
     <div className={detail.detail_writer}>
   <div className={detail.blogs_writer_bigdiv}>
   <img src={`http://localhost:5000/assets/${writeprofile.picturePath}`}/>
   <h3><Link to={`/writer/${writeprofile._id}`}>{writeprofile.firstName}</Link></h3>
   {/* <span>{writeprofile.followers.length} Followers</span> */}
   <p>{writeprofile.occupation}</p>

        
         
    </div>
      <div>
        <button className={detail.blogs_writer_btn1} onClick={()=>handleFollow(writeprofile._id)}>{check ? <p>Following</p> : <p>Follow</p>}</button>
        <button className={detail.blogs_writer_btn2}>Mail</button>
      </div>

    </div>
    
    </>
  )
}

export default WriteProfile