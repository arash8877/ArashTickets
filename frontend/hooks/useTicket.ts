"use client";

import { useQuery } from "@tanstack/react-query";
import { getOneTicket } from "@/components/services/ApiClient";
import { Ticket } from "@/types/types";

const useTicket = (id: number | string) => {
  return useQuery<Ticket, Error>({
    queryKey: ["ticket", id],
    queryFn: () => getOneTicket<Ticket>("tickets", id),
    enabled: !!id, // only fetch when id is truthy
  });
};

export default useTicket;
