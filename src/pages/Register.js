import React from "react";
import { AiOutlineBug } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "../components/common/Button/Button";
import { Form } from "../components/common/Form/Form";
import { FormInput } from "../components/common/FormInput/FormInput";
import { setTitle } from "../utils/setTitle";

export const Register = () => {
  //set page title
  setTitle("Register User");
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="mx-2 sm:mx-0 sm:w-[350px] bg-slate-100 px-2 py-4 rounded-md">
        <div className="flex flex-col items-center justify-center pb-4">
          <span className="text-green-600 text-5xl pb-1">
            <AiOutlineBug />
          </span>
          <h3 className="text-2xl font-semibold">Create Your Account</h3>
        </div>
        <Form>
          <FormInput
            label="Your Full Name"
            type="text"
            name="name"
            placeholder="your name"
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            placeholder="your email"
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="your password"
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="your confirm password"
          />

          <Button name="Register" className="w-full" />
        </Form>
        <div className="mt-4 mb-3 text-center">
          <span>
            you have an account? please{" "}
            <Link to="/" className="text-[#28a745] font-normal">
              Login here.
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
