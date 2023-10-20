import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

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

const useGames = (genre: Genre | null, platform: Platform | null) => useData<Game>('/games', {params:{genres: genre?.id, platforms: platform?.id}}, [genre?.id, platform?.id])

export default useGames;