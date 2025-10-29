"use client";

import { Ticket } from "@/types/types";
import { useRouter } from "next/navigation";
import moment from "moment";

interface Props {
  ticketsData: Ticket[];
}

const TicketsContent = ({ ticketsData }: Props) => {
  const router = useRouter();

  return (
    <div className="w-full">
      {/* ---------------- Desktop / Tablet Table ---------------- */}
      <div className="hidden md:block overflow-x-auto">
        <div className="min-w-[900px]">
          {/* Header */}
          <div className="grid grid-cols-12 gap-2 bg-sky-600 text-white text-xs md:text-sm lg:text-base rounded-t-xl p-3">
            <span className="col-span-1 text-center font-semibold">ID</span>
            <span className="col-span-2 text-center font-semibold">Passenger</span>
            <span className="col-span-2 text-center font-semibold">SSN</span>
            <span className="col-span-2 text-center font-semibold">From</span>
            <span className="col-span-2 text-center font-semibold">To</span>
            <span className="col-span-1 text-center font-semibold">Price</span>
            <span className="col-span-2 text-center font-semibold">Departure</span>
          </div>

          {/* Rows */}
          {ticketsData.map((ticket) => (
            <div
              key={ticket.id}
              className="grid grid-cols-12 gap-2 bg-white shadow-sm border border-gray-200 p-3 items-center 
                         cursor-pointer transition-transform duration-300 hover:scale-[1.01] hover:shadow-md"
              onClick={() => router.push(`/tickets/${ticket.id}`)}
            >
              <span className="col-span-1 text-center text-gray-700 text-xs md:text-sm lg:text-base">
                {ticket.id}
              </span>

              <span className="col-span-2 text-center font-semibold text-gray-900 truncate">
                {ticket.passengerName}
              </span>

              <span className="col-span-2 text-center text-gray-700 truncate">
                {ticket.passengerSSN}
              </span>

              <span className="col-span-2 text-center text-gray-700 truncate">{ticket.from}</span>

              <span className="col-span-2 text-center text-gray-700 truncate">{ticket.to}</span>

              <span className="col-span-1 text-center text-gray-700">
                {ticket.price.toLocaleString("da-DK", {
                  style: "currency",
                  currency: "DKK",
                })}
              </span>

              <span className="col-span-2 text-center text-gray-700 whitespace-nowrap">
                {ticket.time ? moment(ticket.time).format("YYYY-MM-DD HH:mm") : "-"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- Mobile Card View ---------------- */}
      <div className="block md:hidden space-y-4">
        {ticketsData.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer 
                       transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
            onClick={() => router.push(`/tickets/${ticket.id}`)}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-900">{ticket.passengerName}</h3>
                <span className="text-xs text-gray-500">#{ticket.id}</span>
              </div>

              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  <span className="font-semibold">SSN:</span> {ticket.passengerSSN}
                </p>
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
                  <span className="font-semibold">Departure:</span>{" "}
                  {ticket.time ? moment(ticket.time).format("YYYY-MM-DD HH:mm") : "-"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsContent;
