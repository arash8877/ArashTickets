"use client";

import { Ticket } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineEye } from "react-icons/ai"; // new view icon
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import moment from "moment";

interface Props {
  ticketsData: Ticket[];
}

const TicketsContent = ({ ticketsData }: Props) => {
  const router = useRouter();

  return (
    <div className="w-full">
      {/* ---------------- Desktop Table ---------------- */}
      <div className="hidden md:block">
        {/* Header */}
        <div className="grid grid-cols-12 gap-2 bg-sky-600 text-white text-sm lg:text-base rounded-t-xl p-3">
          <span className="col-span-1 text-center font-semibold">ID</span>
          <span className="col-span-2 text-center font-semibold">Passenger</span>
          <span className="col-span-2 text-center font-semibold">SSN</span>
          <span className="col-span-2 text-center font-semibold">From</span>
          <span className="col-span-2 text-center font-semibold">To</span>
          <span className="col-span-1 text-center font-semibold">Price</span>
          <span className="col-span-2 text-center font-semibold">Actions</span>
        </div>

        {/* Rows */}
        {ticketsData.map((ticket) => (
          <div
            key={ticket.id}
            className="grid grid-cols-12 gap-2 bg-white shadow-sm border border-gray-200 p-3 items-center cursor-pointer 
                       transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
            onClick={() => router.push(`/tickets/${ticket.id}`)}
          >
            <span className="col-span-1 text-center text-gray-700">{ticket.id}</span>
            <span className="col-span-2 text-center font-semibold text-gray-900">
              {ticket.passengerName}
            </span>
            <span className="col-span-2 text-center text-gray-700">{ticket.passengerSSN}</span>
            <span className="col-span-2 text-center text-gray-700">{ticket.from}</span>
            <span className="col-span-2 text-center text-gray-700">{ticket.to}</span>
            <span className="col-span-1 text-center text-gray-700">
              {ticket.price.toLocaleString("da-DK", { style: "currency", currency: "DKK" })}
            </span>

            {/* Action Buttons */}
            <div
              className="col-span-2 flex justify-center md:justify-end gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href={`/tickets/${ticket.id}`}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg shadow-sm transition hover:scale-110"
              >
                <AiOutlineEye className="text-lg" />
              </Link>
              <Link
                href={`/tickets/edit/${ticket.id}`}
                className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg shadow-sm transition hover:scale-110"
              >
                <MdOutlineEdit className="text-lg" />
              </Link>
              <Link
                href={`/tickets/delete/${ticket.id}`}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg shadow-sm transition hover:scale-110"
              >
                <MdOutlineDelete className="text-lg" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- Mobile Card View ---------------- */}
      <div className="block md:hidden space-y-4">
        {ticketsData.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer 
                       transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <Link href={`/tickets/${ticket.id}`}>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900">{ticket.passengerName}</h3>
                  <span className="text-xs text-gray-500">#{ticket.id}</span>
                </div>
                <div className="space-y-1 text-gray-700 text-sm">
                  <p>
                    <span className="font-semibold">From:</span> {ticket.from}
                  </p>
                  <p>
                    <span className="font-semibold">To:</span> {ticket.to}
                  </p>
                  <p>
                    <span className="font-semibold">Price:</span>{" "}
                    {ticket.price.toLocaleString("da-DK", { style: "currency", currency: "DKK" })}
                  </p>
                  <p>
                    <span className="font-semibold">Time:</span>{" "}
                    {moment(ticket.time).format("YYYY-MM-DD HH:mm")}
                  </p>
                </div>
              </div>
            </Link>
            <div className="flex justify-end items-center gap-2 p-2 border-t border-gray-200">
              <Link
                href={`/tickets/${ticket.id}`}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg shadow-sm transition hover:scale-110"
              >
                <AiOutlineEye />
              </Link>
              <Link
                href={`/tickets/edit/${ticket.id}`}
                className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg shadow-sm transition hover:scale-110"
              >
                <MdOutlineEdit />
              </Link>
              <Link
                href={`/tickets/delete/${ticket.id}`}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg shadow-sm transition hover:scale-110"
              >
                <MdOutlineDelete />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsContent;
