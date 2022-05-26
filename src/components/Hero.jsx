import React from 'react'
import LaunchApp from './LaunchApp'

const Hero = () => {
  return (
    <div className='text-white h-screen '>
        <div className='max-w-[1440px] mt-20  px-4 w-full mx-auto text-left flex-col justify-center'>
            <h1 className='md:text-7xl max-w-sm md:max-w-lg text-6xl font-light my-8'>
                Make More From Your Music
            </h1>
            <div className='md:text-2xl md:py-4 py-6 max-w-3xl text-2xl font-extralight'>
              <p>
              Buy and sell exclusive beat licenses as NFTs.<br /><br />
              Enjoy irrefutable proof of ownership, reach a larger audience, &amp; recieve a perpetual royalty on every resale of your instrumentals,
              allowing you to focus on quality over quantity.<br /><br />
              Coming soon to Avalanche.
              </p>
            </div>
            <div className='mb-14 my-6 z-0'>
              <LaunchApp />
            </div>
        </div>
        <div class='spacer section1'></div>
    </div>
  )
}

export default Hero