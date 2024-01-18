"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "../ui/switch";
import { useTheme } from "next-themes";

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
  }, []);

  return (
    <Switch
      onCheckedChange={handleChecked}
      checked={theme === "dark"}
      defaultChecked={initial}
    />
  );
};

export default ThemeSwitch;
