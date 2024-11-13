import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router'

const Main = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <Header />
        <Outlet />
      </div>
      <div>
      </div>
    </div>
  )
}

export default Main
