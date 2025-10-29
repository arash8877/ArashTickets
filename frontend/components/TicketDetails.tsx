"use client";

import React, { useState } from "react";
import { Ticket } from "@/types/types";
import moment from "moment";
import Link from "next/link";
import { PlaneTakeoff, PlaneLanding, User, CreditCard, Calendar } from "lucide-react";
import DeleteTicketModal from "./DeleteTicketModal";

interface Props {
  ticket: Ticket;
}

const TicketDetails = ({ ticket }: Props) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <div className="bg-linear-to-br from-white via-sky-50 to-sky-100 border border-slate-200 rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto mt-8 transition-all duration-300 hover:shadow-2xl">
      <div className="p-6 space-y-4 relative z-10">
        <h2 className="text-2xl font-semibold text-sky-800 text-center mb-4 tracking-wide">
          ✈️ Ticket Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
          <Detail label="Ticket ID" value={`#${ticket.id}`} />
          <Detail label="Passenger Name" value={ticket.passengerName} icon={<User className="w-5 h-5 text-sky-700" />} />
          <Detail label="Passenger SSN" value={ticket.passengerSSN} icon={<CreditCard className="w-5 h-5 text-sky-700" />} />
          <Detail label="Price (DKK)" value={ticket.price.toString()} icon={<CreditCard className="w-5 h-5 text-emerald-600" />} />
          <Detail label="From" value={ticket.from} icon={<PlaneTakeoff className="w-5 h-5 text-sky-700" />} />
          <Detail label="To" value={ticket.to} icon={<PlaneLanding className="w-5 h-5 text-sky-700" />} />
          <Detail label="Departure Time" value={moment(ticket.time).format("YYYY-MM-DD HH:mm")} icon={<Calendar className="w-5 h-5 text-amber-600" />} />
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center pt-6 border-t border-slate-200">
          <Link
            href={`/tickets/edit/${ticket.id}`}
            className="px-5 py-2 rounded-lg bg-amber-500 text-white font-medium shadow-md hover:bg-amber-600 transition-transform transform hover:-translate-y-0.5"
          >
            ✏️ Edit
          </Link>

          <button
            onClick={() => setIsDeleteOpen(true)}
            className="px-5 py-2 rounded-lg bg-red-700 text-white font-medium shadow-md hover:bg-red-800 transition-transform transform cursor-pointer hover:-translate-y-0.5"
          >
            🗑️ Delete
          </button>
        </div>
      </div>

      {/* Modal */}
      {isDeleteOpen && (
        <DeleteTicketModal
          ticketId={ticket.id}
          onClose={() => setIsDeleteOpen(false)}
        />
      )}
    </div>
  );
};

export default TicketDetails;

// ---------------------- Subcomponent ---------------------- //
interface DetailProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

const Detail = ({ label, value, icon }: DetailProps) => (
  <div className="flex flex-col">
    <span className="text-sm text-slate-500 font-medium flex items-center gap-2">
      {icon && <span>{icon}</span>}
      {label}
    </span>
    <span className="text-lg font-semibold text-slate-800 bg-white/60 rounded-md px-2 py-1 mt-1 shadow-sm border border-slate-100">
      {value}
    </span>
  </div>
);
