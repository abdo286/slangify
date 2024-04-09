import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContextProvider from "@/providers/ContextProvider";
import TopNavbar from "@/components/TopNavbar";

const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Slangify",
  description: "A Slang Web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ContextProvider>
          <TopNavbar />
          <Navbar />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
