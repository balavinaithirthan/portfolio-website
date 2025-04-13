import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
    {
        title: "High Performance Bioinformatics Language",
        description: "Working on developing a specialized language for efficient bioinformatics computations, focusing on performance optimization and user-friendly syntax for researchers.",
        link: "https://cs191w.stanford.edu/projects/Vinaithirthan,%20Bala_Systems%20191W.pdf",
        imagePath: "/Images/bio.jpg"
    },
    {
        title: "Database Systems",
        description: "I developed a set of high-performance plugins and optimizations for Tenzir, a database company specialized in handling security data.",
        link: "https://docs.tenzir.com/archive/an-interns-reflection",
        imagePath: "/Images/db.png"
    }
]

// {
//     title: "Embedded Operating Systems",
//     description: "Designed and implemented core components of an embedded operating system, focusing on real-time processing and resource management.",
//     link: "",
//     imagePath: "/Images/os.jpg"
// },

const ProjectsAndWork = () => {
    return (
        <section className='py-16 px-4 md:px-8'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-center text-white mb-12 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    Projects and Work
                </h2>
                <div className="flex flex-col space-y-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            imagePath={project.imagePath}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsAndWork
