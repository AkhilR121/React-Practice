import { motion } from "framer-motion";
import { FormEvent } from "react";
import { AccountForm } from "./AccountForm";
import { useMultiStepForm } from "./UseMultiStepForm";
import { UserAddress } from "./UserAddressFrom";
import { UserForm } from "./UserForm";

export function MultiStepForm() {
  const { steps, currStep, step, back, next } = useMultiStepForm([
    <UserForm />,
    <UserAddress />,
    <AccountForm />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (currStep !== steps.length - 1) next();
    alert("Applied Successfully");
  }

  return (
    <div className="flex h-screen items-center justify-center border-2">
      <form
        onSubmit={onSubmit}
        className="relative h-[28rem] rounded-3xl bg-purple-600 shadow-2xl shadow-purple-600 [&>*]:m-5"
      >
        <div className="absolute bottom-5 left-[45%] text-xl font-bold">
          {currStep + 1} of {steps.length}
        </div>
        <div className="flex h-[20rem] w-[40rem] justify-center">{step}</div>
        <div className="relative text-lg font-semibold">
          {currStep !== 0 && (
            <motion.button
              whileTap={{ x: -10 }}
              type="button"
              onClick={back}
              className="absolute left-16 rounded-full border-2 p-4 px-7"
            >
              Back
            </motion.button>
          )}

          {currStep !== steps.length - 1 ? (
            <motion.button
              whileTap={{ x: 10 }}
              type="button"
              onClick={next}
              className="absolute right-16 rounded-full border-2 p-4 px-7"
            >
              Next
            </motion.button>
          ) : (
            <button
              type="submit"
              className="absolute right-16 rounded-full border-2 p-4 px-7"
            >
              Finish
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
