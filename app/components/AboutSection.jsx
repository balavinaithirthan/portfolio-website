export default function AboutSection() {
  return (
    <section className="py-16 px-4 md:px-8" aria-labelledby="about-title">
      <div className="max-w-4xl mx-auto">
        <h2
          id="about-title"
          className="text-center text-white mb-12 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight"
        >
          About
        </h2>
        <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-5 bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
          <p className="font-light tracking-wide">
            At Applied Intuition, I work on autonomy, bringing sensors,
            perception models, and vehicle controls together in deployed systems.
          </p>
          <p className="font-light tracking-wide">
            At Stanford, I earned a B.S. in Computer Science and pursued
            graduate study in Electrical Engineering.
          </p>
          <p className="font-light tracking-wide">
            Two research projects I&apos;m proud of are{" "}
            <a
              href="https://doi.org/10.1145/3839504"
              className="text-white underline underline-offset-4 hover:text-[#FFD700]"
              target="_blank"
              rel="noopener noreferrer"
            >
              FILTR
            </a>
            , a compiler for bioinformatics recurrences, and{" "}
            <a
              href="https://doi.org/10.1145/3613904.3642041"
              className="text-white underline underline-offset-4 hover:text-[#FFD700]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moon Story
            </a>
            , an AR and LLM learning system tested with elementary school students.
          </p>
          <p className="font-light tracking-wide">
            At Tenzir, I built C++ streaming operators for Feather and Parquet
            and optimized projection pushdown for security-data pipelines.
          </p>
          <p className="font-light tracking-wide">
            At UCSF&apos;s Burlingame Lab, I modeled cancer-drug response and
            co-authored research on profiling newly synthesized proteins.
          </p>
        </div>
      </div>
    </section>
  );
}
