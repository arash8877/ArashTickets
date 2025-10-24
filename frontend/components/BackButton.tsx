"use client";

import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

interface Props {
  destination?: string;
}

const BackButton = ({ destination = "/" }: Props) => {
  return (
    <div className="flex">
      <Link
        href={destination}
        className="flex items-center gap-2 bg-linear-to-r from-sky-600 to-blue-700 text-white px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      >
        <BsArrowLeft className="text-2xl" />
        <span className="font-medium text-lg">Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
