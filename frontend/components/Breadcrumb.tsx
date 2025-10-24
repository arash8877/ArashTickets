"use client";

import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

interface Props {
  items: {
    label: string;
    route: string;
  }[];
}

const Breadcrumb = ({ items = [] }: Props) => {
  return (
    <nav
      className="flex justify-start items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-6 py-3 rounded-xl shadow-md"
      aria-label="Breadcrumb"
    >
      {/* Home Icon */}
      <Link
        href="/"
        className="flex items-center gap-1 text-white hover:text-yellow-300 transition-colors duration-300"
      >
        <AiOutlineHome className="text-2xl" />
      </Link>

      {/* Breadcrumb Items */}
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center gap-2">
            <span className="text-gray-200">/</span>
            {isLast ? (
              <span className="font-semibold text-yellow-200 cursor-default select-none">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.route}
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
