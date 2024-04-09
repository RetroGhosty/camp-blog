import React from 'react'

const ConstrainedLayout = ({children}) => {
    
  return (
    <div className='relative mx-auto break-words flex flex-col'>
      {children}
    </div>
  )
}

export default ConstrainedLayout