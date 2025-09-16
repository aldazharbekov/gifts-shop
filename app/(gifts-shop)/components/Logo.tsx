import Image from "next/image";
import Link from "next/link";
import { Text } from "./Text";

export default function Logo() {
  return (
    <Link
      href="/gifts-shop"
      className="flex items-center text-cs-dark gap-2 px-5 py-2 rounded-xl"
    >
      <Image src="/snowflake.svg" alt="Лого" width={24} height={24} />
      <Text type="ActionSmall" color="dark">
        the gifts
      </Text>
    </Link>
  );
}
