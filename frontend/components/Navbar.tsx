"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { id: 1, label: "Home", route: "/" },
  { id: 2, label: "Tickets", route: "/tickets" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-sky-600">✈ ArashTicket</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.route}
                className="text-gray-700 hover:text-sky-600 font-medium transition cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-between w-6 h-6 cursor-pointer focus:outline-none"
            >
              <span
                className={`block h-0.5 w-full bg-gray-700 transform transition duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-700 transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-700 transform transition duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-white shadow-md ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.route}
              className="block text-gray-700 hover:text-sky-600 font-medium px-3 py-2 rounded-md cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
