import type { Metadata } from "next";
import HeaderMenu from "./components/HeaderMenu";
import Logo from "./components/Logo";
import "./project-globals.css";

import { Allura, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Gifts Shop",
  description: "My first pet project",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-[1440px] min-w-[380px] mx-auto my-0 overflow-hidden flex flex-col min-h-screen">
      <header className="flex justify-center items-center w-full px-2 py-0 h-16 mx-auto">
        <div className="section-container flex justify-center items-center self-stretch gap-3 h-16 px-0 py-3">
          <Logo />
          <HeaderMenu />
        </div>
      </header>
      <main className="flex-1 w-full">{children}</main>
      <footer className="h-16">footer</footer>
    </div>
  );
}
