import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router'

const Main = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='p-5 mt-12 ml-[20.2vw] w-[80vw] flex-col items-center'>
        <Header />
        <Outlet />
      </div>
      <div>
      </div>
    </div>
  )
}

export default Main
