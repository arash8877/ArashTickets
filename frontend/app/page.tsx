"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <main className="relative h-[calc(100vh-4rem)] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-sky-50 via-white to-sky-100 text-gray-800">
      {/* Decorative Background Gradient Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-300"></div>

      {/* Main Content */}
      <section className="z-10 flex flex-col items-center text-center space-y-8 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500 drop-shadow-lg"
        >
          Welcome to ArashTicket
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-xl text-lg text-gray-600"
        >
          ✈️ The easiest way to book, manage, and explore flights around the world.  
          Travel smarter — fly with style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex space-x-4 mt-6"
        >
          <Link
            href="/tickets"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
          >
            ✈ Browse Tickets
          </Link>
          <Link
            href="/about"
            className="border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-transform transform hover:-translate-y-1"
          >
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* Floating Plane Icon Animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-8 text-4xl"
      >
        ✈️
      </motion.div>
    </main>
  );
};

export default HomePage;
