"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setTab, setProducts } from "../../lib/squadsList/squadSlice";
import AllProducts from "./AllProducts";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

const tabs = [
  { label: "All products", value: "all", content: <AllProducts /> },
  {
    label: "4 items first",
    value: "4-first",
    content: <FirstRow />,
  },
  {
    label: "4 items second",
    value: "4-second",
    content: <SecondRow />,
  },
];
const Squads = () => {
  const squad = useAppSelector((s) => s.squad);
  const dispatch = useAppDispatch();

  const changeTab = (value) => {
    dispatch(setTab(value));
    console.log(value);
  };

  return (
    <div className="mt-20">
      <div className="flex gap-5 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className="bg-blue-500 text-white rounded-md"
            onClick={() => {
              changeTab(tab.value);
            }}
          >
            <p className="px-4 py-3"> {tab.label}</p>
          </button>
        ))}
      </div>
      {tabs.find((t) => t.value === squad.currentTab)?.content}
    </div>
  );
};

export default Squads;
