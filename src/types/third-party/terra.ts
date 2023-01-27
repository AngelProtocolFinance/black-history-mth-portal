import { Coin } from "@terra-money/terra.js";

type CoinData = Coin.Data;

export type { CoinData };
export type {
  WalletControllerChainOptions,
  ConnectedWallet as TerraConnectedWallet,
  Installation as TerraInstallation,
  Connection as TerraConnection,
} from "@terra-money/wallet-provider";

export { ConnectType, WalletStatus } from "@terra-money/wallet-provider";
export { MsgExecuteContract, MsgSend, Dec } from "@terra-money/terra.js";
export { Coin as TerraCoin };
