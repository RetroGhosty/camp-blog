import { router } from '@inertiajs/react'
import React from 'react'

const NavigationBar = ({marginX, marginY, auth, highlightHeader, active}) => {
  return (
    <div className={`flex flex-row justify-between items-end h-[70px] md:h-21 p-3  w-full bg-[#FF9E40] text-white ${marginX}`}>
      <div className='h-full w-full flex flex-row items-center space-x-4 relative'>
          <img src="/logo.png" className="img-fluid h-[100%] w-auto absolute -top-1" alt="logo"/>
      </div>
      <div className='h-full w-full flex flex-row space-x-4 items-center justify-end'>
        <ul className='h-full w-full flex flex-row space-x-10 items-center justify-end text-xl tracking-wider'>
          <li onClick={() => router.get(route('home'))} 
          className={`cursor-pointer hover:text-black transition-all duration-200 ${route().current('home') ? "text-black font-bold" : null}`}>Home</li>

          <li onClick={() => router.get(route('about'))} 
          className={`cursor-pointer hover:text-black transition-all duration-200 ${route().current('about') ? "text-black font-bold " : null}`}>About</li>

          <li onClick={() => router.get(route('article.index'))} 
          className={`cursor-pointer hover:text-black transition-all duration-200 ${route().current('article.*') ? "text-black font-bold " : null}`}>Articles</li>
        </ul>
        {/* Only show container below if the user is both logged in and an admin */}
        {auth.user !== null && auth.user.admin !== 0 ? (
          <span className='w-full flex items-center justify-end tracking-wider'>Welcome, {auth.user.email} 🔰</span>
                
        ) : ""}
      </div>
    </div>
  )
}

export default NavigationBar