"use client";
import React from "react";
import Beams from "../components/Beams";

const AboutSection = () => {
  return (
    <div className="relative items-center h-[60vh] md:h-auto w-screen flex justify-start md:justify-end bg-accent">
      <div className="md:absolute px-[40px] py-[60px] md:py-0 md:pl-0 md:top-[180px] md:left-[80px] z-20 w-screen md:w-1/2 flex flex-col gap-10">
        <h1 className="text-primary text-4xl font-bold">About Me</h1>
        <div className="flex flex-col gap-4">
          <span className="text-primary line-clamp-6 md:line-clamp-none overflow-auto">
            Hi, I'm Marzuki! driven by passion for technology. With experience
            in Mobile App Development (flutter), Web Development, Robotics,
            UI/UX Design, and CAD Design <br />
            <br />
            One of the most rewarding of my journey as has been working with
            Unit Robotika ITB (URO ITB) at Programming Departement. I've learned
            a lot of robotic things such as Robot Operating System, Gazeebo
            Simulation, Computer Vision, and Machine Learning.
            <br />
            <br />
            While I'm proud of the progress i've made, I'm continually inspired
            by the chance to grow and learn with each new project. I strongly
            believe in the power of collaboration, curiousity, and the desire to
            make possitive impact. <br />
            <br />
            If you're looking to create meaningful change and foster strong
            partnership for your company, I'd love to connect and hear your
            story. Togather we can achieve great things!
          </span>
        </div>
      </div>
      <div
        className="relative hidden md:visible md:flex opacity-30"
        style={{ width: "100%", height: "100vh", position: "relative" }}
      >
        <div className="absolute w-full h-full  z-10 bg-gradient-to-b from-zinc-900/0 to-zinc-900"></div>
        <div className="absolute w-full h-full  z-10 bg-gradient-to-l from-zinc-900/0 to-zinc-900"></div>
        <Beams
          beamWidth={4}
          beamHeight={17}
          beamNumber={7}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
    </div>
  );
};

export default AboutSection;
