"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

const GithubSignInButton = () => {
  return (
    <Button onClick={() => signIn("github")} variant={"outline"} size={"icon"}>
      <Github className="w-4 h-4" />
    </Button>
  );
};

export default GithubSignInButton;
