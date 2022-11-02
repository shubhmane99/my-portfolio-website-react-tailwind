import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'

function Home() {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
            <div className='px-4  mx-auto max-w-screen-lg flex flex-col items-center justify-center h-full md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm a Javscript Full Stack Developer
                    </h2>
                    <p className='text-gray-500 max-w-md py-4 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fuga aut natus quasi consequatur fugiat voluptate mollitia quos dolorem nesciunt quidem ea quam eos nam
                        tenetur cupiditate ullam nostrum perferendis.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500}>
                            <button
                                className='
                            group
                            text-white 
                            w-fit 
                            px-6 
                            py-3 
                            my-2 
                            flex 
                            items-center 
                            rounded-md 
                            bg-gradient-to-r
                            from-cyan-500
                            to-blue-500
                            cursor-pointer
                            '
                            >
                                PortFolio
                                <span className='group-hover:rotate-90 duration-300 '>
                                    <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                                </span>
                            </button>

                        </Link>
                    </div>
                </div>
                <div className=''>
                    <img className='rounded-2xl mx-auto w-2/3 md:w-full' src={HeroImage} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Home