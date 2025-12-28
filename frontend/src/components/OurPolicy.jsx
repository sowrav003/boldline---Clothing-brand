import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} alt="Easy Exchange" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Easy Exchange</p>
            <p className='text-gray-400'>Hassle-free returns and exchanges within 30 days.</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="Quality Assurance" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Quality Assurance</p>
            <p className='text-gray-400'>We ensure the best quality products for our customers.</p>
        </div>
        <div>
            <img src={assets.support_img} alt="Customer Support" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Customer Support</p>
            <p className='text-gray-400'>24/7 customer support for all your needs.</p>
        </div>
    </div>
  )
}

export default OurPolicy;