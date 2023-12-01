import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../components/common/Button/Button";
import { Form } from "../../../components/common/Form/Form";
import { FormInput } from "../../../components/common/FormInput/FormInput";
import { SelectBox } from "../../../components/common/FormInput/SelectBox";
import { Textarea } from "../../../components/common/FormInput/Textarea";
import { Heading } from "../../../components/common/Heading/Heading";
import { Error } from "../../../components/ui/Error";
import { useGetAllBrandsQuery } from "../../../features/brand/brandApi";
import { useGetCategoriesByBrandQuery } from "../../../features/category/categoryApi";
import { useAddProductMutation } from "../../../features/product/productApi";
import { setTitle } from "../../../utils/setTitle";

export const AddProduct = () => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [stock, setStock] = useState(null);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [brandCheck, setBrandCkeck] = useState(false);

  const navigate = useNavigate();

  //get all brands
  const { data: brands, isLoading: brandFetchLoading } = useGetAllBrandsQuery();

  //get categories by brnad Id
  const { data: categories, isLoading: categoryFetchLoading } =
    useGetCategoriesByBrandQuery(brand, {
      skip: !brandCheck,
    });

  //add product api
  const [addProduct, { isLoading: resLoading, isSuccess, error: resError }] =
    useAddProductMutation();

  //set brand info and call get category by brand Id
  const setBrandHandler = (value) => {
    setBrand(value);
    setBrandCkeck(true);
  };

  useEffect(() => {
    setError("");
    if (!resLoading && isSuccess) {
      toast.success("Product Added SuccessFull");
      return navigate("/admin/all-products");
    }
    if (resError?.error) {
      setError(resError.error);
    }
    if (resError?.status === 500) {
      setError("Internal Server Error");
    }
  }, [resLoading, isSuccess, resError, navigate]);

  //submit form for add product
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("picture", picture);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("brand", brand);
    formData.append("category", category);
    addProduct(formData);
  };

  //set page title
  setTitle("Add a new product");

  return (
    <section>
      <Heading title="Add Product" />
      <div className="flex justify-end shadow-sm py-2 rounded-md">
        <Link
          to="/admin/all-products"
          className=" bg-green-600 px-2 mr-1 py-1 uppercase rounded-md text-gray-50 font-normal"
        >
          All Products
        </Link>
      </div>

      <div className=" mt-4 w-full flex justify-center py-2 sm:py-9 px-2 sm:shadow-md rounded-md">
        <div className=" w-full bg-gray-50 shadow-md p-1 py-5 rounded-md">
          <Form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <FormInput
                  label="Product Name"
                  type="text"
                  name="name"
                  placeholder="product name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormInput
                  label="Product Picture"
                  type="file"
                  name="picture"
                  placeholder="product picture"
                  onChange={(e) => setPicture(e.target.files[0])}
                />
                <SelectBox
                  label="Select Brand"
                  name="brand"
                  onChange={(e) => setBrandHandler(e.target.value)}
                >
                  <option value="1" className="capitalize">
                    select
                  </option>
                  {!brandFetchLoading &&
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

                <SelectBox
                  label="Select Category"
                  name="category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="1" className="capitalize">
                    select
                  </option>
                  {!categoryFetchLoading &&
                    categories?.map((category) => (
                      <option
                        value={category._id}
                        className="capitalize"
                        key={category._id}
                      >
                        {category.name}
                      </option>
                    ))}
                </SelectBox>
              </div>
              <div>
                <FormInput
                  label="Product Price"
                  type="number"
                  name="price"
                  placeholder="product price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
                <FormInput
                  label="Stock"
                  type="number"
                  name="stock"
                  placeholder="product stock"
                  value={stock}
                  onChange={(e) => setStock(Number(e.target.value))}
                />

                <Textarea
                  label="Description"
                  name="description"
                  placeholder="product description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <Button
                  name={resLoading ? "loading.." : "Add Product"}
                  className="w-full"
                  disabled={resLoading}
                />
              </div>
            </div>
          </Form>
          {error !== "" && <Error error={error} />}
        </div>
      </div>
    </section>
  );
};
