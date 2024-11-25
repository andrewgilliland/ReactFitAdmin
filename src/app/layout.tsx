import { FC, ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import Provider from "./Provider";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { getUser } from "@/lib/actions";

// const inter = Inter({ subsets: ["latin"] });

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
          className={`${workSans.className} bg-black text-white min-h-screen`}
        >
          <Header user={user} />
          <div className="p-4 md:pt-16 md:px-[10%]">{children}</div>
        </body>
      </Provider>
    </html>
  );
};

export default RootLayout;
