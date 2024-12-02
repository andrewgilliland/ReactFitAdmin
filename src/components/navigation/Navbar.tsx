"use client";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { User } from "@supabase/supabase-js";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

type HeaderProps = {
  user: User | null;
};

const Navbar: FC<HeaderProps> = ({ user }) => {
  const isLoggedIn = user?.id ? true : false; // Todo: set this value if user is logged in
  const pathname = usePathname();
  const pages = [
    {
      name: "Programs",
      href: "/programs",
    },
    {
      name: "Workouts",
      href: "/workouts",
    },
    {
      name: "Exercises",
      href: "/exercises",
    },
  ];

  return (
    <div>
      <DesktopNavbar
        isLoggedIn={isLoggedIn}
        pages={pages}
        pathname={pathname}
      />
      <MobileNavbar isLoggedIn={isLoggedIn} pages={pages} pathname={pathname} />
    </div>
  );
};

export default Navbar;
