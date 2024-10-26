import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-10  max-w-[1300px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-white font-medium text-lg tracking-wider">
            {" "}
            <span className="py-2 px-3 text-white bg-[#ff014f] font-semibold rounded-bl-lg rounded-tr-lg ">
              B
            </span>{" "}
            Bilal <span className="text-[#ff014f]">Gul</span>
          </p>
        </div>
        <div className="sm:block hidden">
          <nav className="flex list-none text-white gap-10">
            <Link href="/">
              <li className="hover:text-[#ff014f] cursor-pointer">Home</li>
            </Link>
            <Link href="#about">
              <li className="hover:text-[#ff014f] cursor-pointer">About</li>
            </Link>
            <Link href="#portfolio">
              <li className="hover:text-[#ff014f] cursor-pointer">Portfolio</li>
            </Link>
          </nav>
        </div>
        <div>
          <button className="bg-[#ff014f] button-shadow-md hover:shadow-none transition-all duration-300 ease-in  px-5 py-2 rounded-md text-white  font-medium">
            Hire me
          </button>
        </div>
      </div>
      <div className="sm:hidden mt-7 flex justify-center">
        <nav className="flex list-none text-white gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
        </nav>
      </div>
    </header>
  );
}
