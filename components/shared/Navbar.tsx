import React from "react";
import ThemeSwitch from "../theme/ThemeSwitch";
import Logo from "@/public/assets/images/logo.svg";
import Image from "next/image";
import FontSelect from "./FontSelect";
const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center py-16">
      <Image src={Logo} alt="logo" width={30} height={30} />
      <div className=" flex gap-5">
        <FontSelect />
        <div className=" w-5 h-8 border-l-[2px] border-border"></div>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
