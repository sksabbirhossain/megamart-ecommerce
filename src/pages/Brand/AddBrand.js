import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/Button/Button";
import { Form } from "../../components/common/Form/Form";
import { FormInput } from "../../components/common/FormInput/FormInput";
import { Heading } from "../../components/common/Heading/Heading";

export const AddBrand = () => {
  return (
    <section>
      <Heading title="Add Brand" />
      <div className="flex justify-end shadow-sm py-2 rounded-md">
        <Link
          to="/all-brands"
          className=" bg-green-600 px-2 mr-1 py-1 uppercase rounded-md text-gray-50 font-normal"
        >
          All Brands
        </Link>
      </div>
      <div className=" mt-4 w-full flex justify-center py-2 sm:py-9 px-2 sm:shadow-md rounded-md">
        <div className=" w-full max-w-[320px] bg-gray-50 shadow-md p-1 py-5 rounded-md">
          <Form>
            <FormInput
              label="Brand Name"
              type="text"
              name="name"
              placeholder="brand name"
            />
            <FormInput
              label="Brand Picture"
              type="file"
              name="picture"
              placeholder="brand picture"
            />
            <Button name="Add" className="w-full" />
          </Form>
        </div>
      </div>
    </section>
  );
};
