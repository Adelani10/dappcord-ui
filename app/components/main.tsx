"use client";

import { FaEthereum } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const icons = [<FaEthereum />, <FaPlus />, <FaSearchengin />];

export default function Main() {
  // <FaPerson />
  return (
    <section className="h-full">
      <div className="flex h-full">
        <div className="h-full bg-gray-800 flex flex-col gap-y-6 items-center pt-6 w-[13%]">
          {icons.map((icon, index) => {
            return (
              <button
                className="h-12 w-12 bg-gray-700 flex items-center justify-center text-xl rounded-full"
                key={index}
              >
                {icon}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col items-start bg--900 w-[25%] h-full font-semibold text-neutral-700 gap-y-8 pt-4 text-sm">
          <div className="flex gap-y-1 p-2 flex-col">
            <h3
              className="uppercase 
             tracking-tighter"
            >
              text channels
            </h3>
            <div className="pl-3 space-y-1">
              <h3>general</h3>
              <h3>intro</h3>
              <h3>jobs</h3>
            </div>
          </div>

          <div className="flex gap-y-1 p-2 flex-col">
            <h3 className="uppercase tracking-tighter">voice channels</h3>
            <div className="pl-3 space-y-1">
              <h3>channel 1</h3>
              <h3>channel 2</h3>
              <h3>channel 3</h3>
            </div>
          </div>
        </div>

        <div className="w-full p-3">
          <form action="" className="w-full h-12 rounded-lg bg-gray-700 flex justify-between">
            <input type="text" className="w-full rounded-lg h-full bg-gray-700" value="" />
            <button type="submit" className="text-2xl">
              <IoIosSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
