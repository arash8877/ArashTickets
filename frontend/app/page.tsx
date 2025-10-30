"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch, AiOutlineCompass, AiOutlineSchedule } from "react-icons/ai";
import { MdFlightTakeoff } from "react-icons/md";

const HomePage = () => {
  return (
    <main className="relative h-[calc(100vh-4rem)] flex flex-col justify-center items-center bg-linear-to-b from-sky-50 to-sky-100 text-gray-800 px-6 py-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl space-y-6"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-sky-600 to-blue-500 mb-12">
          Fly with ArashTicket
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Discover, book, and manage your flights effortlessly. Experience travel like never before.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            href="/tickets"
            className="flex items-center gap-2 justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
          >
            <MdFlightTakeoff className="w-5 h-5" />
            Browse Tickets
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 justify-center border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-transform transform hover:-translate-y-1"
          >
            <AiOutlineCompass className="w-5 h-5" />
            Learn More
          </Link>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl w-full"
      >
        <FeatureCard
          icon={<AiOutlineSearch className="w-6 h-6 text-blue-500" />}
          title="Search Flights"
          description="Quickly find flights to your favorite destinations with our smart search."
        />
        <FeatureCard
          icon={<AiOutlineSchedule className="w-6 h-6 text-emerald-500" />}
          title="Manage Trips"
          description="Easily view and manage all your bookings in one place."
        />
        <FeatureCard
          icon={<AiOutlineCompass className="w-6 h-6 text-amber-500" />}
          title="Explore Destinations"
          description="Get inspired by top destinations and travel recommendations."
        />
      </motion.section>

      {/* Call-to-Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-16"
      >
        <Link
          href="/tickets"
          className="bg-linear-to-r from-sky-600 to-blue-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
        >
          Get Started Now
        </Link>
      </motion.div>
    </main>
  );
};

export default HomePage;

// ---------------------- Feature Card ---------------------- //
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);
