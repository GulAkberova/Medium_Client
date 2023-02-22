import React, { useState } from 'react'
import login from './login.module.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '55%',
  height:'100%',
  bgcolor: 'background.paper',
  p: 4,
  
  
};


function Login(props) {
  const handleClose = () => props.setOpen(false);
  const [check, setCheck]=useState(true)
  return (
    <>
    {/* <section className={login.login_big_div}> */}
    <div>
     
      <Modal className={login.login_big_div}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    
      >
        <Box sx={style} className={login.login_mini_div}>
          {
            check ? <div>
            <h1>Welcome back</h1>
            <div>
              <button>Sign in with Google</button>
              <button>Sign in with Google</button>
              <button>Sign in with Google</button>
              <button>Sign in with Google</button>
              <button>Sign in with Google</button>
            </div>
            <h5>No Account? <a onClick={()=>setCheck(false)}>Create one</a></h5>
            </div> :
            <div>
            <h1>Medium</h1>
            <div>
              <button>Sign in with Google</button>
              <button>Sign in with Google</button>
              <button>Sign in with Google</button>
            </div>
            <h5>No Account? <a onClick={()=>setCheck(true)}>Sign in</a></h5>
            </div>
          }
            
            <p>Click “Sign In” to agree to Medium’s Terms of Service and acknowledge that<br/> Medium’s Privacy Policy applies to you.</p>
        </Box>
        
      </Modal>
    </div>

    {/* </section> */}
    
    </>
  )
}

export default Login