"use client";
import React from "react";
import ThemeSwitch from "../theme/ThemeSwitch";
import Logo from "@/public/assets/images/logo.svg";
import Image from "next/image";
import FontSelect from "./FontSelect";
import { useStore } from "@/lib/store";

const Navbar = () => {
  const fontType = useStore((state) => state.fontType);

  return (
    <nav
      className={` ${fontType} flex justify-between items-center py-16 max-tablet:justify-end `}
    >
      <Image
        src={Logo}
        alt="logo"
        width={30}
        height={30}
        className="max-tablet:hidden"
      />

      <div className=" flex gap-5 ">
        <FontSelect />
        <div className=" w-5 h-8 border-l-[2px] border-border"></div>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
