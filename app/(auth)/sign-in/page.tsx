import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GithubSignInButton from "@/app/components/GithubSignInButton";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";

const SignInPage = () => {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form action="">
        <h1 className="text-3xl font-semibold text-white">Sign In</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button variant={"destructive"} className="w-full bg-[#e50914]">
            Sign In
          </Button>
        </div>
      </form>

      <div className="text-gray-500 text-sm mt-2 flex space-x-2">
        <p>New to netflix?</p>
        <Link href={"/sign-up"} className="text-white hover:underline">
          Sign up now!
        </Link>
      </div>

      <div className="flex justify-between items-center gap-x-4 my-4">
        <Separator className="w-28" decorative />
        <p className="text-sm">or</p>
        <Separator className="w-28" decorative />
      </div>

      <div className="flex w-full justify-center items-center gap-x-3">
        <GithubSignInButton />
        <GoogleSignInButton />
      </div>
    </div>
  );
};

export default SignInPage;
