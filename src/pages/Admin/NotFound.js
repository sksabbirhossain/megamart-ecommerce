import React from "react";
import { setTitle } from "../../utils/setTitle";

export const NotFound = () => {
  //set page tite
  setTitle("404 Not Found");

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-xl font-semibold text-green-600 uppercase">
          Not Found!
        </p>
      </div>
    </div>
  );
};
