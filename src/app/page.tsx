import HeroSection from "@/components/HeroSection";
import { TimeLine } from "@/components/TimeLine";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Home() {
  return <>
  <HeroSection/>
    <TimeLine/>
    <LinkPreview url="https://www.allcloud.in/" className="font-bold">ALLCLOUD</LinkPreview> 
  </>;
}

