import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineBug } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/common/Button/Button";
import { Form } from "../../components/common/Form/Form";
import { FormInput } from "../../components/common/FormInput/FormInput";
import { Error } from "../../components/ui/Error";
import { useAdminLoginMutation } from "../../features/auth/authApi";
import { setTitle } from "../../utils/setTitle";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [adminLogin, { isLoading, isSuccess, error: resError }] =
    useAdminLoginMutation();

  useEffect(() => {
    setError("");
    if (!isLoading && isSuccess) {
      toast.success("Admin Login SuccessFull");
      return navigate("/admin/dashboard");
    }
    if (resError?.error) {
      setError(resError.error);
    }
    if (resError?.status) {
      setError(resError?.data?.message);
    }
  }, [isLoading, isSuccess, resError, navigate]);

  //handle login
  const handleSubmit = (e) => {
    e.preventDefault();
    adminLogin({ email, password });
  };
  //set page title
  setTitle("Login User");
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="mx-2 sm:mx-0 sm:w-[350px] bg-slate-100 px-2 py-4 rounded-md">
        <div className="flex flex-col items-center justify-center pb-4">
          <span className="text-green-600 text-5xl pb-1">
            <AiOutlineBug />
          </span>
          <h3 className="text-2xl font-semibold">Login Admin Account</h3>
        </div>
        <Form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            disabled={isLoading}
            name={isLoading ? "Loading..." : "Login"}
            className="w-full"
          />
        </Form>
        {error !== "" && <Error error={error} />}
      </div>
    </div>
  );
};
