"use client";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { User } from "@supabase/supabase-js";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

type NavbarProps = {
  user: User | null;
};

const Navbar: FC<NavbarProps> = ({ user }) => {
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
    <nav>
      <MobileNavbar isLoggedIn={isLoggedIn} pages={pages} pathname={pathname} />
      <DesktopNavbar
        isLoggedIn={isLoggedIn}
        pages={pages}
        pathname={pathname}
      />
    </nav>
  );
};

export default Navbar;
