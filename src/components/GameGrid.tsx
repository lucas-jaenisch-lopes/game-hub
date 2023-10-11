import { useEffect, useState } from "react";
import { Text, Image } from "@chakra-ui/react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  rating: number;
  background_image: string;
  parent_platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.name}
            <Image
              src={game.background_image}
              borderRadius="5px"
              boxSize="50%"
            ></Image>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
