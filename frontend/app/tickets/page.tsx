"use client";

import { use, useEffect } from "react";
import BackButton from "@/components/BackButton";
import Breadcrumb from "@/components/Breadcrumb";
import CustomTitle from "@/components/CustomTitle";
import Link from "next/link";
import { AiOutlinePlusSquare } from "react-icons/ai";
import TicketsContent from "@/components/TicketContent";
import SearchBox from "@/components/SearchBox";
import useTickets from "@/hooks/useTickets";

interface Props {
  searchParams: Promise<{
    q?: string;
  }>;
}

//------------------------- Tickets Page Component -------------------------
const TicketsPage = ({ searchParams }: Props) => {
  const params = use(searchParams);
  const query = params?.q?.toLowerCase() ?? "";
  const { data: ticketsData, isLoading, isError, error } = useTickets();


 // ✅ Log data only when it’s available
  useEffect(() => {
    if (ticketsData) {
      console.log("🎟️ Tickets fetched from API:", ticketsData);
    }
  }, [ticketsData]);

  const filteredTickets = query
    ? (ticketsData ?? []).filter((ticket) => ticket.passengersName.toLowerCase().includes(query))
    : ticketsData ?? [];

  //------------------------- JSX -------------------------
  return (
    <div className="page-container flex flex-col gap-8">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center justify-between gap-4">
          <BackButton destination="/" />
          <Breadcrumb items={[{ label: "Tickets", route: "/tickets" }]} />
        </div>

        <Link
          href="/tickets/create"
          className="flex items-center justify-center gap-2
            bg-linear-to-r from-green-500 to-emerald-500
            text-white px-4 sm:px-6 py-2.5
            rounded-xl shadow-md
            hover:shadow-xl hover:from-green-600 hover:to-emerald-600
            transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
        >
          <AiOutlinePlusSquare className="text-xl sm:text-2xl" />
          <span className="font-semibold text-base sm:text-lg">Create Ticket</span>
        </Link>
      </div>

      {/* Page Title */}
      <CustomTitle title="Tickets Overview" />

      {/* Search */}
      <SearchBox />

      {/* Tickets Table / Cards */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {filteredTickets.length ? (
          <TicketsContent ticketsData={filteredTickets} />
        ) : (
          <p className="text-center text-gray-500 py-12 text-lg">No tickets found 😔</p>
        )}
      </div>
    </div>
  );
};

export default TicketsPage;
