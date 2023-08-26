import React, { useState } from "react";
import { setTitle } from "../../../utils/setTitle";
import { RelatedProduct } from "./RelatedProduct";

export const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  
  //set ppage title
  setTitle("Product Details");
  return (
    <div className="container mx-auto my-7 px-2 sm:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <img
            src="https://media.istockphoto.com/id/1175355990/photo/stylish-blue-headphones-on-multi-colored-duo-tone-background-lighting.jpg?s=612x612&w=0&k=20&c=KV7myS20KOzfgRk8CYFSq0y31Sgcu2MLP5zCH1MpLYI="
            alt="product"
            className="rounded-md"
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            repellendus?
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            voluptas! Consequuntur, labore! In nobis fugiat tempore nemo
            laborum, at earum? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Incidunt, ipsum, qui eaque velit totam est dolore
            voluptates excepturi beatae sequi atque accusantium aperiam tenetur
            eligendi aut laudantium suscipit? Quos, est.
          </p>
          <p className="font-medium text-green-600">start</p>
          <div className="flex justify-between items-center">
            <p className="font-medium">Price: $100</p>
            <div className="flex items-center">
              <p className="font-medium">Quantity:</p>
              <div className="flex bg-green-600 ml-3 rounded-md overflow-hidden">
                <button
                  disabled={quantity <= 1}
                  className="bg-green-900 text-white py-1 px-3"
                  onClick={() => setQuantity((pre) => pre - 1)}
                >
                  {" "}
                  -{" "}
                </button>
                <input
                  type="number"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className=" w-14 bg-transparent text-gray-100 font-normal text-2xl text-center focus:outline-none"
                />
                <button
                  className="bg-green-900 text-white py-1 px-3"
                  onClick={() => setQuantity((pre) => pre + 1)}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>
          <button className="py-2 px-5 bg-green-800 text-white rounded-md hover:bg-green-600 duration-100 ease-linear">
            Add To Cart
          </button>
        </div>
      </div>
      <RelatedProduct />
    </div>
  );
};
