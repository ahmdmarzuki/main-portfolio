import Image from "next/image";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ScrollVelocity from "./components/ScrollVelocity";
import EducationSection from "./sections/EducationSection";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <ScrollVelocity
        texts={["Software Engineer", "Product Designer"]}
        velocity={30}
        className="custom-scroll-text"
      />
      <AboutSection />
      <EducationSection />
    </div>
  );
}
