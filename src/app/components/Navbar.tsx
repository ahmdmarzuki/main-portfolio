import React from "react";

const Navbar = () => {
  const menu = [
    { title: "About", href: "/" },
    { title: "About", href: "/" },
    { title: "About", href: "/" },
    { title: "About", href: "/" },
  ];
  return (
    <div className="flex flex-row justify-between">
      <div className="flex-1">
        <div className="bg-[#030303] w-[60px] h-[60px] "></div>
      </div>
      <div className="flex flex-row gap-20 justify-center items-center flex-1">
        {menu.map((item) => {
          return <a className="cursor-pointer">{item.title}</a>;
        })}
      </div>
      <div className="flex-1 flex justify-end">
        <div className="bg-[#030303] cursor-pointer h-[60px] w-50 text-[#E9E9E9] flex justify-center items-center px-10 text-[18px] ">
          <span>Contact Me</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
