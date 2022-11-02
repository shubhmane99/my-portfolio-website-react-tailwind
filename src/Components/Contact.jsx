import React from 'react'

function Contact() {
    return (
        <div name='contact' className='text-white h-screen w-full mx-auto flex justify-center items-center bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg w-full h-full p-4 mx-auto flex  flex-col justify-center '>
                {/* Heading */}
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>
                        Contact
                    </p>
                    <p className='py-6'>
                        Submit The Form Below To Get In Touch With Me
                    </p>
                </div>
                {/* From */}
                <div className='flex justify-center'>
                    <form action="" className='flex flex-col w-full md:w-1/2 gap-8' >
                        <input type="text" name='name' placeholder='Enter Your Name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                        <input type="email" name='name' placeholder='Enter Your Email'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                        <textarea name="message" rows="10"
                            placeholder='Enter Your Message'
                            className='p-2 bg-transparent  border-2 rounded-md text-white focus:outline-none'
                        >
                        </textarea>

                        <button className='my-8 mx-auto hover:scale-110 duration-300 px-6 py-3 rounded-md text-white bg-gradient-to-b from-cyan-500 to-blue-500'>
                            Lets Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact