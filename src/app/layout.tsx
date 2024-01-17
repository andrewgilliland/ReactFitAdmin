import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { FC, ReactNode } from "react";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReactFit Admin",
  description: "Build your own workout programs with ReactFit.",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className={`${inter.className} bg-black text-white min-h-screen`}>
      <Header />
      <div className="mt-16 px-[10%]">{children}</div>
    </body>
  </html>
);

export default RootLayout;
