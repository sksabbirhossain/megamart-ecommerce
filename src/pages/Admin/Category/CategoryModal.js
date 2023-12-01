import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "../../../components/common/Button/Button";
import { Form } from "../../../components/common/Form/Form";
import { FormInput } from "../../../components/common/FormInput/FormInput";
import { SelectBox } from "../../../components/common/FormInput/SelectBox";
import { Error } from "../../../components/ui/Error";
import { useGetAllBrandsQuery } from "../../../features/brand/brandApi";
import {
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "../../../features/category/categoryApi";

export const CategoryModal = ({ closeModal, categoryId }) => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState(null);
  const [brandInfo, setBrandInfo] = useState("");
  const [error, setError] = useState("");

  const { data: brands, isLoading } = useGetAllBrandsQuery();

  const {
    data: category,
    isLoading: categoryIsLoading,
    isSuccess: categoryIsSuccess,
  } = useGetCategoryQuery(categoryId);

  const [
    updateCategory,
    { isLoading: updateLoading, isSuccess, error: resError },
  ] = useUpdateCategoryMutation();

  useEffect(() => {
    if (!categoryIsLoading && categoryIsSuccess) {
      const { name, brandInfo } = category[0];
      setName(name);
      setBrandInfo(JSON.stringify(brandInfo));
    }
  }, [categoryIsLoading, categoryIsSuccess, category]);

  useEffect(() => {
    if (!updateLoading && isSuccess) {
      toast.success("Category Updated SuccessFull");
      closeModal(false);
    }
    if (resError?.error) {
      setError(resError.error);
    }
    if (resError?.status === 500) {
      setError("Internal Server Error");
    }
  }, [updateLoading, isSuccess, resError, closeModal]);

  //   //handle update brand
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const brand = JSON.parse(brandInfo);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("brandInfo", brand?._id);
    if (picture) {
      formData.append("picture", picture);
    }
    updateCategory({ categoryId, data: formData });
  };
  if (brandInfo !== "") {
    var brandShow = JSON.parse(brandInfo);
  }
  return (
    <div className="absolute -top-4 left-0 w-full h-full z-50 flex justify-center items-center bg-black/50">
      <div className="w-[450px] bg-white rounded-md mx-2 sm:mx-0 p-5">
        <div className="flex justify-between items-center mb-4 ">
          <p className="text-xl font-normal capitalize">Update Category</p>
          <button
            className="bg-red-400 rounded-md px-2 text-white"
            onClick={() => closeModal(false)}
          >
            X
          </button>
        </div>
        <Form encType="multipart/form-data" onSubmit={handleSubmit}>
          <FormInput
            label="Category Name"
            type="text"
            name="name"
            placeholder="category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            label="Category Picture"
            type="file"
            name="picture"
            placeholder="category picture"
            onChange={(e) => setPicture(e.target.files[0])}
          />
          <SelectBox
            label="Select Brand"
            onChange={(e) => setBrandInfo(e.target.value)}
          >
            <option value={brandInfo} className="capitalize">
              {brandShow?.name}
            </option>
            {!isLoading &&
              brands?.map((brand) => (
                <option
                  value={JSON.stringify(brand)}
                  className="capitalize"
                  key={brand._id}
                >
                  {brand.name}
                </option>
              ))}
          </SelectBox>
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
