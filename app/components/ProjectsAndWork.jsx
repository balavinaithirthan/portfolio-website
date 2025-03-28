import React from 'react'
import Bullet from './Bullet'
const projects = [
    {
        title: "High Performance Bioinformatics Language",
        description: "Description of Project 1",
        link: "https://example.com/project1"
    },
    {
        title: "Embedded Operating Systems",
        description: "Description of Project 2",
        link: "https://example.com/project2"
    },
    {
        title: "Database",
        description: "Description of Project 3",
        link: "https://example.com/project3"
    }
]

const ProjectsAndWork = () => {
    return (
        <div className='flex flex-col place-self-center text-center sm:text-left'>
            <div className='text-center text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>Projects and Work</div>
            <ul className="flex flex-col p-4 md:p-0 md:space-x-4 mt-10">
                {
                    projects.map((item, index) => (
                        <li key={index} className="mb-4">
                            <Bullet projectName={item.title} href={item.link} description={item.description} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProjectsAndWork
