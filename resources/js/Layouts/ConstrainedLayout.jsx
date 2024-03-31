import React from 'react'

const ConstrainedLayout = ({children}) => {
    
  return (
    <div className='relative max-w-[1600px] mx-auto min-h-[900px]'>
      {children}
    </div>
  )
}

export default ConstrainedLayout