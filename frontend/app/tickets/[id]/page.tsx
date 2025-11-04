"use client";

import BackButton from "@/components/BackButton";
import Breadcrumb from "@/components/Breadcrumb";
import { notFound } from "next/navigation";
import TicketDetails from "@/components/TicketDetails";
import useTicket from "@/hooks/useTicket";
import Spinner from "@/components/Spinner";
import { use } from "react";

interface Props {
  params: Promise<{ id: string }>; 
}


//------------------------- Ticket Details Page Component -------------------------
const TicketDetailsPage =  ({ params }: Props) => {
    const resolvedParams = use(params); 
  const id = resolvedParams.id;
  const {  data: ticketData, isLoading, isError} = useTicket(id);



  if (isLoading) return <Spinner />;
  if (isError || !ticketData) return notFound();

  //------------------------- JSX -------------------------
  return (
    <div className="page-container">
      <div className="flex justify-start items-center gap-x-4 mb-12">
        <BackButton destination="/tickets" />
        <Breadcrumb
          items={[
            { label: "Tickets", route: "/tickets" },
            { label: id, route: `/tickets/${id}` },
          ]}
        />
      </div>

      <TicketDetails ticket={ticketData} />
    </div>
  );
};

export default TicketDetailsPage;
