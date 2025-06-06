import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'


export const Footer = () => {
  return (
    
        <footer className='bg-black text-white py-8'>
            <div className=' container mx-auto px-8 md:px-16 ld:px-24'>
                <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
            <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-2xl font-bold mb-2'>Alex David JJ</h3>
                <p className='text-gray-400'>"Empowering students and freshers to build dynamic web solutions with React.js." </p>
            </div>
            <div className='flex-1 w-full'>
                <form  className='flex items-center justify-center'>
                    <input type="email" placeholder='Enter Mail'
                    className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600
                    focus:outline-none focus:border-green-400' />
                    <button type='submit' 
                    className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
                </form>
            </div>
            </div>
            <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                <p className='text-gray-400'>
                    &copy;{new Date().getFullYear()} Alex. All rights reserved</p>
              <div className='flex space-x-4 my-4 md:my-0'>
                <a href="" className='text-gray-400 hover:text-white'>
                    <FaFacebook/>
                </a>
                <a href="" className='text-gray-400 hover:text-white'>
                    <FaLinkedin/>
                </a>
                <a href="" className='text-gray-400 hover:text-white'>
                 <FaGithub/>
                </a>
                <a href="" className='text-gray-400 hover:text-white'>
                    <FaTwitter/>
                </a>
             </div>  
             <div>
                <a href="" className='text-gray-400 hover:text-white'>
                    privacy
                </a>
                <a href="" className='text-gray-400 hover:text-white'>
                    Term of Service
                </a>
             </div>
            </div>
        </div>
    </footer>
  )
}
