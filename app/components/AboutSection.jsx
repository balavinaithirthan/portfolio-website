import React from 'react'

const AboutSection = () => {
    return (
        <section className='py-16 px-4 md:px-8'>
            <div className='max-w-4xl mx-auto'>
                <h2 className='text-center text-white mb-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    About
                </h2>
                <div className='text-white text-lg md:text-xl leading-relaxed space-y-4 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm'>
                    <p className=''>
                        I am a CS and EE student at Stanford University working on compilers,
                        high-performance computing, and computer architecture. I am advised by Fredrik Kjolstad.
                    </p>
                    <p className=''>
                        I enjoy the interdisciplinary nature of CS and in the past have worked on
                        ML drug design, security-specific database systems, and education games.
                    </p>
                    <p className=''>
                        Outside of work, you can find me learning sports and meeting new people.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
