import React from 'react'

const NavigationBar = ({marginX, marginY, auth}) => {
  return (
    <div className={`flex flex-row justify-between items-center h-16 md:h-21 p-3  w-full bg-[#3b99bb] text-white ${marginX}`}>
      <div className='h-full w-full flex flex-row items-center space-x-4'>
          <img src="/logo.png" className="img-fluid h-[70%] w-auto" alt="logo"/>
          <span className='font-black text-xl uppercase'>Blog Camp</span>
      </div>
      {/* Only show container below if the user is both logged in and an admin */}
      {auth.user !== null && auth.user.admin !== 0 ? (
        <span className='w-full flex items-center justify-end tracking-wider'>Welcome, {auth.user.email} 🔰</span>
              
      ) : ""}
    </div>
  )
}

export default NavigationBar