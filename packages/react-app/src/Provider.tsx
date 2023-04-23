import {
  QueryClient,
  QueryClientProvider,
  type QueryFunctionContext,
} from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary, type ErrorBoundaryProps } from "react-error-boundary";
import { FullPageLoader } from "./Loading";

async function fetcher({ queryKey }: QueryFunctionContext<any>) {
  const response = await fetch(queryKey[0]);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense: true,
      useErrorBoundary: true,
      queryFn: fetcher,
    },
  },
});

const ErrorFallback: ErrorBoundaryProps["FallbackComponent"] = ({ error }) => (
  <div className="text-3xl">{error.message}</div>
);
export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<FullPageLoader />}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
};
