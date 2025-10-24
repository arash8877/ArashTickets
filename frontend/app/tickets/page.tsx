"use client";

import { use } from "react";
import BackButton from "@/components/BackButton";
import Breadcrumb from "@/components/Breadcrumb";
import CustomTitle from "@/components/CustomTitle";
import { Ticket } from "@/types/types";
import Link from "next/link";
import { AiOutlinePlusSquare } from "react-icons/ai";
import TicketsContent from "@/components/TicketContent";

interface Props {
  searchParams: Promise<{
    q?: string;
  }>;
}

// ---------------------- Dummy Data ---------------------- //
const dummyTickets: Ticket[] = [
  {
    id: 1,
    time: "2025-10-20T08:30:00Z",
    passengerName: "John Doe",
    passengerSSN: 123456789,
    from: "New York",
    to: "London",
    price: 750,
  },
  {
    id: 2,
    time: "2025-11-02T14:15:00Z",
    passengerName: "Jane Smith",
    passengerSSN: 987654321,
    from: "Paris",
    to: "Tokyo",
    price: 980,
  },
  {
    id: 3,
    time: "2025-12-05T19:45:00Z",
    passengerName: "Peter Johnson",
    passengerSSN: 555888222,
    from: "Dubai",
    to: "Toronto",
    price: 620,
  },
];

// ---------------------- Main Component ---------------------- //
const TicketsPage = ({ searchParams }: Props) => {
  const params = use(searchParams); // ✅ unwraps searchParams safely
  const query = params?.q?.toLowerCase() ?? "";

  const filteredTickets = query
    ? dummyTickets.filter((ticket) =>
        ticket.passengerName.toLowerCase().includes(query)
      )
    : dummyTickets;

  return (
    <div className="page-container flex flex-col gap-6">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center justify-between gap-4">
          <BackButton destination="/" />
          <Breadcrumb items={[{ label: "Tickets", route: "/tickets" }]} />
        </div>

<Link
  href="/tickets/create"
  className="flex items-center justify-center gap-2 
             bg-linear-to-r from-sky-600 to-blue-600 
             text-white px-3 sm:px-5 md:px-6 py-2.5 
             rounded-xl shadow-md 
             hover:shadow-lg hover:from-sky-700 hover:to-blue-700 
             transition-all duration-300 transform hover:-translate-y-1 
             active:scale-95"
>
  <AiOutlinePlusSquare className="text-xl sm:text-2xl md:text-3xl" />
  <span className="text-base sm:text-lg md:text-xl font-semibold whitespace-nowrap">
    Create Ticket
  </span>
</Link>

      </div>

      {/* Page Title */}
      <CustomTitle
        title="Tickets Overview"
      />

      {/* Tickets Table */}
      <div className="bg-white rounded-xl p-6 overflow-x-auto">
        {filteredTickets.length ? (
          <TicketsContent ticketsData={filteredTickets} />
        ) : (
          <p className="text-center text-gray-500 py-10 text-lg">
            No tickets found 😔
          </p>
        )}
      </div>
    </div>
  );
};

export default TicketsPage;
