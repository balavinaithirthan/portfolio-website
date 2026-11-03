import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  period,
  description,
  link,
  linkLabel = "Learn more",
  imagePath,
}) {
  return (
    <article className="group relative overflow-hidden rounded-xl bg-gray-800/30 p-6 transition-all border border-gray-700/50">
      <div className="flex flex-col md:flex-row gap-8">
        {imagePath && (
          <div className="w-full md:w-1/3 relative h-[200px]">
            <Image
              src={imagePath}
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div className={`w-full space-y-5 ${imagePath ? "md:w-2/3" : ""}`}>
          {period && (
            <p className="text-[#FFD700] text-sm font-semibold tracking-wide uppercase">
              {period}
            </p>
          )}
          <h3 className="text-3xl font-black tracking-tight text-white group-hover:text-[#FFD700] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 text-lg font-light tracking-wide leading-relaxed">
            {description}
          </p>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide text-lg"
          >
            {linkLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
