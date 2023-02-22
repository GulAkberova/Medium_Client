import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../../pages/loginpage/Login';
import nav from './nav.module.css'
function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
    <header className={nav.nav_big_div}>
        <h1><NavLink to={'/'}>MEDIUM</NavLink></h1>
        <div>
            <ul>
                <li><NavLink >Our Story</NavLink></li>
                <li><NavLink >Membership</NavLink></li>
                <li><NavLink >Write</NavLink></li>
                <li><NavLink onClick={handleOpen}>Sign in</NavLink></li>

            </ul>
            <button>
                <NavLink >Get started</NavLink>
            </button>
        </div>
    </header>
    <Login open={open} setOpen={setOpen}/>

    
    </>
  )
}

export default Header