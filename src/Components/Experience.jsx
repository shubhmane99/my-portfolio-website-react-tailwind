import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import nextjs from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.png'
import graphql from '../assets/graphql.png'

function Experience() {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500 '
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500 '
        },
        {
            id: 3,
            src: javascript,
            title: 'JAVSCRIPT',
            style: 'shadow-yellow-500 '
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-sky-700 '
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400 '
        },
        {
            id: 6,
            src: graphql,
            title: 'Graphql',
            style: 'shadow-pink-500 '
        },
        {
            id: 7,
            src: nextjs,
            title: 'nextjs',
            style: 'shadow-white '
        },
        {
            id: 8,
            src: node,
            title: 'Node Js',
            style: 'shadow-green-400 '
        },
    ]

    return (
        <div name='experience' className='h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='flex flex-col mx-auto w-full p-4 max-w-screen-lg pt-16 justify-center'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Eperience</p>
                    <p className='py-6'>These are the technologies i have worked with</p>
                </div>

                {/* cards */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-8 px-12 sm:px-0'>

                    {
                        techs.map((tech) => {
                            return (

                                <div key={tech.id} className={`shadow-md ${tech.style}  hover:scale-105 duration-500 rounded-lg py-2`} >
                                    <img className='w-32 mx-auto' src={tech.src} alt="" />
                                    <p className='mt-4'>{tech.title}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Experience