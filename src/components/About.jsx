import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className="text-4xl font-bold inline border-b-4 border-white">
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi, I'm Jose! Please take a look around</p>
                    </div>
                    <div>
                        <p>After 7+ years working in public schools I am searching for new opportunities as a software developer. Below you will able to see some of the projects I have worked on, I am constantly learning and refining my craft. In my free time I enjoy cooking, spending time with my wife and our three dachshunds and all things nerdy. Please do not hesitate to contact me via email or by submitting the form at the bottom!  </p>
                    </div>
                    </div>
                </div>
            </div>
  )
}

export default About