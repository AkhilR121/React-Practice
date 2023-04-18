import { Box, Heading } from "@chakra-ui/react";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary, type ErrorBoundaryProps } from "react-error-boundary";
import { Toaster } from "react-hot-toast";
import { SWRConfig } from "swr";
import invariant from "tiny-invariant";
import { App } from "./App";
const rootEl = document.getElementById("root");
invariant(rootEl, "root element not found");

const ErrorFallback: ErrorBoundaryProps["FallbackComponent"] = ({ error }) => (
  <Heading size="3xl" color="red.700">
    {error.message}
  </Heading>
);

const SuspenseFallback = <Heading size="3xl">Loading...</Heading>;

const root = ReactDOM.createRoot(rootEl);
root.render(
  <Box>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={SuspenseFallback}>
        <SWRConfig value={{ suspense: true }}>
          <App />
          <Toaster />
        </SWRConfig>
      </Suspense>
    </ErrorBoundary>
  </Box>
);
