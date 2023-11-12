import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { ModalProvider } from "./ModalProvider";
import { SocketProvider } from "./SocketProvider";
import QueryProvider from "./QueryProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider>
        <ThemeProvider>
          <SocketProvider>
            <ModalProvider />
            <QueryProvider>{children}</QueryProvider>
          </SocketProvider>
        </ThemeProvider>
      </ClerkProvider>
    </div>
  );
};

export default Providers;
