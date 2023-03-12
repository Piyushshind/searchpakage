import React from 'react'

const CustomButton = (props) => {
  const {btnText,onClick,type} = props
  return (
    <>
     <button onClick={onClick} type={type}>{btnText}</button>
    </>
  )
}

export default CustomButton