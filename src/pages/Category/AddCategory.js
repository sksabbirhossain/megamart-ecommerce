import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/Button/Button";
import { Form } from "../../components/common/Form/Form";
import { FormInput } from "../../components/common/FormInput/FormInput";
import { SelectBox } from "../../components/common/FormInput/SelectBox";
import { Heading } from "../../components/common/Heading/Heading";

export const AddCategory = () => {
  return (
    <section>
      <Heading title="Add Category" />
      <div className="flex justify-end shadow-sm py-2 rounded-md">
        <Link
          to="/all-categories"
          className=" bg-green-600 px-2 mr-1 py-1 uppercase rounded-md text-gray-50 font-normal"
        >
          All Categories
        </Link>
      </div>
      <div className=" mt-4 w-full flex justify-center py-2 sm:py-9 px-2 sm:shadow-md rounded-md">
        <div className=" w-full max-w-[320px] bg-gray-50 shadow-md p-1 py-5 rounded-md">
          <Form>
            <FormInput
              label="Category Name"
              type="text"
              name="name"
              placeholder="category name"
            />
            <FormInput
              label="Category Picture"
              type="file"
              name="picture"
              placeholder="category picture"
            />
            <SelectBox label="Select Brand">
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
            <Button name="Add" className="w-full" />
          </Form>
        </div>
      </div>
    </section>
  );
};
