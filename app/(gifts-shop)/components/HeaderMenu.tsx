import Link from "next/link";

const menuItems = [
  { href: "/gifts", label: "gifts" },
  { href: "/home/#about", label: "about" },
  { href: "/home/#best-gifts", label: "best" },
  { href: "#footer", label: "contacts" },
];

export default function HeaderMenu() {
  return (
    <div className="flex justify-end items-center self-stretch flex-1">
      <button className="md:hidden">Menu</button>
      <nav aria-label="Главное меню в шапке" className="md:block hidden">
        <ul className="flex justify-center items-center gap-2">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="group rounded-xl hover:bg-cs-primary-light animation"
            >
              <Link
                href={item.href}
                className="font-[montserrat] font-semibold uppercase text-xs tracking-widest text-cs-dark group-hover:text-cs-primary animation block px-5 py-3 "
                scroll
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
