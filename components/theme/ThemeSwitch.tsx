"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "../ui/switch";
import { useTheme } from "next-themes";
import Image from "next/image";
import moon from "@/public/assets/images/icon-moon.svg";
import moonDark from "@/public/assets/images/icon-moon-dark.svg";
const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();
  const [initial, setInitial] = useState(false);
  const handleChecked = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setInitial(true);
      setTheme("dark");
    } else {
      setInitial(false);
      setTheme("light");
    }
  }, [setTheme]);

  return (
    <div className=" flex items-center gap-5">
      <Switch
        onCheckedChange={handleChecked}
        checked={theme === "dark"}
        defaultChecked={initial}
        className=""
      />
      <Image
        src={theme === "dark" ? moonDark : moon}
        width={1000}
        height={1000}
        alt="moon"
        className=" w-5 h-5"
      />
    </div>
  );
};

export default ThemeSwitch;
