import React from 'react'
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-white text-2xl font-semibold'> <span className='text-pink-600'>Sh</span>oppix</h3>
          <p className='mt-4 text-lg'>your one stop shop for all your fashion needs !</p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quick Links</h4>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link to='/Home' className='hover:underline-none text-pink-600 hover:text-white
              transform transition-all duration-300'>Home</Link>
            </li>
            <li>
              <Link to='/shop' className='hover:underline-none hover:scale-105 hover:text-white text-pink-600
              transform transition-all duration-300'>Shop</Link>
            </li>
            <li>
              <Link to='/ contact' className='hover:underline-none text-pink-600 hover:text-white
              transform transition-all duration-300'>Contact</Link>
            </li>
            <li>
              <Link to='/ about' className='hover:underline-none  text-pink-600 hover:text-white
              '>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className='flex space-x-4 mt-4'>
           <a href=""><FaFacebook className='text-pink-600 text-2xl hover:text-white
            transform transition-all duration-300 hover:scale-110'></FaFacebook></a> 
           <a href=""><FaTwitter className='text-pink-600 text-2xl hover:text-white
            transform transition-all duration-300 hover:scale-110'></FaTwitter></a>
           <a href=""><FaInstagram className='text-pink-600 text-2xl hover:text-white
            transform transition-all duration-300 hover:scale-110'></FaInstagram></a>
           <a href=""><FaLinkedin className='text-pink-600 text-2xl hover:text-white
            transform transition-all duration-300 hover:scale-110'></FaLinkedin></a>
          </div>
          <form className='flex items-center justify-center mt-8'>
            <input className='w-full p-2 border border-pink-600 rounded-l-lg py-2 px-4  bg-white-100 text-pink-600 hover:bg-yellow-50
            transform transition-all duration-300 cursor-pointer' type="text" placeholder='Enter your email' />
            <button type='submit' className='bg-black hover:bg-pink-700 text-white py-2.5 px-4 rounded-r-lg
            transform transition-all duration-300 cursor-pointer'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='mt-8 border-t border-pink-600 pt-4' >
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
          <p>&copy; 2023 <span className='text-pink-600'>Sh</span>oppix. All rights reserved</p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href="">Privacy Policy</a>
            <span>||</span>
             <a href="">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
