import Link from "next/link";
import { Text } from "./Text";

const menuItems = [
  { href: "/home", label: "gifts" },
  { href: "/home", label: "about" },
  { href: "/home", label: "best" },
  { href: "/home", label: "contacts" },
];

export default function HeaderMenu() {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-2">
        {menuItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className="rounded-xl px-5 py-3 text-cs-dark hover:bg-cs-primary-light hover:text-cs-primary transition delay-75 duration-300 ease-in-out"
          >
            <Text type="ActionSmall">{item.label}</Text>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
