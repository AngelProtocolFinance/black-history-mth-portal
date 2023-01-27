import { Keplr } from "types";
export interface Dwindow extends Window {
  xfi?: {
    ethereum?: { isMetaMask?: boolean };
  };
  ethereum?: any;
  BinanceChain?: any;
  keplr?: Keplr;
}
