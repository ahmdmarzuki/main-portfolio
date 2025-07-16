"use client";
import React from "react";
import Beams from "../components/Beams";

const HomeSection = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-30 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-6xl font-bold">Ahmad Marzuki</div>
          <div className="flex flex-row justify-center items-center gap-4">
            <span className=" text-3xl">I'm Ready For Job</span>
            <div className="bg-accent px-8 py-4 text-primary rounded-2xl text-xl">
              Web Development
            </div>
          </div>
        </div>

        <div className="bg-accent px-8 py-4 text-primary rounded-2xl text-xl">
          Contact Me
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
