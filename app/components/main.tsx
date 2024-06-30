"use client";

import { FaEthereum, FaSearchengin, FaPerson } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useMoralis, useWeb3Contract } from "react-moralis";
import addresses from "../../constants/contractAddresses.json";
import abi from "../../constants/abi.json";

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

  const contractAddy = chainId
    ? address[parseInt(chainId).toString()]["dappcord"][0]
    : null;

  const loadBlockchainData = async () => {
    const arr: any[] = [];
    const provider = new ethers.providers.Web3Provider(web3!.provider);

    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddy!, abi, provider);
    const totalChannels = await dappcord.totalChannels()


    for (let i = 1; i <= totalChannels; i++) {
      const res = await contract.getChannels(i);
      arr.push(res);
    }

    setDappcord(contract);
    setChannels(arr);
  };

  useEffect(() => {
    if (isWeb3Enabled) {
      loadBlockchainData();
    }
  }, [isWeb3Enabled]);

  console.log(channels);
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

        <div className="flex flex-col items-start bg-zinc-900 w-[25%] h-full font-semibold text-neutral-700 gap-y-8 pt-4 text-sm">
          <div className="flex gap-y-1 p-2 flex-col">
            <h3
              className="uppercase 
             tracking-tighter"
            >
              text channels
            </h3>

            {channels.length > 0 && (
              <div className="pl-3 space-y-1">
                {channels.map((channel, index) => {
                  return <h3 key={index}>{channel.cost.toString()}</h3>;
                })}
              </div>
            )}
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
