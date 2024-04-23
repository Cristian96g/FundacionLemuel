import React from 'react'

const Button = ({className, onClick, text}) => {
  return (
    <button className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md  px-6 font-medium  ${className}`} onClick={onClick}><span>{text}</span><div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div class="relative h-full w-8 bg-white/20"></div></div></button>
  )
}

export default Button