import React from 'react'
import Heroimage from '../assets/img1.jpg'

 export const About = () => {
  return (
    <div className='bg-black text-white py-20 ' id='about'>
        <div  className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={Heroimage} alt=""
            className='w-72 h-80 rounded object-cover md:mb-0' />
            <div className='flex-1'>
                <p className='text-lg mb'>I'm a web developer skilled in HTML, CSS, JavaScript, React, PHP, and MySQL, passionate about building responsive and user-friendly applications. I focus on clean code, intuitive UI/UX, and full-stack development, continuously learning through projects and an internship. </p>
        <div className='space-y-4'>

            <div className=' flex items-center'>
                <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                <div className=' grow bh-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                </div>
            </div>
            </div>
        

        <div className=' flex items-center'>
                <label htmlFor="htmlandcss" className='w-2/12'>REACT JS</label>
                <div className=' grow bh-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                </div>
            </div>
            </div>
        

        <div className=' flex items-center'>
                <label htmlFor="htmlandcss" className='w-2/12'>PHP & MYSQL</label>
                <div className=' grow bh-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>
                </div>
            </div>
            </div>
            </div>

            <div className='mt-12 flex justify-between text-center'>
                <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from bg-green-400 to-blue-500'>
                        3+</h3>
                        <p>Years Experince</p>
                </div>
    
    
                <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from bg-green-400 to-blue-500'>
                        2+</h3>
                        <p>Projects Completed</p>
                </div>
            
            
                <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from bg-green-400 to-blue-500'>
                        0</h3>
                        <p>Happy Clients</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>

  )
}

