import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/Button/Button";
import { Form } from "../../components/common/Form/Form";
import { FormInput } from "../../components/common/FormInput/FormInput";
import { SelectBox } from "../../components/common/FormInput/SelectBox";
import { Textarea } from "../../components/common/FormInput/Textarea";
import { Heading } from "../../components/common/Heading/Heading";

export const AddProduct = () => {
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
                />
                <FormInput
                  label="Category Picture"
                  type="file"
                  name="picture"
                  placeholder="product picture"
                />
                <SelectBox label="Select Brand" name="brand">
                  <option value="1" className="capitalize">
                    select
                  </option>
                  <option value="2" className="capitalize">
                    Apple
                  </option>
                  <option value="3" className="capitalize">
                    Dell
                  </option>
                  <option value="4" className="capitalize">
                    Hp
                  </option>
                </SelectBox>

                <SelectBox label="Select Category" name="category">
                  <option value="1" className="capitalize">
                    select
                  </option>
                  <option value="2" className="capitalize">
                    Mobile
                  </option>
                  <option value="3" className="capitalize">
                    Tv
                  </option>
                  <option value="4" className="capitalize">
                    Headphone
                  </option>
                </SelectBox>
              </div>
              <div>
                <FormInput
                  label="Product Price"
                  type="number"
                  name="price"
                  placeholder="product price"
                />
                <FormInput
                  label="Stock"
                  type="number"
                  name="stock"
                  placeholder="product stock"
                />

                <Textarea
                  label="Description"
                  name="description"
                  placeholder="product description"
                />

                <Button name="Add Product" className="w-full" />
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};
