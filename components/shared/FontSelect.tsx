"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useStore } from "@/lib/store";

const FontSelect = () => {
  const setFontType = useStore((state) => state.setFontType);

  return (
    <Select
      defaultValue="font-sans"
      onValueChange={(value) => setFontType(value)}
    >
      <SelectTrigger className=" w-[180px] max-tablet:w-[120px]  text-foreground bg-background  rounded-md border-transparent text-[18px]">
        <SelectValue placeholder="Select a font" className=" " />
      </SelectTrigger>
      <SelectContent className="text-body-m bg-background w-[180px] max-tablet:w-[120px] rounded-md cursor-pointer">
        <SelectItem
          value="font-serif"
          className=" text-body-m hover:text-primary cursor-pointer"
        >
          Serif
        </SelectItem>
        <SelectItem
          value="font-sans"
          className=" text-body-m hover:text-primary cursor-pointer"
        >
          Sans Serif
        </SelectItem>
        <SelectItem
          value="font-mono"
          className=" text-body-m hover:text-primary cursor-pointer"
        >
          Mono
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FontSelect;
