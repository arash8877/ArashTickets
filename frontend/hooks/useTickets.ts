import APIClient, { FetchResponse } from "../components/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import useGameQueryStore from "../store";
import { PlatformProps } from "./usePlatforms";
import { GenreProps } from "./useGenres";

interface iPublisher {
  id: number;
  name: string;
}

export interface GameProps {
  id: number;
  name: string;
  slug: string;
  genres: GenreProps[];
  publishers: iPublisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: PlatformProps }[];
  metacritic: number;
  rating_top: number;
}

//------------------------- useGames Hook -------------------------
const useTickets = () => {



  const apiClient = new APIClient<GameProps>("/games");

  const { selectedGenre, selectedPlatform, sortOrder, searchText } = useGameQueryStore();

  return useInfiniteQuery<FetchResponse<GameProps>>({
    queryKey: ["games", selectedGenre?.id, selectedPlatform?.id, sortOrder, searchText],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: selectedGenre?.id,
          parent_platforms: selectedPlatform?.id,
          ordering: sortOrder,
          search: searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useTickets;
