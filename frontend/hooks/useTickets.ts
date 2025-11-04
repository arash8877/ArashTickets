"use client";

import { useQuery } from "@tanstack/react-query";
import { getAll, FetchResponse } from "@/components/services/ApiClient"; 
import { Ticket } from "@/types/types";

const useTickets = () => {
  return useQuery<FetchResponse<Ticket>, Error>({
    queryKey: ["tickets"],
    queryFn: () => getAll<Ticket>("tickets"),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useTickets;
