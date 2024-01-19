import React from "react";
interface Props {
  data: NotFoundData;
}

interface NotFoundData {
  title: string;
  message: string;
  resolution: string;
}

const NotFound = ({ data: { title, message, resolution } }: Props) => {
  return (
    <div className="  text-center mt-40 space-y-5">
      <h1 className=" text-5xl">😶‍🌫️</h1>
      <h2 className=" text-heading-s">{title}</h2>
      <p className=" text-secondary">
        {message}
        {""}
        {resolution}
      </p>
      <p></p>
    </div>
  );
};

export default NotFound;
