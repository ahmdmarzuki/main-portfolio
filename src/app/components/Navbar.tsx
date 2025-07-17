"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Hamburger from "hamburger-react";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menu = [
    { title: "About", id: "1", href: "/" },
    { title: "About", id: "2", href: "/" },
    { title: "About", id: "3", href: "/" },
    { title: "About", id: "4", href: "/" },
  ];
  return (
    <div className="flex flex-row justify-between w-screen">
      <div className="flex-1 flex items-center gap-6">
        <div className="bg-[#030303] w-[60px] h-[60px] flex justify-center items-center">
          <SidebarTrigger className="text-primary scale-170 hover:bg-black" />
        </div>
        <div className="text-2xl font-bold cursor-pointer">@ahmrrzz</div>
      </div>
      <div className="hidden lg:visible lg:flex flex-row gap-20 justify-center items-center flex-1">
        {menu.map((item) => {
          return (
            <p key={item.id} className="text-xl cursor-pointer">
              {item.title}
            </p>
          );
        })}
      </div>
      <div className="flex-1 lg:flex justify-end hidden lg:visible">
        <div className="bg-[#030303] hover:bg-[#030303]/90 cursor-pointer h-[60px] w-50 text-[#E9E9E9] flex justify-center items-center px-10 text-[18px] ">
          <span>Contact Me</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
