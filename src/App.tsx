import { Grid, GridItem } from "@chakra-ui/react";
import Nav from "./components/Nav";

function App() {
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
      <GridItem bg="gold" area="nav">
        <Nav></Nav>
      </GridItem>
      <GridItem bg="dodgerblue" area="aside" />
      <GridItem bg="gray.200" area="main" />
    </Grid>
  );
}

export default App;
