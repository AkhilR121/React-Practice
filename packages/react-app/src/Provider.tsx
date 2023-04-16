import {
  QueryClient,
  QueryClientProvider,
  type QueryFunctionContext,
} from "@tanstack/react-query";
import { Suspense } from "react";
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

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Suspense>
  );
};
