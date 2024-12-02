import { FC, ReactNode } from "react";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Provider from "./Provider";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { getUser } from "@/lib/actions";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "ReactFit Admin",
  description: "Build your own workout programs with ReactFit.",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = async ({ children }) => {
  const user = await getUser();

  return (
    <html lang="en">
      <Provider>
        <body
          className={`${workSans.className} min-h-screen bg-black text-white`}
        >
          <Navbar user={user} />
          <div className="m-4 md:mt-16">{children}</div>
        </body>
      </Provider>
    </html>
  );
};

export default RootLayout;
