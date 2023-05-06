"use client";

import getData from "@/services/getData";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Product from "./Product";

function Products() {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 0 }) => {
      console.log({ pageParam });
      return getData(`/products?limit=10&skip=${pageParam}`);
    },
    getNextPageParam: (lastPage, allPage) => {
      let nextSkip = lastPage.skip + lastPage.limit;

      return nextSkip === lastPage.total ? null : nextSkip;
    },
  });

  useEffect(() => {
    const handler = () => {
      if (
        window.innerHeight + window.scrollY + 1 >
        document.documentElement.scrollHeight
      ) {
        console.log("Next to bottom");
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [isFetchingNextPage, fetchNextPage, hasNextPage]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  let products = data?.pages.map((page) => page.products).flat();
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {products?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>

      {isFetchingNextPage && <div>isFetching ....</div>}

      {/* <div>
        <button
          onClick={() => fetchNextPage()}
          className="px-2 py-1.5 rounded border"
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading ..." : "Load More"}
        </button>
      </div> */}
    </div>
  );
}

export default Products;
