import React from 'react'

const Input = ({placeholder , type}) => {
  return (
    <input className='py-4 px-5 outline-none animate bg-transparent border-white border-2 rounded-2xl w-[50vw] text-white duration-[.3s] hover:bg-white hover:text-black focus:bg-white focus:text-black' type={type} placeholder={placeholder} />
  )
}

export default Input