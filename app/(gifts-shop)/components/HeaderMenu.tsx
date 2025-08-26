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
          <li
            key={item.label}
            className="rounded-xl text-cs-dark hover:bg-cs-primary-light hover:text-cs-primary transition delay-75 duration-300 ease-in-out"
          >
            <Link href={item.href} className="block px-5 py-3">
              <Text type="ActionSmall">{item.label}</Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
