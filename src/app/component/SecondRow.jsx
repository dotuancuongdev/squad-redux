"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import CardSquad from "./CardSquad";
import axios from "axios";
import useSWR from "swr";
import { setProducts } from "@/lib/squadsList/squadSlice";
const fetcher = (url) => axios.get(url).then((res) => res.data);

const FirstRow = () => {
  const mySquads = useAppSelector((s) => s.squad);
  const dispatch = useAppDispatch();

  const { isLoading } = useSWR(
    "https://appropriate-kristin-dotuancuongdev-f1cd16f6.koyeb.app/api/products/commerce?pageSize=4&pageNumber=10",
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
  return <>{renderSquadsList()}</>;
};

export default FirstRow;
