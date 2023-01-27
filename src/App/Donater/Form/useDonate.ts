import { ap_wallets } from "constants/constants";
import { ethers } from "ethers";
import { scaleToStr } from "helpers/decimal";
import { useFormContext, SubmitHandler } from "react-hook-form";
import ERC20Abi from "abi/ERC20.json";
import { FormValues as FV } from "../types";
import { useModalContext } from "contexts/ModalContext";
import Prompt from "components/Prompt";
import {
  TerraCoin,
  MsgExecuteContract,
  MsgSend,
  MsgExecuteContractEncodeObject,
  MsgSendEncodeObject,
  TransactionRequest,
  TransactionResponse,
} from "types";

import { ConnectedWallet } from "contexts/WalletContext";
import { useDonationLogMutation } from "services/apes";
import { useConnectedWallet } from "contexts/WalletGuard";

export default function useDonate() {
  const {
    resetField,
    handleSubmit,
    formState: { isSubmitting, isValidating },
  } = useFormContext<FV>();

  const { showModal } = useModalContext();
  const [saveDonation] = useDonationLogMutation();
  const wallet = useConnectedWallet();

  const submit: SubmitHandler<FV> = async ({ coin, amount }) => {
    showModal(
      Prompt,
      { message: "Sending transaction" },
      { isDismissible: false }
    );

    const result = await sendTx(coin, amount, wallet);
    if (result) {
      const { hash } = result;

      showModal(
        Prompt,
        { message: "Saving donation details.." },
        { isDismissible: false }
      );

      const res = await saveDonation({
        transactionId: hash,
        chainId: wallet.chainId,
        walletAddress: wallet.address,
        denomination: coin.symbol,
        amount: +amount,
      });

      if ("error" in res)
        return showModal(Prompt, {
          tx: { hash, chainId: wallet.chainId },
          message:
            "Transaction has been submitted but was not saved for receipt purposes. Kindly contact support@angelprotocol.io",
        });

      showModal(Prompt, {
        message: "Thank you for your donation!",
        tx: { hash, chainId: wallet.chainId },
        shareable: true,
      });
    } else {
      showModal(Prompt, { message: "Transaction failed" });
    }
    /** reset ammount */
    resetField("amount");
  };

  return { submit: handleSubmit(submit), isSubmitting, isValidating };
}

async function sendTx(
  coin: FV["coin"],
  _amount: string,
  wallet: ConnectedWallet
): Promise<{ hash: string } | null> {
  try {
    if (wallet.type === "terra") {
      let msg: MsgSend | MsgExecuteContract;
      const scaledAmount = scaleToStr(_amount, coin.decimals);
      const recipient = ap_wallets.terra;
      if (coin.type === "terra-native" || coin.type === "ibc") {
        msg = new MsgSend(wallet.address, recipient, [
          new TerraCoin(coin.token_id, scaledAmount),
        ]);
        /** cw20 */
      } else {
        msg = new MsgExecuteContract(wallet.address, coin.token_id, {
          transfer: {
            amount: scaledAmount,
            recipient: recipient,
          },
        });
      }
      const { success, result } = await wallet.post({ msgs: [msg] });
      return success ? { hash: result.txhash } : null;
    } else if (wallet.type === "cosmos") {
      const encoder = new TextEncoder();
      const scaledAmount = scaleToStr(_amount, coin.decimals);
      const recipient = ap_wallets.junoDeposit;
      let msg: MsgSendEncodeObject | MsgExecuteContractEncodeObject =
        coin.type == "ibc" || coin.type === "juno-native"
          ? {
              typeUrl: "/cosmos.bank.v1beta1.MsgSend",
              value: {
                fromAddress: wallet.address,
                toAddress: recipient,
                amount: [
                  {
                    denom: coin.token_id,
                    amount: scaledAmount,
                  },
                ],
              },
            }
          : /** cw20 */
            {
              typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
              value: {
                contract: coin.token_id,
                sender: wallet.address,
                msg: encoder.encode(
                  JSON.stringify({
                    transfer: {
                      amount: scaledAmount,
                      recipient: recipient,
                    },
                  })
                ),
              },
            };

      const response = await wallet.post(wallet.address, [msg], "auto");
      return !response.code ? { hash: response.transactionHash } : null;
      /** evm tx */
    } else {
      const scaledAmount = ethers.utils.parseUnits(`${_amount}`, coin.decimals);
      const recipient = ap_wallets.eth;

      const tx: TransactionRequest = {
        from: wallet.address,
        to: recipient,
        value: scaledAmount,
      };
      let res: TransactionResponse;
      if (coin.type === "evm-native") {
        res = await wallet.signer.sendTransaction(tx);
      } else {
        const ER20Contract: any = new ethers.Contract(
          coin.token_id,
          ERC20Abi,
          wallet.signer
        );
        res = await ER20Contract.transfer(tx.to, tx.value);
      }
      return { hash: res.hash };
    }
  } catch (err) {
    console.log(err);
    return null;
  }
}
