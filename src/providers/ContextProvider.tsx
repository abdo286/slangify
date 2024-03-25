"use client";

import { ModalProvider } from "@/contexts/ModalContext";
import { ReactNode } from "react";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  return <ModalProvider>{children}</ModalProvider>;
};
export default ContextProvider;
