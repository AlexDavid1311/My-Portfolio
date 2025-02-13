import React from 'react'
import pro1 from '../assets/e-learning-logo.webp'
import pro2 from '../assets/Wallpaper.webp'

 const projectss=[
  {
    id:1,
    name:"E-Learning System",
    technologies:"PHP & MYSQL",
    image:pro1,
    github:"https://github.com/AlexDavid1311/E-Learning-System",

  },
  {
    id:2,
    technologies:"REACT JS",
    name:"Wallpaper Service",
    image:pro2,
    github:"https://github.com/AlexDavid1311/Wallpaper-Service",

  },

 ]

export const Projects = () => {
  return (
    <div className='bg-black text-white py-20 ' id='Projects'>
    <div  className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          {projectss.map((Projects) =>(
            
           <div key={Projects.id} className='bg-grey-800 p-6 rounded-lg hover:shadow-lg tranform transition-transform duration-300 hover:scale-105'>
               
              <img src={Projects.image } alt={Projects.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
              <h3 className='text-2xl font-bold mb-2'>{Projects.name}</h3>
              <p className='text-gray-400 mb-4'>{Projects.technologies}</p>
              <a href={Projects.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='blank' rel='noopener noreferrer'>GitHub</a>
              </div>

          ))}
            
          
        </div>
        </div>
        </div>
  )
}
