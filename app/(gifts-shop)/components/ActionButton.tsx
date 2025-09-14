import Link from "next/link";

export default function ActionButton() {
  return (
    <Link
      href="/gifts"
      className="bg-cs-dark hover:bg-cs-static-white font-[montserrat] font-semibold uppercase tracking-widest text-xs text-cs-static-white hover:text-cs-dark animation px-8 py-5 rounded-2xl"
    >
      Explore Magical Gifts
    </Link>
  );
}
