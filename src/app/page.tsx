import HeroSection from "@/components/HeroSection";
import { TimeLine } from "@/components/TimeLine";
import ProjectsSection from "../components/CompanyCard";
import Footer from "@/components/Footer";

export default function Home() {
  return <>
  <HeroSection/>
    <TimeLine/>
    <ProjectsSection/>
    <Footer/>
  </>;
}

