import BackButton from "@/components/BackButton";
import Breadcrumb from "@/components/Breadcrumb";
import CustomTitle from "@/components/CustomTitle";
import { Ticket } from "@/types/types";
import { notFound } from "next/navigation";
import TicketDetails from "@/components/TicketDetails";
import { dummyTickets } from "@/data/dummyTickets";

// async function getTicket(id: string) {
//   const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/tickets/${id}`;
//   const res = await fetch(url, { cache: "no-store" });

//   if (!res.ok) {
//     return undefined;
//   }

//   return res.json();
// }

interface Props {
  params: {
    id: string | Promise<string>;
  };
}

const TicketDetailsPage = async ({ params }: Props) => {
  const id = await params.id;
  // const ticket: Ticket = await getTicket(id);
  const ticket: Ticket | undefined = dummyTickets.find((t) => t.id === Number(id));

  if (!ticket) {
    notFound();
  }

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

      <TicketDetails ticket={ticket} />
    </div>
  );
};

export default TicketDetailsPage;
