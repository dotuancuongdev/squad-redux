import React from "react";
import Image from "next/image";

const CardSquad = ({ item, idx }) => {
  return (
    <div className="rounded-[10px] bg-[#1a1a27] border-zinc-600 border-[1px] ">
      <div className=" relative rounded-t-[10px]">
        <img
          src={item.thumbnail}
          alt=""
          className=" w-full h-[92px] object-cover rounded-t-[10px]"
        />
        <div className="w-full absolute top-1/2 flex justify-center">
          <div className="h-auto">
            <img
              src={item.thumbnail}
              alt="avata"
              width={96}
              height={96}
              className="aspect-square rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="mt-10">
          <p className="text-base font-semibold text-center">{item.name}</p>
          <div className="flex gap-1 justify-center">
            <p className="text-xs font-medium text-[#807E98]">Squad founder</p>
            <p className="text-xs font-medium text-[#BCBBCA]">
              0x7241...5b3097
            </p>
          </div>
        </div>
        <div className="bg-[#303041] rounded-[10px] flex flex-col gap-3 py-3 mt-10">
          <div className="flex justify-center gap-1">
            <Image
              src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728975909/jcgohfsh3onkvn8smvfc.svg"
              alt="dolar icon"
              width={16}
              height={16}
              className="text-[#BCBBCA]"
            />
            <p className="text-xs font-semibold text-[#BCBBCA]">
              Total deposit
            </p>
          </div>
          <p className="text-xl font-semibold text-center">$ {item.price}</p>
        </div>
        <div className="flex gap-[6px] justify-center mt-10">
          <Image
            src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728975909/jcgohfsh3onkvn8smvfc.svg"
            alt="members"
            width={16}
            height={16}
          />
          <p className="text-xs font-normal">{item.stock} members</p>
        </div>
        <div className="flex justify-center mt-10">
          {idx % 2 === 0 ? (
            <button type="primary" className={`bg-[#3a3a59] px-4 py-[20px]`}>
              <p>Enter squad</p>
              <Image
                src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1729054210/hzx6hcg3uokh6yv5mgu3.svg"
                alt="logo"
                width={16}
                height={16}
              />
            </button>
          ) : (
            <button type="primary" className={`bg-[#6966FF] px-11 py-[20px]`}>
              <p>Join</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSquad;
