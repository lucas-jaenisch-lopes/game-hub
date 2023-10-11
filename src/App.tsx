import { Grid, GridItem } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import axios from "axios";
import { useEffect, useState } from "react";

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

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios
      .get<Game[]>(
        "https://api.rawg.io/api/games?key=3a87c61723894f6db7bd9c657f3830e1"
      )
      .then((res) => console.log(res.data));
  }, []);

  return (
    <Grid
      templateAreas={`
        "nav nav"
        "aside main"
      `}
      templateColumns="210px 1fr"
      templateRows="80px 1fr"
      gap={4}
      h="100vh"
    >
      <GridItem bg="gray.600" area="nav">
        <Nav></Nav>
      </GridItem>
      <GridItem bg="gray.400" area="aside"></GridItem>
      <GridItem bg="gray.200" area="main">
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
