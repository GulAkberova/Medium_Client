import React, { useState } from "react";
import login from "../loginpage/login.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { data } from "api/data";
import write from '../../pages/writepage/write.module.css'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "55%",
  height: "100%",
  bgcolor: "background.paper",
  p: 4,
};

function Comments(props) {
  const handleClose = () => props.setOpen(false);
  const [check, setCheck] = useState(true);
  const [comment,setValue]=useState("")
 const [reply, setReply]=useState(false)
  let auth = useSelector((state) => state.authReducer);

  const handleSubmit=(e)=>{
    e.preventDefault()
    const formData = new FormData();
    console.log('detailPost',props.detailPost)
    formData.append("comment", comment);
    data.getByPut(`/post/${props.detailPost._id}/comments`,Object.fromEntries(formData))
    .then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })

  }
  const handleReply=()=>{
    setReply(!reply)
  }

  // console.log(props.detailPost, 'deeeeeeeeeeeeeeeeeeee')
  return (
    <>
      <div>
        <Modal
          className={login.login_big_div}
          open={props.open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className={login.login_mini_div}>
           
              <div>
                <h1>Comments</h1>
                <div>
                <form className={write.writeFormComment} >
                 
                  <textarea 
                   placeholder="Tell your story..."
                   type="text"
                   className={write.write_comment}
                   onChange={(e)=>setValue(e.target.value)} >

                  </textarea>
                  <button onClick={()=>handleSubmit()}  className={write.write_btn}>
                    Add
                  </button>
                  
                  </form>
                </div>
                <div className={write.comment_view_bigdiv}>
                <div className={write.comment_view_div}>
                  <div className={write.comment_view_div_img}>
                    <img/>
                    <h6>Jenna</h6>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque adipisci ad laudantium non quo fuga maxime at laborum, nobis sunt repellat, eaque nemo. Rerum sunt tempore quisquam reiciendis animi?</p>
                  <div className={write.comment_view_div_ul}>
                    <ul>
                      <li><i className="fa-regular fa-thumbs-up"></i>100</li>
                      <li><i className="fa-regular fa-comment"></i>2 replies</li>
                    </ul>
                    <button onClick={()=>handleReply()}>Reply</button>
                    

                  </div>
                  {
                      reply ? <div>
                         <form className={write.writeFormCommentReply} >
                 
                 <textarea 
                  placeholder="Tell your story..."
                  type="text"
                  className={write.write_commentReply}
                  onChange={(e)=>setValue(e.target.value)} >

                 </textarea>
                 <button onClick={(e)=>handleSubmit(e)}  className={write.write_btn}>
                   Add
                 </button>
                 
                 </form>


                      </div>:<span></span>
                    }


                 </div>
                

                  {/* {
                    props.detailPost.comments ? props.detailPost.comments.map((i,key)=>(
                      <div>
                        {i.comment}
                        
                      </div>
                    ))
                  : <p>Comment not found</p>
                  } */}

                </div>
              </div>
         

          
          </Box>
        </Modal>
      </div>

      {/* </section> */}
    </>
  );
}

export default Comments;
