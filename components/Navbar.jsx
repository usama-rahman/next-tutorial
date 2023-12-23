"use client";

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
    href: "/quary",
    label: "quary",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4 ">
      <div className="navbar px-8 mx-w-6xl max-auto flex-col sm:flex-row ">
        <Link ref="/" className="btn btn-primary ">
          Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8  ">
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
