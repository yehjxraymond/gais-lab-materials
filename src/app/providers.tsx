"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FunctionComponent, ReactNode } from "react";

const queryClient = new QueryClient();

export const Providers: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
