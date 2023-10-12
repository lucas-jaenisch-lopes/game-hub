import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <GameCard
          id={game.id}
          background_image={game.background_image}
          name={game.name}
        ></GameCard>
      ))}
    </>
  );
};

export default GameGrid;
