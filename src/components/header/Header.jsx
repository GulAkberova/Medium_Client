import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Login from '../../pages/loginpage/Login';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import nav from './nav.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../slice';
function Header() {
  let auth=(useSelector(state=>state.authReducer))
  // console.log('isauth',auth.token)
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen1(true);

  // _______________________________________
  const [colorChange, setColorchange] = useState(false);
  const [color, changeColor] = useState("#FFC017");
  const changeNavbarColor = () =>{
    if(window.scrollY >= 495){
      setColorchange(true);
    }
    else{
      setColorchange(false);
    }
 };
 window.addEventListener('scroll', changeNavbarColor);
 console.log(auth.user,'useeer')
//  _________________________________________

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
const dispatch= useDispatch()
const navigate= useNavigate()
const handleCloseLogout = () => {
  
  dispatch(setLogout())
  navigate('/')
};

  return (
    <>
    {
      auth.token ?  <header style={{ background: "white" }}  className={ `${nav.nav_big_div}` }>
      <h1><NavLink to={'/home'} >MEDIUM</NavLink></h1>
      <div>
        <h4><NavLink to={'/write'}>Write</NavLink></h4>
         
          <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>{auth.user.firstName.slice(0,1)}</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={handleClose}>
      <Avatar /><NavLink to='/profile'>Profile</NavLink>
      </MenuItem>
      {/* <MenuItem onClick={handleClose}>
        <Avatar /> <NavLink to='/save'>Library</NavLink>
      </MenuItem> */}
      <Divider />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleCloseLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
      </div>
  </header> :  <header style={{ background: "#FFC017" }} className={ `${nav.nav_big_div}` }>
        <h1><NavLink to={'/'} >MEDIUM</NavLink></h1>
        <div>
            <ul>
                <li><NavLink>Our Story</NavLink></li>
                <li><NavLink>Membership</NavLink></li>
                <li><NavLink>Write</NavLink></li>
                <li> <NavLink onClick={handleOpen} >Get started</NavLink></li>

            </ul>
            <button className={nav.btn1}>
            <NavLink to='/login'>Sign in</NavLink>
            </button>
           
        </div>
    </header>
    }
   
    <Login open={open1} setOpen={setOpen1}/>

    
    </>
  )
}

export default Header