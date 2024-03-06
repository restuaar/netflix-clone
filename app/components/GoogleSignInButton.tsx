"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

const GoogleSignInButton = () => {
  return (
    <Button onClick={() => signIn("google")} variant={"outline"} size={"icon"}>
      <Image src={"/google.svg"} width={28} height={28} alt="google logo" />
    </Button>
  );
};

export default GoogleSignInButton;
