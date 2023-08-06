import React from "react";

export const ContainerHeader = ({ title }) => {
  return (
    <div className="my-5">
      <h1 className="capitalize text-xl font-medium">{title}</h1>
    </div>
  );
};
