import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="Logo" className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Welcome to our store! We are committed to providing you with the best products and exceptional customer service. Thank you for choosing us for your shopping needs.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Quick Links</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+880-1000-000000</li>
                    <li>contact@boldline.com</li>
                </ul>
            </div>
        </div>
        <div className='text-center text-gray-500 text-sm py-6 border-t'>
            <p>Copyright &copy; 2024 BoldLine. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer