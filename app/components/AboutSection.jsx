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
            At Applied Intuition, I work on autonomy models and the challenges
            of bringing hardware and software to production.
          </p>
          <p className="font-light tracking-wide">
            At Stanford, I studied Computer Science and Electrical Engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
