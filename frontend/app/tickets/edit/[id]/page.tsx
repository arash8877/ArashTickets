import EditTicketForm from "@/components/EditTicketForm";
import { dummyTickets } from "@/data/dummyTickets";

export default async function TicketEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const ticket = dummyTickets.find((t) => t.id.toString() === id);

  if (!ticket) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-center text-lg text-gray-600">
        🕵️‍♂️ Ticket not found!
      </div>
    );
  }

  return (
    <div className="p-6">
      <EditTicketForm ticket={ticket} />
    </div>
  );
}
