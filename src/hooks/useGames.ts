import { GameQuery } from "../App";
import useData from "./useData";

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  metacritic: number;
  background_image: string;
  rating_top: number;
  parent_platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
