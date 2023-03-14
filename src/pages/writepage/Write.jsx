import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import write from './write.module.css'
import { data } from "../../api/data";
import { setPosts } from "../../slice";
import { useNavigate } from "react-router-dom";

function Write() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  let auth = useSelector((state) => state.authReducer);
 const navigate=useNavigate()

  const handlePost = (e) => {
    const formData = new FormData();
    formData.append("userId", auth.user._id);
    formData.append("description", desc);
    formData.append("title", title);
    formData.append("picturePath", file.name);
    console.log(Object.fromEntries(formData))


    data.getByPost1('post',Object.fromEntries(formData))
    .then((posts) =>{
      dispatch(setPosts({posts}))
      navigate('/home')
     
    })
    .catch(err=>{
      console.log('err',err)
      alert('Data send')
      navigate('/home')
    })
    e.preventDefault()

  };
  return (
    <>
       <div className={write.write}>
      {file && (
        <img className={write.writeImg} src={URL.createObjectURL(file)} alt="" />
      )}
      <form className={write.writeForm} onSubmit={(e) => handlePost(e)} >
        <div className={write.writeFormGroup}>
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
           className={write.writeInput}
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className={write.writeFormGroup}>
          <textarea
            placeholder="Tell your story..."
            type="text"
            className={`${write.writeInput} ${write.writeText}`}
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className={write.writeSubmit}  type="submit" >
          Publish
        </button>
        </form>
       
     
    </div>
  
      {/* <textarea onChange={(e) => setPost(e.target.value)}></textarea>
      <button onClick={() => handlePost()}>Addd</button> */}
    </>
  );
}

export default Write;


