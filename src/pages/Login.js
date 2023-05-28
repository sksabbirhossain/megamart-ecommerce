import React from "react";
import { AiOutlineBug } from "react-icons/ai";

export const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="mx-2 sm:mx-0 sm:w-[350px] bg-slate-100 px-2 py-4 rounded-md">
        <div className="flex flex-col items-center justify-center pb-4">
          <span className="text-green-600 text-5xl pb-1">
            <AiOutlineBug />
          </span>
          <h3 className="text-2xl font-semibold">Login Your Account</h3>
        </div>
        <form action="">
          <div className="mb-3">
            <label htmlFor="email" className="text-lg font-normal">
              Email
            </label>
            <input
              type="email"
              placeholder="your email"
              className="py-2 px-1 mt-1 w-full rounded-md border-2 border-green-100 focus:outline-green-600"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="text-lg font-normal">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="your password"
              className="py-2 px-1 mt-1 w-full rounded-md border-2 border-green-100 focus:outline-green-600"
            />
          </div>
          <button
            type="submit"
            className=" px-6 py-[5px] flex justify-center w-full rounded-md bg-[#28a745] text-white border-2 border-[#28a745] focus:ring-2 overflow-hidden hover:bg-green-600 ease-in duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
