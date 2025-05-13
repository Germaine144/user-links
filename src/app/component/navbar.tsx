'use client';
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4">
      <ul className="flex justify-evenly">
        <li><Link href="/users/1" className="text-blue-600 hover:underline">User 1</Link></li>
        <li><Link href="/users/2" className="text-blue-600 hover:underline">User 2</Link></li>
        <li><Link href="/users/3" className="text-blue-600 hover:underline">User 3</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
