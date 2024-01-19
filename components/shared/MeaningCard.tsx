import { Meanings } from "@/lib/type";
import React from "react";
import { Separator } from "../ui/separator";
interface Props {
  data: Meanings;
}

const MeaningCard = ({ data }: Props) => {
  const { partOfSpeech, definitions, synonyms } = data;

  return (
    <div className=" mt-5">
      <div className=" flex items-center gap-5 justify-between">
        <p className=" text-[24px] font-bold italic ">{partOfSpeech}</p>
        <div className=" border-t-2 flex-grow "> </div>
      </div>
      <p className=" text-[20px] text-secondary font-light mt-10">Meanings</p>
      <ul className="list-disc pl-4 space-y-3 mt-6">
        {definitions &&
          definitions.map((item, index) => (
            <>
              <li className=" text-body-m">{item.definition}</li>
              {item.example && (
                <p className="text-secondary text-[18px]">
                  &quot;{item.example}&quot;
                </p>
              )}
            </>
          ))}
      </ul>
      {synonyms.length > 0 && (
        <>
          <p className=" text-[20px] mt-16 text-secondary">
            Synonyms{" "}
            <span className="text-primary  font-medium ml-5">{synonyms}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default MeaningCard;
