import { GameQuery } from "../App";
import useData from "./useData";

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  metacritic: number;
  background_image: string;
  parent_platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
}

const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {params:{genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id}}, [gameQuery])

export default useGames;