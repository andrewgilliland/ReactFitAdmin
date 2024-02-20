import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { FC, ReactNode } from "react";
import Header from "@/components/Header";
import Provider from "./Provider";

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
    <Provider>
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Header />
        <div className="p-10 md:pt-16 md:px-[10%]">{children}</div>
      </body>
    </Provider>
  </html>
);

export default RootLayout;
