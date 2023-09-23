"use client";
import { Metadata } from "next";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
  children: ReactNode;
}

const theme = {
  desktopBreakpoint: "968px",
  tableBreakpoint: "768px",
};

export const metadata: Metadata = {
    title: '<edCode/>',
    description: 'Pernosnal Portfolio',
  }

export function DefaultProviders({ children }: DefaultProvidersProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
