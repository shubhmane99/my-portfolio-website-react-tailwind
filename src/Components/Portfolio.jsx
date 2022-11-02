import React from 'react'
import ArrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'


function Portfolio() {

    const portFolios = [
        {
            id: 1,
            src: ArrayDestruct
        },
        {
            id: 2,
            src: installNode
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactParallax
        },
        {
            id: 5,
            src: reactSmooth
        },
        {
            id: 6,
            src: reactWeather
        },
    ]

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen' >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                {/* heading */}
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Checek Out Some Of My Works here</p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portFolios.map((portfolio) => {
                            return (

                                <div key={portfolio.id} className='shadow-md shadow-gray-600 rounded-lg' >
                                    <img className='rounded-md duration-200 hover:scale-105' src={portfolio.src} alt="" />
                                    <div className='flex  items-center justify-center'>
                                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                            Demo
                                        </button>
                                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                            Code
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Portfolio