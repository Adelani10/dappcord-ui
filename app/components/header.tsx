"use client"

import { ConnectButton } from "web3uikit";

export default function Header() {
  return (
    <nav className="bg-gray-900">
      <div className="flex items-center justify-between py-4 container mx-auto">
        <div>
          <h1 className="text-2xl">Dappcord</h1>
        </div>
        <div>
          <ConnectButton moralisAuth={false} />
        </div>
      </div>
    </nav>
  );
}
