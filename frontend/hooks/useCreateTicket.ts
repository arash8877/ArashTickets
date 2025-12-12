
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTicket } from "@/components/services/ApiClient";
import { TicketCreateDto } from "@/types/types";

const useCreateTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newTicket: TicketCreateDto) =>
      createTicket<TicketCreateDto>("tickets/create", newTicket),
    onSuccess: () => {
      // Refresh the tickets list after creating a new ticket
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
    },
  });
};

export default useCreateTicket;
