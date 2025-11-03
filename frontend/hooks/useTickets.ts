import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "@/components/services/ApiClient";
import { Ticket } from "@/types/types";

const apiClient = new APIClient<Ticket>("tickets");

const useTickets = () => {
  return useQuery<FetchResponse<Ticket>, Error>({
    queryKey: ["tickets"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {
      count: 0,
      next: undefined,
      results: [],
    },
  });
};

export default useTickets;
