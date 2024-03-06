import Image from "next/image";
import { ReactNode } from "react";
import Background from "../../public/login_background.jpg";
import Logo from "../../public/netflix_logo.svg";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen bg-black flex-col md:items-center md:justify-center md:bg-transparent">
      <Image
        src={Background}
        alt="background image"
        fill
        priority
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
      />

      <Image
        src={Logo}
        alt="logo"
        className="absolute left-4 top-4 object-contain md:left-10 md:top-10"
        width={120}
        height={120}
        priority
      />
      {children}
    </div>
  );
};

export default AuthLayout;
