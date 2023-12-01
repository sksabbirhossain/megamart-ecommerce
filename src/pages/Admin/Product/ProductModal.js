import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "../../../components/common/Button/Button";
import { Form } from "../../../components/common/Form/Form";
import { FormInput } from "../../../components/common/FormInput/FormInput";
import { SelectBox } from "../../../components/common/FormInput/SelectBox";
import { Textarea } from "../../../components/common/FormInput/Textarea";
import { Error } from "../../../components/ui/Error";
import { useGetAllBrandsQuery } from "../../../features/brand/brandApi";
import { useGetCategoriesByBrandQuery } from "../../../features/category/categoryApi";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../../features/product/productApi";

export const ProductModal = ({ closeModal, productId }) => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [stock, setStock] = useState(null);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [brandCheck, setBrandCkeck] = useState(false);

  //get product by productId
  const {
    data: product,
    isLoading: productLoading,
    isSuccess: productIsSuccess,
  } = useGetProductQuery(productId);

  //get all brands
  const { data: brands, isLoading: brandFetchLoading } = useGetAllBrandsQuery();

  //get categories by brnad Id
  const { data: categories, isLoading: categoryFetchLoading } =
    useGetCategoriesByBrandQuery(brand, {
      skip: !brandCheck,
    });

  //update product api
  const [updateProduct, { isLoading: resLoading, isSuccess, error: resError }] =
    useUpdateProductMutation();

  //set old product data
  useEffect(() => {
    if (!productLoading && productIsSuccess) {
      const { name, price, stock, brand, category, description } = product;
      setName(name);
      setPrice(price);
      setStock(stock);
      setDescription(description);
      setBrand(brand?._id);
      setCategory(category?._id);
    }
  }, [productLoading, productIsSuccess, product]);

  //set brand info and call get category by brand Id
  const setBrandHandler = (value) => {
    setBrand(value);
    setBrandCkeck(true);
  };

  useEffect(() => {
    setError("");
    if (!resLoading && isSuccess) {
      toast.success("Product Update SuccessFull");
      return closeModal(false);
    }
    if (resError?.error) {
      setError(resError.error);
    }
    if (resError?.status === 500) {
      setError("Internal Server Error");
    }
  }, [resLoading, isSuccess, resError, closeModal]);

  //handle update submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("brand", brand);
    formData.append("category", category);
    if (picture) {
      formData.append("picture", picture);
    }
    updateProduct({ productId, data: formData });
  };

  return (
    <section>
      <div className="absolute top-0 left-0 w-screen min-h-full h-auto z-50 flex justify-center items-center bg-black/50">
        <div className=" w-full flex justify-center py-2 sm:py-9 px-2 sm:shadow-md rounded-md">
          <div className=" w-full bg-gray-50 shadow-md p-5 rounded-md">
            <div className="flex justify-between items-center mb-4 ">
              <p className="text-xl font-normal capitalize">Update Product</p>
              <button
                className="bg-red-400 rounded-md px-2 text-white"
                onClick={() => closeModal(false)}
              >
                X
              </button>
            </div>
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
                    <option value={product?.brand?._id} className="capitalize">
                      {product?.brand?.name}
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
                    <option
                      value={product?.category?._id}
                      className="capitalize"
                    >
                      {product?.category?.name}
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

                  <Button name="Add Product" className="w-full" />
                </div>
              </div>
            </Form>
            {error !== "" && <Error error={error} />}
          </div>
        </div>
      </div>
    </section>
  );
};
