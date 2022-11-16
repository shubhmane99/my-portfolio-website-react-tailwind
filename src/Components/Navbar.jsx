import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Navbar() {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'aboutus'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]


    return (
        <div
            className='flex justify-between items-center w-full h-20 px-4 bg-black text-white'
        >
            <div className=''>
                <h1 className='text-6xl ml-2 font-signature'>Prathmesh</h1>

            </div>
            <ul className=' hidden md:flex'>
                {
                    links.map((link) => {
                        return (

                            <li
                                key={link.id}
                                className='
                                    cursor-pointer
                                    capitalize 
                                    font-medium
                                    text-gray-500 
                                    hover:scale-125 
                                    duration-200
                                    px-4
                                    '

                            >
                                <Link to={link.link} smooth duration={500}>
                                    {link.link}
                                </Link>
                            </li>
                        )
                    })
                }

            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {
                    nav ? <FaTimes size={30} /> : <FaBars size={30} />
                }
            </div>

            {
                nav && (

                    <ul
                        className='
                    flex 
                    flex-col
                    justify-center
                    items-center
                    absolute
                    top-0
                    left-0
                    w-full
                    h-screen
                    bg-gradient-to-b
                    from-black
                    to-gray-800
                    text-gray-500
                    '
                    >
                        {
                            links.map((link) => {
                                return (

                                    <li
                                        key={link.id}
                                        className='px-4 py-4 cursor-pointer capitalize text-4xl'
                                    >
                                        <Link onClick={()=>setNav(false)} to={link.link} smooth duration={500}>
                                            {link.link}
                                        </Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                )
            }
        </div>
    )
}

export default Navbar