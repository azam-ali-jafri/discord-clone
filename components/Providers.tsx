import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ClerkProvider>
    </div>
  );
};

export default Providers;
