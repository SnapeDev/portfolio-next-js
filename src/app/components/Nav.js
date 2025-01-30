"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-10 py-5 sticky top-0 bg-white z-10">
      <div className="text-xl font-bold">
        <Link href="/">
          <span className="text-blue-600">&#9632;</span> Snape Dev
        </Link>
      </div>
      <nav className="hidden md:flex gap-10 text-gray-600 text-sm">
        <Link href="/" className="hover:text-blue-600">
          ABOUT ME
        </Link>
        <Link href="/projects" className="hover:text-blue-600">
          PROJECTS
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          CONTACT
        </Link>
      </nav>
      <button
        id="burger-menu"
        className="md:hidden text-gray-600 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        &#9776;
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full h-full bg-white shadow-lg z-20 flex items-center justify-center md:hidden">
          <div className="text-center">
            <Link href="/" className="block py-2 text-lg hover:text-blue-600">
              ABOUT ME
            </Link>
            <Link
              href="/projects"
              className="block py-2 text-lg hover:text-blue-600"
            >
              PROJECTS
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-lg hover:text-blue-600"
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
