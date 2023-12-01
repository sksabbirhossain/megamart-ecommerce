import React from "react";
import { toast } from "react-hot-toast";
import {
  FaCashRegister,
  FaChair,
  FaRegHeart,
  FaSearchLocation,
  FaShareAlt,
  FaSlack,
  FaStar,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ProductDetailsSkeleton } from "../../../components/ui/ProductDetailsSkeleton";
import { addToCart } from "../../../features/cart/addToCartSlice";
import { useGetProductQuery } from "../../../features/product/productApi";
import { setTitle } from "../../../utils/setTitle";
import { RelatedProduct } from "./RelatedProduct";

export const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const rating = 5;
  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
  } = useGetProductQuery(productId);

  if (isLoading)
    return (
      <>
        <ProductDetailsSkeleton />
      </>
    );

  if (!isLoading && isError)
    return (
      <h3 className=" uppercase font-medium text-red-600">
        something went wrong!
      </h3>
    );

  if (!isError && !isLoading && isSuccess && product?.length === 0)
    return (
      <p className="text-center uppercase font-medium">No Product found!</p>
    );

  const { name, picture, price, category, description } = product || {};

  const categoryId = category?._id;

  //add to cart
  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    toast.success("Product Add To Cart");
  };

  //set ppage title
  setTitle(`${name} - Product Details`);
  return (
    <div className="container mx-auto my-7 px-2 space-y-5 sm:px-0">
      <div className="grid grid-cols-1  md:grid-cols-12 gap-6  bg-white rounded-md">
        {/* product imgaes */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 p-3">
          <img src={picture} alt="product" className="rounded-md" />
        </div>

        {/* product details */}
        <div className="col-span-12 md:col-span-6 p-3 lg:col-span-5 space-y-3">
          <h1 className="text-xl font-medium">{name}</h1>

          <div className="flex justify-between items-center border-b-2 pb-2">
            <div className="space-y-2">
              <p className="flex items-center text-sm font-thin space-x-2">
                <span className="flex items-center text-orange-600">
                  {Array(rating)
                    .fill()
                    .map((i) => (
                      <FaStar />
                    ))}
                </span>
                <span className="text-green-800 hover:underline hover:cursor-pointer">
                  {" "}
                  {rating} Ratings
                </span>
                <span>|</span>
                <span className="text-green-800 hover:underline hover:cursor-pointer">
                  6 Answered Questions
                </span>
              </p>
              <p className="flex items-center text-sm font-thin space-x-2">
                <p className="text-green-800">
                  <span className="text-gray-600">Brand:</span> {"HP"}
                </p>
                <span>|</span>
                <span className="text-green-800 hover:underline hover:cursor-pointer">
                  <Link to="/">More Men from No Brand</Link>
                </span>
              </p>
            </div>

            <div className="flex items-center space-x-6 text-xl text-gray-800">
              <span className="cursor-pointer hover:text-orange-600 duration-200 ease-out">
                <FaShareAlt />
              </span>
              <span className="cursor-pointer hover:text-orange-600 duration-200 ease-out">
                <FaRegHeart />
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-medium flex items-center">
              Price:
              <span className="text-orange-600 text-3xl font-semibold pl-2">
                ${price}
              </span>
              <span className="ml-5 text-gray-500 line-through">$2000</span>
            </p>
            {/* <div className="flex items-center">
              <p className="font-medium">Quantity:</p>
              <div className="flex bg-green-700 rounded-md overflow-hidden">
                <button
                  disabled={qty <= 1}
                  className="bg-green-900 text-white py-1 px-3"
                  onClick={() => decreaseProductQtyHandler(_id)}
                >
                  {" "}
                  -{" "}
                </button>
                <span className=" w-10 bg-transparent text-gray-100 font-normal text-2xl text-center focus:outline-none">
                  {qty}
                </span>
                <button
                  className="bg-green-900 text-white py-1 px-3"
                  onClick={() => increaseProductQtyHandler(_id)}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div> */}
          </div>

          {/* button for add to cart */}
          <div className="flex gap-5 pt-5">
            <button
              className="hover:bg-white duration-200 ease-linear bg-orange-600 hover:text-orange-600 text-white border border-orange-600 w-full rounded-md py-1"
              onClick={() => addToCartHandler(product)}
            >
              Add To Cart
            </button>
            <button
              className="bg-white duration-200 ease-linear hover:bg-orange-600 text-orange-600 hover:text-white border border-orange-600 w-full rounded-md py-1"
              onClick={() => addToCartHandler(product)}
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* extra informations */}
        <div className="col-span-12 md:col-span-5 lg:col-span-3 p-3 bg-gray-50 rounded-tr-md rounded-br-md overflow-hidden">
          {/* delivery */}
          <div>
            <div className="pb-2">
              <p className="text-sm text-gray-500">Delivery</p>
            </div>
            <div className="flex space-x-2">
              <p className="text-xl mt-2 text-gray-600">
                <FaSearchLocation />
              </p>
              <div className="flex justify-between items-center">
                <p className="leading-5">
                  Dhaka, Dhaka North, Banani Road No. 12 - 19
                </p>
                <p className="uppercase text-sm text-green-700 font-medium cursor-pointer">
                  change
                </p>
              </div>
            </div>
            <p className="pt-2 border-b-2" />

            <div className="py-3 space-y-3">
              <div className="flex justify-between space-x-2">
                <p className="text-xl mt-2 text-gray-600">
                  <FaCashRegister />
                </p>
                <p className="font-medium">
                  Standard Delivery{" "}
                  <span className="text-sm text-gray-600 font-normal">
                    11 Sep - 18 Sep 7 - 14 day(s)
                  </span>
                </p>
                <p className="font-medium">$55</p>
              </div>
              <div className="flex space-x-2">
                <p className="text-xl mt-1 text-gray-600">
                  <FaCashRegister />
                </p>
                <p className="font-normal">Cash on Delivery Available</p>
              </div>
              <p className="pt-2 border-b-2" />
            </div>
          </div>
          {/* services */}
          <div className="space-y-3">
            <div className="">
              <p className="text-sm text-gray-500">Delivery</p>
            </div>
            <div className="flex space-x-2">
              <p className="text-xl mt-1 text-gray-600">
                <FaChair />
              </p>
              <div>
                <p className="font-medium">7 Days Returns</p>
                <p className="font-thin text-sm text-gray-600">
                  Change of mind is not applicable
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <p className="text-xl mt-1 text-gray-600">
                <FaSlack />
              </p>
              <p className="font-medium">Warranty not available</p>
            </div>

            <p className="pt-2 border-b-2" />
          </div>
        </div>
      </div>

      {/* product description */}
      <div className=" bg-white rounded-md p-3 space-y-2">
        <p className="text-1xl font-medium">Product details of {name}</p>
        <p className="text-sm">{description}</p>
      </div>
      <RelatedProduct categoryId={categoryId} />
    </div>
  );
};
