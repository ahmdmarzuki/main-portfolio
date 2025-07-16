"use client";
import React from "react";
import Beams from "../components/Beams";

const AboutSection = () => {
  return (
    <div className="relative items-end w-screen flex justify-end bg-accent">
      <div className="absolute top-[180px] left-[80px] z-10 w-1/2 flex flex-col gap-10">
        <h1 className="text-primary text-4xl font-bold">About Me</h1>
        <span className="text-primary ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed mollitia
          distinctio soluta exercitationem possimus delectus, laudantium non
          dolorum cupiditate rerum facere consequatur sint placeat officiis
          quibusdam laborum aspernatur corporis quaerat. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Hic dignissimos facere cumque nam!
          Ipsam sapiente nostrum dignissimos iste beatae excepturi id. Mollitia
          inventore deserunt harum odio aliquid qui totam accusantium?
        </span>
      </div>
      <div style={{ width: "60%", height: "100vh", position: "relative" }}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
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
