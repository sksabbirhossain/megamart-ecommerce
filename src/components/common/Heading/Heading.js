import React from "react";

export const Heading = ({title}) => {
  return (
    <div className="mt-1">
          <h2 className="text-2xl rounded-md">{ title}</h2>
      <p className="shadow-sm pt-2 w-full"></p>
    </div>
  );
};
