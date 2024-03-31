import React from 'react'

const ConstrainedLayout = ({children}) => {
    
  return (
    <div className='relative max-w-[1600px] mx-auto break-words flex flex-col'>
      {children}
    </div>
  )
}

export default ConstrainedLayout