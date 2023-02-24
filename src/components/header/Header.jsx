import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../../pages/loginpage/Login';
import nav from './nav.module.css'
function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
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
  return (
    <>
    <header style={{ background: color }} className={colorChange ? `${nav.nav_big_div} ${nav.nav_Color}` :  `${nav.nav_big_div}`}>
        <h1><NavLink to={'/'} >MEDIUM</NavLink></h1>
        <div>
            <ul>
                <li><NavLink >Our Story</NavLink></li>
                <li><NavLink to='/member' >Membership</NavLink></li>
                <li><NavLink>Write</NavLink></li>
                <li><NavLink onClick={handleOpen}>Sign in</NavLink></li>

            </ul>
            <button className={nav.btn1}>
                <NavLink >Get started</NavLink>
            </button>
            <button className={nav.btn2}>
              Gul
            </button>
        </div>
    </header>
    <Login open={open} setOpen={setOpen}/>

    
    </>
  )
}

export default Header