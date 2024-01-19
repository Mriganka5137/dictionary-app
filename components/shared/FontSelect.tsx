"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FontSelect = () => {
  const [font, setFont] = useState("sans");

  return (
    <Select defaultValue="sans-serif" onValueChange={(value) => setFont(value)}>
      <SelectTrigger className=" w-[180px] max-tablet:w-[120px] text-body-m text-foreground bg-background  rounded-md border-transparent">
        <SelectValue placeholder="Select a font" className=" " />
      </SelectTrigger>
      <SelectContent className="text-body-m bg-background w-[180px] max-tablet:w-[120px] rounded-md">
        <SelectItem value="serif" className=" text-body-m">
          Serif
        </SelectItem>
        <SelectItem value="sans-serif" className=" text-body-m">
          Sans Serif
        </SelectItem>
        <SelectItem value="mono" className=" text-body-m">
          Mono
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FontSelect;
