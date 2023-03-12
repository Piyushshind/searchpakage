import React from 'react'

const CustomInput = (props) => {
   const {placeholder,className,type, onChange,value} = props
  return (
    <>
     <input placeholder={placeholder} className={className} type={type} value={value} onChange={onChange}/>
    </>
  )
}

export default CustomInput;