import React from 'react'

const CustomInput = (props) => {
   const {placeholder,className,type} = props
  return (
    <>
     <input placeholder={placeholder} className={className} type={type} />
    </>
  )
}

export default CustomInput