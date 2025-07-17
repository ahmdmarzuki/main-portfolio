import React from "react";

const EducationSection = () => {
  return (
    <div className="relative w-screen bg-accent text-primary min-h-screen gap-10 flex flex-col items-start px-[40px] md:px-[80px]">
      <h1 className="md:absolute text-primary text-4xl font-bold md:-top-24">
        Education
      </h1>

      <div className="flex flex-col gap-4">
        <div className="bg-zinc-800/80 w-full py-8 rounded-2xl px-16">
          <div className="flex flex-col gap-4">
            <div className="flex justify-start items-center gap-10">
              <div>O</div>
              <div className="flex flex-col">
                <span className="font-bold">
                  Bandung Institute of Technology
                </span>
                <p>2024 - 2028</p>
              </div>
            </div>

            <h1 className="font-bold">Undergradute in Industrial Design</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nisi totam nam, delectus consequuntur soluta. Numquam
              dolores reprehenderit animi nemo, libero repudiandae totam ipsa
              consequuntur illum sunt saepe veritatis nobis!
            </p>
          </div>
        </div>
        <div className="bg-zinc-800/80 w-full py-8 rounded-2xl px-16">
          <div className="flex flex-col gap-4">
            <div className="flex justify-start items-center gap-10">
              <div>O</div>
              <div className="flex flex-col">
                <span className="font-bold">
                  Bandung Institute of Technology
                </span>
                <p>2024 - 2028</p>
              </div>
            </div>

            <h1 className="font-bold">Undergradute in Industrial Design</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nisi totam nam, delectus consequuntur soluta. Numquam
              dolores reprehenderit animi nemo, libero repudiandae totam ipsa
              consequuntur illum sunt saepe veritatis nobis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
