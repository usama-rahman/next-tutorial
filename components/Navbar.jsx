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
    <nav className="bg-base-300 py-4 ">
      <div className="navbar px-8 mx-w-6xl mx-auto flex sm:flex-row">
        <li>
          <Link href="/" className="btn ">
            Next.js
          </Link>
        </li>
        <ul className="menu menu-horizontal md:ml-8 flex gap-4 ">
          {links.map((link) => {
            return (
              <li key={link.href}>
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
