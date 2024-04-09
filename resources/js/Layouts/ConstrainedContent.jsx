import React from 'react'

const ConstrainedContent = ({children, className}) => {
  return (
    <div className={`max-w-[1600px] m-auto ${className ? className : ""}`}>{children}</div>
  )
}

export default ConstrainedContent