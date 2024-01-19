"use client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import { useState } from "react";
import searchLogo from "@/public/assets/images/icon-search.svg";
import Meaning from "@/components/shared/Meaning";
import NotFound from "@/components/shared/NotFound";
import { useStore } from "@/lib/store";
import Loading from "@/components/shared/Loading";

export default function Home() {
  const fontType = useStore((state) => state.fontType);
  const [search, setSearch] = useState("");
  const [empty, setEmpty] = useState(false);
  const query = useQuery({
    queryKey: ["search"],
    queryFn: async () => {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
      );
      return data.data[0];
    },
    enabled: false,
    retry: false,
  });
  return (
    <section className={` mb-36  ${fontType}`}>
      <form
        className="w-full bg-muted  rounded-[18px] relative"
        onSubmit={(e) => {
          e.preventDefault();
          if (!search) {
            setEmpty(true);
            return;
          }
          query.refetch();
          setEmpty(false);
        }}
      >
        <input
          type="search"
          className={` ${
            empty ? "focus:outline-destructive" : "focus:outline-primary"
          } w-full bg-transparent px-6 py-5  rounded-[18px] text-heading-s  outline-1`}
          placeholder="Search for any word"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Image
          src={searchLogo}
          alt="search"
          width={20}
          height={20}
          className={`absolute top-1/2 transform -translate-y-1/2 right-6 ${
            search && "hidden"
          }`}
        />
      </form>
      {empty && (
        <p className=" text-destructive">Whoops, can&apos;t be empty</p>
      )}

      {query.isError ? (
        <NotFound />
      ) : (
        query.data && <Meaning data={query.data} />
      )}
    </section>
  );
}
