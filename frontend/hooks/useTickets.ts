

import { useQuery } from "@tanstack/react-query";
import { getAllTicket } from "@/components/services/ApiClient";
import { Ticket } from "@/types/types";

const useTickets = () => {
  return useQuery<Ticket[], Error>({
    queryKey: ["tickets"],
    queryFn: () => getAllTicket<Ticket>("tickets"),
    refetchOnMount: true,
    staleTime: 0, // forces immediate refetch
  });
};

export default useTickets;
