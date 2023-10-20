import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform { 
  id: number;
  name: string;
  slug: string;
}

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

const useGames = (genre: Genre | null) => useData<Game>('/games', {params:{genres: genre?.id}}, [genre?.id])

export default useGames;