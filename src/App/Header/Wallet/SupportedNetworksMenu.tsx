import { Popover } from "@headlessui/react";
import Icon from "components/Icon";
import { chains } from "constants/chains";
import { ConnectedWallet } from "contexts/WalletContext";

export default function SupportedNetworksMenu(wallet: ConnectedWallet) {
  return (
    <Popover className="relative">
      <Popover.Button className="text-sm bg-white py-2 px-3 rounded-md flex gap-2 items-center text-red">
        <Icon type="warning" size={20} />
        <span>Unsupported network</span>
      </Popover.Button>

      <Popover.Panel className="absolute z-10 w-full bg-white dark:bg-blue-d7 border border-prim mt-2 rounded-md px-3 py-2">
        <p className="text-sm font-bold text-blue uppercase">
          Supported networks
        </p>
        {/** show only chain with the same type, if type="evm" give ability to switch */}
        <ul className="list-disc my-4 pl-4">
          {Object.entries(chains).map(([, chain]) => (
            <li key={chain.name} className="text-sm p-0.5">
              {chain.name}
            </li>
          ))}
        </ul>
        <button
          className="uppercase text-sm font-extrabold hover:text-orange hover:dark:text-orange-l2 text-right w-full"
          onClick={wallet.disconnect}
        >
          Disconnect
        </button>
      </Popover.Panel>
    </Popover>
  );
}
