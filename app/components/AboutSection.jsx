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
        <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6 bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
          <p className="font-light tracking-wide">
            I&apos;m Bala Vinaithirthan, a software engineer at Applied Intuition.
            I work on autonomous machines and the systems connecting sensors,
            perception, embedded software, and real-world deployment.
          </p>
          <p className="font-light tracking-wide">
            I earned a B.S. in Computer Science at Stanford University and
            pursued graduate study in Electrical Engineering. My research with
            Fredrik Kjølstad focuses on compilers and high-performance computing
            for bioinformatics. Our work on FILTR, a compiler for bioinformatics
            recurrences, appeared at OOPSLA 2026.
          </p>
          <p className="font-light tracking-wide">
            Previously, I worked on high-performance C++ data systems at Tenzir,
            embedded monitoring at SLB, and augmented-reality learning experiences
            at Stanford. I enjoy building across the hardware, systems, and
            machine-learning stack.
          </p>
        </div>
      </div>
    </section>
  );
}
