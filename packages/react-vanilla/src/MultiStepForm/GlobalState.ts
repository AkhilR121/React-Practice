import { Draft } from "immer";
import { atom } from "jotai";
import { z } from "zod";

export type Action =
  | {
      type: "firstName";
      firstName: string;
      setUserAtom: (draft: Draft<UserProps>) => void;
    }
  | {
      type: "lastName";
      lastName: string;
      setUserAtom: (draft: Draft<UserProps>) => void;
    }
  | {
      type: "age";
      age: string;
      setUserAtom: (draft: Draft<UserProps>) => void;
    }
  | {
      type: "email";
      email: string;
      setUserAtom: (draft: Draft<UserAccount>) => void;
    }
  | {
      type: "password";
      password: string;
      setUserAtom: (draft: Draft<UserAccount>) => void;
    }
  | {
      type: "street";
      street: string;
      setUserAtom: (draft: Draft<UserLocation>) => void;
    }
  | {
      type: "city";
      city: string;
      setUserAtom: (draft: Draft<UserLocation>) => void;
    }
  | {
      type: "state";
      state: string;
      setUserAtom: (draft: Draft<UserLocation>) => void;
    }
  | {
      type: "zip";
      zip: string;
      setUserAtom: (draft: Draft<UserLocation>) => void;
    };

const userProps = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  age: z.string(),
});

const userLocation = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string().length(6).max(6),
});

const userAccount = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(12),
});

export type UserProps = z.infer<typeof userProps>;

export type UserLocation = z.infer<typeof userLocation>;

export type UserAccount = z.infer<typeof userAccount>;

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
