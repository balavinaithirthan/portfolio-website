import React from 'react'

const AboutSection = () => {
    return (
        <div className='flex flex-col place-self-center text-center sm:text-left mb-10'>
            <div className='text-center text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'> About
            </div>
            <div className='text-center, text-white font-bold mx-10'>I am a CS and EE student at
                Stanford University working on compilers, high-performance computing, and computer architecture. I am advised by Fredrik Kjolstad.
                I enjoy the interdisiplinary nature of CS and in the past have worked on ML drug design, security-specific database systems, and education games.
                Outside of work, you can find me learning sports and meeting new people.
            </div>
        </div>
    )
}

export default AboutSection
