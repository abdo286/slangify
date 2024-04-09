import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContextProvider from "@/providers/ContextProvider";
import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";

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
      <body
        className={`${roboto.className} grid min-h-screen grid-rows-[auto_1fr_auto]`}
      >
        <ContextProvider>
          <div>
            <TopNavbar />
            <Navbar />
          </div>
          {children}
          <div className="mt-12">
            <Footer />
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
