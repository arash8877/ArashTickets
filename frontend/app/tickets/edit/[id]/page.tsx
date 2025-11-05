"use client";

import EditTicketForm from "@/components/EditTicketForm";
import useTickets from "@/hooks/useTickets";
import { use } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

//------------------------- Ticket Edit Page -------------------------
export default function TicketEditPage({ params }: Props) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const { data: allTickets, isLoading } = useTickets();

  const ticket = allTickets?.find((t) => t.id.toString() === id);

  //------------------ JSX --------------------
  return ticket ? (
    <div className="p-6">
      <EditTicketForm ticket={ticket} />
    </div>
  ) : (
    <div className="flex items-center justify-center h-[60vh] text-center text-lg text-gray-600">
      🕵️‍♂️ Ticket not found!
    </div>
  );
}
