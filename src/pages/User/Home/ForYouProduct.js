import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { ProductLoading } from "../../../components/ui/ProductLoading";
import { ContainerHeader } from "../../../components/user/ContainerHeader";
import { ProductCard } from "../../../components/user/ProductCard";
import {
  productApi,
  useGetProductsQuery,
} from "../../../features/product/productApi";

export const ForYouProduct = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();

  const { data, isLoading, isSuccess, isError } = useGetProductsQuery() || {};

  const { data: products, totalItems } = data || {};

  //get requrest for get more products
  useEffect(() => {
    if (page > 1) {
      dispatch(productApi.endpoints.getMoreProducts.initiate(page));
    }
  }, [dispatch, page]);

  //set hasMore true or false
  useEffect(() => {
    if (totalItems > 0) {
      const more =
        Math.ceil(totalItems / Number(process.env.REACT_APP_LIMIT_PER_PAGE)) >
        page;
      setHasMore(more);
    }
  }, [page, totalItems]);

  //fetch more products handler
  const getModeHandler = () => {
    setPage((prev) => prev + 1);
  };

  // decide what to render
  let content;

  if (isLoading) content = <ProductLoading />;

  if (!isLoading && isError)
    content = (
      <h3 className=" uppercase container font-medium text-red-600">
        something went wrong!
      </h3>
    );

  if (!isError && !isLoading && isSuccess && products?.length === 0)
    content = (
      <p className="text-center uppercase font-medium">No Product found!</p>
    );
  if (!isError && !isLoading && products?.length > 0)
    content = (
      <InfiniteScroll
        dataLength={products?.length}
        hasMore={hasMore}
        loader={<ProductLoading />}
        next={() => getModeHandler()}
      >
        <div className=" mb-7 grid gird-cols-1 justify-center xs:justify-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-5">
          {products.map((proudct) => (
            <ProductCard key={proudct._id} product={proudct} />
          ))}
        </div>
      </InfiniteScroll>
    );

  return (
    <div className="container mx-auto ">
      <ContainerHeader title="product for you!" />
      {content}
    </div>
  );
};
