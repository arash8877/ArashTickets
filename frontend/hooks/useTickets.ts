"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllTicket } from "@/components/services/ApiClient";
import { Ticket } from "@/types/types";

const useTickets = () => {
  return useQuery<Ticket[], Error>({
    queryKey: ["tickets"],
    queryFn: () => getAllTicket<Ticket>("tickets"),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useTickets;
