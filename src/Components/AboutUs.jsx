import React from 'react'

function AboutUs() {
    return (
        <div name='aboutus' className='h-screen px-4 flex w-full   bg-gradient-to-b 
        from-gray-800 to-black
        text-white
        '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >

                <div className='pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 border-b-gray-500'>About</p>
                </div>
                <p className='text-xl mt-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium est sapiente ut impedit laboriosam,
                    accusantium ad facere voluptas adipisci
                    quia soluta velit voluptatum. Vero fugit harum accusantium! Consectetur, deleniti voluptas.
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium est sapiente ut impedit laboriosam,
                    accusantium ad facere voluptas adipisci
                    quia soluta velit voluptatum. Vero fugit harum accusantium! Consectetur, deleniti voluptas.
                </p>

            </div>
        </div>
    )
}

export default AboutUs