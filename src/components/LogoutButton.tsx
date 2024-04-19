"use client";
import Button from "./Button";
import { logout } from "@/lib/actions";

const LogoutButton = () => {
  return (
    <Button className="max-w-fit" onClick={() => logout()}>
      Logout
    </Button>
  );
};

export default LogoutButton;
