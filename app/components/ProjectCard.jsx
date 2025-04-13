import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ title, description, link, imagePath }) => {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-gray-800/30 p-6 transition-all hover:scale-105 border border-gray-700/50">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 relative h-[200px]">
                    <Image
                        src={imagePath || '/Images/placeholder.jpg'}
                        alt={title}
                        fill
                        className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="w-full md:w-2/3 space-y-6">
                    <h3 className="text-3xl font-black tracking-tight text-white group-hover:text-[#FFD700] transition-colors duration-300">{title}</h3>
                    <p className="text-gray-300 text-lg font-light tracking-wide leading-relaxed">{description}</p>
                    <Link
                        href={link}
                        className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide text-lg hover:scale-105"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard; 