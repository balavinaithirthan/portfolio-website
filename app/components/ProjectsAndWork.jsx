import ProjectCard from "./ProjectCard";

const projects = [
 {
    title: "FILTR: Compiling Bioinformatics Recurrences",
    period: "OOPSLA 2026",
    description:
      "Co-authored a domain-specific language and compiler that separates recurrence definitions from scheduling and pruning, generating efficient C++ implementations of bioinformatics algorithms.",
    link: "https://doi.org/10.1145/3839504",
    linkLabel: "Read the paper",
    imagePath: "/Images/bio.jpg",
  },
  {
    title: "Tenzir: High-Performance Data Systems",
    period: "2024",
    description:
      "Built C++ streaming operators for Apache Arrow Feather and Parquet data and worked on projection-pushdown optimizations for composable security-data pipelines.",
    link: "https://github.com/tenzir/tenzir/blob/de19c042b51b2bdd7f96440e5734ca4145636af9/web/blog/an-interns-reflection/index.md",
    linkLabel: "Read about the work",
    imagePath: "/Images/db.png",
  },
  {
    title: "Moon Story: AR and LLMs for Education",
    period: "CHI 2024",
    description:
      "Contributed to research on an augmented-reality science-learning experience that combines interactive storytelling with large language models, published at CHI 2024.",
    link: "https://doi.org/10.1145/3613904.3642041",
    linkLabel: "Read the paper",
    imagePath: "/Images/moon-story.svg",
  },
  {
    title: "UCSF: Proteomics Research",
    period: "2023 publication",
    description:
      "At UCSF's Burlingame Lab, I co-authored research improving the isolation and mass spectrometry identification of newly synthesized proteins.",
    link: "https://pubmed.ncbi.nlm.nih.gov/36642223/",
    linkLabel: "Read the publication",
    imagePath: "/Images/ucsf-research.svg",
  },
 {
    title: "Cancer Drug Response Modeling",
    period: "Davidson Fellowship",
    description:
      "Researched machine-learning approaches to predicting cancer-drug response using molecular and gene-expression data; recognized with a Davidson Fellowship.",
    link: "https://www.davidsongifted.org/gifted-programs/fellows-scholarship/fellows/current-and-past-fellows/2021-fellows/bala-vinaithirthan/",
    linkLabel: "Read about the project",
    imagePath: "/Images/cancer_model.png",
  },
];

export default function ProjectsAndWork() {
  return (
    <section className="py-16 px-4 md:px-8" aria-labelledby="work-title">
      <div className="max-w-6xl mx-auto">
        <h2
          id="work-title"
          className="text-center text-white mb-16 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight"
        >
          Projects and Work
        </h2>
        <div className="flex flex-col space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
