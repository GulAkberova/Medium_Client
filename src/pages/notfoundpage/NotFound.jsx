import React from 'react'
import { Link } from 'react-router-dom'
import notfound from './notfound.module.css'
function NotFound() {
  return (
    <>
    <div className={notfound.notfound_big_div}>
    Belə səhifə yoxdur<br/>
        <Link to='/'>
            Əsas səhifəyə qayıt
        </Link>
    </div>

    </>
  )
}

export default NotFound