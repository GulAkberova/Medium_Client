import React, { useEffect, useState } from 'react'
import follow from './writerFollowing.module.css'
import detail from "../../pages/blogdetailpage/blogdetail.module.css";
import { useSelector } from 'react-redux';
import { data } from 'api/data';
import { useParams } from 'react-router-dom';

function BlogsWriterFollowing({props}) {
 
  let auth = useSelector((state) => state.authReducer);
  // console.log(props.detailPost,'yoxlamamaaaaaaa')


  return (
    <>
  <div className={detail.detail_writer}>
          <div className={detail.detail_writer_img}>
          {/* <img src={`http://localhost:5000/assets/${props.detailPost.picturePath}`}/> */}
          {/* <h4> {props.detailPost.firstName} {props.detailPost.lastName}</h4> */}
         
          </div>
          <div className={follow.follow_bigdiv}>
        <h3>Following</h3>
        {/* {
          props.detailPost.friends && props.detailPost.friends.map((i,key)=>(
            <div className={follow.follow_minidiv} key={key}>
            <div>
            <img src={`http://localhost:5000/assets/${ i.picturePath}`}/>
            <p>{i.firstName} {i.lastName}</p>
            </div>
            <p>...</p>
        </div>

          ))
        } */}
       
      
    </div>
        </div>
    </>
  )
}

export default BlogsWriterFollowing