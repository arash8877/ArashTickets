"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] ...">
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-200"></div>

      {/* 404 Text Animation */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[6rem] sm:text-[9rem] font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-sky-400 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-2xl sm:text-3xl font-semibold mt-2 text-gray-700"
      >
        Oops! Page not found.
      </motion.h2>

      {/* Fun Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 text-gray-500 max-w-md text-center"
      >
        It seems you’ve taken the wrong flight route ✈️ — let’s get you back to the gate safely.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-transform transform hover:-translate-y-1"
        >
          🏠 Go Home
        </Link>
        <Link
          href="/tickets"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-transform transform hover:-translate-y-1"
        >
          🎫 View Tickets
        </Link>
      </motion.div>

      {/* Floating Plane Animation */}
      <motion.div
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: "110%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute bottom-16 text-4xl"
      >
        ✈️
      </motion.div>
    </main>
  );
}
