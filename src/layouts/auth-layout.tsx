import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center overflow-hidden'>
      <img src="/assets/img/bg.png" className='absolute h-full w-full object-cover opacity-30 z-0' />
      <Outlet/>
    </div>
  )
}

export default AuthLayout