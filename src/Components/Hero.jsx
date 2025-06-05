import React from 'react'
import Heroimage from '../assets/aleximg5.jpg'

 const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 'id='home'>
        <img src={Heroimage} alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full  object-cover transform transiti duration-300 hover:scale-105' />
        <h1 className='text-4xl font-bold'>
            I'm{""}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> ALEX DAVID JJ</span>
            ,React Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300 '>  "Building Seamless Web Experiences with Code and Creativity."</p>
       
       <div className=' mt-8 space-x-4'> <button className= 'bg-gradient-to-r from-green-400 to to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect with me</button>
        <button className='bg-gradient-to-r from-red-400 to to-pink-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
    </div>
    </div>
  )
}
export default Hero;
