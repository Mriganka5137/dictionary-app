"use client";
import { WordData } from "@/lib/type";
import Image from "next/image";
import React from "react";
import play from "@/public/assets/images/icon-play.svg";
import MeaningCard from "./MeaningCard";
import Link from "next/link";

interface Props {
  data: WordData;
}

const Meaning = ({ data }: Props) => {
  const { word, meanings, phonetic, sourceUrls, phonetics } = data;

  const audioFile = phonetics.find((item) => item.audio !== "");
  return (
    <section className=" mt-11 pb-36">
      <div className=" flex justify-between items-center">
        <div>
          <h1 className=" text-heading-l">{word}</h1>
          <h4 className=" text-heading-m text-primary">{phonetic}</h4>
        </div>
        {audioFile && (
          <>
            <Image
              src={play}
              alt="play"
              width={75}
              height={75}
              className="cursor-pointer"
              onClick={() => new Audio(audioFile.audio).play()}
            />
          </>
        )}
      </div>
      <div>
        {meanings.map((item, index) => (
          <MeaningCard key={index} data={item} />
        ))}
      </div>
      <div className=" border-t-2 mt-10"></div>
      <div className=" flex gap-5 mt-5">
        <p className="text-secondary underline">Source</p>
        <Link
          href={sourceUrls[0]}
          target="blank"
          className=" underline decoration-secondary decoration-1 underline-offset-[2px]"
        >
          {sourceUrls}
        </Link>
      </div>
    </section>
  );
};

export default Meaning;
