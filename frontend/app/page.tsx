import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="mt-16">
        <h1 className="relative text-xl sm:text-3xl font-bold">
          Welcome to ArashTicket
          <div className="absolute inset-0 w-full h-8 sm:h-12 rounded-full bg-linear-to-t from-purple-500 to-blue-300 blur-md opacity-40"></div>
        </h1>
      </div>
      <Link href="/tickets" className="bg-sky-800 text-white px-4 py-2 rounded-lg">
        Tickets
      </Link>
    </div>
  );
};

export default HomePage;
