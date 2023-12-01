import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../components/common/Button/Button";
import { Form } from "../../../components/common/Form/Form";
import { FormInput } from "../../../components/common/FormInput/FormInput";
import { Textarea } from "../../../components/common/FormInput/Textarea";
import { Heading } from "../../../components/common/Heading/Heading";
import { Error } from "../../../components/ui/Error";
import { useAddBrandMutation } from "../../../features/brand/brandApi";
import { setTitle } from "../../../utils/setTitle";

export const AddBrand = () => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [addBrand, { isLoading, isSuccess, error: resError }] =
    useAddBrandMutation();

  useEffect(() => {
    setError("");
    if (!isLoading && isSuccess) {
      toast.success("Brand Added SuccessFull");
      return navigate("/admin/all-brands");
    }
    if (resError?.error) {
      console.log(resError.error);
      setError(resError.error);
    }
    if (resError?.status === 500) {
      setError("Internal Server Error");
    }
  }, [isLoading, isSuccess, resError, navigate]);

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("picture", picture);
    formData.append("description", description);
    addBrand(formData);
  };

  //set page title
  setTitle("Add Brand");
  return (
    <section>
      <Heading title="Add Brand" />
      <div className="flex justify-end shadow-sm py-2 rounded-md">
        <Link
          to="/admin/all-brands"
          className=" bg-green-600 px-2 mr-1 py-1 uppercase rounded-md text-gray-50 font-normal"
        >
          All Brands
        </Link>
      </div>
      <div className=" mt-4 w-full flex justify-center py-2 sm:py-9 px-2 sm:shadow-md rounded-md">
        <div className=" w-full max-w-[450px] bg-gray-50 shadow-md p-1 py-5 rounded-md">
          <Form encType="multipart/form-data" onSubmit={handleSubmit}>
            <FormInput
              label="Brand Name"
              type="text"
              name="name"
              placeholder="brand name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormInput
              label="Brand Picture"
              type="file"
              name="picture"
              placeholder="brand picture"
              onChange={(e) => setPicture(e.target.files[0])}
            />
            <Textarea
              label="Description"
              name="description"
              placeholder="brand description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              name={isLoading ? "loading.." : "Add"}
              className="w-full"
              disabled={isLoading}
            />
          </Form>

          {error !== "" && <Error error={error} />}
        </div>
      </div>
    </section>
  );
};
