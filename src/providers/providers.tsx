// app/providers.tsx
"use client";

import theme from "@/theme/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { FilterProvider } from "./TagProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <FilterProvider>{children}</FilterProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
