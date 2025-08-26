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
    <div className="flex justify-end items-center self-stretch flex-1">
      <button className="md:hidden">Menu</button>
      <nav aria-label="Главное меню в шапке">
        <ul className="flex justify-center items-center gap-2">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="group rounded-xl hover:bg-cs-primary-light animation"
            >
              <Link href={item.href} className="block px-5 py-3">
                <Text type="ActionSmall" color="dark">
                  {item.label}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
