import React from 'react'

const Footer = ({marginX}) => {
  return (
    <div className={`flex flex-row items-center justify-center h-16 md:h-21 p-3 space-x-2  w-full bg-[#3b99bb] text-white sticky top-0 ${marginX}`}>
        <span>Made with ❤️ by</span><a className='hover:text-[#390099] font-semibold transition duration-200' href='https://portfolio-five-neon-39.vercel.app/' target='_blank'>John Davila</a>
    </div>
  )
}

export default Footer