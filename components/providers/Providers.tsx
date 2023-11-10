import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { ModalProvider } from "./ModalProvider";
import { SocketProvider } from "./SocketProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider>
        <ThemeProvider>
          <SocketProvider>
            <ModalProvider />
            {children}
          </SocketProvider>
        </ThemeProvider>
      </ClerkProvider>
    </div>
  );
};

export default Providers;
