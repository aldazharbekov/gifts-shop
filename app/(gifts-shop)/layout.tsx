import type { Metadata } from "next";
import HeaderMenu from "./components/HeaderMenu";
import Logo from "./components/Logo";

export const metadata: Metadata = {
  title: "Gifts Shop",
  description: "Gifts Shop",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto my-0 overflow-hidden">
      <header className="flex justify-center items-center bg-white px-2 py-0 h-16 w-full">
        <div className=" flex justify-between items-center gap-3 w-full max-w-[1276px] h-16 px-0 py-3">
          <Logo />
          <HeaderMenu />
        </div>
      </header>
      <main className="bg-fuchsia-400">{children}</main>
      <footer className="bg-cs-tag-green">footer</footer>
    </div>
  );
}
