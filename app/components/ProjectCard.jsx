import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ title, description, link, imagePath }) => {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-gray-800/30 p-4 transition-all hover:scale-105">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 relative h-[200px]">
                    <Image
                        src={imagePath || '/Images/placeholder.jpg'}
                        alt={title}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <p className="text-gray-300">{description}</p>
                    <Link
                        href={link}
                        className="inline-block px-6 py-2 bg-white text-black rounded-full hover:bg-slate-100 transition-colors"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard; 