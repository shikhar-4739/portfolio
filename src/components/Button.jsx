import React from 'react'

const Button = ({title, icon}) => {
  return (
    <div>
        <div className=" text-lg text-white py-2 px-5 border-2 border-[#27272A] rounded-full shadow-lg mr-2 flex items-center justify-center">
            <span className='mr-2'>{icon}</span>
            {title}
        </div>
    </div>
  )
}

export default Button
