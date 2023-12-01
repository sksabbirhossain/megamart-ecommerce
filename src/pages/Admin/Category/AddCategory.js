import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../components/common/Button/Button";
import { Form } from "../../../components/common/Form/Form";
import { FormInput } from "../../../components/common/FormInput/FormInput";
import { SelectBox } from "../../../components/common/FormInput/SelectBox";
import { Heading } from "../../../components/common/Heading/Heading";
import { Error } from "../../../components/ui/Error";
import { useGetAllBrandsQuery } from "../../../features/brand/brandApi";
import { useAddCategoryMutation } from "../../../features/category/categoryApi";

export const AddCategory = () => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState(null);
  const [brandInfo, setBrandInfo] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { data: brands, isLoading } = useGetAllBrandsQuery();
  const [addCategory, { isLoading: resLoading, isSuccess, error: resError }] =
    useAddCategoryMutation();

  useEffect(() => {
    setError("");
    if (!resLoading && !isLoading && isSuccess) {
      toast.success("Category Added SuccessFull");
      return navigate("/admin/all-categories");
    }
    if (resError?.error) {
      setError(resError.error);
    }
    if (resError?.status === 500) {
      setError("Internal Server Error");
    }
  }, [resLoading, isSuccess, isLoading, resError, navigate]);

  //submit formdata
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("picture", picture);
    formData.append("brandInfo", brandInfo);
    addCategory(formData);
  };

  return (
    <section>
      <Heading title="Add Category" />
      <div className="flex justify-end shadow-sm py-2 rounded-md">
        <Link
          to="/admin/all-categories"
          className=" bg-green-600 px-2 mr-1 py-1 uppercase rounded-md text-gray-50 font-normal"
        >
          All Categories
        </Link>
      </div>
      <div className=" mt-4 w-full flex justify-center py-2 sm:py-9 px-2 sm:shadow-md rounded-md">
        <div className=" w-full max-w-[320px] bg-gray-50 shadow-md p-1 py-5 rounded-md">
          <Form onSubmit={handleSubmit}>
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
              <option value="" className="capitalize">
                select
              </option>
              {!isLoading &&
                brands?.map((brand) => (
                  <option
                    value={brand._id}
                    className="capitalize"
                    key={brand._id}
                  >
                    {brand.name}
                  </option>
                ))}
            </SelectBox>
            
            <Button
              name={resLoading ? "loading.." : "Add Product"}
              className="w-full"
              disabled={resLoading}
            />
          </Form>
          {error !== "" && <Error error={error} />}
        </div>
      </div>
    </section>
  );
};
