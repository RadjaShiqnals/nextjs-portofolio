"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50">
      <nav className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/"
            className="text-xl font-bold text-white"
          >
            Logo
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
                <Link 
                href="/"
                className={`text-sm transition-colors hover:text-gray-300 ${
                    pathname === "/" ? "text-white" : "text-gray-400"
                }`}
                >
                Home
                </Link>
            </li>
            <li>
                <Link 
                href="/about"
                className={`text-sm transition-colors hover:text-gray-300 ${
                    pathname === "/about" ? "text-white" : "text-gray-400"
                }`}
                >
                About
                </Link>
            </li>
            <li>
                <Link 
                href="/projects"
                className={`text-sm transition-colors hover:text-gray-300 ${
                    pathname === "/projects" ? "text-white" : "text-gray-400"
                }`}
                >
                Projects
                </Link>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-full invisible"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 p-8">
            <li>
              <Link 
                href="/"
                className={`text-lg transition-colors hover:text-gray-300 ${
                  pathname === "/" ? "text-white" : "text-gray-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about"
                className={`text-lg transition-colors hover:text-gray-300 ${
                  pathname === "/" ? "text-white" : "text-gray-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/projects"
                className={`text-lg transition-colors hover:text-gray-300 ${
                  pathname === "/" ? "text-white" : "text-gray-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}