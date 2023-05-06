"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Analytics",
    path: "/dashboard/analytics",
  },
  {
    id: 3,
    name: "Profile",
    path: "/dashboard/profile",
  },
];

function DNavbar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li
            key={link.id}
            className={`hover:underline hover:underline-offset-2 hover:text-blue-500 ${
              link.path === pathname ? "text-purple-500" : ""
            }`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DNavbar;
