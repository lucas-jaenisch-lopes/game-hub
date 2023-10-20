import { Grid, GridItem } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
      <GridItem padding="10px" px="10px" area="aside">
        <GenreList
          selectedGenre={selectedGenre}
          onSelectedGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      <GridItem padding="10px" px="10px" area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
