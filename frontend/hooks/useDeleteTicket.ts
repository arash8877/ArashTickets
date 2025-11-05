"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem } from "@/components/services/ApiClient";

const useDeleteTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | string) =>
      deleteItem("tickets", id),
    onSuccess: () => {
      // Refresh the ticket list 
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
    },
  });
};

export default useDeleteTicket;
