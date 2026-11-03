"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1
            id="hero-title"
            className="text-white mb-4 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight"
          >
            Hi, I&apos;m Bala.
          </h1>
          <TypeAnimation
            sequence={[
              "training models",
              1400,
              "building abstractions",
              1400,
              "working at the hardware-software interface",
              1400,
            ]}
            wrapper="p"
            speed={50}
            className="text-[#FFD700] font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl"
            repeat={Infinity}
            aria-label="Training models, building abstractions, and working at the hardware-software interface"
          />
          <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-4">
            <a
              href="mailto:balabv1@gmail.com"
              className="inline-block px-8 py-4 bg-white rounded-full text-black hover:bg-slate-100 transition-all duration-300 font-medium tracking-wide text-lg"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/balabv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide text-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8 sm:mt-4 lg:mt-0">
          <div className="rounded-full bg-[#848a66] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              alt="Portrait of Bala Vinaithirthan"
              src="/Images/ex2.png"
              width={130}
              height={130}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
