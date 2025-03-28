import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
// import NavBar from "./components/NavBar";
import ProjectsAndWork from "./components/ProjectsAndWork";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1a202c]">
      {/* <NavBar /> */}
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <ProjectsAndWork />
      </div>
      {/* <div>
        <Teaching
      </div> */}
    </main >
  );
}
