import Image from "next/image";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AboutSection />
    </div>
  );
}
