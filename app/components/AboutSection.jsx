import React from 'react'

const AboutSection = () => {
    return (
        <section className='py-16 px-4 md:px-8'>
            <div className='max-w-4xl mx-auto'>
                <h2 className='text-center text-white mb-12 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight'>
                    About
                </h2>
                <div className='text-gray-300 text-lg md:text-xl leading-relaxed space-y-6 bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50'>
                    <p className='font-light tracking-wide'>
                        My name is Bala Vinaithirthan. I am a CS and EE student at Stanford University working on compilers,
                        high-performance computing, and computer architecture. I am advised by Fredrik Kjolstad.
                    </p>
                    <p className='font-light tracking-wide'>
                        I enjoy the interdisciplinary nature of CS and in the past have worked on
                        ML drug design, security-specific database systems, and education games.
                    </p>
                    <p className='font-light tracking-wide'>
                        Outside of work, you can find me learning sports and meeting new people.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
