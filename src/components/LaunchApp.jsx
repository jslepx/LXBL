import React from 'react'

const LaunchApp = () => {
  return (
    <div className='group relative w-[140px] '>
        <div className="absolute blur-md opacity-50 inset-2 bg-main rounded-xl bg-gradient-to-t from-main to-accent group-hover:opacity-100 group-hover:inset-0.5 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
        <button className='w-[140px] border-accent border relative bg-background whitespace-nowrap rounded-sm mx-auto p-2.5 text-xl text-white font-extralight'>
          Launch App
        </button>
    </div>
  )
}

export default LaunchApp