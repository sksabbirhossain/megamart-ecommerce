import React from "react";

export const FormInput = ({
  label,
  type,
  name,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <div className="mb-3">
      <label htmlFor="email" className="text-lg font-normal">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`py-2 px-1 mt-1 w-full rounded-md border-2 border-green-100 focus:outline-green-600 ${className}`}
        {...rest}
      />
    </div>
  );
};
