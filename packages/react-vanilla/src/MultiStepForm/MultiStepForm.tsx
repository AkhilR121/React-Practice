import { FormEvent } from "react";
import { useImmer } from "use-immer";
import { AccountForm } from "./AccountForm";
import { useMultiStepForm } from "./UseMultiStepForm";
import { UserAddress } from "./UserAddressFrom";
import { UserForm } from "./UserForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const initialState = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};
export function MultiStepForm() {
  const [userData, setUserData] = useImmer(initialState);
  const { steps, currStep, step, back, next } = useMultiStepForm([
    <UserForm {...userData} updateFields={updateFields} />,
    <UserAddress {...userData} updateFields={updateFields} />,
    <AccountForm {...userData} updateFields={updateFields} />,
  ]);

  function updateFields(fields: Partial<FormData>) {
    setUserData(prev => {
      return {
        ...prev,
        ...fields,
      };
    });
  }
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }

  return (
    <div className="flex h-screen items-center justify-center border-2">
      <form onSubmit={onSubmit} className="[&>*]:m-5">
        <div className="flex justify-end">
          {currStep + 1} of {steps.length}
        </div>
        {step}
        <div className="flex justify-between">
          {currStep !== 0 && (
            <button type="button" onClick={back} className="border-2 p-2">
              Back
            </button>
          )}

          <button type="button" onClick={next} className="border-2 p-2">
            {currStep !== steps.length - 1 ? "Next" : "Finish"}
          </button>
        </div>
      </form>
    </div>
  );
}
