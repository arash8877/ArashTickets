"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTicket } from "@/components/services/ApiClient";
import { Ticket, TicketUpdateDto } from "@/types/types";

const useUpdateTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: TicketUpdateDto }) =>
      updateTicket<Ticket>("tickets/edit", id, data),
    onSuccess: (updatedTicket) => {
      // Refresh both the ticket list and the updated ticket details
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
      queryClient.invalidateQueries({ queryKey: ["ticket", updatedTicket.id] });
    },
  });
};

export default useUpdateTicket;
