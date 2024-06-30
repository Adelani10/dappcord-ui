"use client";

import { FaEthereum, FaSearchengin, FaPerson } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useMoralis, useWeb3Contract } from "react-moralis";
import addresses from "../../constants/contractAddresses.json";
import abi from "../../constants/abi.json";
import Channels from "./channels";
// import abi from "../../constants/abi.json"

const icons = [<FaEthereum />, <FaPlus />, <FaSearchengin />];

interface contractAddressesInterface {
  [key: string]: contractAddressesItemInterface;
}

interface contractAddressesItemInterface {
  [key: string]: string[];
}

export default function Main() {
  const [channels, setChannels] = useState<any[]>([]);
  const [dappcord, setDappcord] = useState<any>(null);
  const { chainId, account, isWeb3Enabled, web3 } = useMoralis();
  const address: contractAddressesInterface = addresses;

  const ABI: any = abi;

  const contractAddy = chainId
    ? address[parseInt(chainId).toString()]["dappcord"][0]
    : null;

    let xyz;

  const loadBlockchainData = async () => {
    const arr: any[] = [];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddy!, ABI, provider);
    setDappcord(contract);

    // const totalChannels = await dappcord.totalChannels();
    const owner= await dappcord.getOwner();
    xyz = owner
    

    for (let i = 1; i <= 3; i++) {
      const res = await dappcord.getChannels(i);
      arr.push(res);
    }

    setChannels(arr);
  };

  console.log(xyz)

  useEffect(() => {
    if (isWeb3Enabled) {
      loadBlockchainData(
    }
  }, [isWeb3Enabled]);

  // <FaPerson />
  return (
    <section className="h-full">
      <div className="flex h-full">
        <div className="h-full bg-zinc-800 flex flex-col gap-y-6 items-center pt-6 w-[13%]">
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

        <Channels channels={channels} />

        <div className="w-full p-3 flex flex-col-reverse">
          <form
            action=""
            className="w-full h-12 rounded-lg bg-gray-700 flex justify-between"
          >
            <input
              type="text"
              className="w-full rounded-lg h-full bg-gray-700"
              value=""
              onChange={() => console.log("yes")}
            />
            <button type="submit" className="text-2xl">
              <IoIosSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
