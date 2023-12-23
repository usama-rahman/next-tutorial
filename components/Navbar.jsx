// "use client

import Link from "next/link";

const links = [
  {
    href: "/client",
    label: "client",
  },
  {
    href: "/drinks",
    label: "drinks",
  },
  {
    href: "/tasks",
    label: "tasks",
  },
  {
    href: "/query",
    label: "query",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-slate-900 py-6 ">
      <div className="navbar px-8 mx-w-6xl mx-auto flex sm:flex-row list-none items-center ">
        <li className="bg-violet-900 py-2 px-3 text-slate-100 rounded ">
          <Link href="/">Next.js</Link>
        </li>
        <ul className="md:ml-8 flex gap-4 text-slate-300">
          {links.map((link) => {
            return (
              <li key={link.href} className="active:bg-slate-400">
                <Link href={link.href} className="capitalize">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
