'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

export default function ReactQueryProvider({ children }: { children: ReactNode }) {

 const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      gcTime: 300000, // Garbage Collection Time -  After 5 minutes of no component using the query, the cached data will be deleted.
      staleTime: 10 * 1000, // After 10 seconds of no component using the query, the data will be considered stale and will be refetched on next use.
      refetchOnReconnect: true,
      refetchOnMount: false,
    },
  },
});

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
