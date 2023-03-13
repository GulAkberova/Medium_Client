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

  let auth = useSelector((state) => state.authReducer);

  const handleSubmit=()=>{
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

  console.log(props.detailPost, 'deeeeeeeeeeeeeeeeeeee')
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
                <div>
                  {
                    props.detailPost.comments ? props.detailPost.comments.map((i,key)=>(
                      <div>
                        {i.comment}
                        
                      </div>
                    ))
                  : <p>Comment not found</p>
                  }

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
