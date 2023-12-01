import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "../../../components/common/Button/Button";
import { Form } from "../../../components/common/Form/Form";
import { FormInput } from "../../../components/common/FormInput/FormInput";
import { Textarea } from "../../../components/common/FormInput/Textarea";
import { Error } from "../../../components/ui/Error";
import {
  useGetBrandQuery,
  useUpdateBrandMutation,
} from "../../../features/brand/brandApi";

export const UpdateModal = ({ closeModal, brandId }) => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const {
    data: brand,
    isLoading: brandIsLoading,
    isSuccess: brandIsSuccess,
  } = useGetBrandQuery(brandId);

  const [updateBrand, { isLoading, isSuccess, error: resError }] =
    useUpdateBrandMutation();

  useEffect(() => {
    if (!brandIsLoading && brandIsSuccess) {
      const { name, description } = brand[0];
      setName(name);
      setDescription(description);
    }
  }, [brandIsLoading, brandIsSuccess, brand]);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      toast.success("Brand Updated SuccessFull");
      closeModal(false);
    }
    if (resError?.error) {
      setError(resError.error);
    }
    if (resError?.status === 500) {
      setError("Internal Server Error");
    }
  }, [isLoading, isSuccess, resError, closeModal]);

  //handle update brand
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (picture) {
      formData.append("picture", picture);
    }
    updateBrand({ brandId, data: formData });
  };
  return (
    <div className="absolute -top-4 left-0 w-full h-full z-50 flex justify-center items-center bg-black/50">
      <div className="w-[450px] bg-white rounded-md mx-2 sm:mx-0 p-5">
        <div className="flex justify-between items-center mb-4 ">
          <p className="text-xl font-normal capitalize">Update Brand</p>
          <button
            className="bg-red-400 rounded-md px-2 text-white"
            onClick={() => closeModal(false)}
          >
            X
          </button>
        </div>
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
            name={isLoading ? "loading.." : "update"}
            className="w-full"
          />
        </Form>

        {error !== "" && <Error error={error} />}
      </div>
    </div>
  );
};
