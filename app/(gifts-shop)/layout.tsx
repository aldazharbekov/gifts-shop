import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Text } from "./components/Text";

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
    <div className="mx-auto my-0 overflow-hidden my-clamp">
      <header className="flex justify-center items-center bg-white px-2 py-0 h-16 w-full">
        <div className=" flex justify-between items-center gap-3 w-full max-w-[1276px] h-16 px-0 py-3">
          <Link
            href="/home"
            className="flex items-center gap-2 h-10 px-5 py-2 rounded-xl"
          >
            <Image src="/snowflake.svg" alt="Лого" width={24} height={24} />
            <Text type="ActionSmall">the gifts</Text>{" "}
          </Link>

          <nav>
            <ul className="flex justify-center items-center gap-2">
              <Link
                href="/"
                className="rounded-xl px-5 py-3 hover:bg-cs-primary-light hover:text-cs-primary"
              >
                <Text type="ActionSmall">gifts</Text>{" "}
              </Link>
              <Link
                href="/"
                className="rounded-xl px-5 py-3 hover:bg-cs-primary-light hover:text-cs-primary"
              >
                <Text type="ActionSmall">about</Text>{" "}
              </Link>{" "}
              <Link
                href="/"
                className="rounded-xl px-5 py-3 hover:bg-cs-primary-light hover:text-cs-primary"
              >
                <Text type="ActionSmall">best</Text>{" "}
              </Link>{" "}
              <Link
                href="/"
                className="rounded-xl px-5 py-3 hover:bg-cs-primary-light hover:text-cs-primary"
              >
                <Text type="ActionSmall">contacts</Text>{" "}
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      <main className="bg-cs-primary-light">{children}</main>
      <footer className="bg-cs-tag-green">footer</footer>
    </div>
  );
}
