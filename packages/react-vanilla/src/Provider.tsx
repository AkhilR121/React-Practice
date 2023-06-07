import { Suspense } from "react";
import { ErrorBoundary, type ErrorBoundaryProps } from "react-error-boundary";
import { Toaster } from "react-hot-toast";
import { SWRConfig } from "swr";

const ErrorFallback: ErrorBoundaryProps["FallbackComponent"] = ({ error }) => (
  <h1 className="text-3xl text-red-700">{error.message}</h1>
);

const SuspenseFallback = <h1 className="text-3xl">Loading...</h1>;

export type ProviderProps = Readonly<{
  children: React.ReactNode;
}>;

export const Provider = ({ children }: ProviderProps) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback={SuspenseFallback}>
      <SWRConfig value={{ suspense: true }}>
        {children}
        <Toaster />
      </SWRConfig>
    </Suspense>
  </ErrorBoundary>
);
