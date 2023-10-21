import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { ModalProvider } from "./ModalProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider>
        <ThemeProvider>
          <ModalProvider />
          {children}
        </ThemeProvider>
      </ClerkProvider>
    </div>
  );
};

export default Providers;
