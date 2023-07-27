import { atom } from "jotai";
import { UserAccount } from "./AccountForm";
import { UserLocation } from "./UserAddressFrom";
import { UserProps } from "./UserForm";

export const initialUser: UserProps = {
  firstName: "",
  lastName: "",
  age: "",
};

export const initialAddress: UserLocation = {
  street: "",
  city: "",
  state: "",
  zip: "",
};

export const initialAccount: UserAccount = {
  email: "",
  password: "",
};

export const userAtom = atom<UserProps>(initialUser);
export const addressAtom = atom<UserLocation>(initialAddress);
export const accountAtom = atom<UserAccount>(initialAccount);
