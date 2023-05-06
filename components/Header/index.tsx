import Link from "next/link";

function Header() {
  return (
    <nav className="p-5 bg-purple-50 flex justify-between items-center">
      <h1 className="font-bold text-2xl">Milian</h1>

      <ul>
        <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link href={"/cook"}>cook</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
