import React from "react";

const NotFound = () => {
  return (
    <div className="  text-center mt-40 space-y-5">
      <h1 className=" text-5xl">😶‍🌫️</h1>
      <h2 className=" text-heading-s">No Definitions Found</h2>
      <p className=" text-secondary">
        Sorry pal, we couldn't find definitions for the word you were looking
        for.You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default NotFound;
