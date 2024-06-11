import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import AboutSection from "./components/AboutSection"; 
import ProjecsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar/>
      <div className="container mt-24  mx-auto p-12 x-4">
      <HeroSection/>
      <AboutSection/>
      <ProjecsSection/>
      <EmailSection/>
      </div>
    </main>
  );
}
