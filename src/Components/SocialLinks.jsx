import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
function SocialLinks() {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Github  <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    LinkedIn  <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://linkedin.com',

        },
        {
            id: 3,
            child: (
                <>
                    Mail  < HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:foo@gmail.com',

        },
        {
            id: 4,
            child: (
                <>
                    Resume  <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: 'https://linkedin.com',
            style: "rounded-br-md",
            download: true
        },
    ]


    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {
                    links.map((link) => {
                        return (
                            <li key={link.id} className={`flex justify-between items-center w-40  h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-m duration-200 ${link.style}`}
                            >
                                <a className='
                                    flex 
                                    justify-between
                                    items-center  
                                    w-full 
                                    text-white'
                                    download={link.download}
                                    href={link.href}
                                    rel="noreferrer"
                                    target='_blank'
                                >
                                    {" "}
                                    {link.child}
                                </a>
                            </li>

                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SocialLinks