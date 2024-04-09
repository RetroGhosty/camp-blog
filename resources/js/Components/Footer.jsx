import ConstrainedContent from '@/Layouts/ConstrainedContent'
import { router } from '@inertiajs/react'
import React from 'react'

const Footer = ({marginX}) => {
  return (
    <>
      <div className={`bg-[#FF9E40] text-white ${marginX}`}>
        <ConstrainedContent>
        <div className={`flex flex-row items-center justify-center min-h-[200px] md:h-21 py-6 space-x-2 w-full  sticky top-0 ${marginX}`}>
          <div className='grid grid-cols-1 gap-y-4 h-full w-full'>
            <div className='w-full h-full flex flex-col  md:flex-row justify-between gap-5 md:gap-36'>
              <img src="/logo-text-black.png" className='w-[300px] h-auto'/>
              <div className='flex flex-col w-full'>
                <h2 className='mb-1 font-semibold text-[#0026FE]'>Contacts</h2>
          
                <ul className='flex flex-col text-black'>
                  <li>Phone: 123-456-7890</li>
                  <li>Email: </li>
                </ul>
              </div>
              <div className='flex flex-col w-full'>
                <h2 className='flex flex-col mb-1 font-semibold text-[#0026FE]'>Follow Me</h2>
                <ul className='flex flex-col text-black'>
                  <li className='cursor-pointer'>Facebook</li>
                  <li className='cursor-pointer'>Twitter</li>
                  <li className='cursor-pointer'>Instagram</li>
                </ul>

              </div>
              

            </div>

            {/* Line break */}
            <span className='w-full h-[2px] bg-[#00000080]'></span>
            <ul className='w-full h-full flex flex-row i,dtems-center justify-center space-x-5 text-black'>
              <li onClick={() => router.get(route('home'))} className='cursor-pointer'>Home</li>
              <li>|</li>
              <li onClick={() => router.get(route('about'))} className='cursor-pointer'>About</li>
              <li onClick={() => router.get(route('article.index'))} className='cursor-pointer'>Articles</li>
            </ul>

          </div>
        </div>
        </ConstrainedContent>
      </div>
      <div className='min-h-10 flex flex-col items-center justify-center bg-[#FF7D00] text-white py-3'>
        © 2024 John Davila, All rights reserved.
      </div>
  
    </>
  )
}

export default Footer