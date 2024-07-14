import React from 'react'
import Topheader from './Topheader'
import { Outlet } from 'react-router-dom'

const Header = ({toggleOpenBar}) => {
  return (
    <div className='lg:w-[83%] w-full'>
        <Topheader toggleOpenBar={toggleOpenBar} />
        <div className='w-full px-3'>
          <Outlet />
        </div>
    </div>
  )
}

export default Header