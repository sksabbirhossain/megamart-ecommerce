import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/Button/Button";
import { Form } from "../../components/common/Form/Form";
import { FormInput } from "../../components/common/FormInput/FormInput";
import { SelectBox } from "../../components/common/FormInput/SelectBox";
import { Textarea } from "../../components/common/FormInput/Textarea";
import { Heading } from "../../components/common/Heading/Heading";
import { Error } from "../../components/ui/Error";
import { useGetAllBrandsQuery } from "../../features/brand/brandApi";
import { useGetCategoriesByBrandQuery } from "../../features/category/categoryApi";

export const AddProduct = () => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [brandCheck, setBrandCkeck] = useState(false);

  //get all brands
  const { data: brands, isLoading: brandFetchLoading } = useGetAllBrandsQuery();

  //get categories by brnad Id
  const { data: categories } = useGetCategoriesByBrandQuery(brand, {
    skip: !brandCheck,
  });

  //set brand info and call get category by brand Id
  const setBrandHandler = (value) => {
    setBrand(value);
    setBrandCkeck(true);
  };

  return (
    <section>
      <Heading title="Add Product" />
      <div className="flex justify-end shadow-sm py-2 rounded-md">
        <Link
          to="/all-products"
          className=" bg-green-600 px-2 mr-1 py-1 uppercase rounded-md text-gray-50 font-normal"
        >
          All Products
        </Link>
      </div>

      <div className=" mt-4 w-full flex justify-center py-2 sm:py-9 px-2 sm:shadow-md rounded-md">
        <div className=" w-full bg-gray-50 shadow-md p-1 py-5 rounded-md">
          <Form>
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
                  {categories?.map((category) => (
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
                  onChange={(e) => setPrice(e.target.value)}
                />
                <FormInput
                  label="Stock"
                  type="number"
                  name="stock"
                  placeholder="product stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
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
    </section>
  );
};
