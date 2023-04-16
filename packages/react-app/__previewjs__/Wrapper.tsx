// __previewjs__/Wrapper.tsx

import React from "react";
import { Provider } from "../src/Provider";
import "../src/index.css";

export const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <Provider>{children}</Provider>
  </>
);
