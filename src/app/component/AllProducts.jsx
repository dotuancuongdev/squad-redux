"use client";
import { React, useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import CardSquad from "./CardSquad";
import axios from "axios";
import useSWR from "swr";
import { setProducts } from "@/lib/squadsList/squadSlice";
const fetcher = (url) => axios.get(url).then((res) => res.data);

const AllProducts = () => {
  const mySquads = useAppSelector((s) => s.squad);
  const dispatch = useAppDispatch();

  const { isLoading } = useSWR(
    "https://appropriate-kristin-dotuancuongdev-f1cd16f6.koyeb.app/api/products/commerce?pageSize=8&pageNumber=1",
    fetcher,

    {
      onSuccess: (data) => {
        dispatch(setProducts(data));
      },
    },
    {
      revalidateOnFocus: false,
    }
  );

  const squadsList = mySquads.productList.items;
  const renderSquadsList = () => {
    if (isLoading) return <p className="text-white">Loading dataaa</p>;
    return (
      <div className="mx-auto my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {squadsList?.map((item, idx) => (
          <CardSquad key={item._id} item={item} idx={idx} />
        ))}
      </div>
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const rect = loadingIcon.current?.getBoundingClientRect();
      const isInViewport =
        rect?.top >= 0 &&
        rect?.left >= 0 &&
        rect?.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect?.right <=
          (window.innerWidth || document.documentElement.clientWidth);

      if (isInViewport) {
        // clearTimeout(isFetching.current);
        // isFetching.current = setTimeout(() => {
        //   setPageNumber((pageNumber) => {
        //     return pageNumber + 1;
        //   });
        // }, 500);
        console.log(1);
      }
    });
  }, []);
  const loadingIcon = useRef();
  const isFetching = useRef();

  return (
    <>
      {renderSquadsList()}
      <div className="w-full flex justify-center my-10" ref={loadingIcon}>
        <p>Loading more data</p>
      </div>
    </>
  );
};

export default AllProducts;
