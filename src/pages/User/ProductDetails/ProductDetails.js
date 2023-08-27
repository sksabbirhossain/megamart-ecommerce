import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductDetailsSkeleton } from "../../../components/ui/ProductDetailsSkeleton";
import { addToCart } from "../../../features/cart/addToCartSlice";
import { useGetProductQuery } from "../../../features/product/productApi";
import { setTitle } from "../../../utils/setTitle";
import { RelatedProduct } from "./RelatedProduct";

export const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

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

  const {  name, picture, price, category, description } = product || {};

  const categoryId = category?._id;

  //add to cart
  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    toast.success("Product Add To Cart");
  };

  //set ppage title
  setTitle("Product Details");
  return (
    <div className="container mx-auto my-7 px-2 sm:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/uploads/${picture}`}
            alt="product"
            className="rounded-md"
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-xl font-medium">{name}</h1>
          <p className="text-sm">{description}</p>
          <p className="font-medium text-green-600">start</p>
          <div className="flex justify-between items-center">
            <p className="font-medium">Price: ${price}</p>
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
          <button
            className="py-2 px-5 bg-green-800 text-white rounded-md hover:bg-green-600 duration-100 ease-linear"
            onClick={() => addToCartHandler(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <RelatedProduct categoryId={categoryId} />
    </div>
  );
};
