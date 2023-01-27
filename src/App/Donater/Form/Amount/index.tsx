import { ErrorMessage } from "@hookform/error-message";
import KadoModal from "components/KadoModal";
import { useModalContext } from "contexts/ModalContext";
import { useFormContext } from "react-hook-form";
import { FormValues as FV } from "../../types";

import Balance from "./Balance";

export default function Amount() {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<FV>();

  const { showModal } = useModalContext();

  return (
    <div className="grid mt-4 mb-8 relative">
      <div className="flex items-center mb-1">
        <label
          htmlFor="amount"
          className="text-lg font-extrabold font-heading uppercase mr-auto"
        >
          Amount
        </label>
        <Balance />
        <button
          type="button"
          onClick={() => showModal(KadoModal, {})}
          className="text-xs text-orange uppercase text-heading hover:text-orange-l2 ml-2"
        >
          buy crypto
        </button>
      </div>

      <input
        {...register("amount")}
        autoComplete="off"
        id="amount"
        type="text"
        placeholder="0.0000"
        disabled={isSubmitting}
        className="p-3 bg-orange-l6 dark:bg-blue-d7 rounded w-full border border-prim focus:outline-none focus:border-gray-d2 focus:dark:border-blue disabled:bg-gray-l2 disabled:dark:bg-bluegray-d1"
      />

      <ErrorMessage
        errors={errors}
        name="amount"
        as="p"
        className="text-red dark:text-red-l2 text-xs text-left my-1 absolute -bottom-6"
      />
    </div>
  );
}
