import BackButton from "@/components/BackButton";
import Breadcrumb from "@/components/Breadcrumb";
import CustomTitle from "@/components/CustomTitle";
import { Ticket } from "@/types/types";
import { notFound } from "next/navigation";
import React from "react";
import TicketDetails from "@/components/TicketDetails";

async function getTicket(id: string) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${id}`;
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    return undefined;
  }

  return res.json();
}

interface Props {
  params: {
    id: string;
  };
}

const TicketDetailsPage = async ({ params }: Props) => {
  const ticket: Ticket = await getTicket(params.id);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="page-container">
      <div className="flex justify-start items-center gap-x-4 mb-6">
        <BackButton destination="/tickets" />
        <Breadcrumb
          items={[
            { label: "Tickets", route: "/tickets" },
            { label: params.id, route: "/" },
          ]}
        />
      </div>

      <CustomTitle title={`Ticket Details for ID: ${params.id}`} />

      <TicketDetails ticket={ticket} />
    </div>
  );
};

export default TicketDetailsPage;
