import React from 'react'


const Servicess=[
    {
        id:1,
        title:"Web Design",
        description:"Creating visually appealing and user-freindly web Design",
    },
    {
        id:2,
        title:"Web Design",
        description:"Creating visually appealing and user-freindly web Design",
    },
    {
        id:3,
        title:"Web Design",
        description:"Creating visually appealing and user-freindly web Design",
    },
    {
        id:4,
        title:"Web Design",
        description:"Creating visually appealing and user-freindly web Design",
    },
    {
        id:5,
        title:"Web Design",
        description:"Creating visually appealing and user-freindly web Design",
    },
    {
        id:6,
        title:"Web Design",
        description:"Creating visually appealing and user-freindly web Design",
    },
   
]
export const Services = () => {
  return (
    <div className='bg-black text-white py-20 ' id='Services'>
    <div  className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {Servicess.map((Services) =>(
                <div key={Services.id}
                className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                  <div className='text-right text-2xl font-bold text-transparent bg-clip-text
                  bg-gradient-to-r from-green-600 to to-blue-400'>
                    {Services.id}
                    </div>  
                    <h3 className=' mt-2 text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to-blue-500'>
                        {Services.title}
                    </h3>
                    <p className='mt-2 text-gray-300'>
                        {Services.description}
                    </p>
                    <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>
                    </div>

            ) )}

        </div>
        </div>
        </div>
  )
}
