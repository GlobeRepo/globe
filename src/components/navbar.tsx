import Link from "next/link";
import { SignOut } from "./sign-out";

const Navbar = () => {
    return (
      <nav className="bg-blue-500 text-white shadow-md">
        <ul className="flex justify-center items-center gap-8 p-4">
          <li className="text-lg font-bold">
            <Link href="/home" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li className="text-lg font-bold">
            <Link href="/explore" className="hover:text-gray-200">
              Explore
            </Link>
          </li>
          <li className="text-lg font-bold">
            <Link href="/profile" className="hover:text-gray-200">
              Profile
            </Link>
          </li>
          <li className="text-lg font-bold">
            <SignOut/>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  