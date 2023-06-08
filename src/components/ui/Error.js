import React from "react";

export const Error = ({ error }) => {
  return (
    <p className="mt-4 bg-red-400 rounded-md text-center w-full py-2 text-black/80 font-medium capitalize">
      {error}
    </p>
  );
};
