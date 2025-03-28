"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'


const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    {/* <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">Welcome, I am</h1> */}
                    <span className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        Hello, I am {" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Bala',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Building a biology language',
                            1000,
                            'Designing hardware accelerators',
                            1000,
                            'Studying EE and CS',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        className="text-white" // Tailwind class for yellow textolor: '#FFD700' }} // Set color here
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    {/* <h1 className='text-white mb-4 text-3xl sm:text-3xl lg:text-5xl font-extrabold'>I am Bala</h1>
                    <p className="text-white text-lg lg:text-2xl">a CS systems & EE enthusiast</p> */}
                    <div>
                        <button className='w-full sm:w-fit px-6 py-3 bg-white rounded-full mr-4 mt-4  text-black hover:bg-slate-100'>Hire Me</button>
                        <button className='w-full sm:w-fit px-6 py-3 bg-white rounded-full text-black hover:bg-slate-100 mt-3'>Download CV</button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#848a66] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative'>
                        <Image
                            alt="picture of Bala Vinaithirthan"
                            src='/Images/ex2.png' width={130} height={130}
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        >
                        </Image>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

/*
Notes:
1. the class name specifies the css for that, uses tailwind to place it in there
2. mb is for margins
3. can do lg vs normal for normal vs large screens

*/