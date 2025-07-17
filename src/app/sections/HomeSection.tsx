"use client";
import React, { useRef, useState } from "react";
import Beams from "../components/Beams";
import Magnet from "../components/Magnet";
import RotatingText from "../components/RotatingText";
import ContactForm from "../components/ContactForm";
import Stepper, { Step } from "../components/Stepper";

const HomeSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission (API, email, etc)
    alert("Form submitted! (handler belum diimplementasi)");
  };

  return (
    <div className="w-screen h-[70vh] md:min-h-screen flex flex-row justify-start items-center sm:px[40px] md:px-[160px] md:py-[80px] ">
      <div className="flex flex-col gap-20 md:gap-30 justify-start items-start flex-1 pl-[40px] md:pl-[0px]">
        <div className="flex flex-col justify-start items-start gap-4 ">
          <div className="text-4xl md:text-6xl font-bold">Ahmad Marzuki</div>
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:gap-4">
            <span className="text-xl md:text-3xl">I'm Ready For Job</span>
            {/* <div className="bg-accent px-8 py-4 text-primary rounded-2xl text-xl">
              Web Development
            </div> */}
            <RotatingText
              texts={["CAD Design", "Web Development", "Robotics Engineer"]}
              mainClassName="px-2 sm:px-2 md:px-3 text-xl bg-accent text-primary w-50 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg md:rounded-2xl"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>

        <Magnet padding={300} disabled={false} magnetStrength={5}>
          <div className="bg-accent px-8 py-4 text-primary rounded-2xl text-xl cursor-pointer">
            Contact Me
          </div>
        </Magnet>
      </div>

      <div className="w-[60%] md:flex justify-end items-center hidden md:visible">
        <Stepper
          initialStep={1}
          onStepChange={(step) => {
            console.log(step);
          }}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          <Step>
            <div className="flex flex-col justify-center my-8">
              <h1 className="text-accent text-4xl font-bold">Get In Touch</h1>
              <p>Check out the next step!</p>
            </div>
          </Step>

          <Step>
            <h2 className="text-xl mb-4">Can you tell me your cool name?</h2>
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="What's your name?"
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 border rounded mt-1 text-accent bg-primary"
                required
              />
              <input
                type="text"
                name="email"
                placeholder="example@gmail.com"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 border rounded mt-1 text-accent bg-primary"
                required
              />
            </div>
          </Step>

          <Step>
            <h2 className="mb-4">What's topic you wanna talking about?</h2>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-4 border rounded mt-1 text-accent bg-primary"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-4 border rounded mt-1 text-accent bg-primary"
              rows={5}
              required
            />
          </Step>

          <Step>
            <h2 className="text-4xl font-bold">Thank You!</h2>
            {/* <p>You made it!</p> */}
          </Step>
        </Stepper>
      </div>
    </div>
  );
};

export default HomeSection;
