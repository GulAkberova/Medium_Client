import React from 'react'
import { Outlet } from 'react-router-dom'

function PrivateLayout() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PrivateLayout