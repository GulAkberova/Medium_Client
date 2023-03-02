import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../api/data";
import { setPosts } from "../../slice";

function Write() {
  const dispatch = useDispatch();
  const [post, setPost] = useState("");
  let auth = useSelector((state) => state.authReducer);
  console.log("isauth", auth.posts);

  const handlePost = () => {
    const formData = new FormData();
    formData.append("userId", auth.user._id);
    formData.append("description", post);

    data.getByPost('post',formData)
    .then((posts) =>{
      dispatch(setPosts({posts}))
    })
    .catch(err=>{
      console.log('err',err)
      alert('Email or password invalid')
    })
  };
  return (
    <>
      <textarea onChange={(e) => setPost(e.target.value)}></textarea>
      <button onClick={() => handlePost()}>Addd</button>
    </>
  );
}

export default Write;
