import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import siteConfig from "@/config/site";
import { NextAuthProvider } from "./components/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: "%s | " + siteConfig.title,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/favicon.ico",
      href: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
