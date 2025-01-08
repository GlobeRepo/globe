import "./Navbar.css";
import React from "react";
import Link from "next/link";
import { SignOut } from "./sign-out";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import SignIn from "./sign-in";

const Navbar = () => {
    return (
      <nav className="navbar flex justify-between items-center max-container padding-container relative z-30 py-5">
        <Link href="/">
          <h1 className="logo">My Travel Globe</h1>
          
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
            
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="flex items-center">
                <Link href={link.href}  className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>
        <Image 
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
        
      </nav>
    );
  };
  
  export default Navbar;